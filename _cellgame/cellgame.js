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
    cellgame.wasPageInit = false;
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
        displayCall();
        // 定期的に更新（アニメーション、フラッシュ効果）
        setInterval(displayCall, 100);
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
        cellgame.STSBOX = Array(4).fill(null);
        cellgame.STSNAME = Array(4).fill(null);
        cellgame.STSVALUE = Array(4).fill(null);
        cellgame.STSBOX[0] = elementGetter("sts00Box");
        cellgame.STSNAME[0] = elementGetter("sts00Name");
        cellgame.STSVALUE[0] = elementGetter("sts00Value");
        cellgame.STSBOX[1] = elementGetter("sts01Box");
        cellgame.STSNAME[1] = elementGetter("sts01Name");
        cellgame.STSVALUE[1] = elementGetter("sts01Value");
        cellgame.STSBOX[2] = elementGetter("sts02Box");
        cellgame.STSNAME[2] = elementGetter("sts02Name");
        cellgame.STSVALUE[2] = elementGetter("sts02Value");
        cellgame.STSBOX[3] = elementGetter("sts03Box");
        cellgame.STSNAME[3] = elementGetter("sts03Name");
        cellgame.STSVALUE[3] = elementGetter("sts03Value");
        cellgame.wasPageInit = true;
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
        cellgame.CVS.width = cellgame.CVSWIDTH;
        cellgame.CVS.height = cellgame.CVSHEIGHT;
        displayCall();
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
        touchPointSend(p);
    }
    /** タッチ箇所送信 */
    function touchPointSend(p) {
        if (cellgame.isNone(cellgame.gameSystem))
            return;
        cellgame.gameSystem.touchPointRecv(p);
    }
    cellgame.touchPointSend = touchPointSend;
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
    // 画面更新処理を呼び出す
    function displayCall() {
        if (!cellgame.wasPageInit)
            return;
        if (cellgame.isNone(cellgame.gameSystem))
            return;
        cellgame.gameSystem.displayMaker();
        canvasDisplay();
        messagesDisplay();
        allStatusDisplay();
    }
    cellgame.displayCall = displayCall;
    /** Canvas Writer */
    function canvasDisplay() {
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
        ctx.fillStyle = cellgame.gameSystem.backColor;
        ctx.fillRect(0, 0, cellgame.CVSWIDTH, cellgame.CVSHEIGHT);
        ctx.fillStyle = cellgame.gameSystem.backColor;
        ctx.fillRect(cellgame.gX2, cellgame.gY2, cellgame.gW2, cellgame.gH2);
        AllCellDisplay();
    }
    cellgame.canvasDisplay = canvasDisplay;
    /** 全ステータス表示 */
    function allStatusDisplay() {
        if (cellgame.isNone(cellgame.gameSystem)) {
            alert("GameSystem is None");
            return;
        }
        for (let i = 0; i < 4; i++) {
            statusDisplay(i);
        }
    }
    cellgame.allStatusDisplay = allStatusDisplay;
    /** ステータス表示 */
    function statusDisplay(statusIndex) {
        if (cellgame.isNone(cellgame.gameSystem)) {
            alert("GameSystem is None");
            return;
        }
        let i = statusIndex;
        if (i < 0 || i >= 4)
            return;
        let box = cellgame.STSBOX[i];
        if (cellgame.isNone(box))
            return;
        let name = cellgame.STSNAME[i];
        if (cellgame.isNone(name))
            return;
        let value = cellgame.STSVALUE[i];
        if (cellgame.isNone(value))
            return;
        if (cellgame.gameSystem.statusName[i].length < 1) {
            box.style.backgroundColor = cellgame.Colors.Black;
            name.textContent = "";
            value.textContent = "";
        }
        else {
            box.style.backgroundColor = cellgame.Colors.DarkBlue;
            name.textContent = cellgame.gameSystem.statusName[i];
            if (cellgame.gameSystem.status[i] < 0) {
                value.textContent = "";
            }
            else {
                value.textContent = cellgame.gameSystem.status[i].toString();
            }
        }
    }
    cellgame.statusDisplay = statusDisplay;
    /** Box Writer */
    function boxDisplay(backColor, x, y, isFlash) {
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
    cellgame.boxDisplay = boxDisplay;
    /** Border Writer */
    function borderDisplay(backColor, x0, y0, x1, y1, isFlash) {
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
    cellgame.borderDisplay = borderDisplay;
    /** Text Writer : 升目に文字と背景色を記入 */
    function cellTextDisplay(char, foreColor, backColor, left, top, width, height, isFlash) {
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
    cellgame.cellTextDisplay = cellTextDisplay;
    /** 升目の表示 */
    function cellDisplay(x, y) {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        let a = cellgame.gameSystem.cellAddress(x, y);
        let c = cellgame.gameSystem.codes[a];
        cellTextDisplay(cellgame.cells[c].char, cellgame.cells[c].foreColor, cellgame.cells[c].backColor, cellgame.gX3[a], cellgame.gY3[a], cellgame.gW3, cellgame.gH3, cellgame.cells[c].isFlash);
    }
    cellgame.cellDisplay = cellDisplay;
    /**
     * 全メッセージ表示
     */
    function messagesDisplay() {
        if (cellgame.isNone(cellgame.gameSystem))
            return;
        for (let i = 0; i < cellgame.gameSystem.messages.length; i++) {
            cellgame.messageDisplay(cellgame.gameSystem.messages[i]);
        }
    }
    cellgame.messagesDisplay = messagesDisplay;
    /** メッセージ表示
     * @param message : メッセージ
     */
    cellgame.messageDisplay = (message) => textDisplay(message.text, message.x, message.y, message.foreColor, message.backColor, message.isFlash);
    /** 文字列表示
     * @param text : 表示文字列
     * @param x : 横位置
     * @param y : 縦位置
     * @param foreColor : 文字色
     * @param backColor : 背景色
     */
    function textDisplay(text, x, y, foreColor, backColor, isFlash) {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = cellgame.CVS.getContext('2d');
        if (ctx == null)
            return;
        if (text.length < 1)
            return;
        if (x < 0 || x >= cellgame.gameSystem.cellCount)
            return;
        if (y < 0 || y >= cellgame.gameSystem.cellCount)
            return;
        let fontSize = Math.min(cellgame.gW3, cellgame.gH3) * 0.75;
        ctx.font = `${fontSize}px serif`;
        // テキストの位置を計算して描画
        let textX = (cellgame.gW3 - fontSize) / 2;
        let textY = (cellgame.gH3 + fontSize * 0.75) / 2;
        let marginY = (fontSize * 0.25) / 2;
        let a = cellgame.gameSystem.cellAddress(x, y);
        let charWidth = ctx.measureText(text).width;
        ctx.fillStyle = cellgame.isRandomColor(isFlash, backColor);
        ctx.fillRect(cellgame.gX3[a] + textX, cellgame.gY3[a] + marginY, charWidth, fontSize);
        ctx.fillStyle = foreColor;
        ctx.fillText(text, cellgame.gX3[a] + textX, cellgame.gY3[a] + textY);
    }
    cellgame.textDisplay = textDisplay;
    /** 全升 表示 */
    function AllCellDisplay() {
        if (cellgame.isNone(cellgame.CVS)) {
            // alert("Canvas is None");
            return;
        }
        for (let y = 0; y < cellgame.gameSystem.cellCount; y++) {
            for (let x = 0; x < cellgame.gameSystem.cellCount; x++) {
                let a = cellgame.gameSystem.cellAddress(x, y);
                if (cellgame.gameSystem.codes[a] < cellgame.cells.length) {
                    cellDisplay(x, y);
                }
            }
        }
    }
    cellgame.AllCellDisplay = AllCellDisplay;
})(cellgame || (cellgame = {}));
