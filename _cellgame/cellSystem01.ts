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
            this.cellCount = 6;
            this.init();

            this.statusName = ["段位","","体力",""];
            this.status = [1,2,3,4];
        }

        
        /** セル選択
         * @param p : 選択桁位置
         */
        public pointSelect(p : Point) : void {
            this.cellCount++;
            if (this.cellCount > 10) this.cellCount = 4;
            return;
        }


    }

}