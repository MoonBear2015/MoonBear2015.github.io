/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
// <reference path="cellgameSub02.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
namespace cellgame {

    export const REPLACE_CHAR = "@";
    export const TITLE = "@TITLE@";

    /** 文字列置換 */
    export const exReplace = (str : string, repFrom : string, repTo : string) : string => {
        let result = str;
        while(true) {
            if (result.indexOf(REPLACE_CHAR) < 0) break;
            result = result.replace(repFrom, repTo);
        }
        return result;
    }

    /** 配列支援インターフェース */
    export interface ICellArray<T> {
        /** 配列 */
        items : T[];

        /** item初期値 */
        itemNew(item : T) : T;

        /** item比較 */
        itemEqual(item1 : T, item2 : T) : boolean;

        /** 平方データを設定する際 */
        cellWidth : number;

        /** 平方データ時の全件数 */
        cellCount() : number;

        /**平方データ初期化 */
        cellReset(width : number,value : T) : void;

        /** 四方セル設定
         * @param point0 : 左上 point1 : 右下 code : 設定コード
         */
        cellBoxSetter(point0 : Point, point1 : Point, value : T) : void;

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
        cellAddress(point : Point) : number;

        /** 番地の座標 */
        cellPoint(address : number) : Point;

        /** 平方時・座標で取得 */
        cellGetter(point : Point) : T;

        /** 平方時・座標で設定 */
        cellSetter(point : Point, item : T) : void;

        /** 検索 -1:見つからない */
        search(item : T) : number;

        /** ロールバック可能な更新 */
        pushToAddress(address : number, item : T) : void;

        /** ロールバック可能な更新：Point指定 */
        pushToPoint(point : Point, item : T) : void;

        /** ロールバック */
        rollBack() : void;

        /** ロールバック用の記録 */
        logItems : logItem<T>[]; // ログアイテム
        
    }

    /** ロールバックするための記録クラス */
    export class logItem<T> {
        public address : number = -1;
        public beforeItem : T | null = null;;
        public afterItem : T | null = null;;

        /** コンストラクタ */
        public constructor() {
            this.address = -1;
            this.beforeItem = null;
            this.afterItem = null;
        }
    }
    
    /** 配列支援クラス */
    export abstract class CellArray<T> implements ICellArray<T> {
        
        /** コンストラクタ */
        public constructor() {
            this.items = [];
            this.logItems = [];
            this.cellWidth = 0;
        }
        
        /** 配列 */
        public items : T[] = [];
        
        /** ロールバック用の記録 */
        public logItems : logItem<T>[] = []; // ログアイテム

        /** item初期値 */
        abstract itemNew() : T;

        /** item比較 */
        public itemEqual(item1 : T, item2 : T) : boolean {
            return item1 === item2;
        }

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
         * @param point0 : 左上 point1 : 右下 code : 設定コード
         */
        public cellBoxSetter = (point0 : Point, point1 : Point,value : T) : void => {
            pointRange(point0,point1).forEach((point) => {
                this.cellSetter(point,value);
            }); 
        }

        /** 全セル塗りつぶし
         * @param code : 設定コード
         */
        public cellAllPaint(value : T) : void {
            for(let y = 0; y < this.cellWidth; y++) {
                for(let x = 0; x < this.cellWidth; x++) {
                    this.cellSetter(Point.New(x,y),value);
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
            this.cellBoxSetter(p0,Point.New(x1,y1),value);
            return p0;
        }

        /** 中央穴あけ開始ポイント
         * @param size : 穴あけサイズ
         * @returns 穴あけ開始ポイント
         */
        public centerHolePoint(size : number) : Point {
            let x = Math.floor((this.cellWidth - size) / 2);
            let y = Math.floor((this.cellWidth - size) / 2);
            return Point.New(x,y);
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
        public cellAddress = (point : Point) : number => point.y * this.cellWidth + point.x;

        /** 番地の座標 */
        public cellPoint = (address : number) : Point => pointCalc(address, this.cellWidth);

        /** 平方時・座標で取得 */
        public cellGetter (point : Point) : T
        {
            if (this.cellWidth == 0) return this.itemNew();
            return this.items[this.cellAddress(point)];
        }

        /** 平方時・座標で設定 */
        public cellSetter(point : Point, item : T) : void {
            if (this.cellWidth == 0) return;
            this.items[this.cellAddress(point)] = item;
        }

        /** 検索 -1:見つからない */
        public search(item : T) : number {
            let result = -1;
            for(let i = 0; i < this.length(); i++) {
                if (this.itemEqual(this.items[i], item)) {
                    return i;
                }
            }
            return result;
        }

        /** ロールバック可能な更新 */
        public pushToAddress(address : number, item : T) : void {
            let log = new logItem<T>();
            log.address = address;
            log.beforeItem = this.items[address];
            log.afterItem = item;
            this.logItems.push(log);
            this.items[address] = item;
        }
        
        /** ロールバック可能な更新：ポイント指定 */
        public pushToPoint = (point : Point, item : T) : void => 
            this.pushToAddress(this.cellAddress(point), item);

        /** ロールバック */
        public rollBack = () : void => {
            if (this.logItems.length == 0) return;
            let log = this.logItems.pop();
            if (log == null || log.beforeItem == null) return;
            this.items[log.address] = log.beforeItem;
        }

    }

    /** 数値型配列支援クラス */
    export class NumArray extends CellArray<number> implements ICellArray<number> {
        /** item初期値 */
        public itemNew =() => 0;
        /** item比較 */
        public itemEqual = (item1 : number, item2 : number) : boolean => item1 === item2;
    }

    /** 座標クラス配列支援クラス */
    export class PointArray extends CellArray<Point> implements ICellArray<Point> {
        /** item初期値 */
        public itemNew = () => Point.Zero;
        /** item比較 */
        public itemEqual = (item1 : Point, item2 : Point) : boolean => item1.equal(item2);

    }

    /** 座標クラス配列支援クラス */
    export class HandArray extends CellArray<IHand> implements ICellArray<IHand> {
        /** item初期値 */
        public itemNew = () => new Hand();
        /** item比較 */
        public itemEqual = (item1 : IHand, item2 : IHand) : boolean => item1.equal(item2);

    }

    
    /** 汎用クラス配列 */
    export class itmArray extends CellArray<itm> implements ICellArray<itm> {
        /** item初期値 */
        public itemNew =() => new itm();
        /** item比較 */
        public itemEqual = (item1 : itm, item2 : itm) : boolean => item1.code === item2.code;
    }


}