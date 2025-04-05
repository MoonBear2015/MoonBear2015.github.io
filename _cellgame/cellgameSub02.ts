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

        /**平方データ初期化 */
        cellReset(width : number,value : T) : void;

        /** 四方セル設定
         * @param x0 : 左上X y0 : 左上Y x1 : 右下X y1 : 右下Y code : 設定コード
         */
        cellBoxSetter(x0 : number,y0 : number,x1 : number,y1 : number,value : T) : void;

        /** 中央穴あけ
         * @param size : 穴あけサイズ
         * @param value : 穴あけコード
         * @returns 穴あけ開始ポイント
         */
        cellCenterHoleMaker(size : number, value : T) : Point;

        /** 全セル塗りつぶし
         * @param code : 設定コード
         */
        cellAllPaint(value : T) : void;

        /** 中央穴あけ開始ポイント
         * @param size : 穴あけサイズ
         * @returns 穴あけ開始ポイント
         */
        centerHolePoint(size : number) : Point;
        
        /**データ初期化 */
        reset(length : number,value : T) : void;

        /** 個数 */
        length() : number;

        /** 座標の番地 */
        cellAddress(x : number, y : number) : number;

        /** 番地の座標 */
        cellPoint(address : number) : Point;

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
        public cellReset(width : number,value : T = this.itemNew()) : void {
            this.cellWidth = width;
            this.items = [];
            for(let i = 0; i < this.cellCount(); i++) {
                this.items.push(value);
            }
        }

        /** 四方セル設定
         * @param x0 : 左上X y0 : 左上Y x1 : 右下X y1 : 右下Y code : 設定コード
         */
        public cellBoxSetter(x0 : number,y0 : number,x1 : number,y1 : number,value : T) : void {
            for(let y = y0; y <= y1; y++) {
                for(let x = x0; x <= x1; x++) {
                    this.cellSetter(x,y,value);
                }
            }
        }

        /** 全セル塗りつぶし
         * @param code : 設定コード
         */
        public cellAllPaint(value : T) : void {
            for(let y = 0; y < this.cellWidth; y++) {
                for(let x = 0; x < this.cellWidth; x++) {
                    this.cellSetter(x,y,value);
                }
            }
        }
        

        /** 中央穴あけ
         * @param size : 穴あけサイズ
         * @param value : 穴あけコード
         * @returns 穴あけ開始ポイント
         */
        public cellCenterHoleMaker(size : number, value : T) : Point {
            let p0 = this.centerHolePoint(size);
            let x1 = p0.x + size - 1;
            let y1 = p0.y + size - 1;
            this.cellBoxSetter(p0.x,p0.y,x1,y1,value);
            return p0;
        }

        /** 中央穴あけ開始ポイント
         * @param size : 穴あけサイズ
         * @returns 穴あけ開始ポイント
         */
        public centerHolePoint(size : number) : Point {
            let x = Math.floor((this.cellWidth - size) / 2);
            let y = Math.floor((this.cellWidth - size) / 2);
            return new Point(false,x,y);
        }

        /**データ初期化 */
        public reset(length : number,value : T = this.itemNew()) : void {
            this.items = [];
            for(let i = 0; i < length; i++) {
                this.items.push(value);
            }
        }

        /** 個数 */
        public length = () : number => this.items.length;

        /** 座標の番地 */
        public cellAddress = (x : number, y : number) : number => y * this.cellWidth + x;

        /** 番地の座標 */
        public cellPoint = (address : number) : Point => pointCalc(address, this.cellWidth);

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