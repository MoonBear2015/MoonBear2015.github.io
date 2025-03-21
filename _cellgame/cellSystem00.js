"use strict";
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
var cellgame;
(function (cellgame) {
    /** セルゲームシステム 共通項 */
    class CellGameSystem00 {
        /** コンストラクタ */
        constructor() {
            this.cellCount = 0;
            this.backColor = cellgame.Colors.Black;
            this.codes = [];
            this.messages = [];
            this.statusName = [];
            this.status = [];
            this.gameStep = 0;
            /** 番地の数 */
            this.addressLength = () => this.cellCount * this.cellCount;
            /** cellコード（x,y指定） */
            this.codeGetter = (x, y) => {
                let a = this.cellAddress(x, y);
                if (a < 0)
                    return -1;
                return this.codes[a];
            };
            this.statusName = Array(4).fill("");
            this.status = Array(4).fill(0);
            // 初期化
            this.init();
        }
        /** 初期化 */
        init() {
            this.cellReset(10);
            // 仮
            let c = 0;
            for (let y = 0; y < this.cellCount; y++) {
                for (let x = 0; x < this.cellCount; x++) {
                    this.codeSetter(x, y, c);
                }
                c = this.codeCountUp(c);
            }
        }
        /** 盤面白紙
         * @param cellCount : セル数
         */
        cellReset(cellCount = 10) {
            this.cellCount = cellCount;
            this.codes = Array(this.addressLength()).fill(0);
            this.messages = [];
        }
        /** 番地計算 */
        cellAddress(x, y) {
            if (x < 0 || x >= this.cellCount)
                return -1;
            if (y < 0 || y >= this.cellCount)
                return -1;
            return y * this.cellCount + x;
        }
        /** cellコード（ポイント指定） */
        codeGetterFromPoint(p) {
            return this.codeGetter(p.x, p.y);
        }
        /** cellコード設定 (x,y指定) */
        codeSetter(x, y, code) {
            let a = this.cellAddress(x, y);
            if (a < 0)
                return;
            this.codes[a] = code;
        }
        /** cellコード設定 (番地指定) */
        codeSetterToAddress(a, code) {
            let p = cellgame.pointCalc(a, this.cellCount);
            this.codeSetter(p.x, p.y, code);
        }
        /** cellコード設定 (Point指定) */
        codeSetterToPoint(p, code) {
            this.codeSetter(p.x, p.y, code);
        }
        /** 四方セル設定
         * @param x0 : 左上X y0 : 左上Y x1 : 右下X y1 : 右下Y code : 設定コード
         */
        cellBoxSetter(x0, y0, x1, y1, code) {
            for (let y = y0; y <= y1; y++) {
                for (let x = x0; x <= x1; x++) {
                    this.codeSetter(x, y, code);
                }
            }
        }
        /** 全セル塗りつぶし
         * @param code : 設定コード
         */
        cellAllPaint(code) {
            for (let y = 0; y < this.cellCount; y++) {
                for (let x = 0; x < this.cellCount; x++) {
                    this.codeSetter(x, y, code);
                }
            }
        }
        /** 中央穴あけ
         * @param size : 穴あけサイズ
         * @param code : 穴あけコード
         */
        centerHoleMaker(size, code) {
            let p0 = this.centerHolePoint(size);
            let x1 = p0.x + size - 1;
            let y1 = p0.y + size - 1;
            this.cellBoxSetter(p0.x, p0.y, x1, y1, code);
        }
        /** 中央穴あけ開始ポイント
         * @param size : 穴あけサイズ
         * @returns 穴あけ開始ポイント
         */
        centerHolePoint(size) {
            let x = Math.floor((this.cellCount - size) / 2);
            let y = Math.floor((this.cellCount - size) / 2);
            return new cellgame.Point(false, x, y);
        }
        /** タッチ箇所受信 */
        touchPointRecv(p) {
            if (p.x < 0 || p.x >= this.cellCount)
                return;
            if (p.y < 0 || p.y >= this.cellCount)
                return;
            this.pointSelect(p);
        }
        /** コードカウントアップ
         * @param code : 現在のコード
         * @returns 次のコード
        */
        codeCountUp(code) {
            let c = code;
            c++;
            while (true) {
                if (c >= cellgame.cells.length) {
                    c = 0;
                    break;
                }
                if (cellgame.cells[c] === undefined) {
                    c++;
                }
                else {
                    break;
                }
            }
            return c;
        }
        /** コードループ 11-14,21-24
         * @param code : 現在のコード
         * @param count : 加算値
         * @returns 次のコード
         */
        codeLoop(code, count) {
            let c = code;
            c += count;
            if (code < 20) {
                if (c < 11)
                    c = 14;
                if (c > 14)
                    c = 11;
                return c;
            }
            if (c < 21)
                c = 24;
            if (c > 24)
                c = 21;
            return c;
        }
        /** セル選択
         * @param p : 選択桁位置
         */
        pointSelect(p) {
            let a = this.cellAddress(p.x, p.y);
            if (a < 0)
                return;
            let code = this.codeGetter(p.x, p.y);
            code = this.codeCountUp(code);
            this.codeSetter(p.x, p.y, code);
            return;
        }
        /**
         * 表示作成
         */
        displayMaker() {
            this.messages = [];
            // 仮
            this.messages.push(new cellgame.Message("メッセージ", 1, 0, cellgame.Colors.White, cellgame.Colors.Blue, true));
        }
    }
    cellgame.CellGameSystem00 = CellGameSystem00;
})(cellgame || (cellgame = {}));
