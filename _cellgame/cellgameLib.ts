/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** Cell設定 */
    export var cells: ICell[] = [];
    export var msgPatterns: string[] = [];

    /** Cell 規定値設定 */
    export var cells00 : ICell[];
    export var cells01 : ICell[];
    export var cells02 : ICell[];

    /** Message パターン */
    export var msgPatterns00 : string[] = [];
    export var msgPatterns01 : string[] = [];
    export var msgPatterns02 : string[] = [];

    export function cellsInit() {
        cells00 = [];
        cells00[0] = new Cell(0,"　","虚無",Colors.White,Colors.Black);
        cells00[1] = new Cell(1,"　","赤壁",Colors.White,Colors.Red);
        cells00[2] = new Cell(2,"　","新緑",Colors.White,Colors.Green);
        cells00[3] = new Cell(3,"　","辛子",Colors.White,Colors.Yellow);
        cells00[4] = new Cell(4,"　","青々",Colors.White,Colors.Blue);
        cells00[5] = new Cell(5,"　","紫煙",Colors.White,Colors.Magenta);
        cells00[6] = new Cell(6,"　","水面",Colors.White,Colors.Cyan);
        cells00[7] = new Cell(7,"　","白塗",Colors.White,Colors.White);
        cells00[8] = new Cell(8,"　","灰被",Colors.White,Colors.Gray);
        cells00[9] = new Cell(9,"　","暗雲",Colors.White,Colors.DeepDarkGray);

        cells00[10] = new Cell(10,"　","空き",Colors.White,Colors.Black);
        cells00[11] = new Cell(11,"士","武士",Colors.White,Colors.Red);
        cells00[12] = new Cell(12,"農","農民",Colors.White,Colors.DarkOrange);
        cells00[13] = new Cell(13,"工","職人",Colors.White,Colors.DarkBlue);
        cells00[14] = new Cell(14,"商","商人",Colors.White,Colors.DarkGreen);

        cells00[20] = new Cell(20,"　","空き:明滅",Colors.White,Colors.Black,true);
        cells00[21] = new Cell(21,"士","武士:明滅",Colors.White,Colors.Red,true);
        cells00[22] = new Cell(22,"農","農民:明滅",Colors.White,Colors.DarkOrange,true);
        cells00[23] = new Cell(23,"工","職人:明滅",Colors.White,Colors.DarkBlue,true);
        cells00[24] = new Cell(24,"商","商人:明滅",Colors.White,Colors.DarkGreen,true);

        cells00[90] = new Cell(90,"了","了解:明滅",Colors.White,Colors.Black,true);
        cells00[91] = new Cell(91,"否","否定:明滅",Colors.White,Colors.Red,true);
        cells00[92] = new Cell(92,"再","再考:明滅",Colors.Black,Colors.Yellow,true);
        cells00[93] = new Cell(93,"説","説明:明滅",Colors.Black,Colors.White,false);

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
        cells01 = [];
        cells01[0] = new Cell(0,"　","虚無",Colors.White,Colors.Black);
        cells01[1] = new Cell(1,"　","赤壁",Colors.White,Colors.Red);
        cells01[2] = new Cell(2,"　","新緑",Colors.White,Colors.Green);
        cells01[3] = new Cell(3,"　","辛子",Colors.White,Colors.Yellow);
        cells01[4] = new Cell(4,"　","青々",Colors.White,Colors.Blue);
        cells01[5] = new Cell(5,"　","紫煙",Colors.White,Colors.Magenta);
        cells01[6] = new Cell(6,"　","水面",Colors.White,Colors.Cyan);
        cells01[7] = new Cell(7,"　","白塗",Colors.White,Colors.White);
        cells01[8] = new Cell(8,"　","灰被",Colors.White,Colors.Gray);
        cells01[9] = new Cell(9,"　","暗雲",Colors.White,Colors.DeepDarkGray);

        cells01[10] = new Cell(10,"　","空き",Colors.White,Colors.Black);
        cells01[11] = new Cell(11,"武","武士",Colors.White,Colors.Red);
        cells01[12] = new Cell(12,"農","農民",Colors.White,Colors.DarkOrange);
        cells01[13] = new Cell(13,"匠","匠",Colors.White,Colors.DarkBlue);
        cells01[14] = new Cell(14,"売","売人",Colors.White,Colors.DarkGreen);

        cells01[20] = new Cell(20,"　","空き:明滅",Colors.White,Colors.Black,true);
        cells01[21] = new Cell(21,"武","武士:明滅",Colors.White,Colors.Red,true);
        cells01[22] = new Cell(22,"農","農民:明滅",Colors.White,Colors.DarkOrange,true);
        cells01[23] = new Cell(23,"匠","匠:明滅",Colors.White,Colors.DarkBlue,true);
        cells01[24] = new Cell(24,"売","売人:明滅",Colors.White,Colors.DarkGreen,true);
    
        cells01[90] = new Cell(90,"了","了解:明滅",Colors.White,Colors.Black,true);
        cells01[91] = new Cell(91,"否","否定:明滅",Colors.White,Colors.Red,true);
        cells01[92] = new Cell(92,"再","再考:明滅",Colors.Black,Colors.Yellow,true);
        cells01[92] = new Cell(93,"説","説明:明滅",Colors.Black,Colors.White,false);

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
        cells02 = [];
        cells02[0] = new Cell(0,"　","虚無",Colors.White,Colors.Black);
        cells02[1] = new Cell(1,"　","赤壁",Colors.White,Colors.Red);
        cells02[2] = new Cell(2,"　","新緑",Colors.White,Colors.Green);
        cells02[3] = new Cell(3,"　","辛子",Colors.White,Colors.Yellow);
        cells02[4] = new Cell(4,"　","青々",Colors.White,Colors.Blue);
        cells02[5] = new Cell(5,"　","紫煙",Colors.White,Colors.Magenta);
        cells02[6] = new Cell(6,"　","水面",Colors.White,Colors.Cyan);
        cells02[7] = new Cell(7,"　","白塗",Colors.White,Colors.White);
        cells02[8] = new Cell(8,"　","灰被",Colors.White,Colors.Gray);
        cells02[9] = new Cell(9,"　","暗雲",Colors.White,Colors.DeepDarkGray);

        cells02[10] = new Cell(10,"　","空き",Colors.White,Colors.Black);
        cells02[11] = new Cell(11,"Ｓ","Samurai（侍）",Colors.White,Colors.Red);
        cells02[12] = new Cell(12,"Ｆ","Farmer（農民）",Colors.White,Colors.DarkOrange);
        cells02[13] = new Cell(13,"Ａ","Artisans（職人）",Colors.White,Colors.DarkBlue);
        cells02[14] = new Cell(14,"Ｍ","Merchants（商人）",Colors.White,Colors.DarkGreen);

        cells02[20] = new Cell(20,"　","空き:明滅",Colors.White,Colors.Black);
        cells02[21] = new Cell(21,"Ｓ","Samurai（侍）:明滅",Colors.White,Colors.Red);
        cells02[22] = new Cell(22,"Ｆ","Farmer（農民）:明滅",Colors.White,Colors.DarkOrange);
        cells02[23] = new Cell(23,"Ａ","Artisans（職人）:明滅",Colors.White,Colors.DarkBlue);
        cells02[24] = new Cell(24,"Ｍ","Merchants（商人）:明滅",Colors.White,Colors.DarkGreen);
            
        cells02[90] = new Cell(90,"Ｙ","Yes 了解:明滅",Colors.White,Colors.Black,true);
        cells02[91] = new Cell(91,"Ｎ","No 拒否:明滅",Colors.White,Colors.Red,true);
        cells02[92] = new Cell(92,"Ｒ","Retry 再考:明滅",Colors.Black,Colors.Yellow,true);
        cells02[92] = new Cell(92,"？","? 説明:明滅",Colors.Black,Colors.White,false);

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
    export function cellsUpdate(set : number) {
        switch(set) {
            case 0: {
                cells = cells00;
                msgPatterns = msgPatterns00;
                break;
            }
            case 1: {
                cells = cells01;
                msgPatterns = msgPatterns01;
                break;
            }
            case 2: {
                cells = cells02;
                msgPatterns = msgPatterns02;
                break;
            }
            default: {
                cells = cells00;
                msgPatterns = msgPatterns00;
            }
        }
    } 


    /**
     * interface ICell
     */
    export interface ICell {
        /** cell種類 整理番号 */
        code : number;
        /** cellの表示文字 */
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
         * @param cell:貼り付け元
         */
        Paste(cell : ICell) : void;

    }

    /**
     * class Cell
     */
    export class Cell implements ICell {
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
         * Cell 複写
         * @param cell:コピー元
         * @returns 新規インスタンス
         */
        static Copy(cell : ICell) : ICell {
            let result = new Cell();
            result.Paste(cell);
            return result;
        }

        /**
         * 貼り付け
         * @param cell 貼り付け元
         */
        public Paste(cell : ICell) : void{
            this.code = cell.code;
            this.char = cell.char;
            this.name = cell.name;
            this.foreColor = cell.foreColor;
            this.backColor = cell.backColor;
            this.isFlash = cell.isFlash;
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


}
