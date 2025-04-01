"use strict";
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem01.ts" />
var cellgame;
(function (cellgame) {
    /** セルゲームシステム 共通項 */
    class CellGameSystem00 {
        /** コンストラクタ */
        constructor() {
            this.cellSize = 0;
            this.backColor = cellgame.Colors.Black;
            this.cells = new cellgame.NumArray();
            this.messages = [];
            this.statusName = [];
            this.status = [];
            this.gameStep = 0;
            /** 勝利メッセージ返却 */
            this.msgWinSelector = () => cellgame.msgPatterns[cellgame.rnd(10)];
            /**　敗北メッセージ返却 */
            this.msgLoseSelector = () => cellgame.msgPatterns[cellgame.rnd(10) + 10];
            this.statusName = Array(4).fill("");
            this.status = Array(4).fill(0);
            // 初期化
            this.init();
        }
        /** 初期化 */
        init() {
            this.cells.cellReset(0, 10);
        }
        // /** 盤面白紙
        //  * @param cellSize : 縦横セル数
        //  */
        // public cellReset(cellSize : number = 10) : void {
        //     this.cellSize = cellSize;
        //     this.codes = Array(this.addressLength()).fill(0);
        //     this.messages = [];
        // }
        // /** 番地の数 */
        // public addressLength = () : number => this.cellSize * this.cellSize;
        // /** 番地計算 */
        // public cellAddress(x : number, y : number) : number {
        //     if (x < 0 || x >= this.cellSize) return -1;
        //     if (y < 0 || y >= this.cellSize) return -1;
        //     return y * this.cellSize + x;
        // }
        // /** cellコード（x,y指定） */
        // public codeGetter = (x : number,y : number) : number => {
        //     let a : number = this.cellAddress(x,y);
        //     if (a < 0) return -1;
        //     return this.codes[a];
        // }
        // /** cellコード（ポイント指定） */
        // public codeGetterFromPoint(p : Point) : number {
        //     return this.codeGetter(p.x,p.y);
        // }
        // /** cellコード設定 (x,y指定) */
        // public codeSetter( x : number, y : number, code : number) {
        //     let a : number = this.cellAddress(x,y);
        //     if (a < 0) return;
        //     this.codes[a] = code;
        // }
        // /** cellコード設定 (番地指定) */
        // public codeSetterToAddress(a : number, code : number) {
        //     let p = pointCalc(a,this.cellSize);
        //     this.codeSetter(p.x,p.y,code);
        // }
        // /** cellコード設定 (Point指定) */
        // public codeSetterToPoint(p : Point, code : number) {
        //     this.codeSetter(p.x,p.y,code);
        // }
        // /** 四方セル設定
        //  * @param x0 : 左上X y0 : 左上Y x1 : 右下X y1 : 右下Y code : 設定コード
        //  */
        // public cellBoxSetter(x0 : number,y0 : number,x1 : number,y1 : number,code : number) : void {
        //     for(let y = y0; y <= y1; y++) {
        //         for(let x = x0; x <= x1; x++) {
        //             this.codeSetter(x,y,code);
        //         }
        //     }
        // }
        // /** 全セル塗りつぶし
        //  * @param code : 設定コード
        //  */
        // public cellAllPaint(code : number) : void {
        //     for(let y = 0; y < this.cellSize; y++) {
        //         for(let x = 0; x < this.cellSize; x++) {
        //             this.codeSetter(x,y,code);
        //         }
        //     }
        // }
        // /** 中央穴あけ
        //  * @param size : 穴あけサイズ
        //  * @param code : 穴あけコード
        //  */
        // public centerHoleMaker(size : number, code : number) : void {
        //     let p0 = this.centerHolePoint(size);
        //     let x1 = p0.x + size - 1;
        //     let y1 = p0.y + size - 1;
        //     this.cellBoxSetter(p0.x,p0.y,x1,y1,code);
        // }
        // /** 中央穴あけ開始ポイント
        //  * @param size : 穴あけサイズ
        //  * @returns 穴あけ開始ポイント
        //  */
        // public centerHolePoint(size : number) : Point {
        //     let x = Math.floor((this.cellSize - size) / 2);
        //     let y = Math.floor((this.cellSize - size) / 2);
        //     return new Point(false,x,y);
        // }
        /** タッチ箇所受信 */
        touchPointRecv(p) {
            if (p.x < 0 || p.x >= this.cellSize)
                return;
            if (p.y < 0 || p.y >= this.cellSize)
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
                if (c >= cellgame.komas.length) {
                    c = 0;
                    break;
                }
                if (cellgame.komas[c] === undefined) {
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
            let a = this.cells.cellAddress(p.x, p.y);
            if (a < 0)
                return;
            let code = this.cells.cellGetter(p.x, p.y);
            code = this.codeCountUp(code);
            this.cells.cellSetter(p.x, p.y, code);
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
