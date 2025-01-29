
namespace sample02 {
    
    var IsError : boolean = false;

    // GetCanvas('a_canvas');

    var MAIN_FLEX : HTMLDivElement | null;
    var PLAY_WINDOW : HTMLDivElement | null;
    var INFO_WINDOW : HTMLDivElement | null;

    var CVS : HTMLCanvasElement | null; 
    var CVSWIDTH : number;
    var CVSHEIGHT : number;

    var CELL00 : HTMLDivElement | null;
    var CELL01 : HTMLDivElement | null;
    var CELL02 : HTMLDivElement | null;
    var CELL03 : HTMLDivElement | null;

        
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
        PLAY_WINDOW = getElement<HTMLDivElement>("PlayWindow");
        INFO_WINDOW = getElement<HTMLDivElement>("InfoWindow");

        CELL00 = getElement<HTMLDivElement>("cell00");
        if (IsError) return;
        CELL01 = getElement<HTMLDivElement>("cell01");
        if (IsError) return;
        CELL02 = getElement<HTMLDivElement>("cell02");
        if (IsError) return;
        CELL03 = getElement<HTMLDivElement>("cell03");
        if (IsError) return;
    }

    export function getElement<T extends HTMLElement>(id: string): T | null {
        const element = document.getElementById(id);
        // alert("get " + id + "=> " + Object.prototype.toString.call(element));
        if (element) {
            return element as T;
        }
        // alert(document.documentElement.outerHTML);
        // alert(id + "is error");
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

        if (window.innerWidth > window.innerHeight) { 
            // 横長の場合
            if (PLAY_WINDOW) {
                PLAY_WINDOW.style.height = '100%';
                PLAY_WINDOW.style.width = '70%';
            }
            if (INFO_WINDOW) {
                INFO_WINDOW.style.height = '100%';
                INFO_WINDOW.style.width = '30%';
            }
            if (MAIN_FLEX) {
                MAIN_FLEX.style.flexDirection = 'row';
            }

        } else { 
            // 縦長の場合
            if (PLAY_WINDOW) {
                PLAY_WINDOW.style.height = '70%';
                PLAY_WINDOW.style.width = '100%';
            }
            if (INFO_WINDOW) {
                INFO_WINDOW.style.height = '30%';
                INFO_WINDOW.style.width = '100%';
            }
            if (MAIN_FLEX) {
                MAIN_FLEX.style.flexDirection = 'column';
            }
        }

        CVSWIDTH = CVS.offsetWidth;
        CVSHEIGHT = CVS.offsetHeight;

        if (CELL02) CELL02.textContent = CVS.offsetWidth.toString();
        if (CELL03) CELL03.textContent = CVS.offsetHeight.toString();


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
        Canvas_Writer(CVS,CVSWIDTH,CVSHEIGHT);
    }

    
    export function Canvas_Writer (canvas : HTMLCanvasElement | null,
        width : number,
        height : number
    ) {
        if (canvas == null) return;
        var ctx = canvas.getContext('2d');
        if (ctx == null) return;
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);
        if (CELL00) CELL00.textContent = width.toString();
        if (CELL01) CELL01.textContent = height.toString();
    }
}
