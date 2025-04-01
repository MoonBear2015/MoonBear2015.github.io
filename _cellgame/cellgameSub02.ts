/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />

namespace cellgame {

    /** 突合可能アイテム */
    export interface IEqual<T> {
        /** 突合 */
        equal(item : T) : boolean;

        /** 複写 */
        copy() : T;

        /** 貼付 */
        paste(item : T) : void;
    }

    /** 配列支援インターフェース */
    export interface ICellArray<T extends IEqual<T>> {
        /** 配列 */
        items : T[];

        /** 平方データを設定する際 */
        width : number;

        /** 平方データ時の全件数 */
        squareSize() : number;

        /**平方データ初期化 */
        squareInit(size : number,initItem : T) : void;

        /** 個数 */
        length() : number;

        /** 平方時・座標で取得 */
        Getter(point : Point) : T;
        Getter(x : number, y : number) : T;

        /** 平方時・座標で設定 */
        Setter(point : Point, item : T) : void;
        Setter(x : number, y : number, item : T) : void;

        /** 検索 -1:見つからない */
        search(item : T) : number;
    }
    
    /** 配列支援クラス */
    export class CellArray<T extends IEqual<T>> implements ICellArray<T> {
        
        /** コンストラクタ */
        public constructor() {
            this.items = [];
            this.width = 0;
        }
        
        /** 配列 */
        public items : T[] = [];

        /** 平方データを設定する際 */
        public width : number = 0;

        /** 平方データ時の全件数 */
        public squareSize = () : number => this.width * this.width;

        /**平方データ初期化 */
        public squareInit(width : number,initItem : T) : void {
            this.width = width;
            this.items = [];
            for(let i = 0; i < this.squareSize(); i++) {
                this.items.push(initItem.copy());
            }
        }

        /** 個数 */
        length() : number;

        /** 平方時・座標で取得 */
        Getter(point : Point) : T;
        Getter(x : number, y : number) : T;

        /** 平方時・座標で設定 */
        Setter(point : Point, item : T) : void;
        Setter(x : number, y : number, item : T) : void;

        /** 検索 -1:見つからない */
        search(item : T) : number;

        public search(item : T) : number {
            let result = -1;
            for(let i = 0; i < this.length(); i++) {
                if (this.items[i].equal(item)) {
                    return i;
                }
            }
            return result;
        }

    }

}