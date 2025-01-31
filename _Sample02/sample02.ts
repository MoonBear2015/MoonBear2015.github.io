
namespace sample02 {
    
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
                PLAY_WINDOW.style.width = "70%";
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
        Canvas_Writer(CVS,CVSWIDTH,CVSHEIGHT);
    }

    
    export function Canvas_Writer (canvas : HTMLCanvasElement | null,
        width : number,
        height : number
    ) {
        if (canvas == null) return;
        var ctx = canvas.getContext('2d');
        if (ctx == null) return;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);

        if (STS00NAME) STS00NAME.textContent = "width";
        if (STS00VALUE) STS00VALUE.textContent = width.toString();

        if (STS01NAME) STS01NAME.textContent = "Height";
        if (STS01VALUE) STS01VALUE.textContent = height.toString();

    }
}
