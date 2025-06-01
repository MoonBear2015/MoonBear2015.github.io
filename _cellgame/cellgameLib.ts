/// <reference path="cellgame.ts" />
// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />

namespace cellgame {
    /** Koma 設定 */
    export var komas: IKoma[] = [];
    export var msgPatterns: string[] = [];

    /** Koma 規定値集 */
    export var komasArray : IKoma[][] = [];

    /** Koma 規定値設定 */
    export var komas00 : IKoma[];
    export var komas01 : IKoma[];
    export var komas02 : IKoma[];

    /** Message パターン集 */
    export var msgPatternsArray : string[][] = [];

    /** Message パターン */
    export var msgPatterns00 : string[] = [];
    export var msgPatterns01 : string[] = [];
    export var msgPatterns02 : string[] = [];

    /** ボタン：了解 */
    export const buttonOk : number = 90;
    /** ボタン：拒否 */
    export const buttonNo : number = 91;
    /** ボタン：再考 */
    export const buttonRetry : number = 92;
    /** ボタン：却下 */
    export const buttonLost : number = 93;
    /** ボタン：戻す */
    export const buttonBack : number = 94;
    /** ボタン：進める */
    export const buttonForward : number = 95;
    /** ボタン：説明 */
    export const buttonHelp : number = 99;

    export function komasInit() {
        komas00 = [];
        komas00[0] = new Koma(0,"　","虚無",Colors.White,               Colors.Black);
        komas00[1] = new Koma(1,"　","赤壁",Colors.White,               Colors.Red);
        komas00[2] = new Koma(2,"　","新緑",Colors.White,               Colors.Green);
        komas00[3] = new Koma(3,"　","辛子",Colors.White,               Colors.Yellow);
        komas00[4] = new Koma(4,"　","青々",Colors.White,               Colors.Blue);
        komas00[5] = new Koma(5,"　","紫煙",Colors.White,               Colors.Magenta);
        komas00[6] = new Koma(6,"　","水面",Colors.White,               Colors.Cyan);
        komas00[7] = new Koma(7,"　","白塗",Colors.White,               Colors.White);
        komas00[8] = new Koma(8,"　","灰被",Colors.White,               Colors.Gray);

        komas00[10] = new Koma(10,"　","空き",Colors.White,             Colors.Black);
        komas00[11] = new Koma(11,"士","武士",Colors.White,             Colors.DarkRed);
        komas00[12] = new Koma(12,"農","農民",Colors.White,             Colors.DarkOrange);
        komas00[13] = new Koma(13,"工","職人",Colors.White,             Colors.DarkBlue);
        komas00[14] = new Koma(14,"商","商人",Colors.White,             Colors.DarkGreen);

        komas00[20] = new Koma(20,"　","空き:明滅",Colors.White,        Colors.Black,true);
        komas00[21] = new Koma(21,"士","武士:明滅",Colors.White,        Colors.DarkRed,true);
        komas00[22] = new Koma(22,"農","農民:明滅",Colors.White,        Colors.DarkOrange,true);
        komas00[23] = new Koma(23,"工","職人:明滅",Colors.White,        Colors.DarkBlue,true);
        komas00[24] = new Koma(24,"商","商人:明滅",Colors.White,        Colors.DarkGreen,true);

        komas00[30] = new Koma(30,"　","空き:反転",Colors.Black,        Colors.White);
        komas00[31] = new Koma(31,"士","武士:反転",Colors.DarkRed,      Colors.White);
        komas00[32] = new Koma(32,"農","農民:反転",Colors.DarkOrange,   Colors.White);
        komas00[33] = new Koma(33,"工","職人:反転",Colors.DarkBlue,     Colors.White);
        komas00[34] = new Koma(34,"商","商人:反転",Colors.DarkGreen,    Colors.White);

        komas00[40] = new Koma(40,"　","空き:ネガ",Colors.White,        Colors.Black);
        komas00[41] = new Koma(41,"士","武士:ネガ",Colors.LightPink,    Colors.Black);
        komas00[42] = new Koma(42,"農","農民:ネガ",Colors.LightYellow,  Colors.Black);
        komas00[43] = new Koma(43,"工","職人:ネガ",Colors.LightBlue,    Colors.Black);
        komas00[44] = new Koma(44,"商","商人:ネガ",Colors.LightGreen,   Colors.Black);

        komas00[80] = new Koma(80,"　","黒々",Colors.White,               Colors.Black);
        komas00[81] = new Koma(81,"　","赤黒",Colors.White,               Colors.DarkRed);
        komas00[82] = new Koma(82,"　","深緑",Colors.White,               Colors.DarkGreen);
        komas00[83] = new Koma(83,"　","黄土",Colors.White,               Colors.DarkOrange);
        komas00[84] = new Koma(84,"　","紺碧",Colors.White,               Colors.DarkBlue);
        komas00[85] = new Koma(85,"　","黒紫",Colors.White,               Colors.DarkMagenta);
        komas00[86] = new Koma(86,"　","暗水",Colors.White,               Colors.DarkCyan);
        komas00[87] = new Koma(87,"　","薄曇",Colors.White,               Colors.DarkGray);
        komas00[88] = new Koma(88,"　","暗雲",Colors.White,               Colors.DeepDarkGray);

        komas00[90] = new Koma(90,"了","了解",Colors.White,             Colors.Black,true);
        komas00[91] = new Koma(91,"否","否定",Colors.White,             Colors.Red,true);
        komas00[92] = new Koma(92,"再","再考",Colors.Black,             Colors.Yellow,true);
        komas00[93] = new Koma(93,"却","却下",Colors.Red,               Colors.Black,true);
        komas00[94] = new Koma(94,"戻","戻る",Colors.White,             Colors.Black,false);
        komas00[95] = new Koma(95,"進","進む",Colors.White,             Colors.Black,false);
        komas00[99] = new Koma(99,"説","説明",Colors.Black,             Colors.White,false);

        komas00[100] = new Koma(100,"　","＊＊　コマ　＊＊",Colors.Black,Colors.White,false);
        
        msgPatterns00 = [];
        msgPatterns00[0] = "　よくやった！　";
        msgPatterns00[1] = "　　いいぞ！　　";
        msgPatterns00[2] = "　でかした！！　";
        msgPatterns00[3] = "　さすがだ！！　";
        msgPatterns00[4] = "　おみごと！！　";
        msgPatterns00[5] = "　　すごい！　　";
        msgPatterns00[6] = "　すばらしい！　";
        msgPatterns00[7] = "そのちょうしだ！";
        msgPatterns00[8] = "　　やった！　　";
        msgPatterns00[9] = "　ごうかく！！　";
        msgPatterns00[10] = "　　だめだ！　　";
        msgPatterns00[11] = "　ざんねん！！　";
        msgPatterns00[12] = "　しっぱいだ！　";
        msgPatterns00[13] = "　もういちど！　";
        msgPatterns00[14] = "　やりなおせ！　";
        msgPatterns00[15] = "もういっかい！！";
        msgPatterns00[16] = "　ふごうかく！　";
        msgPatterns00[17] = "　　だめ！！　　";
        msgPatterns00[18] = "　あーあ・・・　";
        msgPatterns00[19] = "やれやれ・・・・";
        
        /** Cell 規定値 01 */
        komas01 = [];
        komas01[0] = new Koma(0,"　","虚無",Colors.White,               Colors.Black);
        komas01[1] = new Koma(1,"　","赤壁",Colors.White,               Colors.Red);
        komas01[2] = new Koma(2,"　","新緑",Colors.White,               Colors.Green);
        komas01[3] = new Koma(3,"　","辛子",Colors.White,               Colors.Yellow);
        komas01[4] = new Koma(4,"　","青々",Colors.White,               Colors.Blue);
        komas01[5] = new Koma(5,"　","紫煙",Colors.White,               Colors.Magenta);
        komas01[6] = new Koma(6,"　","水面",Colors.White,               Colors.Cyan);
        komas01[7] = new Koma(7,"　","白塗",Colors.White,               Colors.White);
        komas01[8] = new Koma(8,"　","灰被",Colors.White,               Colors.Gray);
        komas01[9] = new Koma(9,"　","暗雲",Colors.White,               Colors.DeepDarkGray);

        komas01[10] = new Koma(10,"　","空き",Colors.White,              Colors.Black);
        komas01[11] = new Koma(11,"侍","侍（士）",Colors.White,          Colors.DarkRed);
        komas01[12] = new Koma(12,"民","民（農）",Colors.White,          Colors.DarkOrange);
        komas01[13] = new Koma(13,"匠","匠（工）",Colors.White,          Colors.DarkBlue);
        komas01[14] = new Koma(14,"売","売人（商）",Colors.White,        Colors.DarkGreen);

        komas01[20] = new Koma(20,"　","空き:明滅",Colors.White,          Colors.Black,true);
        komas01[21] = new Koma(21,"侍","侍（士）:明滅",Colors.White,      Colors.DarkRed,true);
        komas01[22] = new Koma(22,"民","民（農）:明滅",Colors.White,      Colors.DarkOrange,true);
        komas01[23] = new Koma(23,"匠","匠（工）:明滅",Colors.White,      Colors.DarkBlue,true);
        komas01[24] = new Koma(24,"売","売人（商）:明滅",Colors.White,    Colors.DarkGreen,true);
        
        komas01[30] = new Koma(30,"　","空き 反転",Colors.Black,                Colors.White);
        komas01[31] = new Koma(31,"侍","侍（士） 反転",Colors.DarkRed,          Colors.White);
        komas01[32] = new Koma(32,"民","民（農） 反転",Colors.DarkOrange,       Colors.White);
        komas01[33] = new Koma(33,"匠","匠（工） 反転",Colors.DarkBlue,         Colors.White);
        komas01[34] = new Koma(34,"売","売人（商） 反転",Colors.DarkGreen,      Colors.White);
        
        komas01[40] = new Koma(40,"　","空き ネガ",Colors.White,                 Colors.Black);
        komas01[41] = new Koma(41,"侍","侍（士） ネガ",Colors.LightPink,         Colors.Black);
        komas01[42] = new Koma(42,"民","民（農） ネガ",Colors.LightYellow,       Colors.Black);
        komas01[43] = new Koma(43,"匠","匠（工） ネガ",Colors.LightBlue,         Colors.Black);
        komas01[44] = new Koma(44,"売","売人（商） ネガ",Colors.LightGreen,      Colors.Black);

        komas01[80] = new Koma(80,"　","黒々",Colors.White,               Colors.Black);
        komas01[81] = new Koma(81,"　","赤黒",Colors.White,               Colors.DarkRed);
        komas01[82] = new Koma(82,"　","深緑",Colors.White,               Colors.DarkGreen);
        komas01[83] = new Koma(83,"　","黄土",Colors.White,               Colors.DarkOrange);
        komas01[84] = new Koma(84,"　","紺碧",Colors.White,               Colors.DarkBlue);
        komas01[85] = new Koma(85,"　","黒紫",Colors.White,               Colors.DarkMagenta);
        komas01[86] = new Koma(86,"　","暗水",Colors.White,               Colors.DarkCyan);
        komas01[87] = new Koma(87,"　","薄曇",Colors.White,               Colors.DarkGray);
        komas01[88] = new Koma(88,"　","暗雲",Colors.White,               Colors.DeepDarkGray);

        komas01[90] = new Koma(90,"了","了解",Colors.White,                     Colors.Black,true);
        komas01[91] = new Koma(91,"否","否定",Colors.White,                     Colors.Red,true);
        komas01[92] = new Koma(92,"再","再考",Colors.Black,                     Colors.Yellow,true);
        komas01[93] = new Koma(93,"却","却下",Colors.Red,                       Colors.Black,true);
        komas01[94] = new Koma(94,"戻","戻る",Colors.White,                     Colors.Black,false);
        komas01[95] = new Koma(95,"進","進む",Colors.White,                     Colors.Black,false);
        komas01[99] = new Koma(99,"説","説明",Colors.Black,                     Colors.White,false);

        komas01[100] = new Koma(100,"　","＊＊　駒　＊＊",Colors.Black,Colors.White,false);

        msgPatterns01 = [];
        msgPatterns01[0] = "　　偉いぞ！　　";
        msgPatterns01[1] = "　　合格だ！　　";
        msgPatterns01[2] = "　　お見事！　　";
        msgPatterns01[3] = "　　流石だ！　　";
        msgPatterns01[4] = "　　天晴れ！　　";
        msgPatterns01[5] = "　素晴らしい！　";
        msgPatterns01[6] = "　お目出度う！　";
        msgPatterns01[7] = "　その調子だ！　";
        msgPatterns01[8] = "　　成功！！　　";
        msgPatterns01[9] = "　　合格！！　　";
        msgPatterns01[10] = "　　失敗だ！　　";
        msgPatterns01[11] = "　　残念！！　　"; 
        msgPatterns01[12] = "　もう一度！！　";
        msgPatterns01[13] = "　やり直せ！！　";
        msgPatterns01[14] = "　　不合格！　　";
        msgPatterns01[15] = "　　失格！！　　";
        msgPatterns01[16] = "　　駄目だ！　　";
        msgPatterns01[17] = "　　落第だ！　　";
        msgPatterns01[18] = "　嗚呼・・・。　";
        msgPatterns01[19] = "　残念・・・。";


        /** Cell 規定値 02 */
        komas02 = [];
        komas02[0] = new Koma(0,"　","虚無",Colors.White,               Colors.Black);
        komas02[1] = new Koma(1,"　","赤壁",Colors.White,               Colors.Red);
        komas02[2] = new Koma(2,"　","新緑",Colors.White,               Colors.Green);
        komas02[3] = new Koma(3,"　","辛子",Colors.White,               Colors.Yellow);
        komas02[4] = new Koma(4,"　","青々",Colors.White,               Colors.Blue);
        komas02[5] = new Koma(5,"　","紫煙",Colors.White,               Colors.Magenta);
        komas02[6] = new Koma(6,"　","水面",Colors.White,               Colors.Cyan);
        komas02[7] = new Koma(7,"　","白塗",Colors.White,               Colors.White);
        komas02[8] = new Koma(8,"　","灰被",Colors.White,               Colors.Gray);
        komas02[9] = new Koma(9,"　","暗雲",Colors.White,               Colors.DeepDarkGray);

        komas02[10] = new Koma(10,"　","*space*",Colors.White,          Colors.Black);
        komas02[11] = new Koma(11,"Ａ","Army（士）",Colors.White,       Colors.DarkRed);
        komas02[12] = new Koma(12,"Ｆ","Farming（農）",Colors.White,    Colors.DarkOrange);
        komas02[13] = new Koma(13,"Ｉ","Industrial（工）",Colors.White, Colors.DarkBlue);
        komas02[14] = new Koma(14,"Ｃ","Commercial（商）",Colors.White, Colors.DarkGreen);

        komas02[20] = new Koma(20,"　","*space*:flash",Colors.White,            Colors.Black,true);
        komas02[21] = new Koma(21,"Ａ","Army（士）:flash",Colors.White,         Colors.DarkRed,true);
        komas02[22] = new Koma(22,"Ｆ","Farming（農）:flash",Colors.White,      Colors.DarkOrange,true);
        komas02[23] = new Koma(23,"Ｉ","Industrial（工）:flash",Colors.White,   Colors.DarkBlue,true);
        komas02[24] = new Koma(24,"Ｃ","Commercial（商）:flash",Colors.White,   Colors.DarkGreen,true);
        
        komas02[30] = new Koma(30,"　","*space* 反転",Colors.Black,                 Colors.White);
        komas02[31] = new Koma(31,"Ａ","Army（士） 反転",Colors.DarkRed,            Colors.White);
        komas02[32] = new Koma(32,"Ｆ","Farming（農） 反転",Colors.DarkOrange,      Colors.White);
        komas02[33] = new Koma(33,"Ｉ","Industrial（工） 反転",Colors.DarkBlue,     Colors.White);
        komas02[34] = new Koma(34,"Ｃ","Commercial（商） 反転",Colors.DarkGreen,    Colors.White);
        
        komas02[40] = new Koma(40,"　","*space* ネガ",Colors.White,                 Colors.Black);
        komas02[41] = new Koma(41,"Ａ","Army（士） ネガ",Colors.LightPink,          Colors.Black);
        komas02[42] = new Koma(42,"Ｆ","Farming（農） ネガ",Colors.LightYellow,     Colors.Black);
        komas02[43] = new Koma(43,"Ｉ","Industrial（工） ネガ",Colors.LightBlue,    Colors.Black);
        komas02[44] = new Koma(44,"Ｃ","Commercial（商） ネガ",Colors.LightGreen,   Colors.Black);

        komas02[80] = new Koma(80,"　","黒々",Colors.White,               Colors.Black);
        komas02[81] = new Koma(81,"　","赤黒",Colors.White,               Colors.DarkRed);
        komas02[82] = new Koma(82,"　","深緑",Colors.White,               Colors.DarkGreen);
        komas02[83] = new Koma(83,"　","黄土",Colors.White,               Colors.DarkOrange);
        komas02[84] = new Koma(84,"　","紺碧",Colors.White,               Colors.DarkBlue);
        komas02[85] = new Koma(85,"　","黒紫",Colors.White,               Colors.DarkMagenta);
        komas02[86] = new Koma(86,"　","暗水",Colors.White,               Colors.DarkCyan);
        komas02[87] = new Koma(87,"　","薄曇",Colors.White,               Colors.DarkGray);
        komas02[88] = new Koma(88,"　","暗雲",Colors.White,               Colors.DeepDarkGray);

        komas02[90] = new Koma(90,"ｙ","yes",Colors.White,Colors.Black,true);
        komas02[91] = new Koma(91,"ｎ","no",Colors.White,Colors.Red,true);
        komas02[92] = new Koma(92,"ｒ","retry",Colors.Black,Colors.Yellow,true);
        komas02[93] = new Koma(93,"ｌ","lost",Colors.Red,Colors.Black,true);
        komas02[94] = new Koma(94,"ｂ","back",Colors.White,Colors.Black,false);
        komas02[95] = new Koma(95,"ｆ","forward",Colors.White,Colors.Black,false);
        komas02[99] = new Koma(99,"？","help",Colors.Black,Colors.White,false);

        komas02[100] = new Koma(100,"　","＊＊　Characters　＊＊",Colors.Black,Colors.White,false);

        msgPatterns02 = [];
        msgPatterns02[0] = "　　ＯＫ！！　　";
        msgPatterns02[1] = "　ＧＲＥＡＴ！　";
        msgPatterns02[2] = "　ＮＩＣＥ！！　";
        msgPatterns02[3] = "　ＷＥＬＬ！！　";
        msgPatterns02[4] = "　ＣＯＯＬ！！　";
        msgPatterns02[5] = "　ＳＵＰＥＲ！　";
        msgPatterns02[6] = "　ＦＩＮＥ！！　";
        msgPatterns02[7] = "　ＧＯＯＤ！！　";
        msgPatterns02[8] = "ＳＵＣＣＥＳＳ！";
        msgPatterns02[9] = "　ＣＬＥＡＲ！　";
        msgPatterns02[10] = "　　ＮＯ！！　　";
        msgPatterns02[11] = "　　ＢＡＤ！　　";
        msgPatterns02[12] = "　ＡＧＡＩＮ！　";
        msgPatterns02[13] = "　ＲＥＴＲＹ！　";
        msgPatterns02[14] = "　ＦＡＩＬ！！　";
        msgPatterns02[15] = "　ＬＯＳＥ！！　";
        msgPatterns02[16] = "　　ＮＧ！！　　";
        msgPatterns02[17] = "　ＮＯＮＯ！！　";
        msgPatterns02[18] = "　ＯＨ・・・・　";
        msgPatterns02[19] = "　ＳＩＧＨ・・　";

        
        komasArray[0] = komas00;
        komasArray[1] = komas01;
        komasArray[2] = komas02;
        msgPatternsArray[0] = msgPatterns00;
        msgPatternsArray[1] = msgPatterns01;
        msgPatternsArray[2] = msgPatterns02;

    }

    export class GameStep {
        /** 0:ゲームタイトル */
        static Title : number = 0;
        /** 10:ゲームスタート */
        static Start : number = 10;
        /** 20:ゲームプレイ */
        static Play : number = 20;
        /** 25:ゲームプレイ 次ステップ */
        static PlayNext : number = 25;
        /** 30:ゲームクリア */
        static Clear : number = 30;
        /** 40:ゲームオーバー */
        static Over : number = 40;
        /** 50:確認待ち */
        static Wait : number = 50;

    }

    /** Cell設定の選択 */
    export function komasUpdate(set : number) {
        switch(set) {
            case 0: {
                komas = komas00;
                msgPatterns = msgPatterns00;
                break;
            }
            case 1: {
                komas = komas01;
                msgPatterns = msgPatterns01;
                break;
            }
            case 2: {
                komas = komas02;
                msgPatterns = msgPatterns02;
                break;
            }
            default: {
                komas = komas00;
                msgPatterns = msgPatterns00;
            }
        }
    } 


    /**
     * interface IKoma
     */
    export interface IKoma {
        /** Koma種類 整理番号 */
        code : number;
        /** Komaの表示文字 */
        char : string;
        /** 名前 */
        name : string;
        /** 文字色 */
        foreColor : string;
        /** 背景色 */
        backColor : string;
        /** フラッシュ */
        isFlash : boolean;
        /** 説明 */
        toHelp() : string;

        /**
         * 貼り付け
         * @param koma:貼り付け元
         */
        Paste(koma : IKoma) : void;

    }

    /**
     * class Cell
     */
    export class Koma implements IKoma {
        code : number;
        char : string;
        name : string;
        foreColor : string;
        backColor : string;
        isFlash : boolean;

        /** タイトル文字 */
        static titleCode : number = 11;

        /** ゲームタイトル */
        static gameTitle = (komas : IKoma[]) : string => {
            return komas[Koma.titleCode].char
            + komas[Koma.titleCode + 1].char
            + komas[Koma.titleCode + 2].char
            + komas[Koma.titleCode + 3].char;
        }

        /** コンストラクタ */
        constructor(
            code : number = 0,
            char : string = '　',
            name : string = '',
            foreColor : string = Colors.White,
            backColor : string = Colors.Black,
            isFlash : boolean = false
        )
        {
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
        static Copy(koma : IKoma) : IKoma {
            let result = new Koma();
            result.Paste(koma);
            return result;
        }

        /**
         * 説明表示
         */
        public toHelp = () => this.char + ":" + this.name;


        /**
         * 貼り付け
         * @param koma 貼り付け元
         */
        public Paste(koma : IKoma) : void{
            this.code = koma.code;
            this.char = koma.char;
            this.name = koma.name;
            this.foreColor = koma.foreColor;
            this.backColor = koma.backColor;
            this.isFlash = koma.isFlash;
        }
    }

    /**
     * interface IMessage
     * メッセージ
     */
    export interface IMessage {
        /** メッセージ文字列 */
        text : string;
        /** 表示位置 x */
        x : number;
        /** 表示位置 y */
        y : number;
        /** 文字色 */
        foreColor : string;
        /** 背景色 */
        backColor : string;
        /** フラッシュ？ */        
        isFlash : boolean;
    }

    /**
     * class Message
     * メッセージ
     */
    export class Message implements IMessage {
        text : string;
        x : number;
        y : number;
        foreColor : string;
        backColor : string;
        isFlash : boolean;

        constructor(
            text : string = '',
            x : number = 0,
            y : number = 0,
            foreColor : string = Colors.White,
            backColor : string = Colors.Black,
            isFlash : boolean = false
        ) {
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
        static Copy(msg : IMessage) : IMessage {
            let result = new Message();
            result.Paste(msg);
            return result;
        }

        /** Paste
         * @param msg:貼り付け元
         */
        public Paste(msg : IMessage) : void {
            this.text = msg.text;
            this.x = msg.x;
            this.y = msg.y;
            this.foreColor = msg.foreColor;
            this.backColor = msg.backColor;
            this.isFlash = msg.isFlash;
        }
    }

    /**
     * interface IHand
     * 手
     */
    export interface IHand {

        /** 手の座標:01 */
        point01 : Point;

        /** 手のコード:01 */
        code01 : number;

        /** 手の座標:02 */
        point02 : Point;

        /** 手のコード:02 */
        code02 : number;

        /** 貼り付け */
        Paste(hand : IHand) : void;

        /** 突合 */
        equal(hand : IHand) : boolean;
    }

    /**
     * class Hand
     * 手
     */
    export class Hand implements IHand {
        /** 手の座標:01 */    
        point01 : Point = Point.New(0,0);
        /** 手のコード:01 */
        code01 : number = 0;
        /** 手の座標:02 */    
        point02 : Point = Point.New(0,0);
        /** 手のコード:02 */
        code02 : number = 0;
        /** コンストラクタ */
        constructor(point01 : Point = Point.New(0,0), code01 : number = 0,
            point02 : Point = Point.New(0,0), code02 : number = 0) {
            this.point01.Paste(point01);
            this.code01 = code01;
            this.point02.Paste(point02);
            this.code02 = code02;
        }
        /** 複写 */
        static Copy(hand : IHand) : IHand {
            let result : IHand = new Hand();
            result.Paste(hand);
            return result;
        }

        /** 貼り付け */
        public Paste(hand : IHand) : void {
            this.point01.Paste(hand.point01);
            this.code01 = hand.code01;
            this.point02.Paste(hand.point02);
            this.code02 = hand.code02;
        }

        /** 突合 */
        public equal(hand : IHand) : boolean {
            if (!this.point01.equal(hand.point01) || this.code01 !== hand.code01) {
                return false;
            }        
            if (!this.point02.equal(hand.point02) || this.code02 !== hand.code02) {
                return false;
            }
            return true;
        }
    }
}
