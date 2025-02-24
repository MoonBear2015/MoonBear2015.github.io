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
            this.cellCount = 8;
            this.init();
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
