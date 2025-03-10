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
            this.codes = [];
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
            this.statusName = Array(4).fill("");
            this.status = Array(4).fill(0);
            // 初期化
            this.init();
        }
        /** 初期化 */
        init() {
            this.cellReset(10);
        }
        /** 盤面白紙
         * @param cellCount : セル数
         */
        cellReset(cellCount = 10) {
            this.cellCount = cellCount;
            this.codes = Array(this.addressLength()).fill(0);
            this.displayMaker();
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
        /** Cell設定 ＋ 画面表示 */
        cellSetter(x, y, code) {
            this.codeSetter(x, y, code);
            // cellgame.cellDisplay(x,y);
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
        /** セル選択
         * @param p : 選択桁位置
         */
        pointSelect(p) {
            let a = this.cellAddress(p.x, p.y);
            if (a < 0)
                return;
            let code = this.code(p.x, p.y);
            code = this.codeCountUp(code);
            this.cellSetter(p.x, p.y, code);
            return;
        }
        /**
         * 表示処理
         */
        display() {
            cellgame.textDisplay("メッセージ", 1, 0, cellgame.Colors.White, cellgame.Colors.Blue, true);
        }
        /**
         * 表示作成
         */
        displayMaker() {
            let c = 0;
            for (let y = 0; y < this.cellCount; y++) {
                for (let x = 0; x < this.cellCount; x++) {
                    this.cellSetter(x, y, c);
                }
                c = this.codeCountUp(c);
            }
        }
    }
    cellgame.CellGameSystem00 = CellGameSystem00;
})(cellgame || (cellgame = {}));
