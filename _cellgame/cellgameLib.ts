/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />
namespace cellgame {
    /** Cell設定 */
    export var komas: IKoma[] = [];
    export var msgPatterns: string[] = [];

    /** Cell 規定値設定 */
    export var komas00 : IKoma[];
    export var komas01 : IKoma[];
    export var komas02 : IKoma[];

    /** Message パターン */
    export var msgPatterns00 : string[] = [];
    export var msgPatterns01 : string[] = [];
    export var msgPatterns02 : string[] = [];

    export const buttonOk : number = 90;
    export const buttonNo : number = 91;
    export const buttonRetry : number = 92;
    export const buttonCancel : number = 93;
    export const buttonBack : number = 94;
    export const buttonForward : number = 95;
    export const buttonHelp : number = 99;

    export function komasInit() {
        komas00 = [];
        komas00[0] = new Koma(0,"　","虚無",Colors.White,Colors.Black);
        komas00[1] = new Koma(1,"　","赤壁",Colors.White,Colors.Red);
        komas00[2] = new Koma(2,"　","新緑",Colors.White,Colors.Green);
        komas00[3] = new Koma(3,"　","辛子",Colors.White,Colors.Yellow);
        komas00[4] = new Koma(4,"　","青々",Colors.White,Colors.Blue);
        komas00[5] = new Koma(5,"　","紫煙",Colors.White,Colors.Magenta);
        komas00[6] = new Koma(6,"　","水面",Colors.White,Colors.Cyan);
        komas00[7] = new Koma(7,"　","白塗",Colors.White,Colors.White);
        komas00[8] = new Koma(8,"　","灰被",Colors.White,Colors.Gray);
        komas00[9] = new Koma(9,"　","暗雲",Colors.White,Colors.DeepDarkGray);

        komas00[10] = new Koma(10,"　","空き",Colors.White,Colors.Black);
        komas00[11] = new Koma(11,"士","武士",Colors.White,Colors.Red);
        komas00[12] = new Koma(12,"農","農民",Colors.White,Colors.DarkOrange);
        komas00[13] = new Koma(13,"工","職人",Colors.White,Colors.DarkBlue);
        komas00[14] = new Koma(14,"商","商人",Colors.White,Colors.DarkGreen);

        komas00[20] = new Koma(20,"　","空き:明滅",Colors.White,Colors.Black,true);
        komas00[21] = new Koma(21,"士","武士:明滅",Colors.White,Colors.Red,true);
        komas00[22] = new Koma(22,"農","農民:明滅",Colors.White,Colors.DarkOrange,true);
        komas00[23] = new Koma(23,"工","職人:明滅",Colors.White,Colors.DarkBlue,true);
        komas00[24] = new Koma(24,"商","商人:明滅",Colors.White,Colors.DarkGreen,true);

        komas00[90] = new Koma(90,"了","了解:明滅",Colors.White,Colors.Black,true);
        komas00[91] = new Koma(91,"否","否定:明滅",Colors.White,Colors.Red,true);
        komas00[92] = new Koma(92,"再","再考:明滅",Colors.Black,Colors.Yellow,true);
        komas00[93] = new Koma(93,"却","却下:明滅",Colors.Red,Colors.Black,true);
        komas00[94] = new Koma(94,"戻","戻る 説明",Colors.White,Colors.DeepDarkGray,false);
        komas00[95] = new Koma(95,"進","進む 説明",Colors.White,Colors.DeepDarkGray,false);
        komas00[99] = new Koma(99,"説","説明",Colors.Black,Colors.White,false);

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
        komas01[0] = new Koma(0,"　","虚無",Colors.White,Colors.Black);
        komas01[1] = new Koma(1,"　","赤壁",Colors.White,Colors.Red);
        komas01[2] = new Koma(2,"　","新緑",Colors.White,Colors.Green);
        komas01[3] = new Koma(3,"　","辛子",Colors.White,Colors.Yellow);
        komas01[4] = new Koma(4,"　","青々",Colors.White,Colors.Blue);
        komas01[5] = new Koma(5,"　","紫煙",Colors.White,Colors.Magenta);
        komas01[6] = new Koma(6,"　","水面",Colors.White,Colors.Cyan);
        komas01[7] = new Koma(7,"　","白塗",Colors.White,Colors.White);
        komas01[8] = new Koma(8,"　","灰被",Colors.White,Colors.Gray);
        komas01[9] = new Koma(9,"　","暗雲",Colors.White,Colors.DeepDarkGray);

        komas01[10] = new Koma(10,"　","空き",Colors.White,Colors.Black);
        komas01[11] = new Koma(11,"武","武士",Colors.White,Colors.Red);
        komas01[12] = new Koma(12,"農","農民",Colors.White,Colors.DarkOrange);
        komas01[13] = new Koma(13,"匠","匠",Colors.White,Colors.DarkBlue);
        komas01[14] = new Koma(14,"売","売人",Colors.White,Colors.DarkGreen);

        komas01[20] = new Koma(20,"　","空き:明滅",Colors.White,Colors.Black,true);
        komas01[21] = new Koma(21,"武","武士:明滅",Colors.White,Colors.Red,true);
        komas01[22] = new Koma(22,"農","農民:明滅",Colors.White,Colors.DarkOrange,true);
        komas01[23] = new Koma(23,"匠","匠:明滅",Colors.White,Colors.DarkBlue,true);
        komas01[24] = new Koma(24,"売","売人:明滅",Colors.White,Colors.DarkGreen,true);
    
        komas01[90] = new Koma(90,"了","了解:明滅",Colors.White,Colors.Black,true);
        komas01[91] = new Koma(91,"否","否定:明滅",Colors.White,Colors.Red,true);
        komas01[92] = new Koma(92,"再","再考:明滅",Colors.Black,Colors.Yellow,true);
        komas01[93] = new Koma(93,"却","却下:明滅",Colors.Red,Colors.Black,true);
        komas01[94] = new Koma(94,"戻","戻る 説明",Colors.White,Colors.DarkGray,false);
        komas01[95] = new Koma(95,"進","進む 説明",Colors.White,Colors.DarkGray,false);
        komas01[99] = new Koma(99,"説","説明",Colors.Black,Colors.White,false);

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
        komas02[0] = new Koma(0,"　","虚無",Colors.White,Colors.Black);
        komas02[1] = new Koma(1,"　","赤壁",Colors.White,Colors.Red);
        komas02[2] = new Koma(2,"　","新緑",Colors.White,Colors.Green);
        komas02[3] = new Koma(3,"　","辛子",Colors.White,Colors.Yellow);
        komas02[4] = new Koma(4,"　","青々",Colors.White,Colors.Blue);
        komas02[5] = new Koma(5,"　","紫煙",Colors.White,Colors.Magenta);
        komas02[6] = new Koma(6,"　","水面",Colors.White,Colors.Cyan);
        komas02[7] = new Koma(7,"　","白塗",Colors.White,Colors.White);
        komas02[8] = new Koma(8,"　","灰被",Colors.White,Colors.Gray);
        komas02[9] = new Koma(9,"　","暗雲",Colors.White,Colors.DeepDarkGray);

        komas02[10] = new Koma(10,"　","空き",Colors.White,Colors.Black);
        komas02[11] = new Koma(11,"Ｓ","Samurai（侍）",Colors.White,Colors.Red);
        komas02[12] = new Koma(12,"Ｆ","Farmer（農民）",Colors.White,Colors.DarkOrange);
        komas02[13] = new Koma(13,"Ａ","Artisans（職人）",Colors.White,Colors.DarkBlue);
        komas02[14] = new Koma(14,"Ｍ","Merchants（商人）",Colors.White,Colors.DarkGreen);

        komas02[20] = new Koma(20,"　","空き:明滅",Colors.White,Colors.Black);
        komas02[21] = new Koma(21,"Ｓ","Samurai（侍）:明滅",Colors.White,Colors.Red);
        komas02[22] = new Koma(22,"Ｆ","Farmer（農民）:明滅",Colors.White,Colors.DarkOrange);
        komas02[23] = new Koma(23,"Ａ","Artisans（職人）:明滅",Colors.White,Colors.DarkBlue);
        komas02[24] = new Koma(24,"Ｍ","Merchants（商人）:明滅",Colors.White,Colors.DarkGreen);
            
        komas02[90] = new Koma(90,"ｙ","yes 了解:明滅",Colors.White,Colors.Black,true);
        komas02[91] = new Koma(91,"ｎ","no 拒否:明滅",Colors.White,Colors.Red,true);
        komas02[92] = new Koma(92,"ｒ","retry 再考:明滅",Colors.Black,Colors.Yellow,true);
        komas02[93] = new Koma(93,"ｃ","cancel 却下:明滅",Colors.Red,Colors.Black,true);
        komas02[94] = new Koma(94,"ｂ","back 戻る",Colors.White,Colors.DarkGray,false);
        komas02[95] = new Koma(95,"ｆ","forward 進む",Colors.White,Colors.DarkGray,false);
        komas02[99] = new Koma(99,"？","? 説明",Colors.Black,Colors.White,false);

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

        /** 手の座標 */
        point : Point;

        /** 手のコード */
        code : number;

        /** 貼り付け */
        Paste(hand : IHand) : void;
    }

    /**
     * class Hand
     * 手
     */
    export class Hand {
        /** 手の座標 */    
        point : Point = Point.New(0,0);
        /** 手のコード */
        code : number = 0;
        /** コンストラクタ */
        constructor(point : Point = Point.New(0,0), code : number = 0) {
            this.point.Paste(point);
            this.code = code;
        }
        /** 複写 */
        static Copy(hand : IHand) : IHand {
            let result : IHand = new Hand();
            result.Paste(hand);
            return result;
        }

        /** 貼り付け */
        public Paste(hand : IHand) : void {
            this.point.Paste(hand.point);
            this.code = hand.code;
        }

    }


}
