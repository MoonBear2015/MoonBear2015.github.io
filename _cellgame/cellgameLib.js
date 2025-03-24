"use strict";
/// <reference path="cellgameSub.ts" />
var cellgame;
(function (cellgame) {
    /** Cell設定 */
    cellgame.cells = [];
    cellgame.msgPatterns = [];
    /** Message パターン */
    cellgame.msgPatterns00 = [];
    cellgame.msgPatterns01 = [];
    cellgame.msgPatterns02 = [];
    function cellsInit() {
        cellgame.cells00 = [];
        cellgame.cells00[0] = new Cell(0, "　", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells00[1] = new Cell(1, "　", "赤壁", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells00[2] = new Cell(2, "　", "新緑", cellgame.Colors.White, cellgame.Colors.Green);
        cellgame.cells00[3] = new Cell(3, "　", "辛子", cellgame.Colors.White, cellgame.Colors.Yellow);
        cellgame.cells00[4] = new Cell(4, "　", "青々", cellgame.Colors.White, cellgame.Colors.Blue);
        cellgame.cells00[5] = new Cell(5, "　", "紫煙", cellgame.Colors.White, cellgame.Colors.Magenta);
        cellgame.cells00[6] = new Cell(6, "　", "水面", cellgame.Colors.White, cellgame.Colors.Cyan);
        cellgame.cells00[7] = new Cell(7, "　", "白塗", cellgame.Colors.White, cellgame.Colors.White);
        cellgame.cells00[8] = new Cell(8, "　", "灰被", cellgame.Colors.White, cellgame.Colors.Gray);
        cellgame.cells00[9] = new Cell(9, "　", "暗雲", cellgame.Colors.White, cellgame.Colors.DeepDarkGray);
        cellgame.cells00[10] = new Cell(10, "　", "空き", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells00[11] = new Cell(11, "士", "武士", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells00[12] = new Cell(12, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.cells00[13] = new Cell(13, "工", "職人", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.cells00[14] = new Cell(14, "商", "商人", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.cells00[20] = new Cell(20, "　", "空き:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.cells00[21] = new Cell(21, "士", "武士:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.cells00[22] = new Cell(22, "農", "農民:明滅", cellgame.Colors.White, cellgame.Colors.DarkOrange, true);
        cellgame.cells00[23] = new Cell(23, "工", "職人:明滅", cellgame.Colors.White, cellgame.Colors.DarkBlue, true);
        cellgame.cells00[24] = new Cell(24, "商", "商人:明滅", cellgame.Colors.White, cellgame.Colors.DarkGreen, true);
        cellgame.cells00[90] = new Cell(90, "了", "了解:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.cells00[91] = new Cell(91, "否", "否定:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.cells00[92] = new Cell(92, "再", "再考:明滅", cellgame.Colors.Black, cellgame.Colors.Yellow, true);
        cellgame.cells00[93] = new Cell(93, "説", "説明:明滅", cellgame.Colors.Black, cellgame.Colors.White, false);
        cellgame.msgPatterns00 = [];
        cellgame.msgPatterns00[0] = "　よくやった！　";
        cellgame.msgPatterns00[1] = "　　いいぞ！　　";
        cellgame.msgPatterns00[2] = "　でかした！！　";
        cellgame.msgPatterns00[3] = "　さすがだ！！　";
        cellgame.msgPatterns00[4] = "　おみごと！！　";
        cellgame.msgPatterns00[5] = "　　すごい！　　";
        cellgame.msgPatterns00[6] = "　すばらしい！　";
        cellgame.msgPatterns00[7] = "そのちょうしだ！";
        cellgame.msgPatterns00[8] = "　　やった！　　";
        cellgame.msgPatterns00[9] = "　ごうかく！！　";
        cellgame.msgPatterns00[10] = "　　だめだ！　　";
        cellgame.msgPatterns00[11] = "　ざんねん！！　";
        cellgame.msgPatterns00[12] = "　しっぱいだ！　";
        cellgame.msgPatterns00[13] = "　もういちど！　";
        cellgame.msgPatterns00[14] = "　やりなおせ！　";
        cellgame.msgPatterns00[15] = "もういっかい！！";
        cellgame.msgPatterns00[16] = "　ふごうかく！　";
        cellgame.msgPatterns00[17] = "　　だめ！！　　";
        cellgame.msgPatterns00[18] = "　あーあ・・・　";
        cellgame.msgPatterns00[19] = "やれやれ・・・・";
        /** Cell 規定値 01 */
        cellgame.cells01 = [];
        cellgame.cells01[0] = new Cell(0, "　", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells01[1] = new Cell(1, "　", "赤壁", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells01[2] = new Cell(2, "　", "新緑", cellgame.Colors.White, cellgame.Colors.Green);
        cellgame.cells01[3] = new Cell(3, "　", "辛子", cellgame.Colors.White, cellgame.Colors.Yellow);
        cellgame.cells01[4] = new Cell(4, "　", "青々", cellgame.Colors.White, cellgame.Colors.Blue);
        cellgame.cells01[5] = new Cell(5, "　", "紫煙", cellgame.Colors.White, cellgame.Colors.Magenta);
        cellgame.cells01[6] = new Cell(6, "　", "水面", cellgame.Colors.White, cellgame.Colors.Cyan);
        cellgame.cells01[7] = new Cell(7, "　", "白塗", cellgame.Colors.White, cellgame.Colors.White);
        cellgame.cells01[8] = new Cell(8, "　", "灰被", cellgame.Colors.White, cellgame.Colors.Gray);
        cellgame.cells01[9] = new Cell(9, "　", "暗雲", cellgame.Colors.White, cellgame.Colors.DeepDarkGray);
        cellgame.cells01[10] = new Cell(10, "　", "空き", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells01[11] = new Cell(11, "武", "武士", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells01[12] = new Cell(12, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.cells01[13] = new Cell(13, "匠", "匠", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.cells01[14] = new Cell(14, "売", "売人", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.cells01[20] = new Cell(20, "　", "空き:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.cells01[21] = new Cell(21, "武", "武士:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.cells01[22] = new Cell(22, "農", "農民:明滅", cellgame.Colors.White, cellgame.Colors.DarkOrange, true);
        cellgame.cells01[23] = new Cell(23, "匠", "匠:明滅", cellgame.Colors.White, cellgame.Colors.DarkBlue, true);
        cellgame.cells01[24] = new Cell(24, "売", "売人:明滅", cellgame.Colors.White, cellgame.Colors.DarkGreen, true);
        cellgame.cells01[90] = new Cell(90, "了", "了解:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.cells01[91] = new Cell(91, "否", "否定:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.cells01[92] = new Cell(92, "再", "再考:明滅", cellgame.Colors.Black, cellgame.Colors.Yellow, true);
        cellgame.cells01[92] = new Cell(93, "説", "説明:明滅", cellgame.Colors.Black, cellgame.Colors.White, false);
        cellgame.msgPatterns01 = [];
        cellgame.msgPatterns01[0] = "　　偉いぞ！　　";
        cellgame.msgPatterns01[1] = "　　合格だ！　　";
        cellgame.msgPatterns01[2] = "　　お見事！　　";
        cellgame.msgPatterns01[3] = "　　流石だ！　　";
        cellgame.msgPatterns01[4] = "　　天晴れ！　　";
        cellgame.msgPatterns01[5] = "　素晴らしい！　";
        cellgame.msgPatterns01[6] = "　お目出度う！　";
        cellgame.msgPatterns01[7] = "　その調子だ！　";
        cellgame.msgPatterns01[8] = "　　成功！！　　";
        cellgame.msgPatterns01[9] = "　　合格！！　　";
        cellgame.msgPatterns01[10] = "　　失敗だ！　　";
        cellgame.msgPatterns01[11] = "　　残念！！　　";
        cellgame.msgPatterns01[12] = "　もう一度！！　";
        cellgame.msgPatterns01[13] = "　やり直せ！！　";
        cellgame.msgPatterns01[14] = "　　不合格！　　";
        cellgame.msgPatterns01[15] = "　　失格！！　　";
        cellgame.msgPatterns01[16] = "　　駄目だ！　　";
        cellgame.msgPatterns01[17] = "　　落第だ！　　";
        cellgame.msgPatterns01[18] = "　嗚呼・・・。　";
        cellgame.msgPatterns01[19] = "　残念・・・。";
        /** Cell 規定値 02 */
        cellgame.cells02 = [];
        cellgame.cells02[0] = new Cell(0, "　", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells02[1] = new Cell(1, "　", "赤壁", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells02[2] = new Cell(2, "　", "新緑", cellgame.Colors.White, cellgame.Colors.Green);
        cellgame.cells02[3] = new Cell(3, "　", "辛子", cellgame.Colors.White, cellgame.Colors.Yellow);
        cellgame.cells02[4] = new Cell(4, "　", "青々", cellgame.Colors.White, cellgame.Colors.Blue);
        cellgame.cells02[5] = new Cell(5, "　", "紫煙", cellgame.Colors.White, cellgame.Colors.Magenta);
        cellgame.cells02[6] = new Cell(6, "　", "水面", cellgame.Colors.White, cellgame.Colors.Cyan);
        cellgame.cells02[7] = new Cell(7, "　", "白塗", cellgame.Colors.White, cellgame.Colors.White);
        cellgame.cells02[8] = new Cell(8, "　", "灰被", cellgame.Colors.White, cellgame.Colors.Gray);
        cellgame.cells02[9] = new Cell(9, "　", "暗雲", cellgame.Colors.White, cellgame.Colors.DeepDarkGray);
        cellgame.cells02[10] = new Cell(10, "　", "空き", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells02[11] = new Cell(11, "Ｓ", "Samurai（侍）", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells02[12] = new Cell(12, "Ｆ", "Farmer（農民）", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.cells02[13] = new Cell(13, "Ａ", "Artisans（職人）", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.cells02[14] = new Cell(14, "Ｍ", "Merchants（商人）", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.cells02[20] = new Cell(20, "　", "空き:明滅", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells02[21] = new Cell(21, "Ｓ", "Samurai（侍）:明滅", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells02[22] = new Cell(22, "Ｆ", "Farmer（農民）:明滅", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.cells02[23] = new Cell(23, "Ａ", "Artisans（職人）:明滅", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.cells02[24] = new Cell(24, "Ｍ", "Merchants（商人）:明滅", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.cells02[90] = new Cell(90, "Ｙ", "Yes 了解:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.cells02[91] = new Cell(91, "Ｎ", "No 拒否:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.cells02[92] = new Cell(92, "Ｒ", "Retry 再考:明滅", cellgame.Colors.Black, cellgame.Colors.Yellow, true);
        cellgame.cells02[92] = new Cell(92, "？", "? 説明:明滅", cellgame.Colors.Black, cellgame.Colors.White, false);
        cellgame.msgPatterns02 = [];
        cellgame.msgPatterns02[0] = "　　ＯＫ！！　　";
        cellgame.msgPatterns02[1] = "　ＧＲＥＡＴ！　";
        cellgame.msgPatterns02[2] = "　ＮＩＣＥ！！　";
        cellgame.msgPatterns02[3] = "　ＷＥＬＬ！！　";
        cellgame.msgPatterns02[4] = "　ＣＯＯＬ！！　";
        cellgame.msgPatterns02[5] = "　ＳＵＰＥＲ！　";
        cellgame.msgPatterns02[6] = "　ＦＩＮＥ！！　";
        cellgame.msgPatterns02[7] = "　ＧＯＯＤ！！　";
        cellgame.msgPatterns02[8] = "ＳＵＣＣＥＳＳ！";
        cellgame.msgPatterns02[9] = "　ＣＬＥＡＲ！　";
        cellgame.msgPatterns02[10] = "　　ＮＯ！！　　";
        cellgame.msgPatterns02[11] = "　　ＢＡＤ！　　";
        cellgame.msgPatterns02[12] = "　ＡＧＡＩＮ！　";
        cellgame.msgPatterns02[13] = "　ＲＥＴＲＹ！　";
        cellgame.msgPatterns02[14] = "　ＦＡＩＬ！！　";
        cellgame.msgPatterns02[15] = "　ＬＯＳＥ！！　";
        cellgame.msgPatterns02[16] = "　　ＮＧ！！　　";
        cellgame.msgPatterns02[17] = "　ＮＯＮＯ！！　";
        cellgame.msgPatterns02[18] = "　ＯＨ・・・・　";
        cellgame.msgPatterns02[19] = "　ＳＩＧＨ・・　";
    }
    cellgame.cellsInit = cellsInit;
    /** Cell設定の選択 */
    function cellsUpdate(set) {
        switch (set) {
            case 0: {
                cellgame.cells = cellgame.cells00;
                cellgame.msgPatterns = cellgame.msgPatterns00;
                break;
            }
            case 1: {
                cellgame.cells = cellgame.cells01;
                cellgame.msgPatterns = cellgame.msgPatterns01;
                break;
            }
            case 2: {
                cellgame.cells = cellgame.cells02;
                cellgame.msgPatterns = cellgame.msgPatterns02;
                break;
            }
            default: {
                cellgame.cells = cellgame.cells00;
                cellgame.msgPatterns = cellgame.msgPatterns00;
            }
        }
    }
    cellgame.cellsUpdate = cellsUpdate;
    /**
     * class Cell
     */
    class Cell {
        /** コンストラクタ */
        constructor(code = 0, char = '　', name = '', foreColor = cellgame.Colors.White, backColor = cellgame.Colors.Black, isFlash = false) {
            this.code = code;
            this.char = char;
            this.name = name;
            this.foreColor = foreColor;
            this.backColor = backColor;
            this.isFlash = isFlash;
        }
        /**
         * Cell 複写
         * @param cell:コピー元
         * @returns 新規インスタンス
         */
        static Copy(cell) {
            let result = new Cell();
            result.Paste(cell);
            return result;
        }
        /**
         * 貼り付け
         * @param cell 貼り付け元
         */
        Paste(cell) {
            this.code = cell.code;
            this.char = cell.char;
            this.name = cell.name;
            this.foreColor = cell.foreColor;
            this.backColor = cell.backColor;
            this.isFlash = cell.isFlash;
        }
    }
    cellgame.Cell = Cell;
    /**
     * class Message
     * メッセージ
     */
    class Message {
        constructor(text = '', x = 0, y = 0, foreColor = cellgame.Colors.White, backColor = cellgame.Colors.Black, isFlash = false) {
            this.text = text;
            this.x = x;
            this.y = y;
            this.foreColor = foreColor;
            this.backColor = backColor;
            this.isFlash = isFlash;
        }
        /** Copy
         * @param msg:コピー元
         * @returns 新規インスタンス
         */
        static Copy(msg) {
            let result = new Message();
            result.Paste(msg);
            return result;
        }
        /** Paste
         * @param msg:貼り付け元
         */
        Paste(msg) {
            this.text = msg.text;
            this.x = msg.x;
            this.y = msg.y;
            this.foreColor = msg.foreColor;
            this.backColor = msg.backColor;
            this.isFlash = msg.isFlash;
        }
    }
    cellgame.Message = Message;
})(cellgame || (cellgame = {}));
