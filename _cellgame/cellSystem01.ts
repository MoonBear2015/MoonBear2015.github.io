/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** セルゲームシステム ０１： */
    export class CellGameSystem01 extends CellGameSystem00
    implements ICellGameSystem {

        constructor() {
            super();
            this.cellCount = 8;
            this.init();
        }

    }

}