/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
namespace cellgame {
    /** セルゲームシステム ０２： */
    export class CellGameSystem02 extends CellGameSystem00
    implements ICellGameSystem {
        /** ゲームID */
        public gameId : string = "GAME02";

        /** ゲーム名 */
        public gameName : string = "士農工商☆拾い";

        // game01 self
        
        /** 段位 */
        public gameLevel : number = 0;

        /** 賭点 */
        public gameBet : number = 0;

        /** 賭点最大値 */
        public gameBetMax : number = 0;

        /** 賭点表示 */
        public canDisplayBet : boolean = false;

        /** 得点 */
        public gamePoint : number = 0;

        /** 得点表示 */
        public canDisplayPoint : boolean = false;

        /** ゲーム盤の大きさ */
        public boardSize : number = 2;

        /** ゲーム盤 */
        public board : ICellArray<number> = new NumArray();
        /** 画面に対するゲーム盤の位置 */
        public boardCorner : Point = new Point(true);

        /** 手 */
        public hands : IHand[] = [];

        /** 障害物 */
        public blockPoints : PointArray = new PointArray();
        /** ゲーム開始位置 */
        public startPoint : Point = new Point(true);

        /** 自由位置を可能とするか */
        public canFreePotision : boolean = false;

        /** 障害物を持つか */
        public haveBlock : boolean = false;

        /** 障害物の数 */
        public blockCount : number = 0;

        /** 無限モード */
        public isEndless : boolean = false;

        /** 現在のコード */
        public nowCode : number = 0;

        /** 現在の手数 */
        public nowHandCount : number = 0;

        /** 現在の手 */
        public newHand : IHand = new Hand(Point.New(0,0),0);

        /** ゲームオーバーの状態 */
        public isGameOver : boolean = false;
        /** ゲームクリアの状態 */
        public isGameClear : boolean = false;
        /** ゲームプレイ中 */
        public isGamePlay : boolean = false;
        /** プレイ開始されている状態 */
        public isPlayStarted : boolean = false;

        /** コードのループ */
        public loopCodes : number[] = [11,12,13,14];

        /** 背景色 */
        public backColor: string = Colors.DarkBlue;

        constructor() {
            super();
            this.init();
        }

        /** 初期化 */
        public init() {
            this.statusInit();
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
         * @param point : 選択桁位置
         */
        public pointSelect(point : Point) : void {
            let code = this.cells.cellGetter(point);
            if (this.gameStep == 2) {
                if (code == 20) {
                    this.nowCode = this.codeLoop(this.nowCode,1);
                    let hand = new Hand(point,this.nowCode);
                    this.newHand = hand;
                    this.boardHandPush(hand);
                    this.isPlayStarted = true;
                    this.gameBet += this.betPoint();
                    if (this.gameBet > this.gameBetMax) {
                        this.gameBetMax = this.gameBet;
                        this.canDisplayBet = true;
                    }
                    this.statusDisplayer();
                    return;
                }
                if (code == buttonCancel) {
                    this.gamePoint -= this.gameBetMax;
                    this.canDisplayPoint = true;
                    this.gameStep = 1;
                    return;
                }
                if (code == buttonHelp) {
                    alert(this.toComment());
                    return;
                }
                if (code == buttonBack) {
                    if (this.nowHandCount > -1) {
                        this.nowHandCount--;
                        this.gameBet -= this.betPoint();
                        this.boardHandMove(this.nowHandCount);
                    }
                    return;
                }
                if (code == buttonForward) {
                    if (this.nowHandCount < this.hands.length - 1) {
                        this.nowHandCount += 1;
                        this.gameBet += this.betPoint();
                        if (this.gameBet > this.gameBetMax) {
                            this.gameBetMax = this.gameBet;
                        }
                        this.boardHandMove(this.nowHandCount);
                    }
                    return;
                }
            }        
            if (this.gameStep == 5) {
                if (code == buttonOk) {
                    if (this.isGameClear) {
                        this.gameStep = 1;
                        this.gamePoint += this.gameBetMax;
                        this.canDisplayPoint = true;
                        this.gameLevel++;
                        return;
                    }
                    if (this.isGameOver) {
                        this.gameStep = 1;
                        this.gamePoint -= this.gameBetMax;
                        this.canDisplayPoint = true;
                        return;
                    }
                }
            }
        }

        /** 賭け点の単価 */
        public betPoint = () : number => this.blockCount + 1;

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
                        this.boardCreate();

                        this.statusDisplayer();

                        this.cellSize = this.boardSize + 4;
                        this.cells.cellReset(this.cellSize,0);
                        
                        this.cells.cellAllPaint(9);
                        this.boardCorner = this.cells.cellCenterHoleMaker(this.boardSize,10);

                        this.boardToCellsAllSetter();
                        this.buttonSetter();

                        this.gameStep = 2;
                        this.gameBet = 0;
                        this.gameBetMax = 0;
                        this.isGamePlay = true;
                        break;
                    }
                /** ゲームプレイ */
                case 2:
                    {
                        if (!this.isGamePlay) break;
                        this.messages = [];
                        this.buttonSetter();
                        if (!this.isPlayStarted) {
                            this.messages.push(new Message("士農工商を拾え",this.messagePotision(),1,Colors.White,Colors.Black));
                        }

                        this.statusDisplayer();

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
                        this.lostCellSetter();

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

        /** 了ボタンの位置 */
        public pointOk = () => Point.New(Math.floor(this.cellSize / 2),this.cellSize - 1);

        /** 却ボタンの位置 */
        public pointCancel = () => Point.New(this.cellSize - 1,0);

        /** 戻ボタンの位置 */ 
        public pointBack = () => Point.New(0,this.cellSize - 1);

        /** 進ボタンの位置 */
        public pointForward = () => Point.New(this.cellSize - 1,this.cellSize - 1);
        

        /** okボタン設定 flase:消去 */
        private okButtonSetter(isDisplay : boolean = true) : void {
            this.cells.cellSetter(this.pointOk(),isDisplay ? buttonOk : 9);
        }

        /** 却ボタン設定 flase:消去 */
        private cancelButtonSetter(isDisplay : boolean = true) : void {
            this.cells.cellSetter(this.pointCancel(),isDisplay ? buttonCancel : 9);
        }

        /** 却・戻・進 ボタン設置 flase:消去 */
        private controllButtonSetter(isDisplay : boolean = true) : void {
            this.cells.cellSetter(this.pointBack(),(isDisplay && this.nowHandCount > -1) ? buttonBack : 9);
            this.cells.cellSetter(this.pointForward(),(isDisplay && this.nowHandCount < this.hands.length - 1) ? buttonForward : 9);
        }

        /** ボタン設置制御 */
        private buttonSetter() : void {
            // 説ボタン設置
            this.cells.cellSetter(Point.New(0,0),buttonHelp);
            switch(this.gameStep) {
                case 1:
                    break;
                case 2:
                    // ok ボタン消去
                    this.okButtonSetter(false);
                    // 却ボタン設置
                    this.cancelButtonSetter();

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
            this.gamePoint = 0;
            this.canDisplayPoint = false;
            this.gameBet = 0;
            this.gameBetMax = 0;
            this.canDisplayBet = false;
            
            this.boardSize = 2;


            this.canFreePotision = false;
            this.haveBlock = false;
            this.blockCount = 0;
            this.isEndless = false;
            this.nowCode = 0;
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

        /** ゲーム盤作成 設定済みレベルに応じて作成 */
        public boardCreate() : void {
            this.boardSizeCalc();
            // this.board.cellReset(this.boardSize,10);
            // 邪魔ブロック（端には置かない）
            this.blockPoints = new PointArray();
            if (this.haveBlock) {
                for(let i = 0; i < this.blockCount; i++) {
                    while(true) {
                        let x = rnd(this.boardSize - 2) + 1;
                        let y = rnd(this.boardSize - 2) + 1;
                        let point = Point.New(x,y);
                        if (this.blockPoints.search(point) != -1) {
                            continue;
                        }
                        this.blockPoints.items.push(point);
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
                    this.startPoint = Point.New(x0,y0);
                    // 空きセルでなければやり直し
                    if (this.blockPoints.search(this.startPoint) != -1) {
                        continue;
                    }
                    break;
                }
            } else {
                // 四つ角
                x0 = (this.boardSize - 1) * rnd(2);
                y0 = (this.boardSize - 1) * rnd(2);
                this.startPoint = Point.New(x0,y0);
            }
            // this.nowCell = 11;
            // this.board.cellSetter(this.startPoint.x,this.startPoint.y,this.nowCell);

            this.boardPlacement();

            this.selectCellSetter(this.startPoint);
            
            this.isGameClear = false;
            this.isGameOver = false;
            this.isGamePlay = false;

            this.hands = [];
            this.nowHandCount = -1;

        }

        /** ゲーム盤配置 */
        public boardPlacement() : void {
            this.boardReset();
        }

        /** 選択箇所を作成（01専用）
         * @param x : 横位置
         * @param y : 縦位置
         */        
        private selectCellSetter(boardPoint : Point) : void {
            // 初期化
            for(let y0 = 0; y0 < this.boardSize; y0++) {
                for(let x0 = 0; x0 < this.boardSize; x0++) {
                    let point0 = Point.New(x0,y0);
                    let c = this.board.cellGetter(point0);
                    if (c == 20) {
                        this.board.cellSetter(point0,10);
                    }
                }
            }
            // 設定
            for(let d = 0; d < 4; d++) {
                let xx = boardPoint.x + Direction4s[d].x;
                let yy = boardPoint.y + Direction4s[d].y;
                if (xx < 0 || xx >= this.boardSize) continue;
                if (yy < 0 || yy >= this.boardSize) continue;
                let pp = Point.New(xx,yy);
                let c = this.board.cellGetter(pp);
                if (c == 10) {
                    this.board.cellSetter(pp,20);
                }
            }
            this.boardToCellsAllSetter();
        }

        /** 塗り残した箇所を特定
         */
        private lostCellSetter() : void {
            // 塗り残しを赤く示す
            for(let y0 = 0; y0 < this.boardSize; y0++) {
                for(let x0 = 0; x0 < this.boardSize; x0++) {
                    let point0 = Point.New(x0,y0);
                    let c = this.board.cellGetter(point0);
                    if (c == 20 || c == 10) {
                        this.board.cellSetter(point0,1);
                    }
                }
            }
            this.boardToCellsAllSetter();
        }

        /** ゲームリセット そのレベル・ステージなどの初期化 */
        public boardReset() : void {
            // ゲーム盤の初期化
            this.board.cellReset(this.boardSize,10);
            // ブロックの再現
            for(let i = 0; i < this.blockPoints.items.length; i++) {
                let blockPoint = this.blockPoints.items[i];
                this.board.cellSetter(blockPoint,9);
            }
            // 初期位置の再現
            let boardPoint = this.startPoint;
            this.nowCode = 11;
            this.board.cellSetter(boardPoint,this.nowCode);

            this.selectCellSetter(this.startPoint);

            this.boardToCellsAllSetter();
        }

        //** ゲーム盤と画面セルの同時セット */
        public boardAndCellsSetter(boardPoint : Point, code : number) : void {
            this.board.cellSetter(boardPoint,code);
            this.boardToCellsCopy(boardPoint);
        }

        /** ボードからセル情報への全ての転送 */
        public boardToCellsAllSetter() : void {
            for(let i = 0; i < this.board.cellCount(); i++) {
                this.boardToCellsAddressCopy(i);
            }
        }

        /** ボード座標 -> セル座標 */
        public ToCellsPoint = (boardPoint : Point) : Point => Point.Add(boardPoint,this.boardCorner);

        /** セル座標 -> ボード座標 */
        public ToBoardPoint = (cellsPoint : Point) : Point => Point.Sub(cellsPoint,this.boardCorner);            

        /** ボードから指定座標のみ転送 */
        public boardToCellsCopy(boardPoint : Point) : void {
            let cellsPoint = this.ToCellsPoint(boardPoint);
            this.cells.cellSetter(cellsPoint,this.board.cellGetter(boardPoint));         
        }

        /** ボードから指定アドレスのみ転送 */
        public boardToCellsAddressCopy = (address : number) : void => this.boardToCellsCopy(this.board.cellPoint(address));

        /** 手が有効であるかどうか */
        public boardHandCheck(hand : IHand) : boolean {
            if (this.cells.cellGetter(hand.point) != 20) return false;
            return true;
        }

        /** 手の追加 */
        public boardHandPush (hand : IHand) : boolean { 
            if (!this.boardHandCheck(hand)) return false;
            this.boardHandPaste(hand);
            this.nowHandCount++;
            let str : string = "";
            // this.BugLog("古い手を削除？");
            if (this.nowHandCount <= this.hands.length - 1) {
                this.hands.splice(this.nowHandCount);
                // this.BugLog("削除しました。");
            }
            this.hands.push(hand);
            // this.BugLog("手を追加しました。");
            this.newHand = hand;
            this.selectCellSetter(this.ToBoardPoint(this.newHand.point));

            return true;
        }

        /** デバッグ用 */
        private BugLog(str0 : string ) : void {
            let str : string = "[";
            for(let i = 0; i < this.hands.length; i++) {
                str += this.hands[i].code + ",";
            }
            str += "]";
            alert(str0 + " handCount:" + this.nowHandCount + " hands:" + this.hands.length + " " + str);
        }

        /** 手の反映 */
        public boardHandPaste(hand : IHand) : void {
            let boardPoint = this.ToBoardPoint(hand.point);
            this.boardAndCellsSetter(boardPoint,hand.code);
        }

        /** 初手から指定の手まで進める */
        public boardHandMove(handNo : number) : void {
            this.boardReset();
            if (handNo >= 0) {
                for(let i = 0; i <= handNo; i++) {
                    this.boardHandPaste(this.hands[i]);
                }
                this.newHand = this.hands[handNo];
                this.nowCode = this.newHand.code;
                this.selectCellSetter(this.ToBoardPoint(this.newHand.point));
            } else {
                this.nowCode = 11;
                this.selectCellSetter(this.startPoint);
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
                    let c = this.board.cellGetter(Point.New(x,y));
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

        /** ゲームステータス表示 */
        public statusDisplayer() : void {
            this.statusInit();

            if (this.gameLevel > 0) {
                this.statusName[0] = "段位";
                this.status[0] = this.gameLevel;
                this.statusNameIsVisible[0] = true;
                this.statusIsVisible[0] = true;
            } else {
                this.statusNameIsVisible[0] = false;
                this.statusIsVisible[0] = false;
            }
            if (this.isEndless) {
                this.statusName[1] = "無限";
                this.statusNameIsVisible[1] = true;
                this.statusIsVisible[1] = false;
            } else {
                this.statusNameIsVisible[1] = false;
                this.statusIsVisible[1] = false;
            }


            if (this.canDisplayBet) {
                this.statusName[2] = "賭点";
                this.status[2] = this.gameBetMax;
                this.statusNameIsVisible[2] = true;
                this.statusIsVisible[2] = true;
            } else {
                this.statusNameIsVisible[2] = false;
                this.statusIsVisible[2] = false;
            }
            if (this.canDisplayPoint) {
                this.statusName[3] = "得点";
                this.status[3] = this.gamePoint;
                this.statusNameIsVisible[3] = true;
                this.statusIsVisible[3] = true;
            } else {
                this.statusNameIsVisible[3] = false;
                this.statusIsVisible[3] = false;
            }

        }
        


        public toComment() : string {
            let result = "";
            result +="★ 士農工商 ★\n";
            result +="士農工商を順に配置し、\n";
            result +="士農工商で盤面を埋めて、\n";
            result +="士農工商の順列を学ぶのだ。\n";
            result +="\n";
            result +="却：盤面の却下\n";
            result +="戻：手を戻す\n";
            result +="進：手を進める\n";
            return result;
        }
    }
}