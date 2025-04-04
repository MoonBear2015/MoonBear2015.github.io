"use strict";
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
var cellgame;
(function (cellgame) {
    /** セルゲームシステム ０１： */
    class CellGameSystem01 extends cellgame.CellGameSystem00 {
        constructor() {
            super();
            // game01 self
            this.gameLevel = 0;
            this.boardSize = 2;
            this.board = new cellgame.NumArray();
            this.boardPoint = new cellgame.Point(true);
            this.hands = [];
            this.blockPoints = [];
            this.startPoint = new cellgame.Point(true);
            this.canFreePotision = false;
            this.haveBlock = false;
            this.blockCount = 0;
            this.isEndless = false;
            this.nowCell = 0;
            this.isGameOver = false;
            this.isGameClear = false;
            this.isGamePlay = false;
            this.isPlayStarted = false;
            /** 背景色 */
            this.backColor = cellgame.Colors.DeepDarkGray;
            /** メッセージ表示位置 */
            this.messagePotision = () => Math.floor((this.boardSize + 4 - 6) / 2);
            this.init();
        }
        /** 初期化 */
        init() {
            this.statusName = ["", "", "", ""];
            this.status = [0, 0, 0, 0];
            this.gameLevel = 0;
            this.boardSize = 2;
            this.canFreePotision = false;
            this.cells.cellReset(6, 0);
        }
        /** セル選択
         * @param p : 選択桁位置
         */
        pointSelect(p) {
            if (this.gameStep == 2) {
                let x = p.x;
                let y = p.y;
                let c = this.cells.cellGetter(x, y);
                if (c == 20) {
                    let bx = x - this.boardPoint.x;
                    let by = y - this.boardPoint.y;
                    this.nowCell = this.codeLoop(this.nowCell, 1);
                    this.board.cellSetter(bx, by, this.nowCell);
                    this.boardToCellsSetter(bx, by);
                    this.hands.push(new cellgame.Hand(cellgame.addressCalc(bx, by, this.boardSize), this.nowCell));
                    this.selectCellSetter(bx, by);
                    this.isPlayStarted = true;
                    return;
                }
                if (c == 92) {
                    this.gameStep = 1;
                    return;
                }
                if (c == 93) {
                    alert(this.toComment());
                    return;
                }
            }
            if (this.gameStep == 5) {
                let c = this.cells.cellGetter(p.x, p.y);
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
                        this.boardMake();
                        this.statusName = ["", "", "", ""];
                        this.status = [0, 0, 0, 0];
                        if (this.gameLevel > 0) {
                            this.statusName[3] = "段位";
                            this.status[3] = this.gameLevel;
                        }
                        else {
                            this.statusName[3] = "";
                            this.status[3] = 0;
                        }
                        if (this.isEndless) {
                            this.statusName[0] = "無限";
                            this.status[0] = -1;
                        }
                        else {
                            this.statusName[0] = "";
                            this.status[0] = -1;
                        }
                        this.cellSize = this.boardSize + 4;
                        this.cells.cellReset(this.cellSize, 0);
                        this.cells.cellAllPaint(9);
                        this.boardPoint = this.cells.cellCenterHoleMaker(this.boardSize, 10);
                        this.boardToCellsAllSetter();
                        this.gameStep = 2;
                        this.isGamePlay = true;
                        // 再ボタン消去
                        this.cells.cellSetter(this.cellSize - 1, this.boardSize - 1, 9);
                        // 説ボタン設置
                        this.cells.cellSetter(0, this.cellSize - 1, 93);
                        break;
                    }
                /** ゲームプレイ */
                case 2:
                    {
                        if (!this.isGamePlay)
                            break;
                        this.messages = [];
                        if (this.isPlayStarted) {
                            // 再ボタン設置
                            this.cells.cellSetter(this.cellSize - 1, this.cellSize - 1, 92);
                        }
                        else {
                            this.messages.push(new cellgame.Message("士農工商を並べよ", this.messagePotision(), 0, cellgame.Colors.White, cellgame.Colors.Black));
                            // 再ボタン消去
                            this.cells.cellSetter(this.cellSize - 1, this.cellSize - 1, 9);
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
                        // 再ボタン消去
                        this.cells.cellSetter(this.cellSize - 1, this.cellSize - 1, 9);
                        this.isPlayStarted = false;
                        this.messages = [];
                        this.messages.push(new cellgame.Message(this.msgWinSelector(), this.messagePotision(), 0, cellgame.Colors.White, cellgame.Colors.Black, true));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** ゲームオーバー 表示*/
                case 4:
                    {
                        // 再ボタン消去
                        this.cells.cellSetter(this.cellSize - 1, this.cellSize - 1, 9);
                        this.isPlayStarted = false;
                        this.messages = [];
                        this.messages.push(new cellgame.Message(this.msgLoseSelector(), this.messagePotision(), 0, cellgame.Colors.Black, cellgame.Colors.Red, false));
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
        /** okボタン設定 */
        okButtonSetter() {
            let center = Math.floor(this.cellSize / 2);
            this.cells.cellSetter(center, this.cellSize - 1, 90);
        }
        /** ゲーム盤初期化 （レベル等初期値）*/
        boardInit() {
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
            this.board.cellReset(this.boardSize, 10);
            this.hands = [];
        }
        /** ゲーム枠の大きさを計算 */
        boardSizeCalc() {
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
                else {
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
            }
            else {
                this.isEndless = false;
            }
            let mod = this.gameLevel % 4;
            if (mod == 0) {
                this.canFreePotision = false;
                this.haveBlock = false;
                this.blockCount = 0;
            }
            else {
                if (mod == 1) {
                    this.canFreePotision = true;
                    this.haveBlock = false;
                    this.blockCount = 0;
                }
                else {
                    this.canFreePotision = true;
                    this.haveBlock = true;
                    this.blockCount = mod - 1;
                }
            }
            return;
        }
        /** ゲーム盤作成　設定済みレベルに応じて作成 */
        boardMake() {
            this.boardSizeCalc();
            this.board.cellReset(this.boardSize, 10);
            // 邪魔ブロック（端には置かない）
            this.blockPoints = [];
            if (this.haveBlock) {
                for (let i = 0; i < this.blockCount; i++) {
                    while (true) {
                        let x = cellgame.rnd(this.boardSize - 2) + 1;
                        let y = cellgame.rnd(this.boardSize - 2) + 1;
                        if (this.board.cellGetter(x, y) != 10) {
                            continue;
                        }
                        let point = new cellgame.Point(false, x, y);
                        this.blockPoints.push(point);
                        this.board.cellSetter(x, y, 9);
                        break;
                    }
                }
            }
            // スタート位置
            let x0 = 0;
            let y0 = 0;
            if (this.canFreePotision) {
                // 自由位置
                while (true) {
                    x0 = cellgame.rnd(this.boardSize);
                    y0 = cellgame.rnd(this.boardSize);
                    // 空きセルでなければやり直し
                    if (this.board.cellGetter(x0, y0) != 10) {
                        continue;
                    }
                    break;
                }
            }
            else {
                // 四つ角
                x0 = (this.boardSize - 1) * cellgame.rnd(2);
                y0 = (this.boardSize - 1) * cellgame.rnd(2);
            }
            this.startPoint = new cellgame.Point(false, x0, y0);
            this.nowCell = 11;
            this.board.cellSetter(x0, y0, this.nowCell);
            this.selectCellSetter(x0, y0);
            this.isGameClear = false;
            this.isGameOver = false;
            this.isGamePlay = false;
        }
        /** 選択箇所を作成（01専用）
         * @param x : 横位置
         * @param y : 縦位置
         */
        selectCellSetter(x, y) {
            // 初期化
            for (let y0 = 0; y0 < this.boardSize; y0++) {
                for (let x0 = 0; x0 < this.boardSize; x0++) {
                    let c = this.board.cellGetter(x0, y0);
                    if (c == 20) {
                        this.board.cellSetter(x0, y0, 10);
                    }
                }
            }
            // 設定
            for (let d = 0; d < 4; d++) {
                let xx = x + cellgame.Direction4s[d].x;
                let yy = y + cellgame.Direction4s[d].y;
                if (xx < 0 || xx >= this.boardSize)
                    continue;
                if (yy < 0 || yy >= this.boardSize)
                    continue;
                let c = this.board.cellGetter(xx, yy);
                if (c == 10) {
                    this.board.cellSetter(xx, yy, 20);
                }
            }
            this.boardToCellsAllSetter();
        }
        /** ゲームリセット そのレベル・ステージなどの初期化 */
        boardReset() {
            // ゲーム盤の初期化
            this.board.cellReset(this.boardSize, 10);
            // ブロックの再現
            for (let i = 0; i < this.blockPoints.length; i++) {
                let p = this.blockPoints[i];
                this.board.cellSetter(p.x, p.y, 9);
            }
            // 初期位置の再現
            let p = this.startPoint;
            this.nowCell = 11;
            this.board.cellSetter(p.x, p.y, this.nowCell);
            this.selectCellSetter(p.x, p.y);
            this.boardToCellsAllSetter();
        }
        /** ボードからセル情報への全ての転送 */
        boardToCellsAllSetter() {
            for (let i = 0; i < this.boardSize * this.boardSize; i++) {
                this.boardToCellsSelectAddressSetter(i);
            }
        }
        /** ボードから指定座標のみ転送 */
        boardToCellsSetter(x, y) {
            let address = cellgame.addressCalc(x, y, this.boardSize);
            this.boardToCellsSelectAddressSetter(address);
        }
        /** ボードから指定アドレスのみ転送 */
        boardToCellsSelectAddressSetter(boardAddress) {
            let point = cellgame.pointCalc(boardAddress, this.boardSize);
            let x = this.boardPoint.x + point.x;
            let y = this.boardPoint.y + point.y;
            this.cells.cellSetter(x, y, this.board.items[boardAddress]);
        }
        /** 手の反映 */
        boardHandPaste(hand) {
            this.board.items[hand.address] = hand.code;
            this.boardToCellsSelectAddressSetter(hand.address);
        }
        /** 初手から指定の手まで進める */
        boardHandMove(handNo) {
            this.boardReset();
            for (let i = 0; i <= handNo; i++) {
                this.boardHandPaste(this.hands[i]);
            }
        }
        /** ボードの初期化 */
        boardClear() {
            this.board.cellAllPaint(10);
        }
        /** ゲーム終了判定 */
        boardCheck() {
            if (this.gameStep != 2)
                return;
            /** 残りのセルを数える */
            /** 選択肢の数 */
            let count20 = 0;
            /** 空きセルの数 */
            let count10 = 0;
            /** カウント */
            for (let y = 0; y < this.boardSize; y++) {
                for (let x = 0; x < this.boardSize; x++) {
                    let c = this.board.cellGetter(x, y);
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
        toComment() {
            let result = "";
            result += "★ 士農工商 ★\n";
            result += "士農工商を順に配置し、\n";
            result += "士農工商で盤面を埋めて、\n";
            result += "士農工商の順列を学ぶのだ。\n";
            result += "尚、盤面に整合性は計られていない。\n";
            result += "無理な場合は'再'を選んでやり直せ。\n";
            result += "その場合の罰則は無い。\n";
            return result;
        }
    }
    cellgame.CellGameSystem01 = CellGameSystem01;
})(cellgame || (cellgame = {}));
