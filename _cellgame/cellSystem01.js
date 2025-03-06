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
            this.cellCount = 6;
            this.init();
            this.statusName = ["段位", "", "体力", ""];
            this.status = [1, 2, 3, 4];
        }
        /** セル選択
         * @param p : 選択桁位置
         */
        pointSelect(p) {
            this.cellCount++;
            if (this.cellCount > 10)
                this.cellCount = 4;
            return;
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
