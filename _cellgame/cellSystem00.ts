/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** セルゲームシステム 共通項 */
    export abstract class CellGameSystem00 implements ICellGameSystem {
        public cellCount : number = 0;
        public codes : number[] = [];
        public isflashes : boolean[] = [];

        /** コンストラクタ */
        constructor() {            
            // this.cellCount = 10;

            // // 初期化
            // this.init();
        }

        /** 初期化 */
        public init() {
            this.codes = Array(this.cellLength()).fill(0);
            this.isflashes = Array(this.cellLength()).fill(false);
        }
            
        /** 番地の数 */
        public cellLength = () : number => this.cellCount * this.cellCount;

        /** 番地計算 */
        public cellAddress(x : number, y : number) : number {
            if (x < 0 || x >= this.cellCount) return -1;
            if (y < 0 || y >= this.cellCount) return -1;
            return y * this.cellCount + x;
        }

        /** cellコード（x,y指定） */
        public code = (x : number,y : number) : number => {
            let a : number = gAddress(x,y);
            if (a < 0) return -1;
            return this.codes[a];
        }
        /** cellコード設定 (x,y指定) 画面出力込み */
        public codeSetter( x : number, y : number, code : number) {
            let a : number = gAddress(x,y);
            if (a < 0) return;
            this.codes[a] = code;
        }
        /** Flashフラグ(x,y指定) */
        public isFlash = (x : number,y : number) : boolean => {
            let a : number = gAddress(x,y);
            if (a < 0) return false;
            return this.isflashes[a];
        } 
        /** Flashフラグ設定(x,y指定) 画面出力込み */
        public isFlashSetter(x:number,y:number,isFlash:boolean) {
            let a : number = gAddress(x,y);
            if (a < 0) return;
            this.isflashes[a] = isFlash;
        }
    }


}