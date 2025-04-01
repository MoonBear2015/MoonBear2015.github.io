/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />

namespace cellgame {

    /** 配列支援インターフェース */
    export interface ICellArray<T extends number | string> {
        /** 配列 */
        items : T[];

        /** item初期値 */
        itemNew(item : T) : T;

        /** 平方データを設定する際 */
        cellWidth : number;

        /** 平方データ時の全件数 */
        cellCount() : number;

        /** 個数 */
        length() : number;

        /** 座標の番地 */
        cellAddress(x : number, y : number) : number;

        /** 平方時・座標で取得 */
        cellGetter(x : number, y : number) : T;

        /** 平方時・座標で設定 */
        cellSetter(x : number, y : number, item : T) : void;

        /** 検索 -1:見つからない */
        search(item : T) : number;
    }
    
    /** 配列支援クラス */
    export abstract class CellArray<T extends number | string> implements ICellArray<T> {
        
        /** コンストラクタ */
        public constructor() {
            this.items = [];
            this.cellWidth = 0;
        }
        
        /** 配列 */
        public items : T[] = [];
        
        /** item初期値 */
        abstract itemNew() : T;

        /** 平方データを設定する際 */
        public cellWidth : number = 0;

        /** 平方データ時の全件数 */
        public cellCount = () : number => this.cellWidth * this.cellWidth;

        /**平方データ初期化 */
        public CellInit(width : number,value : T = this.itemNew()) : void {
            this.cellWidth = width;
            this.items = [];
            for(let i = 0; i < this.cellCount(); i++) {
                this.items.push(value);
            }
        }

        /** 個数 */
        public length = () : number => this.items.length;

        /** 座標の番地 */
        public cellAddress = (x : number, y : number) : number => y * this.cellWidth + x;

        /** 平方時・座標で取得 */
        public cellGetter (x : number, y : number) : T
        {
            if (this.cellWidth == 0) return this.itemNew();
            return this.items[this.cellAddress(x,y)];
        }

        /** 平方時・座標で設定 */
        public cellSetter(x : number, y : number, item : T) : void {
            if (this.cellWidth == 0) return;
            this.items[this.cellAddress(x,y)] = item;
        }

        /** 検索 -1:見つからない */
        public search(item : T) : number {
            let result = -1;
            for(let i = 0; i < this.length(); i++) {
                if (this.items[i] === item) {
                    return i;
                }
            }
            return result;
        }

    }

    /** 数値型配列支援クラス */
    export class NumArray extends CellArray<number> implements ICellArray<number> {
        /** item初期値 */
        public itemNew =() => 0;
    }

}