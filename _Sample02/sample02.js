"use strict";
var sample02;
(function (sample02) {
    var test = getElementByIdWithType("a_canvas");
    if (test) {
        alert("Year!!");
    }
    else {
        alert("NoNo!");
    }
    Init();
    // 初期処理
    function Init() {
        alert("Now Init");
        GetCanvas("a_canvas");
        CELL01 = getElementByIdWithType("Cell01");
        if (IsError)
            return;
        CELL02 = getElementByIdWithType("Cell02");
        if (IsError)
            return;
        CELL03 = getElementByIdWithType("Cell03");
        if (IsError)
            return;
        CELL04 = getElementByIdWithType("Cell04");
        if (IsError)
            return;
    }
    sample02.Init = Init;
    var IsError = false;
    // GetCanvas('a_canvas');
    var CVS;
    var CVSWIDTH;
    var CVSHEIGHT;
    var CELL01;
    var CELL02;
    var CELL03;
    var CELL04;
    function getElementByIdWithType(id) {
        alert("get " + id);
        alert("from " + document.documentElement.outerHTML);
        const element = document.getElementById(id);
        if (element) {
            return element;
        }
        IsError = true;
        return null;
    }
    sample02.getElementByIdWithType = getElementByIdWithType;
    // canvasの取得
    function GetCanvas(idName) {
        alert("Now GetCanvas");
        alert(document);
        var ele = getElementByIdWithType(idName);
        if (!ele) {
            alert("no " + idName + "!");
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
    }
    sample02.GetCanvas = GetCanvas;
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
    // リソース読込完了
    window.onload = function () {
        ResizeCanvas();
        Call_Writer();
    };
    // 画面サイズ変更の検知
    function addResizeEvent() {
        window.addEventListener('resize', ResizeCanvas);
    }
    sample02.addResizeEvent = addResizeEvent;
    sample02.addResizeEvent();
    document.addEventListener('DOMContentLoaded', () => {
        ResizeCanvas();
        Call_Writer();
    });
    // 画面サイズ変更
    function ResizeCanvas() {
        if (IsError)
            return;
        CVSWIDTH = CVS.offsetWidth;
        CVSHEIGHT = CVS.offsetHeight;
        CVS.width = CVSWIDTH;
        CVS.height = CVSHEIGHT;
        Call_Writer();
    }
    sample02.ResizeCanvas = ResizeCanvas;
    // 画面更新処理を呼び出す
    function Call_Writer() {
        Canvas_Writer(CVS, CVSWIDTH, CVSHEIGHT);
    }
    sample02.Call_Writer = Call_Writer;
    function Canvas_Writer(canvas, width, height) {
        var ctx = canvas.getContext('2d');
        if (ctx == null)
            return;
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);
        if (CELL01)
            CELL01.textContent = width.toString();
        if (CELL02)
            CELL02.textContent = height.toString();
    }
    sample02.Canvas_Writer = Canvas_Writer;
})(sample02 || (sample02 = {}));
