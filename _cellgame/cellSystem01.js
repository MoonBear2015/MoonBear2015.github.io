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
            let code = this.codeFromPoint(p);
            code = this.codeCountUp(code);
            this.codeSetterToPoint(p, code);
            return;
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
