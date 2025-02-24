"use strict";
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />
/** 対ブラウザ表示処理 */
var cellgame;
(function (cellgame) {
    /** 全体を通して何かエラーがあった場合 */
    cellgame.IsError = false;
    /** 升のコード[cell番地] */
    var gCodes;
    /** バックカラーのフラッシュの有無 */
    var gFlashFlgs;
    /** ブラウザ最初期処理 */
    window.onload = function () {
        pageInit();
        if (cellgame.IsError) {
            alert("Init " + cellgame.IsError);
        }
        // gameReset();
        canvasResize();
        writerCall();
        // 定期的に更新（アニメーション、フラッシュ効果）
        setInterval(writerCall, 100);
    };
    /** ブラウザ要素のサイズ計算 */
    function CalcGameSize(cellCount) {
        if (!cellgame.CVS)
            return;
        // 大外枠の計算
        if (cellgame.CVS.width > cellgame.CVS.height) {
            cellgame.gP0 = Math.floor(cellgame.CVS.height / 200);
            cellgame.gP1 = Math.floor(cellgame.CVS.height / 100);
            cellgame.gW0 = cellgame.CVS.height - cellgame.gP0 * 2;
            cellgame.gH0 = cellgame.CVS.height - cellgame.gP0 * 2;
            cellgame.gWM0 = Math.floor((cellgame.CVS.width - cellgame.CVS.height) / 2);
            cellgame.gHM0 = 0;
        }
        else {
            cellgame.gP0 = Math.floor(cellgame.CVS.width / 200);
            cellgame.gP1 = Math.floor(cellgame.CVS.width / 100);
            cellgame.gW0 = cellgame.CVS.width - cellgame.gP0 * 2;
            cellgame.gH0 = cellgame.CVS.width - cellgame.gP0 * 2;
            cellgame.gWM0 = 0;
            cellgame.gHM0 = Math.floor((cellgame.CVS.height - cellgame.CVS.width) / 2);
        }
        // 大外枠の表示位置
        cellgame.gX0 = cellgame.gWM0 + cellgame.gP0;
        cellgame.gY0 = cellgame.gHM0 + cellgame.gP0;
        // 盤上の表示位置（上下左右に隙間をつくる）
        cellgame.gX1 = cellgame.gX0 + cellgame.gP1;
        cellgame.gY1 = cellgame.gY0 + cellgame.gP1;
        // 盤上の大きさ(上下左右に隙間をつくる)
        cellgame.gW1 = cellgame.gW0 - cellgame.gP1 * 2;
        cellgame.gH1 = cellgame.gH0 - cellgame.gP1 * 2;
        // 升の表示開始位置（上下左右に隙間をつくる）
        cellgame.gX2 = cellgame.gX1 + cellgame.gP1;
        cellgame.gY2 = cellgame.gY1 + cellgame.gP1;
        // 全升の広さ（仮（隙間をひいた大きさ）
        cellgame.gW2w = cellgame.gW1 - cellgame.gP1 * 2;
        cellgame.gH2w = cellgame.gH1 - cellgame.gP1 * 2;
        // 升に使われる広さ(枠線を除く)
        cellgame.gWm = cellgame.gW2w - cellgame.gP1 * (cellCount + 1);
        cellgame.gHm = cellgame.gH2w - cellgame.gP1 * (cellCount + 1);
        // 升の大きさ
        cellgame.gW3 = Math.floor(cellgame.gWm / cellCount);
        cellgame.gH3 = Math.floor(cellgame.gHm / cellCount);
        // 全升の広さの再計算
        cellgame.gW2 = cellgame.gW3 * cellCount + cellgame.gP1 * (cellCount + 1);
        cellgame.gH2 = cellgame.gH3 * cellCount + cellgame.gP1 * (cellCount + 1);
        // 全升の座標
        // 配列の初期化
        cellgame.gX3 = Array(cellCount * cellCount).fill(0);
        cellgame.gY3 = Array(cellCount * cellCount).fill(0);
        // 座標計算
        for (let y = 0; y < cellCount; y++) {
            for (let x = 0; x < cellCount; x++) {
                let a = cellgame.gameSystem.cellAddress(x, y);
                cellgame.gX3[a] = cellgame.gX2 + cellgame.gP1 + (cellgame.gW3 + cellgame.gP1) * x;
                cellgame.gY3[a] = cellgame.gY2 + cellgame.gP1 + (cellgame.gH3 + cellgame.gP1) * y;
            }
        }
    }
    /** セルゲーム 画面初期化処理 */
    function pageInit() {
        // 升目データの初期化
        cellgame.cellsInit();
        // 升目データの初期値設定
        cellgame.cellsUpdate(0);
        cellgame.gameSystem = new cellgame.CellGameSystem01();
        // // 升目の論理値の初期化（とりあえず１０×１０）
        // gCodes = Array(100).fill(0);
        // gFlashFlgs = Array(100).fill(false);
        // // 升目の広さ
        // gCellWidth = gameSystem.cellCount;
        // canvasの取得
        canvasGetter("a_canvas");
        if (cellgame.IsError)
            return;
        if (cellgame.CVS == null) {
            alert("CANVAS ERROR");
            return;
        }
        // タッチイベントの設定
        // スマホの場合
        if (isSmartphone()) {
            cellgame.CVS.ontouchstart = function (e) {
                if (cellgame.CVS == null)
                    return;
                const rect = cellgame.CVS.getBoundingClientRect();
                var t1 = e.touches[0];
                touchCall(t1.pageX - rect.left, t1.pageY - rect.top);
            };
        }
        else {
            // スマホ以外
            cellgame.CVS.onmousedown = function (e) {
                if (cellgame.CVS == null)
                    return;
                const rect = cellgame.CVS.getBoundingClientRect();
                touchCall(e.clientX - rect.left, e.clientY - rect.top);
            };
        }
        // サイズ変更時のイベントを設定
        addResizeEvent();
        // リサイズ処理の実行
        canvasResize();
        // 画面要素の取得
        cellgame.MAIN_FLEX = elementGetter("MainFlex");
        if (cellgame.IsError)
            return;
        cellgame.INFO_FLEX = elementGetter("InfoFlex");
        if (cellgame.IsError)
            return;
        cellgame.PLAY_WINDOW = elementGetter("PlayWindow");
        if (cellgame.IsError)
            return;
        cellgame.PLAY_FLEX = elementGetter("PlayFlex");
        if (cellgame.IsError)
            return;
        cellgame.GAME_WINDOW = elementGetter("GameWindow");
        if (cellgame.IsError)
            return;
        cellgame.MSG_WINDOW = elementGetter("MsgWindow");
        if (cellgame.IsError)
            return;
        cellgame.INFO_WINDOW = elementGetter("InfoWindow");
        if (cellgame.IsError)
            return;
        cellgame.STS00NAME = elementGetter("sts00Name");
        if (cellgame.IsError)
            return;
        cellgame.STS00VALUE = elementGetter("sts00Value");
        if (cellgame.IsError)
            return;
        cellgame.STS01NAME = elementGetter("sts01Name");
        if (cellgame.IsError)
            return;
        cellgame.STS01VALUE = elementGetter("sts01Value");
        if (cellgame.IsError)
            return;
        cellgame.STS02NAME = elementGetter("sts02Name");
        if (cellgame.IsError)
            return;
        cellgame.STS02VALUE = elementGetter("sts02Value");
        if (cellgame.IsError)
            return;
        cellgame.STS03NAME = elementGetter("sts03Name");
        if (cellgame.IsError)
            return;
        cellgame.STS03VALUE = elementGetter("sts03Value");
        if (cellgame.IsError)
            return;
    }
    cellgame.pageInit = pageInit;
    // cellSystemに移行    
    // /** 番地の数 */
    // export const gCellLength = () : number => gCellWidth * gCellWidth;
    // /** 番地計算 */
    // export function gAddress(x : number, y : number) : number {
    //     if (x < 0 || x >= gCellWidth) return -1;
    //     if (y < 0 || y >= gCellWidth) return -1;
    //     return y * gCellWidth + x;
    // }
    // /** cellコード（x,y指定） */
    // export const gCode = (x : number,y : number) : number => {
    //     let a : number = gAddress(x,y);
    //     if (a < 0) return -1;
    //     return gCodes[a];
    // }
    // /** cellコード設定 (x,y指定) 画面出力込み */
    // export function gCodeSetter(x:number,y:number,code: number) {
    //     let a : number = gAddress(x,y);
    //     if (a < 0) return;
    //     gCodes[a] = code;
    //     writerCall();
    // }
    // /** Flashフラグ(x,y指定) */
    // export const gIsFlash = (x : number,y : number) : boolean => {
    //     let a : number = gAddress(x,y);
    //     if (a < 0) return false;
    //     return gFlashFlgs[a];
    // } 
    // /** Flashフラグ設定(x,y指定) 画面出力込み */
    // export function gIsFlashSetter(x:number,y:number,isFlash:boolean) {
    //     let a : number = gAddress(x,y);
    //     if (a < 0) return;
    //     gFlashFlgs[a] = isFlash;
    //     writerCall();
    // }
    /** タッチ位置の番地 */
    function touchPoint(x, y) {
        let p0 = new cellgame.Point(false, x, y);
        let result = new cellgame.Point();
        for (let a = 0; a < cellgame.gameSystem.addressLength(); a++) {
            let x0 = cellgame.gX3[a];
            let y0 = cellgame.gY3[a];
            let x1 = x0 + cellgame.gW3;
            let y1 = y0 + cellgame.gH3;
            if (x >= x0 && x < x1 && y >= y0 && y < y1) {
                result = cellgame.pointCalc(a, cellgame.gameSystem.cellCount);
                return result;
            }
        }
        return result;
    }
    cellgame.touchPoint = touchPoint;
    /** 要素を取得する */
    function elementGetter(id) {
        const element = document.getElementById(id);
        if (element) {
            return element;
        }
        alert(document.documentElement.outerHTML);
        alert(id + " is error");
        cellgame.IsError = true;
        return null;
    }
    cellgame.elementGetter = elementGetter;
    // canvasの取得
    function canvasGetter(idName) {
        let element = elementGetter(idName);
        if (cellgame.IsError)
            return;
        // canvas設定
        cellgame.CVS = element;
        if (cellgame.CVS == null) {
            cellgame.IsError = true;
            return;
        }
    }
    cellgame.canvasGetter = canvasGetter;
    // 画面サイズ変更の検知
    function addResizeEvent() {
        window.addEventListener('resize', canvasResize);
    }
    cellgame.addResizeEvent = addResizeEvent;
    // 画面サイズ変更
    function canvasResize() {
        if (cellgame.IsError)
            return;
        if (cellgame.CVS == null)
            return;
        let w = window.innerWidth;
        let h = window.innerHeight;
        if (w > h) {
            // 横長の場合
            if (cellgame.PLAY_WINDOW) {
                cellgame.PLAY_WINDOW.style.height = "100%";
                cellgame.PLAY_WINDOW.style.width = "65%";
            }
            if (cellgame.INFO_WINDOW) {
                cellgame.INFO_WINDOW.style.height = "100%";
                cellgame.INFO_WINDOW.style.width = "30%";
            }
            if (cellgame.MAIN_FLEX) {
                cellgame.MAIN_FLEX.style.flexDirection = 'row';
            }
            if (cellgame.INFO_FLEX) {
                cellgame.INFO_FLEX.style.flexDirection = 'column';
            }
        }
        else {
            // 縦長の場合
            if (cellgame.PLAY_WINDOW) {
                cellgame.PLAY_WINDOW.style.height = "90%";
                cellgame.PLAY_WINDOW.style.width = "100%";
            }
            if (cellgame.INFO_WINDOW) {
                cellgame.INFO_WINDOW.style.height = "10%";
                cellgame.INFO_WINDOW.style.width = "100%";
            }
            if (cellgame.MAIN_FLEX) {
                cellgame.MAIN_FLEX.style.flexDirection = 'column';
            }
            if (cellgame.INFO_FLEX) {
                cellgame.INFO_FLEX.style.flexDirection = 'row';
            }
        }
        cellgame.CVSWIDTH = cellgame.CVS.offsetWidth;
        cellgame.CVSHEIGHT = cellgame.CVS.offsetHeight;
        if (cellgame.STS02NAME)
            cellgame.STS02NAME.textContent = "CVS.offsetWidth";
        if (cellgame.STS02VALUE)
            cellgame.STS02VALUE.textContent = cellgame.CVS.offsetWidth.toString();
        if (cellgame.STS03NAME)
            cellgame.STS03NAME.textContent = "CVS.offsetHeight";
        if (cellgame.STS03VALUE)
            cellgame.STS03VALUE.textContent = cellgame.CVS.offsetHeight.toString();
        cellgame.CVS.width = cellgame.CVSWIDTH;
        cellgame.CVS.height = cellgame.CVSHEIGHT;
        writerCall();
    }
    cellgame.canvasResize = canvasResize;
    // タッチイベント関連
    // iOS/Android検出
    function isSmartphone() {
        var ua = navigator.userAgent;
        return (ua.match(/iPhone|iPod|iPad|Android/) !== null);
    }
    cellgame.isSmartphone = isSmartphone;
    function touchCall(x, y) {
        touchHandler(x, y);
    }
    cellgame.touchCall = touchCall;
    // canvasに対するタッチハンドラー
    function touchHandler(x, y) {
        let p = touchPoint(x, y);
        if (p.isUndefined)
            return;
        alert("touchHandler (" + p.x + "," + p.y + ") : " + p.address(cellgame.gameSystem.cellCount));
    }
    function gameReset() {
        // let c = 0;
        // for(let y = 0; y < gameSystem.cellCount; y++) {
        //     for(let x = 0; x < gameSystem.cellCount; x++) {
        //         gameSystem.codeSetter(x,y,c);
        //         gameSystem.isFlashSetter(x,y,false);
        //         c++;
        //         if (c >= cells.length) {
        //             c = 0;
        //         }
        //     }
        // }
    }
    cellgame.gameReset = gameReset;
    // // 定期的に更新（アニメーション、フラッシュ効果）
    // setInterval(writerCall,100);
    // 画面更新処理を呼び出す
    function writerCall() {
        canvasWriter();
    }
    cellgame.writerCall = writerCall;
    /** Canvas Writer */
    function canvasWriter() {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = cellgame.CVS.getContext('2d');
        if (ctx == null) {
            alert("Canvas Context is None");
            return;
        }
        if (cellgame.isNone(cellgame.gameSystem)) {
            alert("GameSystem is None");
            return;
        }
        CalcGameSize(cellgame.gameSystem.cellCount);
        ctx.fillStyle = cellgame.Colors.Black;
        ctx.fillRect(0, 0, cellgame.CVSWIDTH, cellgame.CVSHEIGHT);
        ctx.fillStyle = cellgame.Colors.DarkSlateGray;
        ctx.fillRect(cellgame.gX2, cellgame.gY2, cellgame.gW2, cellgame.gH2);
        AllCellWriter();
        if (cellgame.STS00NAME)
            cellgame.STS00NAME.textContent = "CVSWIDTH";
        if (cellgame.STS00VALUE)
            cellgame.STS00VALUE.textContent = cellgame.CVSWIDTH.toString();
        if (cellgame.STS01NAME)
            cellgame.STS01NAME.textContent = "Height";
        if (cellgame.STS01VALUE)
            cellgame.STS01VALUE.textContent = cellgame.CVSHEIGHT.toString();
    }
    cellgame.canvasWriter = canvasWriter;
    /** Box Writer */
    function BoxWriter(backColor, x, y, isFlash) {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = cellgame.CVS.getContext('2d');
        if (ctx == null)
            return;
        let a = cellgame.gameSystem.cellAddress(x, y);
        let left = cellgame.gX3[a] - cellgame.gP1;
        let top = cellgame.gY3[a] - cellgame.gP1;
        let width = cellgame.gW3 + cellgame.gP1 * 2;
        let height = cellgame.gW3 + cellgame.gP1 * 2;
        ctx.fillStyle = cellgame.isRandomColor(isFlash, backColor);
        ctx.fillRect(left, top, width, height);
    }
    cellgame.BoxWriter = BoxWriter;
    /** Border Writer */
    function BorderWriter(backColor, x0, y0, x1, y1, isFlash) {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = cellgame.CVS.getContext('2d');
        if (ctx == null)
            return;
        let px0 = x0 * (cellgame.gP1 + cellgame.gW3);
        let py0 = y0 * (cellgame.gP1 + cellgame.gH3);
        let px1 = x1 * (cellgame.gP1 + cellgame.gW3) + cellgame.gP1 - px0;
        let py1 = y1 * (cellgame.gP1 + cellgame.gH3) + cellgame.gP1 - py0;
        ctx.fillStyle = cellgame.isRandomColor(isFlash, backColor);
        ctx.fillRect(cellgame.gX2 + px0, cellgame.gY2 + py0, px1, py1);
    }
    cellgame.BorderWriter = BorderWriter;
    /** Text Writer : 升目に文字と背景色を記入 */
    function TextWriter(char, foreColor, backColor, left, top, width, height, isFlash) {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = cellgame.CVS.getContext('2d');
        if (ctx == null)
            return;
        if (char.length < 1)
            return;
        let char0 = char.substring(0, 1);
        // フォントサイズを計算
        let fontSize = Math.min(width, height);
        ctx.font = `${fontSize}px serif`;
        // テキストの位置を計算して描画
        let charWidth = ctx.measureText(char0).width;
        let textX = (width - charWidth) / 2;
        let textY = (height + fontSize * 0.75) / 2;
        ctx.fillStyle = cellgame.isRandomColor(isFlash, backColor);
        ctx.fillRect(left, top, width, height);
        ctx.fillStyle = foreColor;
        ctx.fillText(char0, left + textX, top + textY);
    }
    cellgame.TextWriter = TextWriter;
    function CellWriter(x, y, isFlash) {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        let a = cellgame.gameSystem.cellAddress(x, y);
        let c = cellgame.gameSystem.codes[a];
        TextWriter(cellgame.cells[c].char, cellgame.cells[c].foreColor, cellgame.cells[c].backColor, cellgame.gX3[a], cellgame.gY3[a], cellgame.gW3, cellgame.gH3, isFlash);
    }
    cellgame.CellWriter = CellWriter;
    function AllCellWriter() {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        for (let y = 0; y < cellgame.gameSystem.cellCount; y++) {
            for (let x = 0; x < cellgame.gameSystem.cellCount; x++) {
                let a = cellgame.gameSystem.cellAddress(x, y);
                if (cellgame.gameSystem.codes[a] < cellgame.cells.length) {
                    CellWriter(x, y, cellgame.gameSystem.isflashes[a]);
                }
            }
        }
    }
    cellgame.AllCellWriter = AllCellWriter;
})(cellgame || (cellgame = {}));
