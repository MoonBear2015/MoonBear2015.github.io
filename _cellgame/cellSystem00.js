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
            this.codes = [];
            this.isflashes = [];
            /** 番地の数 */
            this.cellLength = () => this.cellWidth * this.cellWidth;
            /** cellコード（x,y指定） */
            this.code = (x, y) => {
                let a = cellgame.gAddress(x, y);
                if (a < 0)
                    return -1;
                return this.codes[a];
            };
            /** Flashフラグ(x,y指定) */
            this.isFlash = (x, y) => {
                let a = cellgame.gAddress(x, y);
                if (a < 0)
                    return false;
                return this.isflashes[a];
            };
            this.cellWidth = 10;
            // 初期化
            this.init();
        }
        /** 初期化 */
        init() {
            this.codes = Array(this.cellLength()).fill(0);
            this.isflashes = Array(this.cellLength()).fill(false);
        }
        /** 番地計算 */
        cellAddress(x, y) {
            if (x < 0 || x >= this.cellWidth)
                return -1;
            if (y < 0 || y >= this.cellWidth)
                return -1;
            return y * this.cellWidth + x;
        }
        /** cellコード設定 (x,y指定) 画面出力込み */
        codeSetter(x, y, code) {
            let a = cellgame.gAddress(x, y);
            if (a < 0)
                return;
            this.codes[a] = code;
            //            writerCall();
        }
        /** Flashフラグ設定(x,y指定) 画面出力込み */
        isFlashSetter(x, y, isFlash) {
            let a = cellgame.gAddress(x, y);
            if (a < 0)
                return;
            this.isflashes[a] = isFlash;
            //           writerCall();
        }
    }
    cellgame.CellGameSystem00 = CellGameSystem00;
})(cellgame || (cellgame = {}));
