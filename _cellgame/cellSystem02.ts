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

        /** 連携 */
        public gameCombo : number = 0;

        /** 連携点表示 */
        public canDisplayCombo : boolean = false;

        /** 連携数 */
        public comboCount : number = 0;

        /** 連携番号 */
        public comboCode : number = 0;

        /** 得点 */
        public gamePoint : number = 0;

        /** 得点表示 */
        public canDisplayPoint : boolean = false;

        /** ゲーム盤の大きさ */
        public boardSize : number = 2;

        /** ゲーム盤 */
        public board : ICellArray<number> = new NumArray();
        /** ゲーム盤の初期状態 */
        public boardStart : ICellArray<number> = new NumArray();
        /** 画面に対するゲーム盤の位置 */
        public boardCorner : Point = new Point(true);
        
        /** このゲームでの空き駒 */
        public blankCode : number = 82;

        /** このゲームでの選択駒 */
        public selectCode : number = 20;

        /** このゲームでの予約駒 */
        public reserveCode : number = 10;

        /** 升を封じる駒 */
        public blockCode : number = 10;

        /** 選択した駒 */
        public selectedCode : number = 0;

        /** 選択した駒の位置 */
        public selectedPoint : Point = new Point(true);

        /** 選択駒かどうかの判断 */
        public isChoiseCode = (code : number) : boolean => code >= 21 && code <= 24;

        /** 予約駒 */
        public isReserveCode = (code : number) : boolean => code >= 41 && code <= 44;

        /** 通常駒 */
        public isNomalCode = (code : number) : boolean => code >= 11 && code <= 14;

        /** 予約駒→通常 */
        public ReserveToNomal = (code : number) : number => code - 30;
        /** 選択→予約 */
        public ChoiseToReserve = (code : number) : number => code + 20;
        /** 選択→通常 */
        public ChoiseToNomal = (code : number) : number => code - 10;
        /** 通常→選択 */
        public NomalToChoise = (code : number) : number => code + 10;

        /** → 通常駒 */
        public ToNomalCode = (code : number) : number => {
            if (this.isChoiseCode(code)) return this.ChoiseToNomal(code);
            if (this.isReserveCode(code)) return this.ReserveToNomal(code);
            if (this.isNomalCode(code)) return code;
            return code;
        }

        /** → 予約駒 */
        public ToReserveCode = (code : number) : number => {
            if (this.isChoiseCode(code)) return this.ChoiseToReserve(code);
            if (this.isReserveCode(code)) return code;
            if (this.isNomalCode(code)) return this.NomalToChoise(code);
            return code;
        }

        /** → 選択駒 */
        public ToChoiseCode = (code : number) : number => {
            if (this.isChoiseCode(code)) return code;
            if (this.isReserveCode(code)) return this.ReserveToNomal(code);
            if (this.isNomalCode(code)) return this.NomalToChoise(code);
            return code;
        }   

        /** 盤外の駒 */
        public backCode : number = 82;

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

        // /** コードのループ */
        // public loopCodes : number[] = [11,12,13,14];

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
            let boardPoint = this.ToBoardPoint(point);
            if (this.gameStep == GameStep.Play) {
                if (this.isChoiseCode(code)) {
                    this.isPlayStarted = true;
                    this.selectedCode = this.ToNomalCode(code);
                    this.selectedPoint = boardPoint.copy();
                    this.SelectCellClear();
                    this.board.cellSetter(boardPoint,this.ToReserveCode(code));
                    this.boardToCellsCopy(boardPoint);
                    this.statusDisplayer();
                    this.gameStep = GameStep.PlayNext;
                    return;
                }
                if (code == buttonLost) {
                    this.canDisplayPoint = true;
                    this.gameStep = GameStep.Start;
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
            if (this.gameStep == GameStep.PlayNext) {
                let boardPoint = this.ToBoardPoint(point);
                // 選択済み駒の場合、キャンセルとなる
                if (this.isReserveCode(code) && this.ToNomalCode(code) == this.selectedCode) {
                    this.boardAndCellsSetter(boardPoint,this.ToNomalCode(code));
                    this.SelectCellClear();
                    this.gameStep = GameStep.Play;
                    return;
                }
                // 選択候補の駒の場合、それぞれ消去する
                if (this.isChoiseCode(code) && this.ToNomalCode(code) == this.selectedCode) {
                    let newHand : IHand = new Hand(
                        this.selectedPoint.copy(),
                        this.selectedCode,
                        boardPoint.copy(),
                        this.ToNomalCode(code)
                    );
                    let flg = this.boardHandPush(newHand);
                    if (!flg) {
                        alert("手が無効です。");
                        return;
                    }
                    this.SelectCellClear();
                    this.gameStep = GameStep.Play;
                    let counts = this.pearCounter();
                    return;
                }
                if (code == buttonOk) {
                    this.isGamePlay = false;
                    this.isGameClear = true;
                    this.gameStep = GameStep.Wait;
                    return;
                }
                if (code == buttonLost) {
                    this.isGamePlay = false;
                    this.isGameClear = false;
                    this.gameStep = GameStep.Wait;
                    return;
                }
            }
            if (this.gameStep == GameStep.Wait) {
                if (code == buttonOk) {
                    if (this.isGameClear) {
                        this.gameStep = GameStep.Start;
                        this.gamePoint += this.gameCombo;
                        this.canDisplayPoint = true;
                        this.gameLevel++;
                        return;
                    }
                    if (this.isGameOver) {
                        this.gameStep = GameStep.Start;
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
                case GameStep.Title:
                    {
                        this.boardInit();
                        this.gameStep = GameStep.Start;
                        break
                    }
                /** ゲームスタート */
                case GameStep.Start:
                    {
                        this.boardCreate();

                        this.statusDisplayer();

                        this.cellSize = this.boardSize + 4;
                        this.cells.cellReset(this.cellSize,0);
                        
                        this.cells.cellAllPaint(this.backCode);
                        this.boardCorner = this.cells.cellCenterHoleMaker(this.boardSize,this.blankCode);

                        this.boardToCellsAllSetter();
                        this.buttonSetter();

                        this.comboCode = 0;
                        this.comboCount = 0;
                        this.canDisplayCombo = false;

                        this.gameStep = GameStep.Play;
                        this.isGamePlay = true;
                        break;
                    }
                /** ゲームプレイ */
                case GameStep.Play:
                    {
                        if (!this.isGamePlay) break;
                        this.messages = [];
                        this.buttonSetter();
                        if (!this.isPlayStarted) {
                            let startMessage = titleChange("@TITLE@を拾え");
                            this.messages.push(new Message(startMessage,this.messagePotision(),1,Colors.White,Colors.Black));
                        }

                        this.statusDisplayer();

                        this.SelectCellChanger();

                        this.boardCheck();

                        if (this.isGameClear) {
                            this.gameStep = GameStep.Clear;
                            break;
                        }
                        if (this.isGameOver) {
                            this.gameStep = GameStep.Over;
                            break;
                        }  
                        break;
                    }
                /** 二コマ目選択待ち */
                case GameStep.PlayNext:
                    {
                        this.buttonSetter();
                        this.SelectCellChanger(this.selectedCode);
                        break;
                    }
                /** ゲームクリア 表示*/
                case GameStep.Clear:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;
                        
                        this.messages = [];
                        this.messages.push(new Message(this.msgWinSelector(),this.messagePotision(),1,Colors.White,Colors.Black,true));
                        this.okButtonSetter();
                        this.gameStep = GameStep.Wait;
                        break;
                    }
                /** ゲームオーバー 表示*/
                case GameStep.Over:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;

                        this.messages = [];
                        this.messages.push(new Message(this.msgLoseSelector(),this.messagePotision(),1,Colors.Black,Colors.Red,false));
                        this.okButtonSetter();
                        this.gameStep = GameStep.Wait;
                        break;
                    }
                /** 確認待ち */
                case GameStep.Wait:
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
        public pointLost = () => Point.New(this.cellSize - 1,0);

        /** 戻ボタンの位置 */ 
        public pointBack = () => Point.New(0,this.cellSize - 1);

        /** 進ボタンの位置 */
        public pointForward = () => Point.New(this.cellSize - 1,this.cellSize - 1);
        

        /** okボタン設定 flase:消去 */
        private okButtonSetter(isDisplay : boolean = true) : void {
            this.cells.cellSetter(this.pointOk(),isDisplay ? buttonOk : this.backCode);
        }

        /** 却ボタン設定 flase:消去 */
        private lostButtonSetter(isDisplay : boolean = true) : void {
            this.cells.cellSetter(this.pointLost(),isDisplay ? buttonLost : this.backCode);
        }

        /** 却・戻・進 ボタン設置 flase:消去 */
        private controllButtonSetter(isDisplay : boolean = true) : void {
            this.cells.cellSetter(this.pointBack(),(isDisplay && this.nowHandCount > -1) ? buttonBack : this.backCode);
            this.cells.cellSetter(this.pointForward(),(isDisplay && this.nowHandCount < this.hands.length - 1) ? buttonForward : this.backCode);
        }

        /** ボタン設置制御 */
        private buttonSetter() : void {
            // 説ボタン設置
            this.cells.cellSetter(Point.New(0,0),buttonHelp);
            switch(this.gameStep) {
                case GameStep.Start:
                    break;
                case GameStep.Play:
                case GameStep.PlayNext:    
                    // ok ボタン消去
                    this.okButtonSetter(false);
                    // 却ボタン設置
                    this.lostButtonSetter();

                    if (this.isPlayStarted) {
                        // 却・戻・進 ボタン設置
                        this.controllButtonSetter();
                    } else {
                        // 却・戻・進 ボタン消去
                        this.controllButtonSetter(false);
                    }
                    break;
                case GameStep.Clear:
                case GameStep.Over:
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
            let level = this.gameLevel;
            if (level >= 8) {
                level = 8;
                this.isEndless = true;
            } else {
                this.isEndless = false;
            }
            // レベル＋1が駒の対の数
            this.pearCount = level + 2;
            // 余裕を持って1.5倍の駒数分の升を用意する
            // 駒数の平方根・切り上げを辺の長さとする
            let a = Math.sqrt(this.pearCount * 3);
            let b = Math.ceil(a);
            this.boardSize = b;
            return;
        }

        /** そのセルが空き、もしくは盤外かどうか
         * @param nearPoint : セル座標
         * @return : true:空き、false:駒
         * */
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

        /**  外側のチェックを行う。他の駒の隣で左右に空きがないかをチェックする。上下はチェックしない。
        * 0:孤独 1:外側 2:内側
        */
        public outerCheck = (checkPoint : Point) : number => {
            let leftPoint = Point.New(checkPoint.x - 1,checkPoint.y);
            let rightPoint = Point.New(checkPoint.x + 1,checkPoint.y);
            let blankCount = 0;
            if (this.isBlankCell(leftPoint)) blankCount++;
            if (this.isBlankCell(rightPoint)) blankCount++;
            return 2 - blankCount;
        }

        /** 外側、内側に該当するセルを検索する。blankCount 0:孤独 1:外側 2:内側 isBlank: true:空きセル、false:駒
         * @param blankCount : 0:孤独 1:外側 2:内側
         * @param isBlank : true:空きセル、false:駒
         * @return : セル座標の配列
         * */
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
            this.board = new NumArray();
            this.board.cellReset(this.boardSize,this.blankCode);

            // 配置作成
            let setKoma = (this.gameLevel + 1) % 4 + 1;
            for(let i = 0; i < this.pearCount; i++) {
                for(let j = 0; j < 2; j++) {
                    // 外側の升を検索する
                    let outerPoints = this.cellSearch(1,true);
                    // 孤独な升を検索する
                    let lonelyPoints = this.cellSearch(0,true);

                    // 孤独な升、もしくは外側の升が無い場合
                    if (outerPoints.length == 0 && lonelyPoints.length == 0) {
                        this.BugLog("空きがありません。");
                        return;
                    }

                    let putPoint = Point.New(0,0);
                    let isLonely = false;
                    if (outerPoints.length > 0) {
                            let i = rnd(outerPoints.length - 1);
                            putPoint = outerPoints[i].copy();
                    } else {
                        if (lonelyPoints.length > 0) {
                            let i = rnd(lonelyPoints.length - 1);
                            putPoint = lonelyPoints[i].copy();
                            isLonely = true;
                        }
                    }
                    this.board.cellSetter(putPoint,setKoma + 10);
                    // 孤独な駒でなければ、二つ目に封じさせないために封じの仮駒を置く
                    if ( j == 0 && !isLonely) {
                        this.boardHandSetBlock(putPoint);
                    } else {
                        this.boardHandClearBlock();
                    }
                }
                setKoma--;
                if (setKoma < 1) setKoma = 4;
            }
            
            this.isGameClear = false;
            this.isGameOver = false;
            this.isGamePlay = false;

            // ゲーム盤の初期状態を保存
            this.boardStart = new NumArray();
            this.boardStart.cellReset(this.boardSize,this.blankCode);
            for(let y = 0; y < this.boardSize; y++) {
                for(let x = 0; x < this.boardSize; x++) {
                    let point = Point.New(x,y);
                    this.boardStart.cellSetter(point,this.board.cellGetter(point));
                }
            }

            this.hands = [];
            this.nowHandCount = -1;

        }

        private leftBlock : Point | null = null;
        private rightBlock : Point | null = null;

        /** 指定箇所の両サイドを封じる */
        public boardHandSetBlock(point : Point) : void {
            this.leftBlock = null;
            this.rightBlock = null;

            // 左
            let leftPoint = Point.New(point.x - 1,point.y);
            if (leftPoint.x >= 0) {
                if (this.board.cellGetter(leftPoint) == this.blankCode) {
                    this.board.cellSetter(leftPoint,this.blockCode);
                    this.leftBlock = leftPoint.copy();
                }
            }
            // 右
            let rightPoint = Point.New(point.x + 1,point.y);
            if (rightPoint.x < this.boardSize) {
                if (this.board.cellGetter(rightPoint) == this.blankCode) {
                    this.board.cellSetter(rightPoint,this.blockCode);
                    this.rightBlock = rightPoint.copy();
                }
            }
        }

        /** 封じ駒を消す */
        public boardHandClearBlock() : void {
            if (this.leftBlock != null) {
                this.board.cellSetter(this.leftBlock,this.blankCode);
            }
            if (this.rightBlock != null) {
                this.board.cellSetter(this.rightBlock,this.blankCode);
            }
            this.leftBlock = null;
            this.rightBlock = null;
        }

        /** 外側・孤独な駒を選択駒に変換する */
        public SelectCellChanger(selected : number = 0) : void{
            let points = this.cellSearch(1,false);
            let lonelyPoints = this.cellSearch(0,false);
            let allPoints = points.concat(lonelyPoints);
            for(let i = 0; i < allPoints.length; i++) {
                let koma = this.board.cellGetter(allPoints[i]);
                if (selected == 0) {
                    if (this.isNomalCode(koma)) {
                        this.board.cellSetter(allPoints[i],this.ToChoiseCode(koma));
                        this.boardToCellsCopy(allPoints[i]);
                        continue;
                    }
                } else {
                    if (koma == selected) {
                        this.board.cellSetter(allPoints[i],this.ToChoiseCode(koma));
                        this.boardToCellsCopy(allPoints[i]);
                        continue;
                    }
                }
            }
        }

        /** 選択駒・選択済み駒を初期化する */
        public SelectCellClear() : void {
            for(let y = 0; y < this.boardSize; y++) {
                for(let x = 0; x < this.boardSize; x++) {
                    let point = Point.New(x,y);
                    let koma = this.board.cellGetter(point);
                    this.board.cellSetter(point,this.ToNomalCode(koma));
                    this.boardToCellsCopy(point);
                }
            }
        }


        /** ゲームリセット そのレベル・ステージなどの初期化 */
        public boardReset() : void {
            // ゲーム盤の初期化
            this.board.cellReset(this.boardSize,10);

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
            let c = this.board.cellGetter(boardPoint);
            this.cells.cellSetter(cellsPoint,c);         
        }

        /** ボードから指定アドレスのみ転送 */
        public boardToCellsAddressCopy = (address : number) : void => this.boardToCellsCopy(this.board.cellPoint(address));

        /** ボードの外側・孤独な駒を抽出する */
        public boardOuterCodes = () : number[] => {
            let outerPoints = this.cellSearch(1,false);
            let lonelyPoints = this.cellSearch(0,false);
            let points = outerPoints.concat(lonelyPoints);
            let results : number[] = [];
            for(let i = 0; i < points.length; i++) {
                let code = this.board.cellGetter(points[i]);
                results.push(this.ToNomalCode(code));
            }
            return results;
        }


        /** 駒のペアをカウントする */
        public pearCounter = () : pearCounterType => {
            let result : pearCounterType = {
                pear: 0,
                noPear: 0
            }
            let count = 0;
            let codes = this.boardOuterCodes();
            let codeArray = new ObjArray();
            for(let i = 0; i < codes.length; i++) {
                codeArray.items.push(new Obj(codes[i],"",false));
            }
            for(let i = 0; i < codeArray.items.length; i++) {
                if (codeArray.items[i].isChecked) continue;
                for(let j = 0; j < codeArray.items.length; j++) {
                    if (i == j) continue;
                    if (codeArray.items[j].isChecked) continue;
                    if (codeArray.items[i].code == codeArray.items[j].code) {
                        codeArray.items[i].isChecked = true;
                        codeArray.items[j].isChecked = true;
                        count++;
                        break;
                    }
                }
            }
            result.pear = count;
            for(let i = 0; i < codeArray.items.length; i++) {
                if (!codeArray.items[i].isChecked) {
                    result.noPear++;
                }
            }
            return result;
        }

        /** 手が有効であるかどうか */
        public boardHandCheck(hand : IHand) : boolean {
            if (hand.point01.x < 0 || hand.point01.x >= this.boardSize) return false;
            if (hand.point01.y < 0 || hand.point01.y >= this.boardSize) return false;
            if (hand.point02.x < 0 || hand.point02.x >= this.boardSize) return false;
            if (hand.point02.y < 0 || hand.point02.y >= this.boardSize) return false;
            if (!this.isNomalCode(hand.code01)) return false;
            if (!this.isNomalCode(hand.code02)) return false;
            if (this.ToNomalCode(this.board.cellGetter(hand.point01)) != hand.code01) return false;
            if (this.ToNomalCode(this.board.cellGetter(hand.point02)) != hand.code02) return false;
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

            return true;
        }

        /** デバッグ用 */
        private BugLog(str0 : string ) : void {
            let str : string = "[";
            for(let i = 0; i < this.hands.length; i++) {
                str += this.hands[i].code01 + ",";
            }
            str += "]";
            alert(str0 + " handCount:" + this.nowHandCount + " hands:" + this.hands.length + " " + str);
        }

        /** 手の反映 */
        public boardHandPaste(hand : IHand) : void {
            if (!this.boardHandCheck(hand)) {
                return;
            }   
            this.comboChecker(this.ToNomalCode(hand.code01));
            this.boardAndCellsSetter(hand.point01,this.blankCode);
            this.boardAndCellsSetter(hand.point02,this.blankCode);
        }

        /** 初手から指定の手まで進める */
        public boardHandMove(handNo : number) : void {
            this.boardReset();
            if (handNo >= 0) {
                for(let i = 0; i <= handNo; i++) {
                    this.boardHandPaste(this.hands[i]);
                }
                this.newHand = this.hands[handNo];
                this.nowCode = this.newHand.code01;
            } else {
                this.nowCode = 11;
            }
        }

        /** ボードの初期化 */
        public boardClear() : void {
            this.board.cellAllPaint(this.blankCode);
        }

        /** ゲーム終了判定 */
        private boardCheck() : void {
            // プレイ中で無ければ判定無し
            if (this.gameStep != GameStep.Play && this.gameStep != GameStep.PlayNext) return;

            /** 残りの駒を数える */
            /** 駒の数 */
            let countKoma = 0;
            /** カウント */
            for(let y = 0; y < this.boardSize; y++) {
                for(let x = 0; x < this.boardSize; x++) {
                    let c = this.board.cellGetter(Point.New(x,y));
                    if (c != this.blankCode) {
                        countKoma++;
                    }
                }
            }
            /** もう駒が無いならゲームクリアー */
            if (countKoma == 0) {
                this.isGamePlay = false;
                this.isGameClear = true;
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

            if (this.canDisplayCombo) {
                this.statusName[2] = "連携";
                this.status[2] = this.gameCombo;
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

        /** 連携点の処理 */
        public comboChecker(code : number) : void {
            if (this.comboCode == 0) {
                this.comboCode = code;
                return;
            }
            let nextCode = this.comboCode + 1;
            if (nextCode > 14) nextCode = 11;
            if (code == nextCode) {
                this.comboCode = nextCode;
                this.comboCount++;
                this.canDisplayCombo = true;
                this.gameCombo = 10 * (2 ** this.comboCount);
            } else {
                this.comboCode = code;
                this.comboCount = 0;
                this.gameCombo = 0;
                this.canDisplayCombo = false;
            }
        }

        /** 得点処理 */
        public pointChecker(addPoint : number) : void {
            this.gamePoint += addPoint;
            if (this.gamePoint > 0) {
                this.canDisplayPoint = true;;
                return;                 
            }
        }

        public toComment() : string {
            let result = "";
            result +="★ @TITLE@☆拾い ★\n";
            result +="@TITLE@の二駒を左右外側から選び、\n";
            result +="@TITLE@を順に拾え。\n";
            result +="\n";
            result += this.toKomaHelp();
            return titleChange(result);
        }
    }

    type pearCounterType = { pear : number, noPear : number}; 
    
}