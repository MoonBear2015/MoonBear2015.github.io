namespace cellgame {
    /** セルゲームシステム 共通項 */
    export abstract class CellGameSystem00 implements ICellGameSystem {
        public cellSize : number = 0;
        public backColor : string = Colors.Black;
        public cells : ICellArray<number> = new NumArray();
        public messages : IMessage[] = [];
        public statusName : string[] = [];
        public statusNameIsVisible : boolean[] = [];
        public status : number[] = [];
        public statusIsVisible : boolean[] = [];

        public gameStep : number = 0;

        /** コンストラクタ */
        constructor() {            
            this.statusName = Array(4).fill("");
            this.statusNameIsVisible = Array(4).fill(false);
            this.status = Array(4).fill(0);
            this.statusIsVisible = Array(4).fill(false);

            // 初期化
            this.init();
        }

        /** 初期化 */
        public init() {
            this.cells.cellReset(0,10);
        }

        /** ステータス初期化 */
        public statusInit() : void {
            this.statusName = ["","","",""];
            this.statusNameIsVisible = [false,false,false,false];
            this.status = [0,0,0,0];
            this.statusIsVisible = [false,false,false,false];
        }

        /** タッチ箇所受信 */
        public touchPointRecv(p : Point) : void {
            if (p.x < 0 || p.x >= this.cellSize) return;
            if (p.y < 0 || p.y >= this.cellSize) return;
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
         * @param point : 選択桁位置
         */
        public pointSelect(point : Point) : void {
            let a = this.cells.cellAddress(point);
            if (a < 0) return;
            let code = this.cells.cellGetter(point);
            code = this.codeCountUp(code);
            this.cells.cellSetter(point,code);
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