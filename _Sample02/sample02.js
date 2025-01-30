"use strict";
var sample02;
(function (sample02) {
    var IsError = false;
    // GetCanvas('a_canvas');
    var MAIN_FLEX;
    var INFO_FLEX;
    var PLAY_WINDOW;
    var INFO_WINDOW;
    var CVS;
    var CVSWIDTH;
    var CVSHEIGHT;
    var CELL00;
    var CELL01;
    var CELL02;
    var CELL03;
    // リソース読込完了
    window.onload = function () {
        Init();
        if (IsError) {
            alert("Init " + IsError);
        }
        ResizeCanvas();
        Call_Writer();
    };
    // document.addEventListener('DOMContentLoaded', () => { 
    //     ResizeCanvas();
    //     Call_Writer();
    // });
    // 初期処理
    function Init() {
        // canvasの取得
        GetCanvas("a_canvas");
        if (IsError)
            return;
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
        if (isSmartphone()) {
            CVS.ontouchstart = function (e) {
                var t1 = e.touches[0];
                touchCall(t1.pageX, t1.pageY);
            };
        }
        else {
            // スマホ以外
            CVS.onmousedown = function (e) {
                touchCall(e.clientX, e.clientY);
            };
        }
        MAIN_FLEX = getElement("MainFlex");
        if (IsError)
            return;
        INFO_FLEX = getElement("InfoFlex");
        if (IsError)
            return;
        PLAY_WINDOW = getElement("PlayWindow");
        if (IsError)
            return;
        INFO_WINDOW = getElement("InfoWindow");
        if (IsError)
            return;
        CELL00 = getElement("cell00");
        if (IsError)
            return;
        CELL01 = getElement("cell01");
        if (IsError)
            return;
        CELL02 = getElement("cell02");
        if (IsError)
            return;
        CELL03 = getElement("cell03");
        if (IsError)
            return;
    }
    sample02.Init = Init;
    function getElement(id) {
        const element = document.getElementById(id);
        // alert("get " + id + "=> " + Object.prototype.toString.call(element));
        if (element) {
            return element;
        }
        alert(document.documentElement.outerHTML);
        alert(id + " is error");
        IsError = true;
        return null;
    }
    sample02.getElement = getElement;
    // canvasの取得
    function GetCanvas(idName) {
        let element = getElement(idName);
        if (IsError)
            return;
        // canvas設定
        CVS = element;
        if (CVS == null) {
            IsError = true;
            return;
        }
    }
    sample02.GetCanvas = GetCanvas;
    // 画面サイズ変更の検知
    function addResizeEvent() {
        window.addEventListener('resize', ResizeCanvas);
    }
    sample02.addResizeEvent = addResizeEvent;
    // 画面サイズ変更
    function ResizeCanvas() {
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
                PLAY_WINDOW.style.width = "70%";
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
        if (CELL02)
            CELL02.textContent = CVS.offsetWidth.toString();
        if (CELL03)
            CELL03.textContent = CVS.offsetHeight.toString();
        CVS.width = CVSWIDTH;
        CVS.height = CVSHEIGHT;
        Call_Writer();
    }
    sample02.ResizeCanvas = ResizeCanvas;
    // タッチイベント関連
    // iOS/Android検出
    function isSmartphone() {
        var ua = navigator.userAgent;
        return (ua.match(/iPhone|iPod|iPad|Android/) !== null);
    }
    sample02.isSmartphone = isSmartphone;
    function touchCall(x, y) {
        touchHandler(x, y, CVS, CVSWIDTH, CVSHEIGHT);
    }
    sample02.touchCall = touchCall;
    // canvasに対するタッチハンドラー
    function touchHandler(x, y, canvas, width, height) {
    }
    // 画面更新処理を呼び出す
    function Call_Writer() {
        Canvas_Writer(CVS, CVSWIDTH, CVSHEIGHT);
    }
    sample02.Call_Writer = Call_Writer;
    function Canvas_Writer(canvas, width, height) {
        if (canvas == null)
            return;
        var ctx = canvas.getContext('2d');
        if (ctx == null)
            return;
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);
        if (CELL00)
            CELL00.textContent = width.toString();
        if (CELL01)
            CELL01.textContent = height.toString();
    }
    sample02.Canvas_Writer = Canvas_Writer;
})(sample02 || (sample02 = {}));
