"use strict";
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
var cellgame;
(function (cellgame) {
    class CellGameSystem01 {
        constructor() {
            this.cellWidth = 10;
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
