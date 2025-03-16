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
            let code00 = this.codeFromPoint(p);
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
                        break;
                    }
                case 1:
                    {
                        this.centerHoleMaker(2, 10);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
