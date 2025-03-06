"use strict";
/// <reference path="cellgameSub.ts" />
var cellgame;
(function (cellgame) {
    /** Cell設定 */
    cellgame.cells = [];
    function cellsInit() {
        cellgame.cells00 = [];
        cellgame.cells00[0] = new Cell(0, "・", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
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
        /** Cell 規定値 01 */
        cellgame.cells01 = [];
        cellgame.cells01[0] = new Cell(0, "・", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
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
        /** Cell 規定値 02 */
        cellgame.cells02 = [];
        cellgame.cells02[0] = new Cell(0, "・", "虚無", cellgame.Colors.White, cellgame.Colors.Black);
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
})(cellgame || (cellgame = {}));
