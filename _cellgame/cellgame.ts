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

    // 升の数
    var gCellCount : number;
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
    // 升の座標
    var gX3 : number[][];
    var gY3 : number[][];

    function CalcGameSize(cellCount : number,cvs : HTMLCanvasElement | null) {
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
        // 盤上の表示位置
        gX1 = gX0 + gP1;
        gY1 = gY0 + gP1;
        // 盤上の大きさ
        gW1 = gW0 - gP1 * 2;
        gH1 = gH0 - gP1 * 2;
        
        // 升の表示開始位置
        gX2 = gX1 + gP1;
        gY2 = gY1 + gP1;

        // 升の数
        gCellCount = cellCount;
        // 全升の広さ（仮
        gW2w = gW1 - gP1 * 2;
        gH2w = gH1 - gP1 * 2;
        // 升に使われる広さ(枠線を除く)
        gWm = gW2w - gP1 * (gCellCount - 1);
        gHm = gH2w - gP1 * (gCellCount - 1);
        // 升の大きさ
        gW3 = Math.floor(gWm / gCellCount);
        gH3 = Math.floor(gHm / gCellCount);

        // 全升の広さの再計算
        gW2 = gW3 * gCellCount + gP1 * (gCellCount - 1);
        gH2 = gH3 * gCellCount + gP1 * (gCellCount - 1);

        // 全升の座標
        // 配列の初期化
        gX3 = Array(gCellCount).fill([]).map(_ => Array(gCellCount).fill(0));
        gY3 = Array(gCellCount).fill([]).map(_ => Array(gCellCount).fill(0));
        // 座標計算
        for(let y = 0; y < gCellCount; y++) {
            for (let x = 0; x < gCellCount; x++) {
                gX3[x][y] = gX2 + (gW3 + gP1) * x;
                gY3[x][y] = gY2 + (gH3 + gP1) * y;
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
    
    // document.addEventListener('DOMContentLoaded', () => { 
    //     ResizeCanvas();
    //     Call_Writer();
    // });

    // 初期処理
    export function Init(){
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

    export function getElement<T extends HTMLElement>(id: string): T | null {
        const element = document.getElementById(id);
        // alert("get " + id + "=> " + Object.prototype.toString.call(element));
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

    // 画面更新処理を呼び出す
    export function Call_Writer() {
        CanvasWriter(CVS,CVSWIDTH,CVSHEIGHT);
    }

    
    export function CanvasWriter (canvas : HTMLCanvasElement | null,
        width : number,
        height : number
    ) {
        if (canvas == null) return;
        let ctx = canvas.getContext('2d');
        if (ctx == null) return;
        
        CalcGameSize(8,canvas);
        
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 'darkgray';
        ctx.fillRect(gX0,gY0,gW0,gH0);

        for(let y = 0; y < gCellCount; y++) {
            for(let x = 0; x < gCellCount; x++) {
                ctx.fillStyle = 'white';
                ctx.fillRect(gX3[x][y],gY3[x][y],gW3,gH3);
            }
        }

        for(let y = 0; y < gCellCount; y++) {
            for (let x = 0; x < gCellCount; x++) {
                TextWriter(canvas,"農",
                    Colors.White,Colors.Red,
                    gX3[x][y],gY3[x][y],gW3,gH3
                );
            }
        }

        if (STS00NAME) STS00NAME.textContent = "width";
        if (STS00VALUE) STS00VALUE.textContent = width.toString();

        if (STS01NAME) STS01NAME.textContent = "Height";
        if (STS01VALUE) STS01VALUE.textContent = height.toString();

    }

    export function TextWriter (canvas : HTMLCanvasElement | null,
        char : string,
        foreColor : string,
        backColor : string,
        left : number,
        top : number,
        width : number,
        height : number
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
        
        ctx.fillStyle = backColor;
        ctx.fillRect(left , top, width, height);

        ctx.fillStyle = foreColor;
        ctx.fillText(char0, left + textX, top + textY);

    }

}
