"use strict";
var cellgame;
(function (cellgame) {
    /** Cell設定 */
    cellgame.cells = [];
    /** Cell設定の初期化 */
    function cellSetting(set) {
        switch (set) {
            case 0: {
                cellgame.cells = cellgame.cells00;
                break;
            }
            case 1: {
                cellgame.cells = cellgame.cells01;
                break;
            }
            case 2: {
                cellgame.cells = cellgame.cells02;
                break;
            }
            default: {
                cellgame.cells = cellgame.cells00;
            }
        }
    }
    cellgame.cellSetting = cellSetting;
    /**
     * class Cell
     */
    class Cell {
        /** コンストラクタ */
        constructor(code = 0, char = '　', name = '', foreColor = cellgame.Colors.White, backColor = cellgame.Colors.Black) {
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
        }
    }
    cellgame.Cell = Cell;
    /** Cell 規定値 00 */
    cellgame.cells00 = [
        new Cell(0, "　", "無し", cellgame.Colors.White, cellgame.Colors.Black),
        new Cell(1, "士", "武士", cellgame.Colors.White, cellgame.Colors.Red),
        new Cell(2, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange),
        new Cell(3, "工", "職人", cellgame.Colors.White, cellgame.Colors.DarkBlue),
        new Cell(4, "商", "商人", cellgame.Colors.White, cellgame.Colors.DarkGreen)
    ];
    /** Cell 規定値 01 */
    cellgame.cells01 = [
        new Cell(0, "　", "無し", cellgame.Colors.White, cellgame.Colors.Black),
        new Cell(1, "侍", "武士", cellgame.Colors.White, cellgame.Colors.Red),
        new Cell(2, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange),
        new Cell(3, "工", "職人", cellgame.Colors.White, cellgame.Colors.DarkBlue),
        new Cell(4, "商", "商人", cellgame.Colors.White, cellgame.Colors.DarkGreen)
    ];
    /** Cell 規定値 02 */
    cellgame.cells02 = [
        new Cell(0, "　", "無し", cellgame.Colors.White, cellgame.Colors.Black),
        new Cell(1, "Ｓ", "Samurai：侍", cellgame.Colors.White, cellgame.Colors.Red),
        new Cell(2, "Ｆ", "Farmer：農民", cellgame.Colors.White, cellgame.Colors.DarkOrange),
        new Cell(3, "Ａ", "Artisans：職人", cellgame.Colors.White, cellgame.Colors.DarkBlue),
        new Cell(4, "Ｍ", "Merchants：商人", cellgame.Colors.White, cellgame.Colors.DarkGreen)
    ];
})(cellgame || (cellgame = {}));
