namespace cellgame {
    /** Cell設定 */
    export var cells: ICell[] = [];

    /** Cell設定の初期化 */
    export function cellSetting(set : number) {
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

    /** Cell 規定値 00 */
    export const cells00 : ICell[] = [
        new Cell(0,"　","無し",Colors.White,Colors.Black)
        ,
        new Cell(1,"士","武士",Colors.White,Colors.Red)
        ,
        new Cell(2,"農","農民",Colors.White,Colors.DarkOrange)
        ,
        new Cell(3,"工","職人",Colors.White,Colors.DarkBlue)
        ,
        new Cell(4,"商","商人",Colors.White,Colors.DarkGreen)
    ];

    /** Cell 規定値 01 */
    export const cells01 : ICell[] = [
        new Cell(0,"　","無し",Colors.White,Colors.Black)
        ,
        new Cell(1,"侍","武士",Colors.White,Colors.Red)
        ,
        new Cell(2,"農","農民",Colors.White,Colors.DarkOrange)
        ,
        new Cell(3,"工","職人",Colors.White,Colors.DarkBlue)
        ,
        new Cell(4,"商","商人",Colors.White,Colors.DarkGreen)
    ];

    /** Cell 規定値 02 */
    export const cells02 : ICell[] = [
        new Cell(0,"　","無し",Colors.White,Colors.Black)
        ,
        new Cell(1,"Ｓ","Samurai：侍",Colors.White,Colors.Red)
        ,
        new Cell(2,"Ｆ","Farmer：農民",Colors.White,Colors.DarkOrange)
        ,
        new Cell(3,"Ａ","Artisans：職人",Colors.White,Colors.DarkBlue)
        ,
        new Cell(4,"Ｍ","Merchants：商人",Colors.White,Colors.DarkGreen)
    ];
    

}
