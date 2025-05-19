"use strict";
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
var cellgame;
(function (cellgame) {
    /** セルゲームシステム ０２： */
    class CellGameSystem02 extends cellgame.CellGameSystem00 {
        constructor() {
            super();
            /** ゲームID */
            this.gameId = "GAME02";
            /** ゲーム名 */
            this.gameName = "@TITLE@☆拾い";
            // game01 self
            /** 段位 */
            this.gameLevel = 0;
            /** 得点 */
            this.gamePoint = 0;
            /** 得点表示 */
            this.canDisplayPoint = false;
            /** ゲーム盤の大きさ */
            this.boardSize = 2;
            /** ゲーム盤 */
            this.board = new cellgame.NumArray();
            /** 画面に対するゲーム盤の位置 */
            this.boardCorner = new cellgame.Point(true);
            /** このゲームでの空き駒 */
            this.blankCode = 82;
            /** このゲームでの選択駒 */
            this.selectCode = 20;
            /** このゲームでの予約駒 */
            this.reserveCode = 10;
            /** 升を封じる駒 */
            this.blockCode = 10;
            /** 選択した駒 */
            this.selectedCode = 0;
            /** 選択した駒の位置 */
            this.selectedPoint = new cellgame.Point(true);
            /** 選択駒かどうかの判断 */
            this.isSelectCode = (code) => code == this.selectCode;
            /** 盤外の駒 */
            this.backCode = 82;
            /** 背景色 */
            // public backColor = () : string => komas[this.backCode].backColor;
            /** 駒の配置 */
            this.komas = new cellgame.HandArray();
            /** 手 */
            this.hands = [];
            /** 組数 */
            this.pearCount = 1;
            /** 無限モード */
            this.isEndless = false;
            /** 現在のコード */
            this.nowCode = 0;
            /** 現在の手数 */
            this.nowHandCount = 0;
            /** 現在の手 */
            this.newHand = new cellgame.Hand(cellgame.Point.New(0, 0), 0);
            /** ゲームオーバーの状態 */
            this.isGameOver = false;
            /** ゲームクリアの状態 */
            this.isGameClear = false;
            /** ゲームプレイ中 */
            this.isGamePlay = false;
            /** プレイ開始されている状態 */
            this.isPlayStarted = false;
            /** コードのループ */
            this.loopCodes = [11, 12, 13, 14];
            /** 了ボタンの位置 */
            this.pointOk = () => cellgame.Point.New(Math.floor(this.cellSize / 2), this.cellSize - 1);
            /** 却ボタンの位置 */
            this.pointCancel = () => cellgame.Point.New(this.cellSize - 1, 0);
            /** 戻ボタンの位置 */
            this.pointBack = () => cellgame.Point.New(0, this.cellSize - 1);
            /** 進ボタンの位置 */
            this.pointForward = () => cellgame.Point.New(this.cellSize - 1, this.cellSize - 1);
            /** そのセルが空き、もしくは盤外かどうか
             * @param nearPoint : セル座標
             * @return : true:空き、false:駒
             * */
            this.isBlankCell = (nearPoint) => {
                // 外なら空きと扱う
                if (nearPoint.x < 0 || nearPoint.x >= this.boardSize)
                    return true;
                if (nearPoint.y < 0 || nearPoint.y >= this.boardSize)
                    return true;
                let koma = this.board.cellGetter(nearPoint);
                // 空き駒なら空き
                if (koma == this.blankCode)
                    return true;
                // でなければ空きでは無い
                return false;
            };
            /**  外側のチェックを行う。他の駒の隣で左右に空きがないかをチェックする。上下はチェックしない。
            * 0:孤独 1:外側 2:内側
            */
            this.outerCheck = (checkPoint) => {
                let leftPoint = cellgame.Point.New(checkPoint.x - 1, checkPoint.y);
                let rightPoint = cellgame.Point.New(checkPoint.x + 1, checkPoint.y);
                let blankCount = 0;
                if (this.isBlankCell(leftPoint))
                    blankCount++;
                if (this.isBlankCell(rightPoint))
                    blankCount++;
                return 2 - blankCount;
            };
            /** 外側、内側に該当するセルを検索する。blankCount 0:孤独 1:外側 2:内側 isBlank: true:空きセル、false:駒
             * @param blankCount : 0:孤独 1:外側 2:内側
             * @param isBlank : true:空きセル、false:駒
             * @return : セル座標の配列
             * */
            this.cellSearch = (blankCount, isBlank) => {
                let result = [];
                for (let y = 0; y < this.boardSize; y++) {
                    for (let x = 0; x < this.boardSize; x++) {
                        let point = cellgame.Point.New(x, y);
                        let c = this.board.cellGetter(point);
                        if (c != this.blankCode && isBlank)
                            continue;
                        if (c == this.blankCode && !isBlank)
                            continue;
                        let o = this.outerCheck(point);
                        if (o == blankCount) {
                            result.push(point);
                        }
                    }
                }
                return result;
            };
            this.leftBlock = null;
            this.rightBlock = null;
            /** ボード座標 -> セル座標 */
            this.ToCellsPoint = (boardPoint) => cellgame.Point.Add(boardPoint, this.boardCorner);
            /** セル座標 -> ボード座標 */
            this.ToBoardPoint = (cellsPoint) => cellgame.Point.Sub(cellsPoint, this.boardCorner);
            /** ボードから指定アドレスのみ転送 */
            this.boardToCellsAddressCopy = (address) => this.boardToCellsCopy(this.board.cellPoint(address));
            this.init();
        }
        /** 初期化 */
        init() {
            this.statusInit();
            this.gameLevel = 0;
            this.boardSize = 2;
            this.pearCount = 1;
            this.cells.cellReset(6, 0);
        }
        /** メッセージ表示位置 */
        messagePotision() {
            let x = this.boardSize + 4 - 6;
            if (x < 2)
                return x;
            return Math.floor(x / 2);
        }
        /** セル選択
         * @param point : 選択桁位置
         */
        pointSelect(point) {
            let code = this.cells.cellGetter(point);
            let boardPoint = this.ToBoardPoint(point);
            if (this.gameStep == 2) {
                if (code >= 21 && code <= 24) {
                    this.isPlayStarted = true;
                    this.selectedCode = code - 10;
                    this.selectedPoint = boardPoint.copy();
                    this.SelectCellClear();
                    this.board.cellSetter(boardPoint, code + 20);
                    this.boardToCellsCopy(boardPoint);
                    this.statusDisplayer();
                    this.gameStep = 3;
                    return;
                }
                if (code == cellgame.buttonCancel) {
                    this.canDisplayPoint = true;
                    this.gameStep = 1;
                    return;
                }
                if (code == cellgame.buttonHelp) {
                    alert(this.toComment());
                    return;
                }
                if (code == cellgame.buttonBack) {
                    if (this.nowHandCount > -1) {
                        this.nowHandCount--;
                        this.boardHandMove(this.nowHandCount);
                    }
                    return;
                }
                if (code == cellgame.buttonForward) {
                    if (this.nowHandCount < this.hands.length - 1) {
                        this.nowHandCount += 1;
                        this.boardHandMove(this.nowHandCount);
                    }
                    return;
                }
            }
            if (this.gameStep == 3) {
                let boardPoint = this.ToBoardPoint(point);
                // 選択済み駒の場合、キャンセルとなる
                if (code - 20 == this.selectedCode) {
                    this.boardAndCellsSetter(boardPoint, code - 20);
                    this.SelectCellClear();
                    this.gameStep = 2;
                    return;
                }
                // 選択候補の駒の場合、それぞれ消去する
                if (code - 10 == this.selectedCode) {
                    this.boardAndCellsSetter(this.selectedPoint, this.blankCode);
                    this.boardAndCellsSetter(boardPoint, this.blankCode);
                    this.SelectCellClear();
                    this.gameStep = 2;
                    return;
                }
                if (code == cellgame.buttonOk) {
                    this.isGamePlay = false;
                    this.isGameClear = true;
                    this.gameStep = 4;
                    return;
                }
                if (code == cellgame.buttonCancel) {
                    this.isGamePlay = false;
                    this.isGameClear = false;
                    this.gameStep = 1;
                    return;
                }
            }
            if (this.gameStep == 5) {
                if (code == cellgame.buttonOk) {
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
        displayMaker() {
            switch (this.gameStep) {
                /** ゲームタイトル */
                case 0:
                    {
                        this.boardInit();
                        this.gameStep = 1;
                        break;
                    }
                /** ゲームスタート */
                case 1:
                    {
                        this.boardCreate();
                        this.statusDisplayer();
                        this.cellSize = this.boardSize + 4;
                        this.cells.cellReset(this.cellSize, 0);
                        this.cells.cellAllPaint(this.backCode);
                        this.boardCorner = this.cells.cellCenterHoleMaker(this.boardSize, this.blankCode);
                        this.boardToCellsAllSetter();
                        this.buttonSetter();
                        this.gameStep = 2;
                        this.isGamePlay = true;
                        break;
                    }
                /** ゲームプレイ */
                case 2:
                    {
                        if (!this.isGamePlay)
                            break;
                        this.messages = [];
                        this.buttonSetter();
                        if (!this.isPlayStarted) {
                            let startMessage = cellgame.titleChange("@TITLE@を拾え");
                            this.messages.push(new cellgame.Message(startMessage, this.messagePotision(), 1, cellgame.Colors.White, cellgame.Colors.Black));
                        }
                        this.statusDisplayer();
                        this.SelectCellChanger();
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
                /** 二コマ目選択待ち */
                case 3:
                    {
                        this.buttonSetter();
                        this.SelectCellChanger(this.selectedCode);
                        break;
                    }
                /** ゲームクリア 表示*/
                case 4:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;
                        this.messages = [];
                        this.messages.push(new cellgame.Message(this.msgWinSelector(), this.messagePotision(), 1, cellgame.Colors.White, cellgame.Colors.Black, true));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** ゲームオーバー 表示*/
                case 5:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;
                        this.messages = [];
                        this.messages.push(new cellgame.Message(this.msgLoseSelector(), this.messagePotision(), 1, cellgame.Colors.Black, cellgame.Colors.Red, false));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** 確認待ち */
                case 6:
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
        okButtonSetter(isDisplay = true) {
            this.cells.cellSetter(this.pointOk(), isDisplay ? cellgame.buttonOk : this.backCode);
        }
        /** 却ボタン設定 flase:消去 */
        cancelButtonSetter(isDisplay = true) {
            this.cells.cellSetter(this.pointCancel(), isDisplay ? cellgame.buttonCancel : this.backCode);
        }
        /** 却・戻・進 ボタン設置 flase:消去 */
        controllButtonSetter(isDisplay = true) {
            this.cells.cellSetter(this.pointBack(), (isDisplay && this.nowHandCount > -1) ? cellgame.buttonBack : this.backCode);
            this.cells.cellSetter(this.pointForward(), (isDisplay && this.nowHandCount < this.hands.length - 1) ? cellgame.buttonForward : this.backCode);
        }
        /** ボタン設置制御 */
        buttonSetter() {
            // 説ボタン設置
            this.cells.cellSetter(cellgame.Point.New(0, 0), cellgame.buttonHelp);
            switch (this.gameStep) {
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
                    }
                    else {
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
        boardInit() {
            this.gameLevel = 0;
            this.gamePoint = 0;
            this.canDisplayPoint = false;
            this.isEndless = false;
            this.nowCode = 0;
            this.isGameOver = false;
            this.isGameClear = false;
            this.isGamePlay = false;
            this.isPlayStarted = false;
            this.board.cellReset(this.boardSize, this.blankCode);
            this.hands = [];
        }
        /** ゲーム枠の大きさを計算 */
        boardSizeCalc() {
            // レベル＋1が駒の対の数
            this.pearCount = this.gameLevel + 2;
            // 余裕を持って1.5倍の駒数分の升を用意する
            // 駒数の平方根・切り上げを辺の長さとする
            let a = Math.sqrt(this.pearCount * 3);
            let b = Math.ceil(a);
            this.boardSize = b;
            this.isEndless = false;
            return;
        }
        /** ゲーム盤作成 設定済みレベルに応じて作成 */
        boardCreate() {
            this.gameLevel++;
            this.boardSizeCalc();
            // ボード初期化
            this.komas = new cellgame.HandArray();
            this.board = new cellgame.NumArray();
            this.board.cellReset(this.boardSize, this.blankCode);
            // 配置作成
            let setKoma = (this.gameLevel + 1) % 4 + 1;
            for (let i = 0; i < this.pearCount; i++) {
                for (let j = 0; j < 2; j++) {
                    // 外側の升を検索する
                    let outerPoints = this.cellSearch(1, true);
                    // 孤独な升を検索する
                    let lonelyPoints = this.cellSearch(0, true);
                    // 孤独な升、もしくは外側の升が無い場合
                    if (outerPoints.length == 0 && lonelyPoints.length == 0) {
                        this.BugLog("空きがありません。");
                        return;
                    }
                    let putPoint = cellgame.Point.New(0, 0);
                    let isLonely = false;
                    if (outerPoints.length > 0) {
                        let i = cellgame.rnd(outerPoints.length - 1);
                        putPoint = outerPoints[i].copy();
                    }
                    else {
                        if (lonelyPoints.length > 0) {
                            let i = cellgame.rnd(lonelyPoints.length - 1);
                            putPoint = lonelyPoints[i].copy();
                            isLonely = true;
                        }
                    }
                    this.board.cellSetter(putPoint, setKoma + 10);
                    this.komas.items.push(new cellgame.Hand(putPoint, setKoma + 10));
                    // 孤独な駒でなければ、二つ目に封じさせないために封じの仮駒を置く
                    if (j == 0 && !isLonely) {
                        this.boardHandSetBlock(putPoint);
                    }
                    else {
                        this.boardHandClearBlock();
                    }
                }
                setKoma--;
                if (setKoma < 1)
                    setKoma = 4;
            }
            this.isGameClear = false;
            this.isGameOver = false;
            this.isGamePlay = false;
            this.hands = [];
            this.nowHandCount = -1;
        }
        /** 指定箇所の両サイドを封じる */
        boardHandSetBlock(point) {
            this.leftBlock = null;
            this.rightBlock = null;
            // 左
            let leftPoint = cellgame.Point.New(point.x - 1, point.y);
            if (leftPoint.x >= 0) {
                if (this.board.cellGetter(leftPoint) == this.blankCode) {
                    this.board.cellSetter(leftPoint, this.blockCode);
                    this.leftBlock = leftPoint.copy();
                }
            }
            // 右
            let rightPoint = cellgame.Point.New(point.x + 1, point.y);
            if (rightPoint.x < this.boardSize) {
                if (this.board.cellGetter(rightPoint) == this.blankCode) {
                    this.board.cellSetter(rightPoint, this.blockCode);
                    this.rightBlock = rightPoint.copy();
                }
            }
        }
        /** 封じ駒を消す */
        boardHandClearBlock() {
            if (this.leftBlock != null) {
                this.board.cellSetter(this.leftBlock, this.blankCode);
            }
            if (this.rightBlock != null) {
                this.board.cellSetter(this.rightBlock, this.blankCode);
            }
            this.leftBlock = null;
            this.rightBlock = null;
        }
        /** 外側・孤独な駒を選択駒に変換する */
        SelectCellChanger(selected = 0) {
            let points = this.cellSearch(1, false);
            let lonelyPoints = this.cellSearch(0, false);
            let allPoints = points.concat(lonelyPoints);
            for (let i = 0; i < allPoints.length; i++) {
                let koma = this.board.cellGetter(allPoints[i]);
                if (selected == 0) {
                    if (koma > 10 && koma < 20) {
                        this.board.cellSetter(allPoints[i], koma + 10);
                        this.boardToCellsCopy(allPoints[i]);
                        continue;
                    }
                }
                else {
                    if (koma == selected) {
                        this.board.cellSetter(allPoints[i], koma + 10);
                        this.boardToCellsCopy(allPoints[i]);
                        continue;
                    }
                }
            }
        }
        /** 選択駒・選択済み駒を初期化する */
        SelectCellClear() {
            for (let y = 0; y < this.boardSize; y++) {
                for (let x = 0; x < this.boardSize; x++) {
                    let point = cellgame.Point.New(x, y);
                    let koma = this.board.cellGetter(point);
                    if (koma > 20 && koma < 30) {
                        this.board.cellSetter(point, koma - 10);
                        this.boardToCellsCopy(point);
                        continue;
                    }
                    if (koma > 30 && koma < 40) {
                        this.board.cellSetter(point, koma - 20);
                        this.boardToCellsCopy(point);
                        continue;
                    }
                }
            }
        }
        /** ゲームリセット そのレベル・ステージなどの初期化 */
        boardReset() {
            // ゲーム盤の初期化
            this.board.cellReset(this.boardSize, 10);
            this.boardToCellsAllSetter();
        }
        //** ゲーム盤と画面セルの同時セット */
        boardAndCellsSetter(boardPoint, code) {
            this.board.cellSetter(boardPoint, code);
            this.boardToCellsCopy(boardPoint);
        }
        /** ボードからセル情報への全ての転送 */
        boardToCellsAllSetter() {
            for (let i = 0; i < this.board.cellCount(); i++) {
                this.boardToCellsAddressCopy(i);
            }
        }
        /** ボードから指定座標のみ転送 */
        boardToCellsCopy(boardPoint) {
            let cellsPoint = this.ToCellsPoint(boardPoint);
            let c = this.board.cellGetter(boardPoint);
            this.cells.cellSetter(cellsPoint, c);
        }
        /** 手が有効であるかどうか */
        boardHandCheck(hand) {
            if (this.cells.cellGetter(hand.point) != 20)
                return false;
            return true;
        }
        /** 手の追加 */
        boardHandPush(hand) {
            if (!this.boardHandCheck(hand))
                return false;
            this.boardHandPaste(hand);
            this.nowHandCount++;
            let str = "";
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
        BugLog(str0) {
            let str = "[";
            for (let i = 0; i < this.hands.length; i++) {
                str += this.hands[i].code + ",";
            }
            str += "]";
            alert(str0 + " handCount:" + this.nowHandCount + " hands:" + this.hands.length + " " + str);
        }
        /** 手の反映 */
        boardHandPaste(hand) {
            let boardPoint = this.ToBoardPoint(hand.point);
            this.boardAndCellsSetter(boardPoint, hand.code);
        }
        /** 初手から指定の手まで進める */
        boardHandMove(handNo) {
            this.boardReset();
            if (handNo >= 0) {
                for (let i = 0; i <= handNo; i++) {
                    this.boardHandPaste(this.hands[i]);
                }
                this.newHand = this.hands[handNo];
                this.nowCode = this.newHand.code;
            }
            else {
                this.nowCode = 11;
            }
        }
        /** ボードの初期化 */
        boardClear() {
            this.board.cellAllPaint(this.blankCode);
        }
        /** ゲーム終了判定 */
        boardCheck() {
            if (this.gameStep != 2)
                return;
            /** 残りの駒を数える */
            /** 駒の数 */
            let countKoma = 0;
            /** カウント */
            for (let y = 0; y < this.boardSize; y++) {
                for (let x = 0; x < this.boardSize; x++) {
                    let c = this.board.cellGetter(cellgame.Point.New(x, y));
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
        statusDisplayer() {
            this.statusInit();
            if (this.gameLevel > 0) {
                this.statusName[0] = "段位";
                this.status[0] = this.gameLevel;
                this.statusNameIsVisible[0] = true;
                this.statusIsVisible[0] = true;
            }
            else {
                this.statusNameIsVisible[0] = false;
                this.statusIsVisible[0] = false;
            }
            if (this.isEndless) {
                this.statusName[1] = "無限";
                this.statusNameIsVisible[1] = true;
                this.statusIsVisible[1] = false;
            }
            else {
                this.statusNameIsVisible[1] = false;
                this.statusIsVisible[1] = false;
            }
            if (this.canDisplayPoint) {
                this.statusName[3] = "得点";
                this.status[3] = this.gamePoint;
                this.statusNameIsVisible[3] = true;
                this.statusIsVisible[3] = true;
            }
            else {
                this.statusNameIsVisible[3] = false;
                this.statusIsVisible[3] = false;
            }
        }
        toComment() {
            let result = "";
            result += "★ @TITLE@☆拾い ★\n";
            result += "@TITLE@の二駒を外側から選び、\n";
            result += "@TITLE@を順に拾え。\n";
            result += "\n";
            result += "却：盤面の却下\n";
            result += "戻：手を戻す\n";
            result += "進：手を進める\n";
            return result;
        }
    }
    cellgame.CellGameSystem02 = CellGameSystem02;
})(cellgame || (cellgame = {}));
