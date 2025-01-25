"use strict";
var sample02;
(function (sample02) {
    var IsError = false;
    // GetCanvas('a_canvas');
    var CVS;
    var CVSWIDTH;
    var CVSHEIGHT;
    // canvasの取得
    function GetCanvas(idName) {
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
    // タッチイベント関連
    // iOS/Android検出
    function isSmartphone() {
        var ua = navigator.userAgent;
        return (ua.match(/iPhone|iPod|iPad|Android/) !== null);
    }
    function touchCall(x, y) {
        touchHandler(x, y, CVS, CVSWIDTH, CVSHEIGHT);
    }
    // リソース読込完了
    window.onload = function () {
        Init();
        PicLoad();
        Call_Writer();
    };
    // 画面サイズ変更の検知
    window.addEventListener('resize', ResizeCanvas);
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
    }
    // 画面更新処理を呼び出す
    function Call_Writer() {
        Canvas_Writer(CVS, CVSWIDTH, CVSHEIGHT);
    }
    // 初期処理
    function Init() {
    }
    function Canvas_Writer(canvas, width, height) {
        var ctx = canvas.getContext('2d');
        if (ctx == null)
            return;
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, width, height);
    }
})(sample02 || (sample02 = {}));
