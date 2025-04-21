"use strict";
var cellgame;
(function (cellgame) {
    /** セルゲームシステム 共通項 */
    class CellGameSystem00 {
        /** コンストラクタ */
        constructor() {
            /** ゲーム名 */
            this.gameName = "骨";
            this.cellSize = 0;
            this.backColor = cellgame.Colors.Black;
            this.cells = new cellgame.NumArray();
            this.messages = [];
            this.statusName = [];
            this.statusNameIsVisible = [];
            this.status = [];
            this.statusIsVisible = [];
            this.gameStep = 0;
            /** 勝利メッセージ返却 */
            this.msgWinSelector = () => cellgame.msgPatterns[cellgame.rnd(10)];
            /**　敗北メッセージ返却 */
            this.msgLoseSelector = () => cellgame.msgPatterns[cellgame.rnd(10) + 10];
            /** 駒の説明 */
            this.toKomaHelp = () => {
                let result = cellgame.komas[100].name + "\n";
                for (let i = 11; i < 20; i++) {
                    if (cellgame.komas[i] === undefined)
                        continue;
                    result += cellgame.komas[i].toHelp() + "\n";
                }
                result += "\n";
                for (let i = 90; i < 100; i++) {
                    if (cellgame.komas[i] === undefined)
                        continue;
                    result += cellgame.komas[i].toHelp() + "\n";
                }
                return result;
            };
            this.statusName = Array(4).fill("");
            this.statusNameIsVisible = Array(4).fill(false);
            this.status = Array(4).fill(0);
            this.statusIsVisible = Array(4).fill(false);
            // 初期化
            this.init();
        }
        /** 初期化 */
        init() {
            this.cells.cellReset(0, 10);
        }
        /** ステータス初期化 */
        statusInit() {
            this.statusName = ["", "", "", ""];
            this.statusNameIsVisible = [false, false, false, false];
            this.status = [0, 0, 0, 0];
            this.statusIsVisible = [false, false, false, false];
        }
        /** タッチ箇所受信 */
        touchPointRecv(p) {
            if (p.x < 0 || p.x >= this.cellSize)
                return;
            if (p.y < 0 || p.y >= this.cellSize)
                return;
            this.pointSelect(p);
        }
        /** コードカウントアップ
         * @param code : 現在のコード
         * @returns 次のコード
        */
        codeCountUp(code) {
            let c = code;
            c++;
            while (true) {
                if (c >= cellgame.komas.length) {
                    c = 0;
                    break;
                }
                if (cellgame.komas[c] === undefined) {
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
        codeLoop(code, count) {
            let c = code;
            c += count;
            if (code < 20) {
                if (c < 11)
                    c = 14;
                if (c > 14)
                    c = 11;
                return c;
            }
            if (c < 21)
                c = 24;
            if (c > 24)
                c = 21;
            return c;
        }
        /** セル選択
         * @param point : 選択桁位置
         */
        pointSelect(point) {
            let a = this.cells.cellAddress(point);
            if (a < 0)
                return;
            let code = this.cells.cellGetter(point);
            code = this.codeCountUp(code);
            this.cells.cellSetter(point, code);
            return;
        }
        /**
         * 表示作成
         */
        displayMaker() {
            this.messages = [];
            // 仮
            this.messages.push(new cellgame.Message("メッセージ", 1, 0, cellgame.Colors.White, cellgame.Colors.Blue, true));
        }
    }
    cellgame.CellGameSystem00 = CellGameSystem00;
})(cellgame || (cellgame = {}));
