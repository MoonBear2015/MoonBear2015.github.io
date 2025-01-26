namespace sample02 {

    var test = getElementByIdWithType<HTMLCanvasElement>("a_canvas");
    if (test) {
        alert("Year!!");
    } else {
        alert("NoNo!");
    }

    Init();

    // 初期処理
    export function Init(){
        alert("Now Init");

        GetCanvas("a_canvas");

        CELL01 = getElementByIdWithType<HTMLElement>("Cell01");
        if (IsError) return;
        CELL02 = getElementByIdWithType<HTMLElement>("Cell02");
        if (IsError) return;
        CELL03 = getElementByIdWithType<HTMLElement>("Cell03");
        if (IsError) return;
        CELL04 = getElementByIdWithType<HTMLElement>("Cell04");
        if (IsError) return;
    }


    var IsError : boolean = false;

    // GetCanvas('a_canvas');

    var CVS : HTMLCanvasElement;
    var CVSWIDTH : number;
    var CVSHEIGHT : number;

    var CELL01 : HTMLElement | null;
    var CELL02 : HTMLElement | null;
    var CELL03 : HTMLElement | null;
    var CELL04 : HTMLElement | null;

    export function getElementByIdWithType<T extends HTMLElement>(id: string): T | null {
        alert("get "+id);
        alert("from " + document.documentElement.outerHTML);
        const element = document.getElementById(id);
        if (element) {
            return element as T;
        }
        IsError = true;
        return null;
    }
    

    // canvasの取得
    export function GetCanvas(idName : string) {
        alert("Now GetCanvas");
        alert(document);

        var ele = getElementByIdWithType<HTMLCanvasElement>(idName);
        if (!ele) {
            alert("no "+ idName + "!");
            return;
        }

        var element = document.getElementById(idName);
        if (element == null) {
            alert("no get!");
            IsError = true;
            return;
        }
        if (!(element instanceof HTMLCanvasElement)) {
            alert("Can not!");
            IsError = true;
            return;
        }
        // canvas設定
        CVS = element;
        // タッチイベントの設定
        // スマホの場合
        if (isSmartphone())
        {
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

    // リソース読込完了
    window.onload = function () {
        ResizeCanvas();
        Call_Writer();
    }

    // 画面サイズ変更の検知
    export function addResizeEvent() {
        window.addEventListener('resize', ResizeCanvas); 
    }
    sample02.addResizeEvent();
    
    document.addEventListener('DOMContentLoaded', () => { 
        ResizeCanvas();
        Call_Writer();
    });


    // 画面サイズ変更
    export function ResizeCanvas() { 
        if (IsError) return;
        CVSWIDTH = CVS.offsetWidth;
        CVSHEIGHT = CVS.offsetHeight;

        CVS.width = CVSWIDTH;
        CVS.height = CVSHEIGHT;
        Call_Writer();

    }

    // 画面更新処理を呼び出す
    export function Call_Writer() {
        Canvas_Writer(CVS,CVSWIDTH,CVSHEIGHT);
    }

    
    export function Canvas_Writer (canvas : HTMLCanvasElement,
        width : number,
        height : number
    ) {
        var ctx = canvas.getContext('2d');
        if (ctx == null) return;
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);
        if (CELL01) CELL01.textContent = width.toString();
        if (CELL02) CELL02.textContent = height.toString();
    }

}