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
        public gameName : string = "@TITLE@☆拾い";

        // game01 self
        
        /** 段位 */
        public gameLevel : number = 0;

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
        
        /** このゲームでの空き駒 */
        public blankCode : number = 82;

        /** このゲームでの選択駒 */
        public selectCode : number = 20;

        /** 選択駒かどうかの判断 */
        public isSelectCode=(code : number) : boolean => code == this.selectCode;

        /** 盤外の駒 */
        public backCode : number = 82;

        /** 背景色 */
        // public backColor = () : string => komas[this.backCode].backColor;


        /** 駒の配置 */
        public komas : HandArray = new HandArray();

        /** 手 */
        public hands : IHand[] = [];

        /** 組数 */
        public pearCount : number = 1;

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

        constructor() {
            super();
            this.init();
        }

        /** 初期化 */
        public init() {
            this.statusInit();
            this.gameLevel = 0;
            this.boardSize = 2;
            this.pearCount = 1;
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
                    this.statusDisplayer();
                    return;
                }
                if (code == buttonCancel) {
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
                        this.boardHandMove(this.nowHandCount);
                    }
                    return;
                }
                if (code == buttonForward) {
                    if (this.nowHandCount < this.hands.length - 1) {
                        this.nowHandCount += 1;
                        this.boardHandMove(this.nowHandCount);
                    }
                    return;
                }
            }        
            if (this.gameStep == 5) {
                if (code == buttonOk) {
                    if (this.isGameClear) {
                        this.gameStep = 1;
                        this.canDisplayPoint = true;
                        this.gameLevel++;
                        return;
                    }
                    if (this.isGameOver) {
                        this.gameStep = 1;
                        this.canDisplayPoint = true;
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
                        this.boardCreate();

                        this.statusDisplayer();

                        this.cellSize = this.boardSize + 4;
                        this.cells.cellReset(this.cellSize,0);
                        
                        this.cells.cellAllPaint(9);
                        this.boardCorner = this.cells.cellCenterHoleMaker(this.boardSize,10);

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
                        this.buttonSetter();
                        if (!this.isPlayStarted) {
                            let startMessage = titleChange("@TITLE@を拾え");
                            this.messages.push(new Message(startMessage,this.messagePotision(),1,Colors.White,Colors.Black));
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
            
            this.boardSize = 2;
            this.pearCount = 1;

            this.isEndless = false;
            this.nowCode = 0;
            this.isGameOver = false;
            this.isGameClear = false;
            this.isGamePlay = false;
            this.isPlayStarted = false;

            this.board.cellReset(this.boardSize,this.blankCode);
            this.hands = [];          
        }

        /** ゲーム枠の大きさを計算 */
        private boardSizeCalc() : void {
            this.boardSize = 5;
            this.pearCount = this.gameLevel + 1;
            this.isEndless = false;
            return;
        }

        // そのセルが空きかどうか
        public isBlankCell = (nearPoint : Point) : boolean => {
            // 外なら空きと扱う
            if (nearPoint.x < 0 || nearPoint.x >= this.boardSize) return true;
            if (nearPoint.y < 0 || nearPoint.y >= this.boardSize) return true;
            let koma = this.board.cellGetter(nearPoint);
            // 空き駒なら空き
            if (koma == this.blankCode) return true;
            // でなければ空きでは無い
            return false
        }

        // 外側のチェックを行う。他の駒の隣で左右に空きがないかをチェックする。上下はチェックしない。
        // 0:孤独 1:外側 2:内側
        public outerCheck = (checkPoint : Point) : number => {
            let leftPoint = Point.New(checkPoint.x - 1,checkPoint.y);
            let rightPoint = Point.New(checkPoint.x + 1,checkPoint.y);
            let blankCount = 0;
            if (this.isBlankCell(leftPoint)) blankCount++;
            if (this.isBlankCell(rightPoint)) blankCount++;
            return blankCount;
        }

        // 外側、内側に該当するセルを検索する
        public cellSearch = (blankCount : number,isBlank: boolean) : Point[] => {
            let result : Point[] = [];
            for(let y = 0; y < this.boardSize; y++) {
                for(let x = 0; x < this.boardSize; x++) {
                    let point = Point.New(x,y);
                    let c = this.board.cellGetter(point);
                    if (c != this.blankCode && isBlank) continue;
                    if (c == this.blankCode && !isBlank) continue;
                    let o = this.outerCheck(point);
                    if (o == blankCount) {
                        result.push(point);
                    }
                }
            }
            return result;
        }

        /** ゲーム盤作成 設定済みレベルに応じて作成 */
        public boardCreate() : void {
            this.boardSizeCalc();

            // ボード初期化
            this.komas = new HandArray();
            this.board = new NumArray();

            // 配置作成
            let setKoma = this.gameLevel % 4;
            for(let i = 0; i < this.pearCount; i++) {
                for(let j = 0; j < 2; j++) {
                    let outerPoints = this.cellSearch(1,true);
                    let lonelyPoints = this.cellSearch(0,true);
                    let innerPoints = this.cellSearch(2,false);
                    if (outerPoints.length == 0 && lonelyPoints.length == 0) {
                        this.BugLog("空きがありません。");
                        return;
                    }
                    let putPoint = Point.New(0,0);
                    if (outerPoints.length == 0) {
                        let i = rnd_max(lonelyPoints.length - 1);
                        putPoint = lonelyPoints[i].copy();
                    } else {
                        let i = rnd_max(outerPoints.length - 1);
                        putPoint = outerPoints[i].copy();
                    }
                    this.board.cellSetter(putPoint,setKoma + 10);
                    this.komas.items.push(new Hand(putPoint,setKoma + 10));
                }
                setKoma++;
                if (setKoma > 3) setKoma = 0;
            }

            this.selectCellSetter();
            
            this.isGameClear = false;
            this.isGameOver = false;
            this.isGamePlay = false;

            this.hands = [];
            this.nowHandCount = -1;

        }

        /** 選択箇所を作成（01専用）
         * @param x : 横位置
         * @param y : 縦位置
         */        
        private selectCellSetter() : void {
            // 初期化
            for(let y0 = 0; y0 < this.boardSize; y0++) {
                for(let x0 = 0; x0 < this.boardSize; x0++) {
                    let point0 = Point.New(x0,y0);
                    let k = this.board.cellGetter(point0);
                    if (k == 10) continue;
                    let c = this.outerCheck(point0);
                    if (c == 0 || c == 1) {
                        this.board.cellSetter(point0,k + 10);
                    }
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


            this.selectCellSetter();

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
            this.selectCellSetter();

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
                this.selectCellSetter();
            } else {
                this.nowCode = 11;
                this.selectCellSetter();
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
            result +="★ @TITLE@☆拾い ★\n";
            result +="@TITLE@の二駒を外側から選び、\n";
            result +="@TITLE@を順に拾え。\n";
            result +="\n";
            result +="却：盤面の却下\n";
            result +="戻：手を戻す\n";
            result +="進：手を進める\n";
            return result;
        }
    }
}