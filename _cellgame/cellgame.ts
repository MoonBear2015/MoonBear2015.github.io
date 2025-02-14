/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    
    var IsError : boolean = false;

    // GetCanvas('a_canvas');

    var MAIN_FLEX : HTMLDivElement | null;

    var PLAY_FLEX : HTMLDivElement | null;
    var INFO_FLEX : HTMLDivElement | null;
    
    var PLAY_WINDOW : HTMLDivElement | null;
    var GAME_WINDOW : HTMLDivElement | null;
    var MSG_WINDOW : HTMLDivElement | null;

    var INFO_WINDOW : HTMLDivElement | null;

    var CVS : HTMLCanvasElement | null; 
    var CVSWIDTH : number;
    var CVSHEIGHT : number;

    var STS00NAME : HTMLDivElement | null;
    var STS00VALUE : HTMLDivElement | null;

    var STS01NAME : HTMLDivElement | null;
    var STS01VALUE : HTMLDivElement | null;

    var STS02NAME : HTMLDivElement | null;
    var STS02VALUE : HTMLDivElement | null;

    var STS03NAME : HTMLDivElement | null;
    var STS03VALUE : HTMLDivElement | null;

    // ゲーム枠座標
    // W:幅 H:丈 X:横位置 Y:縦位置 P:隙間（縦横同一） M:余白（縦横別）

    // 正方形に切り取る大外枠
    var gW0 : number;
    var gH0 : number;
    // 大外枠のパディングサイズ
    var gP0 : number;
    // 大外枠の表示位置
    var gX0 : number;
    var gY0 : number;
    // 大外枠の余白
    var gWM0 : number;
    var gHM0 : number;

    // 盤上のパディング
    var gP1 : number;
    // 盤上の表示位置
    var gX1 : number;
    var gY1 : number;
    // 盤上の大きさ
    var gW1 : number;
    var gH1 : number;

    // 升の幅
    var gCellWidth : number;

    // 全升の広さ（仮
    var gW2w : number;
    var gH2w : number;
    // 升に使われる広さ
    var gWm : number;
    var gHm : number;

    // 升の表示開始位置
    var gX2 : number;
    var gY2 : number;

    // 全升の広さ
    var gW2 : number;
    var gH2 : number;
    
    // 升の大きさ
    var gW3 : number;
    var gH3 : number;

    // 升の座標[cell番地]
    var gX3 : number[];
    var gY3 : number[];

    // 升のコード[cell番地]
    var gCodes : number[];

    // 升のフラッシュ
    var gFlashFlgs : boolean[];

    function CalcGameSize(cellWidth : number,cvs : HTMLCanvasElement | null) {
        if (!cvs) return;
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
        gWm = gW2w - gP1 * (cellWidth + 1);
        gHm = gH2w - gP1 * (cellWidth + 1);
        // 升の大きさ
        gW3 = Math.floor(gWm / cellWidth);
        gH3 = Math.floor(gHm / cellWidth);

        // 全升の広さの再計算
        gW2 = gW3 * cellWidth + gP1 * (cellWidth + 1);
        gH2 = gH3 * cellWidth + gP1 * (cellWidth + 1);

        // 全升の座標
        // 配列の初期化
        gX3 = Array(cellWidth * cellWidth).fill(0);
        gY3 = Array(cellWidth * cellWidth).fill(0);
        // 座標計算
        for(let y = 0; y < cellWidth; y++) {
            for (let x = 0; x < cellWidth; x++) {
                let a = addressCalc(x,y,cellWidth);
                gX3[a] = gX2 + gP1 + (gW3 + gP1) * x;
                gY3[a] = gY2 + gP1 + (gH3 + gP1) * y;
            }
        }
    }
        
    // リソース読込完了
    window.onload = function () {
        Init();
        if (IsError) {
            alert("Init " + IsError);
        }
        ResizeCanvas();
        Call_Writer();
    }

    // 初期処理
    export function Init(){

        // 升目の論理値の初期化（とりあえず１０×１０）
        gCodes = Array(100).fill(0);
        gFlashFlgs = Array(100).fill(false);

        // 升目データの初期化
        cellsInit();
        // 升目データの初期値設定
        cellsUpdate(0);

        // 升目の広さ
        gCellWidth = 6;

        // canvasの取得
        GetCanvas("a_canvas");
        if (IsError) return;
        if (CVS == null) {
            alert("CANVAS ERROR");
            return;
        }

        // サイズ変更時のイベントを設定
        addResizeEvent();
        // リサイズ処理の実行
        ResizeCanvas();

        // タッチイベントの設定
        // スマホの場合
        if (isSmartphone()){
            CVS.ontouchstart = function (e) {
                var t1 : Touch = e.touches[0];
                touchCall(t1.pageX,t1.pageY);
            }
        } else {
            // スマホ以外
            CVS.onmousedown = function(e) {
                touchCall(e.clientX,e.clientY);
            }
        }

        // 画面要素の取得

        MAIN_FLEX = getElement<HTMLDivElement>("MainFlex");
        if (IsError) return;
        INFO_FLEX = getElement<HTMLDivElement>("InfoFlex");
        if (IsError) return;

        PLAY_WINDOW = getElement<HTMLDivElement>("PlayWindow");
        if (IsError) return;

        PLAY_FLEX = getElement<HTMLDivElement>("PlayFlex");
        if (IsError) return;

        GAME_WINDOW = getElement<HTMLDivElement>("GameWindow");
        if (IsError) return;
        MSG_WINDOW = getElement<HTMLDivElement>("MsgWindow");
        if (IsError) return;

        INFO_WINDOW = getElement<HTMLDivElement>("InfoWindow");
        if (IsError) return;

        STS00NAME = getElement<HTMLDivElement>("sts00Name");
        if (IsError) return;
        STS00VALUE = getElement<HTMLDivElement>("sts00Value");
        if (IsError) return;

        STS01NAME = getElement<HTMLDivElement>("sts01Name");
        if (IsError) return;
        STS01VALUE = getElement<HTMLDivElement>("sts01Value");
        if (IsError) return;

        STS02NAME = getElement<HTMLDivElement>("sts02Name");
        if (IsError) return;
        STS02VALUE = getElement<HTMLDivElement>("sts02Value");
        if (IsError) return;

        STS03NAME = getElement<HTMLDivElement>("sts03Name");
        if (IsError) return;
        STS03VALUE = getElement<HTMLDivElement>("sts03Value");
        if (IsError) return;

    }

    /** 番地計算 */
    export function gAddress(x : number, y : number) : number {
        if (x < 0 || x >= gCellWidth) return -1;
        if (y < 0 || y >= gCellWidth) return -1;
        return y * gCellWidth + x;
    }

    /** cellコード（x,y指定） */
    export const gCode = (x : number,y : number) : number => {
        let a : number = gAddress(x,y);
        if (a < 0) return -1;
        return gCodes[a];
    }
    /** cellコード設定 (x,y指定) */
    export function gCodeSetter(x:number,y:number,code: number) {
        let a : number = gAddress(x,y);
        if (a < 0) return;
        gCodes[a] = code;
    }
    // Flashフラグ(x,y指定)
    export const gIsFlash = (x : number,y : number) : boolean => {
        let a : number = gAddress(x,y);
        if (a < 0) return false;
        return gFlashFlgs[a];
    } 
    // Flashフラグ設定(x,y指定)
    export function gIsFlashSetter(x:number,y:number,isFlash:boolean) {
        let a : number = gAddress(x,y);
        if (a < 0) return;
        gFlashFlgs[a] = isFlash;
    }


    /** 要素を取得する */
    export function getElement<T extends HTMLElement>(id: string): T | null {
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
    export function GetCanvas(idName : string) {
        let element : HTMLCanvasElement | null = getElement<HTMLCanvasElement>(idName);
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
        window.addEventListener('resize', ResizeCanvas); 
    }


    // 画面サイズ変更
    export function ResizeCanvas() { 
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

        if (STS02NAME) STS02NAME.textContent = "CVS.offsetWidth";
        if (STS02VALUE) STS02VALUE.textContent = CVS.offsetWidth.toString();

        if (STS03NAME) STS03NAME.textContent = "CVS.offsetHeight";
        if (STS03VALUE) STS03VALUE.textContent = CVS.offsetHeight.toString();

        CVS.width = CVSWIDTH;
        CVS.height = CVSHEIGHT;
        Call_Writer();
    }

    // タッチイベント関連

    // iOS/Android検出
    export function isSmartphone() {
        var ua = navigator.userAgent;
        return (ua.match(/iPhone|iPod|iPad|Android/) !== null);
    }
    export function touchCall(x : number,y : number) {
        touchHandler(x,y,CVS,CVSWIDTH,CVSHEIGHT);
    }
    // canvasに対するタッチハンドラー
    function touchHandler(
        x : number,
        y : number,
        canvas : HTMLCanvasElement | null,
        width : number,
        height : number
    ) {

    }

    // 定期的に更新（アニメーション、フラッシュ効果）
    setInterval(Call_Writer,10);

    // 画面更新処理を呼び出す
    export function Call_Writer() {
        CanvasWriter(CVS,CVSWIDTH,CVSHEIGHT);
    }

    /** Canvas Writer */    
    export function CanvasWriter (canvas : HTMLCanvasElement | null,
        width : number,
        height : number
    ) {
        if (canvas == null) return;
        let ctx = canvas.getContext('2d');
        if (ctx == null) return;
        
        CalcGameSize(gCellWidth,canvas);
        
        ctx.fillStyle = Colors.Black;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = Colors.DarkSlateGray;
        ctx.fillRect(gX2,gY2,gW2,gH2);

        let c = 0;
        for(let i : number = 0;i < gCodes.length; i++) {
            gCodes[i] = c;
            c++;
            if (c >= cells.length) {
                c = 0;
            }
        }

        AllCellWriter(canvas);

        // for(let y = 0; y < gCellWidth; y++) {
        //     for (let x = 0; x < gCellWidth; x++) {
        //         let a = addressCalc(x,y,gCellWidth);
        //         if (gCodes[a] < cells.length) {
        //             CellWriter(canvas,gCodes[a],x,y,true);
        //         }
        //     }
        // }

        if (STS00NAME) STS00NAME.textContent = "width";
        if (STS00VALUE) STS00VALUE.textContent = width.toString();

        if (STS01NAME) STS01NAME.textContent = "Height";
        if (STS01VALUE) STS01VALUE.textContent = height.toString();

    }

    /** Box Writer */
    export function BoxWriter (canvas : HTMLCanvasElement | null,
        backColor : string,
        x : number,
        y : number,
        isFlash : boolean
    ) {
        if (canvas == null || canvas == undefined) return;
        let ctx = canvas.getContext('2d');
        if (ctx == null) return;

        let a = addressCalc(x,y,gCellWidth);
        let c = gCodes[a];
        let left = gX3[a] - gP1;
        let top = gY3[a] - gP1;
        let width = gW3 + gP1 * 2;
        let height = gW3 + gP1 * 2;

        ctx.fillStyle = isRandomColor(isFlash,backColor);
        ctx.fillRect(left , top, width, height);
    }

    
    /** Border Writer */
    export function BorderWriter (canvas : HTMLCanvasElement | null,
        backColor : string,
        x0 : number,
        y0 : number,
        x1 : number,
        y1 : number,
        isFlash : boolean
    ) {

        if (canvas == null || canvas == undefined) return;
        let ctx = canvas.getContext('2d');
        if (ctx == null) return;

        let px0 = x0 * (gP1 + gW3);
        let py0 = y0 * (gP1 + gH3);
        let px1 = x1 * (gP1 + gW3) + gP1 - px0;
        let py1 = y1 * (gP1 + gH3) + gP1 - py0;

        ctx.fillStyle = isRandomColor(isFlash,backColor);
        ctx.fillRect(gX2 + px0 , gY2 + py0, px1, py1);
    }


    /** Text Writer : 升目に文字と背景色を記入 */
    export function TextWriter (canvas : HTMLCanvasElement | null,
        char : string,
        foreColor : string,
        backColor : string,
        left : number,
        top : number,
        width : number,
        height : number,
        isFlash : boolean
    ) {
        if (canvas == null || canvas == undefined) return;
        let ctx = canvas.getContext('2d');
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

    export function CellWriter (canvas : HTMLCanvasElement | null,
        code : number,
        x : number,
        y : number,
        isFlash : boolean

    ) {
        if (canvas == null || canvas == undefined) return;

        let a = addressCalc(x,y,gCellWidth);
        let c = gCodes[a];
        TextWriter(canvas,
            cells[c].char,
            cells[c].foreColor,
            cells[c].backColor,
            gX3[a],gY3[a],gW3,gH3,
            isFlash
        );
    }

    export function AllCellWriter (canvas : HTMLCanvasElement | null) {
        if (canvas == null || canvas == undefined) return;

        for(let y = 0; y < gCellWidth; y++) {
            for (let x = 0; x < gCellWidth; x++) {
                let a = addressCalc(x,y,gCellWidth);
                if (gCodes[a] < cells.length) {
                    CellWriter(canvas,gCodes[a],x,y,gFlashFlgs[a]);
                }
            }
        }
    }



}
