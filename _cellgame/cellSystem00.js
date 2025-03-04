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
            // this.cellCount = 10;
            this.cellCount = 0;
            this.codes = [];
            this.isflashes = [];
            this.statusName = [];
            this.status = [];
            /** 番地の数 */
            this.addressLength = () => this.cellCount * this.cellCount;
            /** cellコード（x,y指定） */
            this.code = (x, y) => {
                let a = this.cellAddress(x, y);
                if (a < 0)
                    return -1;
                return this.codes[a];
            };
            /** Flashフラグ(x,y指定) */
            this.isFlash = (x, y) => {
                let a = this.cellAddress(x, y);
                if (a < 0)
                    return false;
                return this.isflashes[a];
            };
            // 初期化
            this.init();
        }
        /** 初期化 */
        init() {
            this.codes = Array(this.addressLength()).fill(0);
            this.isflashes = Array(this.addressLength()).fill(false);
            this.statusName = Array(4).fill("");
            this.status = Array(4).fill(0);
            let c = 0;
            for (let y = 0; y < this.cellCount; y++) {
                for (let x = 0; x < this.cellCount; x++) {
                    let flg = false;
                    if (cellgame.rnd(2) == 0)
                        flg = true;
                    this.cellSetter(x, y, c, flg);
                }
                c++;
                if (c >= cellgame.cells.length)
                    c = 0;
            }
        }
        /** 番地計算 */
        cellAddress(x, y) {
            if (x < 0 || x >= this.cellCount)
                return -1;
            if (y < 0 || y >= this.cellCount)
                return -1;
            return y * this.cellCount + x;
        }
        /** cellコード設定 (x,y指定) 画面出力込み */
        codeSetter(x, y, code) {
            let a = this.cellAddress(x, y);
            if (a < 0)
                return;
            this.codes[a] = code;
        }
        /** Flashフラグ設定(x,y指定) 画面出力込み */
        isFlashSetter(x, y, isFlash) {
            let a = this.cellAddress(x, y);
            if (a < 0)
                return;
            this.isflashes[a] = isFlash;
        }
        /** Cell設定 ＋ 画面表示 */
        cellSetter(x, y, code, isFlash) {
            this.codeSetter(x, y, code);
            this.isFlashSetter(x, y, isFlash);
            cellgame.cellDisplay(x, y, isFlash);
        }
    }
    cellgame.CellGameSystem00 = CellGameSystem00;
})(cellgame || (cellgame = {}));
