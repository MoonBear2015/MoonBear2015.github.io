
/** 対ブラウザ表示処理 */
// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />

namespace cellgame {
    /** 全体を通して何かエラーがあった場合 */
    export var IsError : boolean = false;

    export var wasPageInit : boolean = false;

    /** ゲームシステム インターフェース */
    export var gameSystem : ICellGameSystem;

    export var gameSystems : ICellGameSystem[] = [];

    /** ゲーム番号 */
    export var selectGameNo = 1;
    /** 文字番号 */
    export var selectCharNo = 0;

    // GetCanvas('a_canvas');

    // ブラウザ要素確保先

    /** ブラウザページを使用する部分 下に余白を付ける */
    export var MAIN_FLEX : HTMLDivElement | null;

    /** ゲームに使用する部分 */
    export var PLAY_FLEX : HTMLDivElement | null;

    /** スコアなど情報表示する部分 */
    export var INFO_FLEX : HTMLDivElement | null;
    
    /** ゲームに使用する領域 */
    export var PLAY_WINDOW : HTMLDivElement | null;
    /** ゲーム盤に使用する領域 */
    export var GAME_WINDOW : HTMLDivElement | null;
    /** ゲーム中のメッセージなどを表示する領域 */
    export var MSG_WINDOW : HTMLDivElement | null;

    /** 情報表示する領域 */
    export var INFO_WINDOW : HTMLDivElement | null;

    /** Canvas要素を紐付け */
    export var CVS : HTMLCanvasElement | null;
    
    /** Canvasの幅 */
    export var CVSWIDTH : number;

    /** Canvasの丈 */
    export var CVSHEIGHT : number;

    /** 情報表示 名称 00 */
    export var STS00NAME : HTMLDivElement | null;
    /** 情報表示 値 00 */
    export var STS00VALUE : HTMLDivElement | null;

    /** 情報表示 名称 01 */
    export var STS01NAME : HTMLDivElement | null;
    /** 情報表示 値 01 */
    export var STS01VALUE : HTMLDivElement | null;

    /** 情報表示 名称 02 */
    export var STS02NAME : HTMLDivElement | null;
    /** 情報表示 値 02 */
    export var STS02VALUE : HTMLDivElement | null;

    /** 情報表示 名称 03 */
    export var STS03NAME : HTMLDivElement | null;
    /** 情報表示 値 03 */
    export var STS03VALUE : HTMLDivElement | null;
    
    /** ステータス表示 枠[] */
    export var STSBOX : (HTMLDivElement | null)[];
    /** ステータス表示 名称[] */
    export var STSNAME : (HTMLDivElement | null)[];
    /** ステータス表示 値[] */
    export var STSVALUE : (HTMLDivElement | null)[];
    
    /** ゲームセレクター */
    export var SELECTGAME : HTMLSelectElement | null;

    /** ゲームセレクター */
    export var SELECTCHAR : HTMLSelectElement | null;

    // ゲーム枠座標
    // W:幅 H:丈 X:横位置 Y:縦位置 P:隙間（縦横同一） M:余白（縦横別）

    // 正方形に切り取る大外枠
    // Canvas 
    // → 大外枠：Canvasから隙間を空けた大外枠 
    // → ゲーム盤：大外枠から正方形に切り取ったゲーム盤
    // → 升目：ゲーム盤から隙間を空けた升目

    /** 大外枠：幅 */
    export var gW0 : number;
    /** 大外枠：丈 */
    export var gH0 : number;
    
    /** Canvas → 大外枠の隙間 */ 
    export var gP0 : number;

    // Canvas → 大外枠の表示位置
    /** 大外枠の表示位置：横 */
    export var gX0 : number;
    /** 大外枠の表示位置：縦 */
    export var gY0 : number;

    // 大外枠の余白：ゲーム盤を正方形にするために使用
    /** 大外枠→ゲーム盤の左右の余白 */
    export var gWM0 : number;
    /** 大外枠→ゲーム盤の上下の余白 */
    export var gHM0 : number;

    /** 盤上のあらゆる隙間 */
    export var gP1 : number;

    // ゲーム盤の表示位置
    /** ゲーム盤の開始位置：横 */
    export var gX1 : number;
    /** ゲーム盤の開始位置：縦 */
    export var gY1 : number;
    // ゲーム盤の大きさ
    /** ゲーム盤の大きさ：幅 */
    export var gW1 : number;
    /** ゲーム盤の大きさ：丈 */
    export var gH1 : number;

    /** 升目の個々の幅・丈（正方形） */
    export var gCellWidth : number;

    // 全升の広さ（仮計算
    /** 全升の幅 */
    export var gW2w : number;
    /** 全升の丈 */
    export var gH2w : number;

    // 枠線の幅を除いた升に使われる広さ
    /** 枠線の幅を除いた升に使われる広さ：幅 */
    export var gWm : number;
    /** 枠線の幅を除いた升に使われる広さ：丈 */
    export var gHm : number;

    // 升の表示開始位置：ゲーム升の外の枠線を除いた位置
    /** 升の表示開始位置：横 */
    export var gX2 : number;
    /** 升の表示開始位置：縦 */
    export var gY2 : number;

    // 全升の広さ：升の数で割ると個々の升目の広さになる
    /** 全升の広さ：幅 */
    export var gW2 : number;
    /** 全升の広さ：丈 */
    export var gH2 : number;
    
    // 升の大きさ
    /** 個々の升の広さ：幅 */
    export var gW3 : number;
    /** 個々の升の広さ：丈 */
    export var gH3 : number;

    // 升の座標[cell番地]
    /** 升の座標[cell番地]：横 */
    export var gX3 : number[];
    /** 升の座標[cell番地]：縦 */
    export var gY3 : number[];

    /** 升のコード[cell番地] */
    var gCodes : number[];

    /** バックカラーのフラッシュの有無 */
    var gFlashFlgs : boolean[];
        
    /** ブラウザ最初期処理 */
    window.onload = function () {
        pageInit();
        if (IsError) {
            alert("Init " + IsError);
        }
        gameReset();
        canvasResize();
        displayCall();

        // 定期的に更新（アニメーション、フラッシュ効果）
        setInterval(displayCall,100);

    }

    /** ブラウザ要素のサイズ計算 */
    function CalcGameSize(cellCount : number) {
        if (!CVS) return;
        // 大外枠の計算
        if (CVS.width > CVS.height) {
            gP0 = Math.floor(CVS.height / 200);
            gP1 = Math.floor(CVS.height / 100);
            gW0 = CVS.height - gP0 * 2;
            gH0 = CVS.height - gP0 * 2;
            gWM0 = Math.floor((CVS.width - CVS.height) / 2);
            gHM0 = 0;
        }
        else {
            gP0 = Math.floor(CVS.width / 200);
            gP1 = Math.floor(CVS.width / 100);
            gW0 = CVS.width - gP0 * 2;
            gH0 = CVS.width - gP0 * 2;
            gWM0 = 0;
            gHM0 = Math.floor((CVS.height - CVS.width) / 2);
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
        for(let y = 0; y < cellCount; y++) {
            for (let x = 0; x < cellCount; x++) {
                let point = Point.New(x,y);
                let a = gameSystem.cells.cellAddress(point);
                gX3[a] = gX2 + gP1 + (gW3 + gP1) * x;
                gY3[a] = gY2 + gP1 + (gH3 + gP1) * y;
            }
        }
    }

    // // ゲームシステム
    // const gameSystems = (gameNo : number) : ICellGameSystem => {
    //     switch(gameNo) {
    //         case 1: 
    //             return new CellGameSystem01();
    //         case 2:
    //             alert("CellGameSystem02");
    //             return new CellGameSystem02();
    //         default:
    //             return new CellGameSystem02();
    //     }
    // }

    /** セルゲーム 画面初期化処理 */
    export function pageInit() {
        gameSystems[1] = new CellGameSystem01();
        gameSystems[2] = new CellGameSystem02();

        // 升目データの初期化
        komasInit();
        
        // 選択ゲーム設定
        selectGameNo = 1;

        // 升目データの初期値設定
        komasUpdate(selectCharNo);

        // gameSystem = gameSystems(selectGameNo);

        // // 升目の論理値の初期化（とりあえず１０×１０）
        // gCodes = Array(100).fill(0);
        // gFlashFlgs = Array(100).fill(false);

        // // 升目の広さ
        // gCellWidth = gameSystem.cellCount;

        // canvasの取得
        canvasGetter("a_canvas");
        if (IsError) return;
        if (CVS == null) {
            alert("CANVAS ERROR");
            return;
        }

        // タッチイベントの設定
        // スマホの場合
        if (isSmartphone()){
            CVS.ontouchstart = function (e) {
                if (CVS == null) return;
                const rect = CVS.getBoundingClientRect();
                var t1 : Touch = e.touches[0];
                touchCall(t1.pageX- rect.left,t1.pageY - rect.top);
            }
        } else {
            // スマホ以外
            CVS.onmousedown = function(e) {
                if (CVS == null) return;
                const rect = CVS.getBoundingClientRect();
                touchCall(e.clientX - rect.left,e.clientY - rect.top);
            }
        }
        
        // サイズ変更時のイベントを設定
        addResizeEvent();
        // リサイズ処理の実行
        canvasResize();

        // 画面要素の取得

        MAIN_FLEX = elementGetter<HTMLDivElement>("MainFlex");
        if (IsError) return;
        INFO_FLEX = elementGetter<HTMLDivElement>("InfoFlex");
        if (IsError) return;

        PLAY_WINDOW = elementGetter<HTMLDivElement>("PlayWindow");
        if (IsError) return;

        PLAY_FLEX = elementGetter<HTMLDivElement>("PlayFlex");
        if (IsError) return;

        GAME_WINDOW = elementGetter<HTMLDivElement>("GameWindow");
        if (IsError) return;
        MSG_WINDOW = elementGetter<HTMLDivElement>("MsgWindow");
        if (IsError) return;

        INFO_WINDOW = elementGetter<HTMLDivElement>("InfoWindow");
        if (IsError) return;

        STSBOX = Array(4).fill(null);
        STSNAME = Array(4).fill(null);
        STSVALUE = Array(4).fill(null);

        STSBOX[0] = elementGetter<HTMLDivElement>("sts00Box");
        STSNAME[0] = elementGetter<HTMLDivElement>("sts00Name");
        STSVALUE[0] = elementGetter<HTMLDivElement>("sts00Value");
        STSBOX[1] = elementGetter<HTMLDivElement>("sts01Box");
        STSNAME[1] = elementGetter<HTMLDivElement>("sts01Name");
        STSVALUE[1] = elementGetter<HTMLDivElement>("sts01Value");
        STSBOX[2] = elementGetter<HTMLDivElement>("sts02Box");
        STSNAME[2] = elementGetter<HTMLDivElement>("sts02Name");
        STSVALUE[2] = elementGetter<HTMLDivElement>("sts02Value");
        STSBOX[3] = elementGetter<HTMLDivElement>("sts03Box");
        STSNAME[3] = elementGetter<HTMLDivElement>("sts03Name");
        STSVALUE[3] = elementGetter<HTMLDivElement>("sts03Value");

        SELECTGAME = elementGetter<HTMLSelectElement>("SelectGame");
        
        SELECTCHAR = elementGetter<HTMLSelectElement>("SelectChar");

        // 文字セレクターイベントの設定
        if (SELECTCHAR != null) {

            SELECTCHAR.addEventListener("change", (event) => {
                const target = event.target as HTMLSelectElement;
                const selectedValue = target.value;
                switch(selectedValue) {
                    case "CHAR00" : {
                        selectCharNo = 0;
                        break;
                    }
                    case "CHAR01" : {
                        selectCharNo = 1;
                        break;
                    }
                    case "CHAR02" : {
                        selectCharNo = 2;
                        break;
                    }
                }
                komasUpdate(selectCharNo);
                gameSelectorSetting();
                displayCall();
            });
            
            // ゲームセレクターの設定
            if (SELECTGAME != null) {
                gameSelectorSetting();

                SELECTGAME.addEventListener("change", (event) => {
                    const target = event.target as HTMLSelectElement;
                    const selectedValue = target.value;
                    selectGameNo = 0;
                    for(let i = 0; i < gameSystems.length; i++) {
                        if (isNone(gameSystems[i])) continue;
                        if (gameSystems[i].gameId == selectedValue) {
                            selectGameNo = i;
                            break;
                        }
                    }
                    gameReset(); 
                });
            }

        }
            


        if (IsError) return;
        wasPageInit = true;

    }

    /** ゲームセレクター設定 */
    export function gameSelectorSetting() {
        if (SELECTGAME == null) return;

        SELECTGAME.options.length = 0;
        for(let gamesystem of gameSystems) {
            if (isNone(gamesystem)) continue;
            let option = document.createElement("option");
            option.value = gamesystem.gameId;
            option.text = titleChange(gamesystem.gameName);
            SELECTGAME.appendChild(option);                
        }

    }


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
    export function touchPoint(x : number,y : number) : Point {
        let p0 = new Point(false,x,y);

        let result : Point = new Point();

        for(let a = 0; a < gameSystem.cells.cellCount(); a++) {
            let x0 = gX3[a];
            let y0 = gY3[a];
            let x1 = x0 + gW3;
            let y1 = y0 + gH3;
            if (x >= x0 && x < x1 && y >= y0 && y < y1) {
                result = pointCalc(a,gameSystem.cellSize);
                return result;
            }
        }
        return result;
    }


    /** 要素を取得する */
    export function elementGetter<T extends HTMLElement>(id: string): T | null {
        const element = document.getElementById(id);
        if (element) {
            return element as T;
        }
        alert(document.documentElement.outerHTML);
        alert(id + " is error");
        IsError = true;
        return null;
    }

    // canvasの取得
    export function canvasGetter(idName : string) {
        let element : HTMLCanvasElement | null = elementGetter<HTMLCanvasElement>(idName);
        if (IsError) return;
        // canvas設定
        CVS = element;
        if (CVS == null) {
            IsError = true;
            return; 
        }
    }

    // 画面サイズ変更の検知
    export function addResizeEvent() {
        window.addEventListener('resize', canvasResize); 
    }


    // 画面サイズ変更
    export function canvasResize() { 
        if (IsError) return;
        if (CVS == null) return;

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
                INFO_WINDOW.style.width = "30%"
            }

            if (MAIN_FLEX) {
                MAIN_FLEX.style.flexDirection = 'row';
            }
            if (INFO_FLEX) {
                INFO_FLEX.style.flexDirection = 'column';
            }

        } else {
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
        CVS.width = CVSWIDTH;
        CVS.height = CVSHEIGHT;

        displayCall();
    }

    // タッチイベント関連

    // iOS/Android検出
    export function isSmartphone() : boolean {
        var ua = navigator.userAgent;
        return (ua.match(/iPhone|iPod|iPad|Android/) !== null);
    }
    export function touchCall(x : number,y : number) {
        touchHandler(x,y);
    }
    // canvasに対するタッチハンドラー
    function touchHandler(
        x : number,
        y : number,
    ) {
        let p = touchPoint(x,y);
        if (p.isUndefined) return;
        touchPointSend(p);
    }

    /** タッチ箇所送信 */
    export function touchPointSend(p : Point) {
        if (isNone(gameSystem)) return;
        gameSystem.touchPointRecv(p);
    }

    // ゲーム起動
    export function gameReset() {
        gameSystem = gameSystems[selectGameNo];
        gameSystem.displayMaker();
    }

    // 画面更新処理を呼び出す
    export function displayCall() {
        if (!wasPageInit) return;
        if (isNone(gameSystem)) return;
        gameSystem.displayMaker();
        canvasDisplay();
        messagesDisplay();
        allStatusDisplay();
    }

    /** Canvas Writer */    
    export function canvasDisplay (
    ) {
        if (isNone(CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = CVS.getContext('2d');
        if (ctx == null) {
            alert("Canvas Context is None");
            return;
        }

        if (isNone(gameSystem)) {
            alert("GameSystem is None");
            return;
        }
        
        CalcGameSize(gameSystem.cellSize);
        
        ctx.fillStyle = gameSystem.backColor;

        ctx.fillRect(0, 0, CVSWIDTH, CVSHEIGHT);
        ctx.fillStyle = gameSystem.backColor;
        ctx.fillRect(gX2,gY2,gW2,gH2);

        AllCellDisplay();

    }

    /** 全ステータス表示 */
    export function allStatusDisplay() {
        if (isNone(gameSystem)) {
            alert("GameSystem is None");
            return;
        }
        for(let i = 0; i < 4; i++) {
            statusDisplay(i);
        }
    }

    /** ステータス表示 */
    export function statusDisplay(statusIndex : number) {
        if (isNone(gameSystem)) {
            alert("GameSystem is None");
            return;
        }
        let i = statusIndex;

        if (i < 0 || i >= 4) return;        
        let box = STSBOX[i];
        if (isNone(box)) return;
        let name = STSNAME[i];
        if (isNone(name)) return;
        let value = STSVALUE[i];
        if (isNone(value)) return;

        if (gameSystem.statusNameIsVisible[i] == false) {
            box.style.backgroundColor = Colors.Black;
            name.textContent = "";
            value.textContent = "";
        } else {
            box.style.backgroundColor = Colors.DarkBlue;
            name.textContent = gameSystem.statusName[i];
            if (gameSystem.statusIsVisible[i] == false) {
                value.textContent = "";
            } else {
                value.textContent = gameSystem.status[i].toString();
            }
        }

    }



    /** Box Writer */
    export function boxDisplay (
        backColor : string,
        x : number,
        y : number,
        isFlash : boolean
    ) {
        if (isNone(CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = CVS.getContext('2d');
        if (ctx == null) return;

        let a = gameSystem.cells.cellAddress(Point.New(x,y));
        let left = gX3[a] - gP1;
        let top = gY3[a] - gP1;
        let width = gW3 + gP1 * 2;
        let height = gW3 + gP1 * 2;

        ctx.fillStyle = isRandomColor(isFlash,backColor);
        ctx.fillRect(left , top, width, height);
    }

    
    /** Border Writer */
    export function borderDisplay (
        backColor : string,
        x0 : number,
        y0 : number,
        x1 : number,
        y1 : number,
        isFlash : boolean
    ) {

        if (isNone(CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = CVS.getContext('2d');
        if (ctx == null) return;

        let px0 = x0 * (gP1 + gW3);
        let py0 = y0 * (gP1 + gH3);
        let px1 = x1 * (gP1 + gW3) + gP1 - px0;
        let py1 = y1 * (gP1 + gH3) + gP1 - py0;

        ctx.fillStyle = isRandomColor(isFlash,backColor);
        ctx.fillRect(gX2 + px0 , gY2 + py0, px1, py1);
    }


    /** Text Writer : 升目に文字と背景色を記入 */
    export function cellTextDisplay (
        char : string,
        foreColor : string,
        backColor : string,
        left : number,
        top : number,
        width : number,
        height : number,
        isFlash : boolean
    ) {
        if (isNone(CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = CVS.getContext('2d');
        if (ctx == null) return;

        if (char.length < 1) return;
        let char0 = char.substring(0,1);
        // フォントサイズを計算
        let fontSize = Math.min(width, height);
        ctx.font = `${fontSize}px serif`;

        // テキストの位置を計算して描画
        let charWidth = ctx.measureText(char0).width;
        let textX = (width - charWidth) / 2;
        let textY = (height + fontSize * 0.75) / 2;
        
        ctx.fillStyle = isRandomColor(isFlash,backColor);
        ctx.fillRect(left , top, width, height);

        ctx.fillStyle = foreColor;
        ctx.fillText(char0, left + textX, top + textY);
    }

    /** 升目の表示 */
    export function cellDisplay (
        x : number,
        y : number,
    ) {
        if (isNone(CVS)) {
            // alert("Canvas is None");
            return;
        }
        let a = gameSystem.cells.cellAddress(Point.New(x,y));
        let c = gameSystem.cells.items[a];
        cellTextDisplay(
            komas[c].char,
            komas[c].foreColor,
            komas[c].backColor,
            gX3[a],gY3[a],gW3,gH3,
            komas[c].isFlash
        );
    }

    /**
     * 全メッセージ表示
     */
    export function messagesDisplay() : void {
        if (isNone(gameSystem)) return;
        for(let i = 0; i < gameSystem.messages.length; i++) {
            messageDisplay(gameSystem.messages[i]);
        }   
    }

    /** メッセージ表示
     * @param message : メッセージ
     */
    export const messageDisplay = ( message : IMessage) => 
        textDisplay(message.text,message.x,message.y,message.foreColor,message.backColor,message.isFlash);

    /** 文字列表示
     * @param text : 表示文字列
     * @param x : 横位置
     * @param y : 縦位置
     * @param foreColor : 文字色
     * @param backColor : 背景色
     */
    export function textDisplay (
        text : string,
        x : number,
        y : number,
        foreColor : string,
        backColor : string,
        isFlash : boolean
    ) {
        if (isNone(CVS)) {
            // alert("Canvas is None");
            return;
        }
        let ctx = CVS.getContext('2d');
        if (ctx == null) return;

        if (text.length < 1) return;

        if (x < 0 || x >= gameSystem.cellSize) return;
        if (y < 0 || y >= gameSystem.cellSize) return;

        let fontSize = Math.min(gW3, gH3) * 0.75;
        ctx.font = `${fontSize}px serif`;

        // テキストの位置を計算して描画
        let textX = (gW3 - fontSize) / 2;
        let textY = (gH3 + fontSize * 0.75) / 2;
        let marginY = (fontSize * 0.25) / 2;

        let a = gameSystem.cells.cellAddress(Point.New(x,y));

        let charWidth = ctx.measureText(text).width;
        ctx.fillStyle = isRandomColor(isFlash,backColor);
        ctx.fillRect(gX3[a] + textX,gY3[a] + marginY , charWidth, fontSize);

        ctx.fillStyle = foreColor;
        ctx.fillText(text, gX3[a] + textX,gY3[a] + textY);
    }

    /** 全升 表示 */
    export function AllCellDisplay () {
        if (isNone(CVS)) {
            // alert("Canvas is None");
            return;
        }
        for(let y = 0; y < gameSystem.cellSize; y++) {
            for (let x = 0; x < gameSystem.cellSize; x++) {
                let a = gameSystem.cells.cellAddress(Point.New(x,y));
                if (gameSystem.cells.items[a] < komas.length) {
                    cellDisplay(x,y);
                }
            }
        }
    }

    /** ゲームタイトルの変更 */
    export const titleChange = (message: string): string =>
        exReplace(message, TITLE, Koma.gameTitle(komas));        
}
