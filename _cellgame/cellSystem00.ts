/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** セルゲームシステム 共通項 */
    export abstract class CellGameSystem00 implements ICellGameSystem {
        public cellCount : number = 0;
        public codes : number[] = [];
        public statusName : string[] = [];
        public status : number[] = [];

        /** コンストラクタ */
        constructor() {            
            this.statusName = Array(4).fill("");
            this.status = Array(4).fill(0);

            // 初期化
            this.init();
        }

        /** 初期化 */
        public init() {
            this.cellReset(10);
        }

        /** 盤面白紙
         * @param cellCount : セル数
         */
        public cellReset(cellCount : number = 10) : void {
            this.cellCount = cellCount;
            this.codes = Array(this.addressLength()).fill(0);
            this.displayMaker();
        }
            
        /** 番地の数 */
        public addressLength = () : number => this.cellCount * this.cellCount;

        /** 番地計算 */
        public cellAddress(x : number, y : number) : number {
            if (x < 0 || x >= this.cellCount) return -1;
            if (y < 0 || y >= this.cellCount) return -1;
            return y * this.cellCount + x;
        }

        /** cellコード（x,y指定） */
        public code = (x : number,y : number) : number => {
            let a : number = this.cellAddress(x,y);
            if (a < 0) return -1;
            return this.codes[a];
        }
        /** cellコード設定 (x,y指定) 画面出力込み */
        public codeSetter( x : number, y : number, code : number) {
            let a : number = this.cellAddress(x,y);
            if (a < 0) return;
            this.codes[a] = code;
        }

        /** Cell設定 ＋ 画面表示 */
        public cellSetter(x:number,y:number,code:number) {
            this.codeSetter(x,y,code);
            // cellgame.cellDisplay(x,y);
        }

        /** タッチ箇所受信 */
        public touchPointRecv(p : Point) : void {
            if (p.x < 0 || p.x >= this.cellCount) return;
            if (p.y < 0 || p.y >= this.cellCount) return;
            this.pointSelect(p);
        }

        /** コードカウントアップ 
         * @param code : 現在のコード
         * @returns 次のコード 
        */
        public codeCountUp(code : number) : number{
            let c = code;
            c++;
            while(true) {
                if (c >= cells.length){
                    c = 0;
                    break;
                }
                if (cells[c] === undefined){
                    c++;
                }
                else {
                    break;
                }
            }
            return c;
        }

        /** セル選択
         * @param p : 選択桁位置
         */
        public pointSelect(p : Point) : void {

            let a = this.cellAddress(p.x,p.y);
            if (a < 0) return;
            let code = this.code(p.x,p.y);
            code = this.codeCountUp(code);
            this.cellSetter(p.x,p.y,code);
            return;
        }

        /**
         * 表示処理
         */
        public display() : void {
            cellgame.textDisplay("メッセージ",1,0,Colors.White,Colors.Blue,true);
        }

        /**
         * 表示作成
         */
        public displayMaker() : void {
            let c = 0;
            for(let y = 0; y < this.cellCount; y++) {
                for(let x = 0; x < this.cellCount; x++) {
                    this.cellSetter(x,y,c);
                }
                c = this.codeCountUp(c);
            }
        }


    }


}