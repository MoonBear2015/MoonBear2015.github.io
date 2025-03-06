/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** Cell設定 */
    export var cells: ICell[] = [];

    /** Cell 規定値設定 */
    export var cells00 : ICell[];
    export var cells01 : ICell[];
    export var cells02 : ICell[];

    export function cellsInit() {
        cells00 = [];
        cells00[0] = new Cell(0,"・","虚無",Colors.White,Colors.Black);

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
    
        /** Cell 規定値 01 */
        cells01 = [];
        cells01[0] = new Cell(0,"・","虚無",Colors.White,Colors.Black);

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
    
        /** Cell 規定値 02 */
        cells02 = [];
        cells02[0] = new Cell(0,"・","虚無",Colors.White,Colors.Black);

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
    }

    /** Cell設定の選択 */
    export function cellsUpdate(set : number) {
        switch(set) {
            case 0: {
                cells = cells00;
                break;
            }
            case 1: {
                cells = cells01;
                break;
            }
            case 2: {
                cells = cells02;
                break;
            }
            default: {
                cells = cells00;
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


}
