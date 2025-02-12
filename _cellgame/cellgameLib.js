"use strict";
var cellgame;
(function (cellgame) {
    /** Cell設定 */
    cellgame.cells = [];
    function cellsInit() {
        cellgame.cells00 = [];
        cellgame.cells00[0] = new Cell(0, "　", "無し", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells00[1] = new Cell(1, "士", "武士", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells00[2] = new Cell(2, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.cells00[3] = new Cell(3, "工", "職人", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.cells00[4] = new Cell(4, "商", "商人", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        /** Cell 規定値 01 */
        cellgame.cells01 = [];
        cellgame.cells01[0] = new Cell(0, "　", "無し", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells01[1] = new Cell(1, "侍", "武士", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells01[2] = new Cell(2, "農", "農民", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.cells01[3] = new Cell(3, "工", "職人", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.cells01[4] = new Cell(4, "商", "商人", cellgame.Colors.White, cellgame.Colors.DarkGreen);
        /** Cell 規定値 02 */
        cellgame.cells02 = [];
        cellgame.cells[0] = new Cell(0, "　", "無し", cellgame.Colors.White, cellgame.Colors.Black);
        cellgame.cells[1] = new Cell(1, "Ｓ", "Samurai：侍", cellgame.Colors.White, cellgame.Colors.Red);
        cellgame.cells[2] = new Cell(2, "Ｆ", "Farmer：農民", cellgame.Colors.White, cellgame.Colors.DarkOrange);
        cellgame.cells[3] = new Cell(3, "Ａ", "Artisans：職人", cellgame.Colors.White, cellgame.Colors.DarkBlue);
        cellgame.cells[4] = new Cell(4, "Ｍ", "Merchants：商人", cellgame.Colors.White, cellgame.Colors.DarkGreen);
    }
    cellgame.cellsInit = cellsInit;
    /** Cell設定の選択 */
    function cellsUpdate(set) {
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
    cellgame.cellsUpdate = cellsUpdate;
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
})(cellgame || (cellgame = {}));
