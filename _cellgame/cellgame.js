"use strict";
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />
/** 対ブラウザ表示処理 */
var cellgame;
(function (cellgame) {
    /** 全体を通して何かエラーがあった場合 */
    var IsError = false;
    /** ゲームシステム インターフェース */
    var gameSystem;
    // GetCanvas('a_canvas');
    // ブラウザ要素確保先
    /** ブラウザページを使用する部分 下に余白を付ける */
    var MAIN_FLEX;
    /** ゲームに使用する部分 */
    var PLAY_FLEX;
    /** スコアなど情報表示する部分 */
    var INFO_FLEX;
    /** ゲームに使用する領域 */
    var PLAY_WINDOW;
    /** ゲーム盤に使用する領域 */
    var GAME_WINDOW;
    /** ゲーム中のメッセージなどを表示する領域 */
    var MSG_WINDOW;
    /** 情報表示する領域 */
    var INFO_WINDOW;
    /** Canvas要素を紐付け */
    var CVS;
    /** Canvasの幅 */
    var CVSWIDTH;
    /** Canvasの丈 */
    var CVSHEIGHT;
    /** 情報表示 名称 00 */
    var STS00NAME;
    /** 情報表示 値 00 */
    var STS00VALUE;
    /** 情報表示 名称 01 */
    var STS01NAME;
    /** 情報表示 値 01 */
    var STS01VALUE;
    /** 情報表示 名称 02 */
    var STS02NAME;
    /** 情報表示 値 02 */
    var STS02VALUE;
    /** 情報表示 名称 03 */
    var STS03NAME;
    /** 情報表示 値 03 */
    var STS03VALUE;
    // ゲーム枠座標
    // W:幅 H:丈 X:横位置 Y:縦位置 P:隙間（縦横同一） M:余白（縦横別）
    // 正方形に切り取る大外枠
    // Canvas 
    // → 大外枠：Canvasから隙間を空けた大外枠 
    // → ゲーム盤：大外枠から正方形に切り取ったゲーム盤
    // → 升目：ゲーム盤から隙間を空けた升目
    /** 大外枠：幅 */
    var gW0;
    /** 大外枠：丈 */
    var gH0;
    /** Canvas → 大外枠の隙間 */
    var gP0;
    // Canvas → 大外枠の表示位置
    /** 大外枠の表示位置：横 */
    var gX0;
    /** 大外枠の表示位置：縦 */
    var gY0;
    // 大外枠の余白：ゲーム盤を正方形にするために使用
    /** 大外枠→ゲーム盤の左右の余白 */
    var gWM0;
    /** 大外枠→ゲーム盤の上下の余白 */
    var gHM0;
    /** 盤上のあらゆる隙間 */
    var gP1;
    // ゲーム盤の表示位置
    /** ゲーム盤の開始位置：横 */
    var gX1;
    /** ゲーム盤の開始位置：縦 */
    var gY1;
    // ゲーム盤の大きさ
    /** ゲーム盤の大きさ：幅 */
    var gW1;
    /** ゲーム盤の大きさ：丈 */
    var gH1;
    /** 升目の個々の幅・丈（正方形） */
    var gCellWidth;
    // 全升の広さ（仮計算
    /** 全升の幅 */
    var gW2w;
    /** 全升の丈 */
    var gH2w;
    // 枠線の幅を除いた升に使われる広さ
    /** 枠線の幅を除いた升に使われる広さ：幅 */
    var gWm;
    /** 枠線の幅を除いた升に使われる広さ：丈 */
    var gHm;
    // 升の表示開始位置：ゲーム升の外の枠線を除いた位置
    /** 升の表示開始位置：横 */
    var gX2;
    /** 升の表示開始位置：縦 */
    var gY2;
    // 全升の広さ：升の数で割ると個々の升目の広さになる
    /** 全升の広さ：幅 */
    var gW2;
    /** 全升の広さ：丈 */
    var gH2;
    // 升の大きさ
    /** 個々の升の広さ：幅 */
    var gW3;
    /** 個々の升の広さ：丈 */
    var gH3;
    // 升の座標[cell番地]
    /** 升の座標[cell番地]：横 */
    var gX3;
    /** 升の座標[cell番地]：縦 */
    var gY3;
    /** 升のコード[cell番地] */
    var gCodes;
    /** バックカラーのフラッシュの有無 */
    var gFlashFlgs;
    /** ブラウザ最初期処理 */
    window.onload = function () {
        pageInit(gameSystem !== null && gameSystem !== void 0 ? gameSystem : new cellgame.CellGameSystem01());
        if (IsError) {
            alert("Init " + IsError);
        }
        // gameReset();
        canvasResize();
        writerCall();
    };
    /** ブラウザ要素のサイズ計算 */
    function CalcGameSize(cellCount, cvs) {
        if (!cvs)
            return;
        // 大外枠の計算
        if (cvs.width > cvs.height) {
            gP0 = Math.floor(cvs.height / 200);
            gP1 = Math.floor(cvs.height / 100);
            gW0 = cvs.height - gP0 * 2;
            gH0 = cvs.height - gP0 * 2;
            gWM0 = Math.floor((cvs.width - cvs.height) / 2);
            gHM0 = 0;
        }
        else {
            gP0 = Math.floor(cvs.width / 200);
            gP1 = Math.floor(cvs.width / 100);
            gW0 = cvs.width - gP0 * 2;
            gH0 = cvs.width - gP0 * 2;
            gWM0 = 0;
            gHM0 = Math.floor((cvs.height - cvs.width) / 2);
        }
        // 大外枠の表示位置
        gX0 = gWM0 + gP0;
        gY0 = gHM0 + gP0;
        // 盤上の表示位置（上下左右に隙間をつくる）
        gX1 = gX0 + gP1;
        gY1 = gY0 + gP1;
        // 盤上の大きさ(上下左右に隙間をつくる)
        gW1 = gW0 - gP1 * 2;
        gH1 = gH0 - gP1 * 2;
        // 升の表示開始位置（上下左右に隙間をつくる）
        gX2 = gX1 + gP1;
        gY2 = gY1 + gP1;
        // 全升の広さ（仮（隙間をひいた大きさ）
        gW2w = gW1 - gP1 * 2;
        gH2w = gH1 - gP1 * 2;
        // 升に使われる広さ(枠線を除く)
        gWm = gW2w - gP1 * (cellCount + 1);
        gHm = gH2w - gP1 * (cellCount + 1);
        // 升の大きさ
        gW3 = Math.floor(gWm / cellCount);
        gH3 = Math.floor(gHm / cellCount);
        // 全升の広さの再計算
        gW2 = gW3 * cellCount + gP1 * (cellCount + 1);
        gH2 = gH3 * cellCount + gP1 * (cellCount + 1);
        // 全升の座標
        // 配列の初期化
        gX3 = Array(cellCount * cellCount).fill(0);
        gY3 = Array(cellCount * cellCount).fill(0);
        // 座標計算
        for (let y = 0; y < cellCount; y++) {
            for (let x = 0; x < cellCount; x++) {
                let a = gameSystem.cellAddress(x, y);
                gX3[a] = gX2 + gP1 + (gW3 + gP1) * x;
                gY3[a] = gY2 + gP1 + (gH3 + gP1) * y;
            }
        }
    }
    /** セルゲーム 画面初期化処理 */
    function pageInit(cellgameSystem) {
        gameSystem = cellgameSystem;
        // 升目の論理値の初期化（とりあえず１０×１０）
        gCodes = Array(100).fill(0);
        gFlashFlgs = Array(100).fill(false);
        // 升目データの初期化
        cellgame.cellsInit();
        // 升目データの初期値設定
        cellgame.cellsUpdate(0);
        // // 升目の広さ
        // gCellWidth = gameSystem.cellCount;
        // canvasの取得
        canvasGetter("a_canvas");
        if (IsError)
            return;
        if (CVS == null) {
            alert("CANVAS ERROR");
            return;
        }
        // タッチイベントの設定
        // スマホの場合
        if (isSmartphone()) {
            CVS.ontouchstart = function (e) {
                if (CVS == null)
                    return;
                const rect = CVS.getBoundingClientRect();
                var t1 = e.touches[0];
                touchCall(t1.pageX - rect.left, t1.pageY - rect.top);
            };
        }
        else {
            // スマホ以外
            CVS.onmousedown = function (e) {
                if (CVS == null)
                    return;
                const rect = CVS.getBoundingClientRect();
                touchCall(e.clientX - rect.left, e.clientY - rect.top);
            };
        }
        // サイズ変更時のイベントを設定
        addResizeEvent();
        // リサイズ処理の実行
        canvasResize();
        // 画面要素の取得
        MAIN_FLEX = elementGetter("MainFlex");
        if (IsError)
            return;
        INFO_FLEX = elementGetter("InfoFlex");
        if (IsError)
            return;
        PLAY_WINDOW = elementGetter("PlayWindow");
        if (IsError)
            return;
        PLAY_FLEX = elementGetter("PlayFlex");
        if (IsError)
            return;
        GAME_WINDOW = elementGetter("GameWindow");
        if (IsError)
            return;
        MSG_WINDOW = elementGetter("MsgWindow");
        if (IsError)
            return;
        INFO_WINDOW = elementGetter("InfoWindow");
        if (IsError)
            return;
        STS00NAME = elementGetter("sts00Name");
        if (IsError)
            return;
        STS00VALUE = elementGetter("sts00Value");
        if (IsError)
            return;
        STS01NAME = elementGetter("sts01Name");
        if (IsError)
            return;
        STS01VALUE = elementGetter("sts01Value");
        if (IsError)
            return;
        STS02NAME = elementGetter("sts02Name");
        if (IsError)
            return;
        STS02VALUE = elementGetter("sts02Value");
        if (IsError)
            return;
        STS03NAME = elementGetter("sts03Name");
        if (IsError)
            return;
        STS03VALUE = elementGetter("sts03Value");
        if (IsError)
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
        for (let a = 0; a < gameSystem.addressLength(); a++) {
            let x0 = gX3[a];
            let y0 = gY3[a];
            let x1 = x0 + gW3;
            let y1 = y0 + gH3;
            if (x >= x0 && x < x1 && y >= y0 && y < y1) {
                result = cellgame.pointCalc(a, gameSystem.cellCount);
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
        IsError = true;
        return null;
    }
    cellgame.elementGetter = elementGetter;
    // canvasの取得
    function canvasGetter(idName) {
        let element = elementGetter(idName);
        if (IsError)
            return;
        // canvas設定
        CVS = element;
        if (CVS == null) {
            IsError = true;
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
        if (IsError)
            return;
        if (CVS == null)
            return;
        let w = window.innerWidth;
        let h = window.innerHeight;
        if (w > h) {
            // 横長の場合
            if (PLAY_WINDOW) {
                PLAY_WINDOW.style.height = "100%";
                PLAY_WINDOW.style.width = "65%";
            }
            if (INFO_WINDOW) {
                INFO_WINDOW.style.height = "100%";
                INFO_WINDOW.style.width = "30%";
            }
            if (MAIN_FLEX) {
                MAIN_FLEX.style.flexDirection = 'row';
            }
            if (INFO_FLEX) {
                INFO_FLEX.style.flexDirection = 'column';
            }
        }
        else {
            // 縦長の場合
            if (PLAY_WINDOW) {
                PLAY_WINDOW.style.height = "90%";
                PLAY_WINDOW.style.width = "100%";
            }
            if (INFO_WINDOW) {
                INFO_WINDOW.style.height = "10%";
                INFO_WINDOW.style.width = "100%";
            }
            if (MAIN_FLEX) {
                MAIN_FLEX.style.flexDirection = 'column';
            }
            if (INFO_FLEX) {
                INFO_FLEX.style.flexDirection = 'row';
            }
        }
        CVSWIDTH = CVS.offsetWidth;
        CVSHEIGHT = CVS.offsetHeight;
        if (STS02NAME)
            STS02NAME.textContent = "CVS.offsetWidth";
        if (STS02VALUE)
            STS02VALUE.textContent = CVS.offsetWidth.toString();
        if (STS03NAME)
            STS03NAME.textContent = "CVS.offsetHeight";
        if (STS03VALUE)
            STS03VALUE.textContent = CVS.offsetHeight.toString();
        CVS.width = CVSWIDTH;
        CVS.height = CVSHEIGHT;
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
        touchHandler(x, y, CVS, CVSWIDTH, CVSHEIGHT);
    }
    cellgame.touchCall = touchCall;
    // canvasに対するタッチハンドラー
    function touchHandler(x, y, canvas, width, height) {
        let p = touchPoint(x, y);
        if (p.isUndefined)
            return;
        alert("touchHandler (" + p.x + "," + p.y + ") : " + p.address(gameSystem.cellCount));
    }
    function gameReset() {
        let c = 0;
        for (let y = 0; y < gameSystem.cellCount; y++) {
            for (let x = 0; x < gameSystem.cellCount; x++) {
                gameSystem.codeSetter(x, y, c);
                gameSystem.isFlashSetter(x, y, false);
                c++;
                if (c >= cellgame.cells.length) {
                    c = 0;
                }
            }
        }
    }
    cellgame.gameReset = gameReset;
    // 定期的に更新（アニメーション、フラッシュ効果）
    setInterval(writerCall, 100);
    // 画面更新処理を呼び出す
    function writerCall() {
        canvasWriter(CVS, CVSWIDTH, CVSHEIGHT);
    }
    cellgame.writerCall = writerCall;
    /** Canvas Writer */
    function canvasWriter(canvas, width, height) {
        if (cellgame.isNone(canvas)) {
            alert("Canvas is None");
            return;
        }
        let ctx = canvas.getContext('2d');
        if (ctx == null) {
            alert("Canvas Context is None");
            return;
        }
        if (cellgame.isNone(gameSystem)) {
            alert("GameSystem is None");
            return;
        }
        CalcGameSize(gameSystem.cellCount, canvas);
        ctx.fillStyle = cellgame.Colors.Black;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = cellgame.Colors.DarkSlateGray;
        ctx.fillRect(gX2, gY2, gW2, gH2);
        AllCellWriter(canvas);
        if (STS00NAME)
            STS00NAME.textContent = "width";
        if (STS00VALUE)
            STS00VALUE.textContent = width.toString();
        if (STS01NAME)
            STS01NAME.textContent = "Height";
        if (STS01VALUE)
            STS01VALUE.textContent = height.toString();
    }
    cellgame.canvasWriter = canvasWriter;
    /** Box Writer */
    function BoxWriter(canvas, backColor, x, y, isFlash) {
        if (canvas == null || canvas == undefined)
            return;
        let ctx = canvas.getContext('2d');
        if (ctx == null)
            return;
        let a = gameSystem.cellAddress(x, y);
        let left = gX3[a] - gP1;
        let top = gY3[a] - gP1;
        let width = gW3 + gP1 * 2;
        let height = gW3 + gP1 * 2;
        ctx.fillStyle = cellgame.isRandomColor(isFlash, backColor);
        ctx.fillRect(left, top, width, height);
    }
    cellgame.BoxWriter = BoxWriter;
    /** Border Writer */
    function BorderWriter(canvas, backColor, x0, y0, x1, y1, isFlash) {
        if (canvas == null || canvas == undefined)
            return;
        let ctx = canvas.getContext('2d');
        if (ctx == null)
            return;
        let px0 = x0 * (gP1 + gW3);
        let py0 = y0 * (gP1 + gH3);
        let px1 = x1 * (gP1 + gW3) + gP1 - px0;
        let py1 = y1 * (gP1 + gH3) + gP1 - py0;
        ctx.fillStyle = cellgame.isRandomColor(isFlash, backColor);
        ctx.fillRect(gX2 + px0, gY2 + py0, px1, py1);
    }
    cellgame.BorderWriter = BorderWriter;
    /** Text Writer : 升目に文字と背景色を記入 */
    function TextWriter(canvas, char, foreColor, backColor, left, top, width, height, isFlash) {
        if (canvas == null || canvas == undefined)
            return;
        let ctx = canvas.getContext('2d');
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
    function CellWriter(canvas, code, x, y, isFlash) {
        if (canvas == null || canvas == undefined)
            return;
        let a = gameSystem.cellAddress(x, y);
        let c = gameSystem.codes[a];
        TextWriter(canvas, cellgame.cells[c].char, cellgame.cells[c].foreColor, cellgame.cells[c].backColor, gX3[a], gY3[a], gW3, gH3, isFlash);
    }
    cellgame.CellWriter = CellWriter;
    function AllCellWriter(canvas) {
        if (canvas == null || canvas == undefined)
            return;
        for (let y = 0; y < gameSystem.cellCount; y++) {
            for (let x = 0; x < gameSystem.cellCount; x++) {
                let a = gameSystem.cellAddress(x, y);
                if (gameSystem.codes[a] < cellgame.cells.length) {
                    CellWriter(canvas, gameSystem.codes[a], x, y, gameSystem.isflashes[a]);
                }
            }
        }
    }
    cellgame.AllCellWriter = AllCellWriter;
})(cellgame || (cellgame = {}));
