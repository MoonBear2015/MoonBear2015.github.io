namespace sample02 {
    var IsError : boolean = false;

    // GetCanvas('a_canvas');

    var CVS : HTMLCanvasElement;
    var CVSWIDTH : number;
    var CVSHEIGHT : number;

    // canvasの取得
    export function GetCanvas(idName : string) {
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
        Init();
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

    // 初期処理
    export function Init(){
    }
    
    export function Canvas_Writer (canvas : HTMLCanvasElement,
        width : number,
        height : number
    ) {
        var ctx = canvas.getContext('2d');
        if (ctx == null) return;
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);
    }
    


}