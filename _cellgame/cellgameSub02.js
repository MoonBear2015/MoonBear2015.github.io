"use strict";
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />
var cellgame;
(function (cellgame) {
    /** 配列支援クラス */
    class CellArray {
        /** コンストラクタ */
        constructor() {
            /** 配列 */
            this.items = [];
            /** 平方データを設定する際 */
            this.cellWidth = 0;
            /** 平方データ時の全件数 */
            this.cellCount = () => this.cellWidth * this.cellWidth;
            /** 個数 */
            this.length = () => this.items.length;
            /** 座標の番地 */
            this.cellAddress = (x, y) => y * this.cellWidth + x;
            /** 番地の座標 */
            this.cellPoint = (address) => cellgame.pointCalc(address, this.cellWidth);
            this.items = [];
            this.cellWidth = 0;
        }
        /**平方データ初期化 */
        cellReset(width, value = this.itemNew()) {
            this.cellWidth = width;
            this.items = [];
            for (let i = 0; i < this.cellCount(); i++) {
                this.items.push(value);
            }
        }
        /** 四方セル設定
         * @param x0 : 左上X y0 : 左上Y x1 : 右下X y1 : 右下Y code : 設定コード
         */
        cellBoxSetter(x0, y0, x1, y1, value) {
            for (let y = y0; y <= y1; y++) {
                for (let x = x0; x <= x1; x++) {
                    this.cellSetter(x, y, value);
                }
            }
        }
        /** 全セル塗りつぶし
         * @param code : 設定コード
         */
        cellAllPaint(value) {
            for (let y = 0; y < this.cellWidth; y++) {
                for (let x = 0; x < this.cellWidth; x++) {
                    this.cellSetter(x, y, value);
                }
            }
        }
        /** 中央穴あけ
         * @param size : 穴あけサイズ
         * @param value : 穴あけコード
         * @returns 穴あけ開始ポイント
         */
        cellCenterHoleMaker(size, value) {
            let p0 = this.centerHolePoint(size);
            let x1 = p0.x + size - 1;
            let y1 = p0.y + size - 1;
            this.cellBoxSetter(p0.x, p0.y, x1, y1, value);
            return p0;
        }
        /** 中央穴あけ開始ポイント
         * @param size : 穴あけサイズ
         * @returns 穴あけ開始ポイント
         */
        centerHolePoint(size) {
            let x = Math.floor((this.cellWidth - size) / 2);
            let y = Math.floor((this.cellWidth - size) / 2);
            return new cellgame.Point(false, x, y);
        }
        /**データ初期化 */
        reset(length, value = this.itemNew()) {
            this.items = [];
            for (let i = 0; i < length; i++) {
                this.items.push(value);
            }
        }
        /** 平方時・座標で取得 */
        cellGetter(x, y) {
            if (this.cellWidth == 0)
                return this.itemNew();
            return this.items[this.cellAddress(x, y)];
        }
        /** 平方時・座標で設定 */
        cellSetter(x, y, item) {
            if (this.cellWidth == 0)
                return;
            this.items[this.cellAddress(x, y)] = item;
        }
        /** 検索 -1:見つからない */
        search(item) {
            let result = -1;
            for (let i = 0; i < this.length(); i++) {
                if (this.items[i] === item) {
                    return i;
                }
            }
            return result;
        }
    }
    cellgame.CellArray = CellArray;
    /** 数値型配列支援クラス */
    class NumArray extends CellArray {
        constructor() {
            super(...arguments);
            /** item初期値 */
            this.itemNew = () => 0;
        }
    }
    cellgame.NumArray = NumArray;
})(cellgame || (cellgame = {}));
