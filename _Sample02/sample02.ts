namespace sample02 {
    var IsError : boolean = false;


    var CVS : HTMLCanvasElement;
    var element = document.getElementById('a_canvas'); 
    if (element instanceof HTMLCanvasElement) {
        CVS = element;
    } else {
        alert("CANVAS Get Error");
        IsError = true;
    }



    var CVSWIDTH : number;
    var CVSHEIGHT : number;

    // canvasの取得
    function GetCanvas(element : HTMLCanvasElement) {
        if (!(element instanceof HTMLCanvasElement)) {
            alert("Can not!");
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
    function isSmartphone() {
        var ua = navigator.userAgent;
        return (ua.match(/iPhone|iPod|iPad|Android/) !== null);
    }
    function touchCall(x : number,y : number) {
        touchHandler(x,y,CVS,CVSWIDTH,CVSHEIGHT);
    }

    // リソース読込完了
    window.onload = function () {
        Init();
        PicLoad();
        Call_Writer();
        shufflePuzzle(CVS,CVSWIDTH,CVSHEIGHT);
    }

    // 画面サイズ変更の検知
    window.addEventListener('resize', ResizeCanvas); 
    document.addEventListener('DOMContentLoaded', () => { 
        ResizeCanvas();
        Call_Writer();
    });

    // 画面サイズ変更
    function ResizeCanvas() { 
        if (CVS == null) return;
        CVSWIDTH = window.innerWidth * 0.9; 
        CVSHEIGHT = window.innerHeight * 0.9; 
        CVS.width = CVSWIDTH; 
        CVS.height = CVSHEIGHT; 
    }

    // 画面更新処理を呼び出す
    function Call_Writer() {
        Canvas_Writer(CVS,CVSWIDTH,CVSHEIGHT);
    }

    // 初期処理
    function Init(){
    }
    
    function Canvas_Writer (canvas : HTMLCanvasElement,
        width : number,
        height : number
    ) {
    
    }
    


}