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
            for (let y = 0; y < this.cellCount; y++) {
                for (let x = 0; x < this.cellCount; x++) {
                    this.codeSetter(x, y, cellgame.rnd(5));
                }
            }
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
