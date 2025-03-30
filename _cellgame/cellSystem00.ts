/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** セルゲームシステム 共通項 */
    export abstract class CellGameSystem00 implements ICellGameSystem {
        public cellCount : number = 0;
        public backColor : string = Colors.Black;
        public codes : number[] = [];
        public messages : IMessage[] = [];
        public statusName : string[] = [];
        public status : number[] = [];

        public gameStep : number = 0;

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
            // 仮
            let c = 0;
            for(let y = 0; y < this.cellCount; y++) {
                for(let x = 0; x < this.cellCount; x++) {
                    this.codeSetter(x,y,c);
                }
                c = this.codeCountUp(c);                
            }
            
        }

        /** 盤面白紙
         * @param cellCount : セル数
         */
        public cellReset(cellCount : number = 10) : void {
            this.cellCount = cellCount;
            this.codes = Array(this.addressLength()).fill(0);
            this.messages = [];
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
        public codeGetter = (x : number,y : number) : number => {
            let a : number = this.cellAddress(x,y);
            if (a < 0) return -1;
            return this.codes[a];
        }
        /** cellコード（ポイント指定） */
        public codeGetterFromPoint(p : Point) : number {
            return this.codeGetter(p.x,p.y);
        }

        /** cellコード設定 (x,y指定) */
        public codeSetter( x : number, y : number, code : number) {
            let a : number = this.cellAddress(x,y);
            if (a < 0) return;
            this.codes[a] = code;
        }
        /** cellコード設定 (番地指定) */
        public codeSetterToAddress(a : number, code : number) {
            let p = pointCalc(a,this.cellCount);
            this.codeSetter(p.x,p.y,code);
        }
        /** cellコード設定 (Point指定) */
        public codeSetterToPoint(p : Point, code : number) {
            this.codeSetter(p.x,p.y,code);
        }

        /** 四方セル設定
         * @param x0 : 左上X y0 : 左上Y x1 : 右下X y1 : 右下Y code : 設定コード
         */
        public cellBoxSetter(x0 : number,y0 : number,x1 : number,y1 : number,code : number) : void {
            for(let y = y0; y <= y1; y++) {
                for(let x = x0; x <= x1; x++) {
                    this.codeSetter(x,y,code);
                }
            }
        }

        /** 全セル塗りつぶし
         * @param code : 設定コード
         */
        public cellAllPaint(code : number) : void {
            for(let y = 0; y < this.cellCount; y++) {
                for(let x = 0; x < this.cellCount; x++) {
                    this.codeSetter(x,y,code);
                }
            }
        }

        /** 中央穴あけ
         * @param size : 穴あけサイズ
         * @param code : 穴あけコード
         */
        public centerHoleMaker(size : number, code : number) : void {
            let p0 = this.centerHolePoint(size);
            let x1 = p0.x + size - 1;
            let y1 = p0.y + size - 1;
            this.cellBoxSetter(p0.x,p0.y,x1,y1,code);
        }

        /** 中央穴あけ開始ポイント
         * @param size : 穴あけサイズ
         * @returns 穴あけ開始ポイント
         */
        public centerHolePoint(size : number) : Point {
            let x = Math.floor((this.cellCount - size) / 2);
            let y = Math.floor((this.cellCount - size) / 2);
            return new Point(false,x,y);
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
                if (c >= komas.length){
                    c = 0;
                    break;
                }
                if (komas[c] === undefined){
                    c++;
                }
                else {
                    break;
                }
            }
            return c;
        }

        /** コードループ 11-14,21-24
         * @param code : 現在のコード
         * @param count : 加算値
         * @returns 次のコード
         */
        public codeLoop(code : number,count : number) : number {
            let c = code;
            c += count;
            if (code < 20) {
                if (c < 11) c = 14;
                if (c > 14) c = 11;
                return c;   
            }
            if (c < 21) c = 24;
            if (c > 24) c = 21;
            return c;
        }

        /** セル選択
         * @param p : 選択桁位置
         */
        public pointSelect(p : Point) : void {
            let a = this.cellAddress(p.x,p.y);
            if (a < 0) return;
            let code = this.codeGetter(p.x,p.y);
            code = this.codeCountUp(code);
            this.codeSetter(p.x,p.y,code);
            return;
        }

        /**
         * 表示作成
         */
        public displayMaker() : void {
            this.messages = [];
            // 仮
            this.messages.push(new Message("メッセージ",1,0,Colors.White,Colors.Blue,true));
            
        }

        /** 勝利メッセージ返却 */
        public msgWinSelector=() : string => msgPatterns[rnd(10)];
        /**　敗北メッセージ返却 */
        public msgLoseSelector=() : string => msgPatterns[rnd(10) + 10];


    }


}