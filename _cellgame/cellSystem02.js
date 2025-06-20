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
        // /** コードのループ */
        // public loopCodes : number[] = [11,12,13,14];
        constructor() {
            super();
            /** ゲームID */
            this.gameId = "GAME02";
            /** ゲーム名 */
            this.gameName = "@TITLE@☆拾い";
            // game01 self
            /** 段位 */
            this.gameLevel = 0;
            /** 連携 */
            this.gameCombo = 0;
            /** 連携点表示 */
            this.canDisplayCombo = false;
            /** 連携数 */
            this.comboCount = 0;
            /** 連携番号 */
            this.comboCode = 0;
            /** 得点 */
            this.gamePoint = 0;
            /** 得点表示 */
            this.canDisplayPoint = false;
            /** ゲーム盤の大きさ */
            this.boardSize = 2;
            /** ゲーム盤 */
            this.board = new cellgame.NumArray();
            /** ゲーム盤の初期状態 */
            this.boardStart = new cellgame.NumArray();
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
            this.isChoiseCode = (code) => code >= 21 && code <= 24;
            /** 予約駒 */
            this.isReserveCode = (code) => code >= 41 && code <= 44;
            /** 通常駒 */
            this.isNomalCode = (code) => code >= 11 && code <= 14;
            /** 予約駒→通常 */
            this.ReserveToNomal = (code) => code - 30;
            /** 選択→予約 */
            this.ChoiseToReserve = (code) => code + 20;
            /** 選択→通常 */
            this.ChoiseToNomal = (code) => code - 10;
            /** 通常→選択 */
            this.NomalToChoise = (code) => code + 10;
            /** → 通常駒 */
            this.ToNomalCode = (code) => {
                if (this.isChoiseCode(code))
                    return this.ChoiseToNomal(code);
                if (this.isReserveCode(code))
                    return this.ReserveToNomal(code);
                if (this.isNomalCode(code))
                    return code;
                return code;
            };
            /** → 予約駒 */
            this.ToReserveCode = (code) => {
                if (this.isChoiseCode(code))
                    return this.ChoiseToReserve(code);
                if (this.isReserveCode(code))
                    return code;
                if (this.isNomalCode(code))
                    return this.NomalToChoise(code);
                return code;
            };
            /** → 選択駒 */
            this.ToChoiseCode = (code) => {
                if (this.isChoiseCode(code))
                    return code;
                if (this.isReserveCode(code))
                    return this.ReserveToNomal(code);
                if (this.isNomalCode(code))
                    return this.NomalToChoise(code);
                return code;
            };
            /** 盤外の駒 */
            this.backCode = 82;
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
            /** 了ボタンの位置 */
            this.pointOk = () => cellgame.Point.New(Math.floor(this.cellSize / 2), this.cellSize - 1);
            /** 却ボタンの位置 */
            this.pointLost = () => cellgame.Point.New(this.cellSize - 1, 0);
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
            /** ボードの外側・孤独な駒を抽出する */
            this.boardOuterCodes = () => {
                let outerPoints = this.cellSearch(1, false);
                let lonelyPoints = this.cellSearch(0, false);
                let points = outerPoints.concat(lonelyPoints);
                let results = [];
                for (let i = 0; i < points.length; i++) {
                    let code = this.board.cellGetter(points[i]);
                    results.push(this.ToNomalCode(code));
                }
                return results;
            };
            /** 駒のペアをカウントする */
            this.pearCounter = () => {
                let result = {
                    pear: 0,
                    noPear: 0
                };
                let count = 0;
                let codes = this.boardOuterCodes();
                let codeArray = new cellgame.ObjArray();
                for (let i = 0; i < codes.length; i++) {
                    codeArray.items.push(new cellgame.Obj(codes[i], "", false));
                }
                for (let i = 0; i < codeArray.items.length; i++) {
                    if (codeArray.items[i].isChecked)
                        continue;
                    for (let j = 0; j < codeArray.items.length; j++) {
                        if (i == j)
                            continue;
                        if (codeArray.items[j].isChecked)
                            continue;
                        if (codeArray.items[i].code == codeArray.items[j].code) {
                            codeArray.items[i].isChecked = true;
                            codeArray.items[j].isChecked = true;
                            count++;
                            break;
                        }
                    }
                }
                result.pear = count;
                for (let i = 0; i < codeArray.items.length; i++) {
                    if (!codeArray.items[i].isChecked) {
                        result.noPear++;
                    }
                }
                return result;
            };
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
            if (code == cellgame.buttonBack) {
                if (this.nowHandCount > -1) {
                    this.nowHandCount--;
                    this.boardHandMove(this.nowHandCount);
                    this.gameStep = cellgame.GameStep.Play;
                }
                return;
            }
            if (code == cellgame.buttonForward) {
                if (this.nowHandCount < this.hands.length - 1) {
                    this.nowHandCount += 1;
                    this.boardHandMove(this.nowHandCount);
                    this.gameStep = cellgame.GameStep.Play;
                }
                return;
            }
            if (code == cellgame.buttonHelp) {
                alert(this.toComment());
                return;
            }
            if (this.gameStep == cellgame.GameStep.Play) {
                if (this.isChoiseCode(code)) {
                    this.isPlayStarted = true;
                    this.selectedCode = this.ToNomalCode(code);
                    this.selectedPoint = boardPoint.copy();
                    this.SelectCellClear();
                    this.board.cellSetter(boardPoint, this.ToReserveCode(code));
                    this.boardToCellsCopy(boardPoint);
                    this.statusDisplayer();
                    this.gameStep = cellgame.GameStep.PlayNext;
                    return;
                }
                if (code == cellgame.buttonLost) {
                    this.canDisplayPoint = true;
                    this.gameStep = cellgame.GameStep.Start;
                    return;
                }
            }
            if (this.gameStep == cellgame.GameStep.PlayNext) {
                let boardPoint = this.ToBoardPoint(point);
                // 選択済み駒の場合、キャンセルとなる
                if (this.isReserveCode(code) && this.ToNomalCode(code) == this.selectedCode) {
                    this.boardAndCellsSetter(boardPoint, this.ToNomalCode(code));
                    this.SelectCellClear();
                    this.gameStep = cellgame.GameStep.Play;
                    return;
                }
                // 選択候補の駒の場合、それぞれ消去する
                if (this.isChoiseCode(code) && this.ToNomalCode(code) == this.selectedCode) {
                    let newHand = new cellgame.Hand(this.selectedPoint.copy(), this.selectedCode, boardPoint.copy(), this.ToNomalCode(code));
                    let flg = this.boardHandPush(newHand);
                    if (!flg) {
                        alert("手が無効です。");
                        return;
                    }
                    this.SelectCellClear();
                    this.gameStep = cellgame.GameStep.Play;
                    return;
                }
                if (code == cellgame.buttonOk) {
                    this.isGamePlay = false;
                    this.isGameClear = true;
                    this.gameStep = cellgame.GameStep.Wait;
                    return;
                }
                if (code == cellgame.buttonLost) {
                    this.isGamePlay = false;
                    this.isGameClear = false;
                    this.gameStep = cellgame.GameStep.Wait;
                    return;
                }
            }
            if (this.gameStep == cellgame.GameStep.Wait) {
                if (code == cellgame.buttonOk) {
                    if (this.isGameClear) {
                        this.gameStep = cellgame.GameStep.Start;
                        this.gamePoint += this.gameCombo;
                        this.canDisplayPoint = true;
                        this.gameLevel++;
                        return;
                    }
                    if (this.isGameOver) {
                        this.gameStep = cellgame.GameStep.Start;
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
                case cellgame.GameStep.Title:
                    {
                        this.boardInit();
                        this.gameStep = cellgame.GameStep.Start;
                        break;
                    }
                /** ゲームスタート */
                case cellgame.GameStep.Start:
                    {
                        this.boardCreate();
                        this.boardRestart();
                        this.statusDisplayer();
                        this.cellSize = this.boardSize + 4;
                        this.cells.cellReset(this.cellSize, 0);
                        this.cells.cellAllPaint(this.backCode);
                        this.boardCorner = this.cells.cellCenterHoleMaker(this.boardSize, this.blankCode);
                        this.boardToCellsAllSetter();
                        this.buttonSetter();
                        this.gameStep = cellgame.GameStep.Play;
                        this.isGamePlay = true;
                        break;
                    }
                /** ゲームプレイ */
                case cellgame.GameStep.Play:
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
                            this.gameStep = cellgame.GameStep.Clear;
                            break;
                        }
                        if (this.isGameOver) {
                            this.gameStep = cellgame.GameStep.Over;
                            break;
                        }
                        break;
                    }
                /** 二コマ目選択待ち */
                case cellgame.GameStep.PlayNext:
                    {
                        this.buttonSetter();
                        this.SelectCellChanger(this.selectedCode);
                        break;
                    }
                /** ゲームクリア 表示*/
                case cellgame.GameStep.Clear:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;
                        this.messages = [];
                        this.messages.push(new cellgame.Message(this.msgWinSelector(), this.messagePotision(), 1, cellgame.Colors.White, cellgame.Colors.Black, true));
                        this.okButtonSetter();
                        this.gameStep = cellgame.GameStep.Wait;
                        break;
                    }
                /** ゲームオーバー 表示*/
                case cellgame.GameStep.Over:
                    {
                        this.buttonSetter();
                        this.isPlayStarted = false;
                        this.messages = [];
                        this.messages.push(new cellgame.Message(this.msgLoseSelector(), this.messagePotision(), 1, cellgame.Colors.Black, cellgame.Colors.Red, false));
                        this.okButtonSetter();
                        this.gameStep = cellgame.GameStep.Wait;
                        break;
                    }
                /** 確認待ち */
                case cellgame.GameStep.Wait:
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
        lostButtonSetter(isDisplay = true) {
            this.cells.cellSetter(this.pointLost(), isDisplay ? cellgame.buttonLost : this.backCode);
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
                case cellgame.GameStep.Start:
                    break;
                case cellgame.GameStep.Play:
                case cellgame.GameStep.PlayNext:
                    // ok ボタン消去
                    this.okButtonSetter(false);
                    // 却ボタン設置
                    this.lostButtonSetter();
                    if (this.isPlayStarted) {
                        // 却・戻・進 ボタン設置
                        this.controllButtonSetter();
                    }
                    else {
                        // 却・戻・進 ボタン消去
                        this.controllButtonSetter(false);
                    }
                    break;
                case cellgame.GameStep.Clear:
                case cellgame.GameStep.Over:
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
            let level = this.gameLevel;
            if (level >= 8) {
                level = 8;
                this.isEndless = true;
            }
            else {
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
        /** ゲーム盤作成 設定済みレベルに応じて作成 */
        boardCreate() {
            this.boardSizeCalc();
            // ボード初期化
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
            // ゲーム盤の初期状態を保存
            this.boardStart = new cellgame.NumArray();
            this.boardStart.cellReset(this.boardSize, this.blankCode);
            for (let y = 0; y < this.boardSize; y++) {
                for (let x = 0; x < this.boardSize; x++) {
                    let point = cellgame.Point.New(x, y);
                    this.boardStart.cellSetter(point, this.board.cellGetter(point));
                }
            }
            // 指し手を初期化
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
                    if (this.isNomalCode(koma)) {
                        this.board.cellSetter(allPoints[i], this.ToChoiseCode(koma));
                        this.boardToCellsCopy(allPoints[i]);
                        continue;
                    }
                }
                else {
                    if (koma == selected) {
                        this.board.cellSetter(allPoints[i], this.ToChoiseCode(koma));
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
                    this.board.cellSetter(point, this.ToNomalCode(koma));
                    this.boardToCellsCopy(point);
                }
            }
        }
        /** ゲームリセット そのレベル・ステージなどの初期化 */
        boardReset() {
            // ゲーム盤の初期化
            this.board.cellReset(this.boardSize, this.blankCode);
            this.boardToCellsAllSetter();
        }
        /** ゲームを初期状態に戻す リセット処理込み */
        boardRestart() {
            // ゲーム盤の初期化
            this.board.cellReset(this.boardSize, this.blankCode);
            // ゲーム盤の初期状態を復元
            for (let y = 0; y < this.boardSize; y++) {
                for (let x = 0; x < this.boardSize; x++) {
                    let point = cellgame.Point.New(x, y);
                    let code = this.boardStart.cellGetter(point);
                    this.board.cellSetter(point, code);
                }
            }
            this.boardToCellsAllSetter();
            this.isGamePlay = false;
            this.isGameClear = false;
            this.isGameOver = false;
            // 連携点の初期化
            this.comboCode = 0;
            this.comboCount = 0;
            this.canDisplayCombo = false;
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
            if (hand.point01.x < 0 || hand.point01.x >= this.boardSize)
                return false;
            if (hand.point01.y < 0 || hand.point01.y >= this.boardSize)
                return false;
            if (hand.point02.x < 0 || hand.point02.x >= this.boardSize)
                return false;
            if (hand.point02.y < 0 || hand.point02.y >= this.boardSize)
                return false;
            if (!this.isNomalCode(hand.code01))
                return false;
            if (!this.isNomalCode(hand.code02))
                return false;
            if (this.ToNomalCode(this.board.cellGetter(hand.point01)) != hand.code01)
                return false;
            if (this.ToNomalCode(this.board.cellGetter(hand.point02)) != hand.code02)
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
                str += this.hands[i].code01 + ",";
            }
            str += "]";
            alert(str0 + " handCount:" + this.nowHandCount + " hands:" + this.hands.length + " " + str);
        }
        /** 手の反映 */
        boardHandPaste(hand) {
            if (!this.boardHandCheck(hand)) {
                return;
            }
            this.comboChecker(this.ToNomalCode(hand.code01));
            this.boardAndCellsSetter(hand.point01, this.blankCode);
            this.boardAndCellsSetter(hand.point02, this.blankCode);
        }
        /** 初手から指定の手まで進める */
        boardHandMove(handNo) {
            this.boardReset();
            this.boardRestart();
            this.isGamePlay = true;
            if (handNo >= 0) {
                for (let i = 0; i <= handNo; i++) {
                    this.boardHandPaste(this.hands[i]);
                }
                this.newHand = this.hands[handNo];
            }
        }
        /** ボードの初期化 */
        boardClear() {
            this.board.cellAllPaint(this.blankCode);
        }
        /** ゲーム終了判定 */
        boardCheck() {
            // プレイ中で無ければ判定無し
            if (this.gameStep != cellgame.GameStep.Play && this.gameStep != cellgame.GameStep.PlayNext)
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
            if (this.canDisplayCombo) {
                this.statusName[2] = "連携";
                this.status[2] = this.gameCombo;
                this.statusNameIsVisible[2] = true;
                this.statusIsVisible[2] = true;
            }
            else {
                this.statusNameIsVisible[2] = false;
                this.statusIsVisible[2] = false;
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
        /** 連携点の処理 */
        comboChecker(code) {
            if (this.comboCode == 0) {
                this.comboCode = code;
                return;
            }
            let nextCode = this.comboCode + 1;
            if (nextCode > 14)
                nextCode = 11;
            if (code == nextCode) {
                this.comboCode = nextCode;
                this.comboCount++;
                this.canDisplayCombo = true;
                this.gameCombo = 10 * (2 ** this.comboCount);
            }
            else {
                this.comboCode = code;
                this.comboCount = 0;
                this.gameCombo = 0;
                this.canDisplayCombo = false;
            }
        }
        /** 得点処理 */
        pointChecker(addPoint) {
            this.gamePoint += addPoint;
            if (this.gamePoint > 0) {
                this.canDisplayPoint = true;
                ;
                return;
            }
        }
        toComment() {
            let result = "";
            result += "★ @TITLE@☆拾い ★\n";
            result += "@TITLE@の二駒を左右外側から選び、\n";
            result += "@TITLE@を順に拾え。\n";
            result += "\n";
            result += this.toKomaHelp();
            return cellgame.titleChange(result);
        }
    }
    cellgame.CellGameSystem02 = CellGameSystem02;
})(cellgame || (cellgame = {}));
