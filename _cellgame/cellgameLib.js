"use strict";
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />
var cellgame;
(function (cellgame) {
    /** Cell設定 */
    cellgame.komas = [];
    cellgame.msgPatterns = [];
    /** Message パターン */
    cellgame.msgPatterns00 = [];
    cellgame.msgPatterns01 = [];
    cellgame.msgPatterns02 = [];
    cellgame.buttonOk = 90;
    cellgame.buttonNo = 91;
    cellgame.buttonRetry = 92;
    cellgame.buttonCancel = 93;
    cellgame.buttonBack = 94;
    cellgame.buttonForward = 95;
    cellgame.buttonHelp = 99;
    function komasInit() {
        cellgame.komas00 = [];
        cellgame.komas00[0] = new Koma(0, "　", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.komas00[1] = new Koma(1, "　", "赤壁", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.komas00[2] = new Koma(2, "　", "新緑", cellgame.Colors.White, cellgame.Colors.Green);
        cellgame.komas00[3] = new Koma(3, "　", "辛子", cellgame.Colors.White, cellgame.Colors.Yellow);
        cellgame.komas00[4] = new Koma(4, "　", "青々", cellgame.Colors.White, cellgame.Colors.Blue);
        cellgame.komas00[5] = new Koma(5, "　", "紫煙", cellgame.Colors.White, cellgame.Colors.Magenta);
        cellgame.komas00[6] = new Koma(6, "　", "水面", cellgame.Colors.White, cellgame.Colors.Cyan);
        cellgame.komas00[7] = new Koma(7, "　", "白塗", cellgame.Colors.White, cellgame.Colors.White);
        cellgame.komas00[8] = new Koma(8, "　", "灰被", cellgame.Colors.White, cellgame.Colors.Gray);
        cellgame.komas00[9] = new Koma(9, "　", "暗雲", cellgame.Colors.White, cellgame.Colors.DeepDarkGray);
        cellgame.komas00[10] = new Koma(10, "　", "空き", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.komas00[11] = new Koma(11, "士", "武士", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.komas00[12] = new Koma(12, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.komas00[13] = new Koma(13, "工", "職人", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.komas00[14] = new Koma(14, "商", "商人", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.komas00[20] = new Koma(20, "　", "空き:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.komas00[21] = new Koma(21, "士", "武士:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.komas00[22] = new Koma(22, "農", "農民:明滅", cellgame.Colors.White, cellgame.Colors.DarkOrange, true);
        cellgame.komas00[23] = new Koma(23, "工", "職人:明滅", cellgame.Colors.White, cellgame.Colors.DarkBlue, true);
        cellgame.komas00[24] = new Koma(24, "商", "商人:明滅", cellgame.Colors.White, cellgame.Colors.DarkGreen, true);
        cellgame.komas00[90] = new Koma(90, "了", "了解:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.komas00[91] = new Koma(91, "否", "否定:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.komas00[92] = new Koma(92, "再", "再考:明滅", cellgame.Colors.Black, cellgame.Colors.Yellow, true);
        cellgame.komas00[93] = new Koma(93, "却", "却下:明滅", cellgame.Colors.Red, cellgame.Colors.Black, true);
        cellgame.komas00[94] = new Koma(94, "戻", "戻る 説明", cellgame.Colors.White, cellgame.Colors.DeepDarkGray, false);
        cellgame.komas00[95] = new Koma(95, "進", "進む 説明", cellgame.Colors.White, cellgame.Colors.DeepDarkGray, false);
        cellgame.komas00[99] = new Koma(99, "説", "説明", cellgame.Colors.Black, cellgame.Colors.White, false);
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
        cellgame.komas01 = [];
        cellgame.komas01[0] = new Koma(0, "　", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.komas01[1] = new Koma(1, "　", "赤壁", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.komas01[2] = new Koma(2, "　", "新緑", cellgame.Colors.White, cellgame.Colors.Green);
        cellgame.komas01[3] = new Koma(3, "　", "辛子", cellgame.Colors.White, cellgame.Colors.Yellow);
        cellgame.komas01[4] = new Koma(4, "　", "青々", cellgame.Colors.White, cellgame.Colors.Blue);
        cellgame.komas01[5] = new Koma(5, "　", "紫煙", cellgame.Colors.White, cellgame.Colors.Magenta);
        cellgame.komas01[6] = new Koma(6, "　", "水面", cellgame.Colors.White, cellgame.Colors.Cyan);
        cellgame.komas01[7] = new Koma(7, "　", "白塗", cellgame.Colors.White, cellgame.Colors.White);
        cellgame.komas01[8] = new Koma(8, "　", "灰被", cellgame.Colors.White, cellgame.Colors.Gray);
        cellgame.komas01[9] = new Koma(9, "　", "暗雲", cellgame.Colors.White, cellgame.Colors.DeepDarkGray);
        cellgame.komas01[10] = new Koma(10, "　", "空き", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.komas01[11] = new Koma(11, "武", "武士", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.komas01[12] = new Koma(12, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.komas01[13] = new Koma(13, "匠", "匠", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.komas01[14] = new Koma(14, "売", "売人", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.komas01[20] = new Koma(20, "　", "空き:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.komas01[21] = new Koma(21, "武", "武士:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.komas01[22] = new Koma(22, "農", "農民:明滅", cellgame.Colors.White, cellgame.Colors.DarkOrange, true);
        cellgame.komas01[23] = new Koma(23, "匠", "匠:明滅", cellgame.Colors.White, cellgame.Colors.DarkBlue, true);
        cellgame.komas01[24] = new Koma(24, "売", "売人:明滅", cellgame.Colors.White, cellgame.Colors.DarkGreen, true);
        cellgame.komas01[90] = new Koma(90, "了", "了解:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.komas01[91] = new Koma(91, "否", "否定:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.komas01[92] = new Koma(92, "再", "再考:明滅", cellgame.Colors.Black, cellgame.Colors.Yellow, true);
        cellgame.komas01[93] = new Koma(93, "却", "却下:明滅", cellgame.Colors.Red, cellgame.Colors.Black, true);
        cellgame.komas01[94] = new Koma(94, "戻", "戻る 説明", cellgame.Colors.White, cellgame.Colors.DarkGray, false);
        cellgame.komas01[95] = new Koma(95, "進", "進む 説明", cellgame.Colors.White, cellgame.Colors.DarkGray, false);
        cellgame.komas01[99] = new Koma(99, "説", "説明", cellgame.Colors.Black, cellgame.Colors.White, false);
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
        cellgame.komas02 = [];
        cellgame.komas02[0] = new Koma(0, "　", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.komas02[1] = new Koma(1, "　", "赤壁", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.komas02[2] = new Koma(2, "　", "新緑", cellgame.Colors.White, cellgame.Colors.Green);
        cellgame.komas02[3] = new Koma(3, "　", "辛子", cellgame.Colors.White, cellgame.Colors.Yellow);
        cellgame.komas02[4] = new Koma(4, "　", "青々", cellgame.Colors.White, cellgame.Colors.Blue);
        cellgame.komas02[5] = new Koma(5, "　", "紫煙", cellgame.Colors.White, cellgame.Colors.Magenta);
        cellgame.komas02[6] = new Koma(6, "　", "水面", cellgame.Colors.White, cellgame.Colors.Cyan);
        cellgame.komas02[7] = new Koma(7, "　", "白塗", cellgame.Colors.White, cellgame.Colors.White);
        cellgame.komas02[8] = new Koma(8, "　", "灰被", cellgame.Colors.White, cellgame.Colors.Gray);
        cellgame.komas02[9] = new Koma(9, "　", "暗雲", cellgame.Colors.White, cellgame.Colors.DeepDarkGray);
        cellgame.komas02[10] = new Koma(10, "　", "空き", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.komas02[11] = new Koma(11, "Ｓ", "Samurai（侍）", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.komas02[12] = new Koma(12, "Ｆ", "Farmer（農民）", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.komas02[13] = new Koma(13, "Ａ", "Artisans（職人）", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.komas02[14] = new Koma(14, "Ｍ", "Merchants（商人）", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.komas02[20] = new Koma(20, "　", "空き:明滅", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.komas02[21] = new Koma(21, "Ｓ", "Samurai（侍）:明滅", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.komas02[22] = new Koma(22, "Ｆ", "Farmer（農民）:明滅", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.komas02[23] = new Koma(23, "Ａ", "Artisans（職人）:明滅", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.komas02[24] = new Koma(24, "Ｍ", "Merchants（商人）:明滅", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        cellgame.komas02[90] = new Koma(90, "ｙ", "yes 了解:明滅", cellgame.Colors.White, cellgame.Colors.Black, true);
        cellgame.komas02[91] = new Koma(91, "ｎ", "no 拒否:明滅", cellgame.Colors.White, cellgame.Colors.Red, true);
        cellgame.komas02[92] = new Koma(92, "ｒ", "retry 再考:明滅", cellgame.Colors.Black, cellgame.Colors.Yellow, true);
        cellgame.komas02[93] = new Koma(93, "ｃ", "cancel 却下:明滅", cellgame.Colors.Red, cellgame.Colors.Black, true);
        cellgame.komas02[94] = new Koma(94, "ｂ", "back 戻る", cellgame.Colors.White, cellgame.Colors.DarkGray, false);
        cellgame.komas02[95] = new Koma(95, "ｆ", "forward 進む", cellgame.Colors.White, cellgame.Colors.DarkGray, false);
        cellgame.komas02[99] = new Koma(99, "？", "? 説明", cellgame.Colors.Black, cellgame.Colors.White, false);
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
    cellgame.komasInit = komasInit;
    /** Cell設定の選択 */
    function komasUpdate(set) {
        switch (set) {
            case 0: {
                cellgame.komas = cellgame.komas00;
                cellgame.msgPatterns = cellgame.msgPatterns00;
                break;
            }
            case 1: {
                cellgame.komas = cellgame.komas01;
                cellgame.msgPatterns = cellgame.msgPatterns01;
                break;
            }
            case 2: {
                cellgame.komas = cellgame.komas02;
                cellgame.msgPatterns = cellgame.msgPatterns02;
                break;
            }
            default: {
                cellgame.komas = cellgame.komas00;
                cellgame.msgPatterns = cellgame.msgPatterns00;
            }
        }
    }
    cellgame.komasUpdate = komasUpdate;
    /**
     * class Cell
     */
    class Koma {
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
         * Koma 複写
         * @param koma:コピー元
         * @returns 新規インスタンス
         */
        static Copy(koma) {
            let result = new Koma();
            result.Paste(koma);
            return result;
        }
        /**
         * 貼り付け
         * @param koma 貼り付け元
         */
        Paste(koma) {
            this.code = koma.code;
            this.char = koma.char;
            this.name = koma.name;
            this.foreColor = koma.foreColor;
            this.backColor = koma.backColor;
            this.isFlash = koma.isFlash;
        }
    }
    cellgame.Koma = Koma;
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
    /**
     * class Hand
     * 手
     */
    class Hand {
        /** コンストラクタ */
        constructor(point = cellgame.Point.New(0, 0), code = 0) {
            /** 手の座標 */
            this.point = cellgame.Point.New(0, 0);
            /** 手のコード */
            this.code = 0;
            this.point.Paste(point);
            this.code = code;
        }
        /** 複写 */
        static Copy(hand) {
            let result = new Hand();
            result.Paste(hand);
            return result;
        }
        /** 貼り付け */
        Paste(hand) {
            this.point.Paste(hand.point);
            this.code = hand.code;
        }
    }
    cellgame.Hand = Hand;
})(cellgame || (cellgame = {}));
