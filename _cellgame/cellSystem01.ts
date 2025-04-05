/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
namespace cellgame {
    /** セルゲームシステム ０１： */
    export class CellGameSystem01 extends CellGameSystem00
    implements ICellGameSystem {

        // game01 self
        
        public gameLevel : number = 0;
        public boardSize : number = 2;

        public board : ICellArray<number> = new NumArray();
        public boardPoint : Point = new Point(true);

        public hands : IHand[] = [];

        public blockPoints : Point[] = [];
        public startPoint : Point = new Point(true);

        public canFreePotision : boolean = false;
        public haveBlock : boolean = false;
        public blockCount : number = 0;
        public isEndless : boolean = false;
        public nowCell : number = 0;
        public nowHand : number = 0;
        public isGameOver : boolean = false;
        public isGameClear : boolean = false;
        public isGamePlay : boolean = false;
        public isPlayStarted : boolean = false;

        public loopCodes : number[] = [11,12,13,14];

        /** 背景色 */
        public backColor: string = Colors.DeepDarkGray;

        constructor() {
            super();
            this.init();
        }

        /** 初期化 */
        public init() {
            this.statusName = ["","","",""];
            this.status = [0,0,0,0];

            this.gameLevel = 0;
            this.boardSize = 2;
            this.canFreePotision = false;
            this.cells.cellReset(6,0);
        }

        /** メッセージ表示位置 */
        public messagePotision() : number {
            let x = this.boardSize + 4 - 6;
            if (x < 2) return x;
            return Math.floor(x / 2);        
        }

        /** セル選択
         * @param p : 選択桁位置
         */
        public pointSelect(p : Point) : void {
            if (this.gameStep == 2) {
                let x = p.x;
                let y = p.y;
                let c = this.cells.cellGetter(x,y);
                if (c == 20) {
                    let bx = x - this.boardPoint.x;
                    let by = y - this.boardPoint.y; 
                    this.nowCell = this.codeLoop(this.nowCell,1);
                    this.boardAndCellsSetter(bx,by,this.nowCell);

                    this.hands.push(new Hand(addressCalc(bx,by,this.boardSize),this.nowCell));
                    if (this.hands.length - 1 > this.nowHand) {
                        this.nowHand++;
                    }

                    this.selectCellSetter(bx,by);
                    this.isPlayStarted = true;
                    return;
                }
                if (c == 93) {
                    this.gameStep = 1;
                    return;
                }
                if (c == 99) {
                    alert(this.toComment());
                    return;
                }
            }        
            if (this.gameStep == 5) {
                let c = this.cells.cellGetter(p.x,p.y);
                if (c == 90) {
                    if (this.isGameClear) {
                        this.gameStep = 1;
                        this.gameLevel++;
                        return;
                    }
                    if (this.isGameOver) {
                        this.gameStep = 1;
                        return;
                    }
                }
            }
        }

        /**
         * 表示作成
         */
        public displayMaker() : void {
            switch(this.gameStep) {
                /** ゲームタイトル */
                case 0:
                    {
                        this.boardInit();
                        this.gameStep = 1;
                        break
                    }
                /** ゲームスタート */
                case 1:
                    {
                        this.boardMake();

                        this.statusName = ["","","",""];
                        this.status = [0,0,0,0];
            
                        if (this.gameLevel > 0) {
                            this.statusName[3] = "段位";
                            this.status[3] = this.gameLevel;
                        } else {
                            this.statusName[3] = "";
                            this.status[3] = 0;
                        }
                        if (this.isEndless) {
                            this.statusName[0] = "無限";
                            this.status[0] = -1;
                        } else {
                            this.statusName[0] = "";
                            this.status[0] = -1;
                        }
                        this.cellSize = this.boardSize + 4;
                        this.cells.cellReset(this.cellSize,0);
                        
                        this.cells.cellAllPaint(9);
                        this.boardPoint = this.cells.cellCenterHoleMaker(this.boardSize,10);

                        this.boardToCellsAllSetter();
                        this.buttonSetter();

                        this.gameStep = 2;
                        this.isGamePlay = true;
                        break;
                    }
                /** ゲームプレイ */
                case 2:
                    {
                        if (!this.isGamePlay) break;
                        this.messages = [];
                        if (this.isPlayStarted) {
                            this.buttonSetter();
                        }
                        else {
                            // this.messages.push(new Message("士農工商を並べよ",this.messagePotision(),1,Colors.White,Colors.Black));
                            this.buttonSetter();
                        }
                        this.boardCheck();
                        if (this.isGameClear) {
                            this.gameStep = 3;
                            break;
                        }
                        if (this.isGameOver) {
                            this.gameStep = 4;
                            break;
                        }  
                        break;
                    }
                /** ゲームクリア 表示*/
                case 3:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;
                        
                        this.messages = [];
                        this.messages.push(new Message(this.msgWinSelector(),this.messagePotision(),1,Colors.White,Colors.Black,true));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** ゲームオーバー 表示*/
                case 4:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;

                        this.messages = [];
                        this.messages.push(new Message(this.msgLoseSelector(),this.messagePotision(),1,Colors.Black,Colors.Red,false));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** 確認待ち */
                case 5:
                    {
                        break;
                    }
                default:
                    {
                        break;
                    }   
            }
        }

        /** okボタン設定 flase:消去 */
        private okButtonSetter(isDisplay : boolean = true) : void {
            let center = Math.floor(this.cellSize / 2);
            this.cells.cellSetter(center,this.cellSize - 1,isDisplay ? 90 : 9);
        }

        /** 却・戻・進 ボタン設置 flase:消去 */
        private controllButtonSetter(isDisplay : boolean = true) : void {
            this.cells.cellSetter(this.cellSize - 1,0,isDisplay ? 93 : 9);
            this.cells.cellSetter(0,this.cellSize - 1,(isDisplay && this.nowHand > -1) ? 94 : 9);
            this.cells.cellSetter(this.cellSize - 1,this.cellSize - 1,(isDisplay && this.nowHand < this.hands.length - 1) ? 95 : 9);
        }

        /** ボタン設置制御 */
        private buttonSetter() : void {
            // 説ボタン設置
            this.cells.cellSetter(0,0,99);
            switch(this.gameStep) {
                case 1:
                    break;
                case 2:
                    // ok ボタン消去
                    this.okButtonSetter(false);

                    if (this.isPlayStarted) {
                        // 却・戻・進 ボタン設置
                        this.controllButtonSetter();
                    } else {
                        // 却・戻・進 ボタン消去
                        this.controllButtonSetter(false);
                    }
                    break;
                case 3:
                case 4:
                    // ok ボタン設置
                    this.okButtonSetter();
                    // 却・戻・進 ボタン消去
                    this.controllButtonSetter(false);
                    break;
                default:
                    break;
            }
        }

        /** ゲーム盤初期化 （レベル等初期値）*/
        public boardInit() : void {
            this.gameLevel = 0;
            this.boardSize = 2;

            this.canFreePotision = false;
            this.haveBlock = false;
            this.blockCount = 0;
            this.isEndless = false;
            this.nowCell = 0;
            this.isGameOver = false;
            this.isGameClear = false;
            this.isGamePlay = false;
            this.isPlayStarted = false;

            this.board.cellReset(this.boardSize,10);
            this.hands = [];          
        }

        /** ゲーム枠の大きさを計算 */
        private boardSizeCalc() : void {
            if (this.gameLevel == 0) {
                this.boardSize = 2;
                this.canFreePotision = false;
                this.isEndless = false;
                return;
            }
            if (this.gameLevel > 0 && this.gameLevel < 4) {
                this.boardSize = 3;
                if (this.gameLevel > 1) {
                    this.canFreePotision = true;
                    if (!this.haveBlock) {
                        this.haveBlock = true;
                        this.blockCount = 1;
                    } 
                }
                else
                {
                    this.canFreePotision = false;
                    this.haveBlock = false;
                    this.blockCount = 0;
                }
                return;
            }
            let r = Math.floor(this.gameLevel / 4);
            this.boardSize = 3 + r;
            if (this.boardSize > 5) {
                this.boardSize = 5;
                this.haveBlock = true;
                this.blockCount = 3;
                this.isEndless = true;
                return;
            } else {
                this.isEndless = false;
            }
            let mod = this.gameLevel % 4;
            if (mod == 0 ) {
                this.canFreePotision = false;
                this.haveBlock = false;
                this.blockCount = 0;
            } else {
                if (mod == 1) {
                    this.canFreePotision = true;
                    this.haveBlock = false;
                    this.blockCount = 0;
                } else {
                    this.canFreePotision = true;
                    this.haveBlock = true;
                    this.blockCount = mod - 1;
                }
            }
            return;
        }

        /** ゲーム盤作成　設定済みレベルに応じて作成 */
        public boardMake() : void {
            this.boardSizeCalc();
            this.board.cellReset(this.boardSize,10);
            // 邪魔ブロック（端には置かない）
            this.blockPoints = [];
            if (this.haveBlock) {
                for(let i = 0; i < this.blockCount; i++) {
                    while(true) {
                        let x = rnd(this.boardSize - 2) + 1;
                        let y = rnd(this.boardSize - 2) + 1;
                        if (this.board.cellGetter(x,y) != 10) {
                            continue;
                        }
                        let point = new Point(false,x,y);
                        this.blockPoints.push(point);
                        this.board.cellSetter(x,y,9);
                        break;
                    }
                }
            }
            // スタート位置
            let x0 = 0;
            let y0 = 0;
            if (this.canFreePotision) {
                // 自由位置
                while(true) {
                    x0 = rnd(this.boardSize);
                    y0 = rnd(this.boardSize);
                    // 空きセルでなければやり直し
                    if (this.board.cellGetter(x0,y0) != 10) {
                        continue;
                    }
                    break;
                }
            } else {
                // 四つ角
                x0 = (this.boardSize - 1) * rnd(2);
                y0 = (this.boardSize - 1) * rnd(2);
            }
            this.startPoint = new Point(false,x0,y0);
            this.nowCell = 11;
            this.board.cellSetter(x0,y0,this.nowCell);

            this.selectCellSetter(x0,y0);
            
            this.isGameClear = false;
            this.isGameOver = false;
            this.isGamePlay = false;

            this.hands = [];
            this.nowHand = -1;

        }
        
        /** 選択箇所を作成（01専用）
         * @param x : 横位置
         * @param y : 縦位置
         */        
        private selectCellSetter(x : number, y : number) : void {
            // 初期化
            for(let y0 = 0; y0 < this.boardSize; y0++) {
                for(let x0 = 0; x0 < this.boardSize; x0++) {
                    let c = this.board.cellGetter(x0,y0);
                    if (c == 20) {
                        this.board.cellSetter(x0,y0,10);
                    }
                }
            }
            // 設定
            for(let d = 0; d < 4; d++) {
                let xx = x + Direction4s[d].x;
                let yy = y + Direction4s[d].y;
                if (xx < 0 || xx >= this.boardSize) continue;
                if (yy < 0 || yy >= this.boardSize) continue;
                let c = this.board.cellGetter(xx,yy);
                if (c == 10) {
                    this.board.cellSetter(xx,yy,20);
                }
            }
            this.boardToCellsAllSetter();
        }

        /** ゲームリセット そのレベル・ステージなどの初期化 */
        public boardReset() : void {
            // ゲーム盤の初期化
            this.board.cellReset(this.boardSize,10);
            // ブロックの再現
            for(let i = 0; i < this.blockPoints.length; i++) {
                let p = this.blockPoints[i];
                this.board.cellSetter(p.x,p.y,9);
            }
            // 初期位置の再現
            let p = this.startPoint;
            this.nowCell = 11;
            this.board.cellSetter(p.x,p.y,this.nowCell);

            this.selectCellSetter(p.x,p.y);

            this.boardToCellsAllSetter();
        }

        //** ゲーム盤と画面セルの同時セット */
        public boardAndCellsSetter(x : number, y : number, code : number) : void {
            this.board.cellSetter(x,y,code);
            this.boardToCellsCopy(x,y);
        }

        /** ボードからセル情報への全ての転送 */
        public boardToCellsAllSetter() : void {
            for(let i = 0; i < this.board.cellCount(); i++) {
                this.boardToCellsAddressCopy(i);
            }
        }

        /** ボードから指定座標のみ転送 */
        public boardToCellsCopy(x : number, y : number) : void {
            let address = this.board.cellAddress(x,y);
            this.boardToCellsAddressCopy(address);
        }

        /** ボードから指定アドレスのみ転送 */
        public boardToCellsAddressCopy(boardAddress : number) : void {
            let point = this.board.cellPoint(boardAddress);
            let x = this.boardPoint.x + point.x;
            let y = this.boardPoint.y + point.y;   
            this.cells.cellSetter(x,y,this.board.items[boardAddress]);         
        }

        /** 手の反映 */
        public boardHandPaste (hand : IHand) : void { 
            this.board.items[hand.address] = hand.code;
            this.boardToCellsAddressCopy(hand.address);
        }

        /** 初手から指定の手まで進める */
        public boardHandMove(handNo : number) : void {
            this.boardReset();
            for(let i = 0; i <= handNo; i++) {
                this.boardHandPaste(this.hands[i]);
            }
        }

        /** ボードの初期化 */
        public boardClear() : void {
            this.board.cellAllPaint(10);
        }

        /** ゲーム終了判定 */
        private boardCheck() : void {
            if (this.gameStep != 2) return;

            /** 残りのセルを数える */
            /** 選択肢の数 */
            let count20 = 0;
            /** 空きセルの数 */
            let count10 = 0;
            /** カウント */
            for(let y = 0; y < this.boardSize; y++) {
                for(let x = 0; x < this.boardSize; x++) {
                    let c = this.board.cellGetter(x,y);
                    if (c == 20) {
                        count20++;
                    }
                    if (c == 10) {
                        count10++;
                    }
                }
            }
            /** 選択肢がなく、全てのセルが埋まっているなら、ゲームクリアー */
            if (count20 == 0 && count10 == 0) {
                this.isGamePlay = false;
                this.isGameClear = true;
            }
            /** 選択肢がなく、空きセルが残っているなら、ゲームオーバー */
            if (count20 == 0 && count10 > 0) {
                this.isGamePlay = false;
                this.isGameOver = true;
            }
        }
        


        public toComment() : string {
            let result = "";
            result +="★ 士農工商 ★\n";
            result +="士農工商を順に配置し、\n";
            result +="士農工商で盤面を埋めて、\n";
            result +="士農工商の順列を学ぶのだ。\n";
            return result;
        }
    }
}