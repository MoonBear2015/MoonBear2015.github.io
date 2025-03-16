"use strict";
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
var cellgame;
(function (cellgame) {
    /** セルゲームシステム ０１： */
    class CellGameSystem01 extends cellgame.CellGameSystem00 {
        constructor() {
            super();
            // game01 self
            this.gameSize = 2;
            this.init();
        }
        /** 初期化 */
        init() {
            this.statusName = ["段位", "", "", "設問"];
            this.status = [1, 0, 0, 1];
            this.cellReset(6);
        }
        /** セル選択
         * @param p : 選択桁位置
         */
        pointSelect(p) {
            let code00 = this.codeGetterFromPoint(p);
            let code01 = this.codeCountUp(code00);
            this.codeSetterToPoint(p, code01);
            alert("code = " + code00 + " -> " + code01);
            return;
        }
        /**
         * 表示作成
         */
        displayMaker() {
            switch (this.gameStep) {
                case 0:
                    {
                        this.cellReset(8);
                        this.cellAllPaint(9);
                        this.messages = [];
                        this.messages.push(new cellgame.Message("士農工商を並べよ", 1, 0, cellgame.Colors.White, cellgame.Colors.Black));
                        this.gameStep = 1;
                        this.gameSize = 2;
                        break;
                    }
                case 1:
                    {
                        this.centerHoleMaker(this.gameSize, 10);
                        let p = this.centerHolePoint(this.gameSize);
                        let x0 = p.x + this.gameSize * cellgame.rnd(2);
                        let y0 = p.y + this.gameSize * cellgame.rnd(2);
                        this.codeSetter(x0, y0, 9);
                        this.selectCellSetter(x0, y0);
                        this.gameStep = 2;
                        break;
                    }
                case 2:
                    {
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
        }
        /** 選択箇所を作成（01専用）
         * @param x : 横位置
         * @param y : 縦位置
         */
        selectCellSetter(x, y) {
            // 初期化
            for (let y0 = 0; y0 < this.cellCount; y0++) {
                for (let x0 = 0; x0 < this.cellCount; x0++) {
                    let c = this.codeGetter(x0, y0);
                    if (c == 20) {
                        this.codeSetter(x0, y0, 10);
                    }
                }
            }
            // 設定
            for (let hy = -1; hy < 2; hy++) {
                for (let hx = -1; hx < 2; hx++) {
                    let xx = x + hx;
                    let yy = y + hy;
                    if (xx < 0 || xx >= this.cellCount)
                        continue;
                    if (yy < 0 || yy >= this.cellCount)
                        continue;
                    let c = this.codeGetter(xx, yy);
                    if (c != 10)
                        continue;
                    this.codeSetter(xx, yy, 20);
                }
            }
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
