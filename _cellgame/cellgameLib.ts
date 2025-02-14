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
        cells00[0] = new Cell(0,"　","無し",Colors.White,Colors.Black);
        cells00[1] = new Cell(1,"士","武士",Colors.White,Colors.Red);
        cells00[2] = new Cell(2,"農","農民",Colors.White,Colors.DarkOrange);
        cells00[3] = new Cell(3,"工","職人",Colors.White,Colors.DarkBlue);
        cells00[4] = new Cell(4,"商","商人",Colors.White,Colors.DarkGreen);
    
        /** Cell 規定値 01 */
        cells01 = [];
        cells01[0] = new Cell(0,"　","無し",Colors.White,Colors.Black);
        cells01[1] = new Cell(1,"侍","武士",Colors.White,Colors.Red);
        cells01[2] = new Cell(2,"農","農民",Colors.White,Colors.DarkOrange);
        cells01[3] = new Cell(3,"工","職人",Colors.White,Colors.DarkBlue);
        cells01[4] = new Cell(4,"商","商人",Colors.White,Colors.DarkGreen);
    
        /** Cell 規定値 02 */
        cells02 = [];
        cells02[0] = new Cell(0,"　","無し",Colors.White,Colors.Black);
        cells02[1] = new Cell(1,"Ｓ","Samurai：侍",Colors.White,Colors.Red);
        cells02[2] = new Cell(2,"Ｆ","Farmer：農民",Colors.White,Colors.DarkOrange);
        cells02[3] = new Cell(3,"Ａ","Artisans：職人",Colors.White,Colors.DarkBlue);
        cells02[4] = new Cell(4,"Ｍ","Merchants：商人",Colors.White,Colors.DarkGreen);
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

        /** コンストラクタ */
        constructor(
            code : number = 0,
            char : string = '　',
            name : string = '',
            foreColor : string = Colors.White,
            backColor : string = Colors.Black
        )
        {
            this.code = code;
            this.char = char;
            this.name = name;
            this.foreColor = foreColor;
            this.backColor = backColor;
        }

        /**
         * Cell 複写
         * @param cell コピー元
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
        Paste(cell : ICell) {
            this.code = cell.code;
            this.char = cell.char;
            this.name = cell.name;
            this.foreColor = cell.foreColor;
            this.backColor = cell.backColor;
        }

    }


}
