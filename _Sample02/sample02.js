"use strict";
var sample02;
(function (sample02) {
    var IsError = false;
    // GetCanvas('a_canvas');
    var MAIN_FLEX;
    var PLAY_FLEX;
    var INFO_FLEX;
    var PLAY_WINDOW;
    var GAME_WINDOW;
    var MSG_WINDOW;
    var INFO_WINDOW;
    var CVS;
    var CVSWIDTH;
    var CVSHEIGHT;
    var STS00NAME;
    var STS00VALUE;
    var STS01NAME;
    var STS01VALUE;
    var STS02NAME;
    var STS02VALUE;
    var STS03NAME;
    var STS03VALUE;
    // ゲーム枠座標
    // W:幅 H:丈 X:横位置 Y:縦位置 P:隙間（縦横同一） M:余白（縦横別）
    // 正方形に切り取る大外枠
    var gW0;
    var gH0;
    // 大外枠のパディングサイズ
    var gP0;
    // 大外枠の表示位置
    var gX0;
    var gY0;
    // 大外枠の余白
    var gWM0;
    var gHM0;
    // 盤上のパディング
    var gP1;
    // 盤上の表示位置
    var gX1;
    var gY1;
    // 盤上の大きさ
    var gW1;
    var gH1;
    // 升の数
    var gCellCount;
    // 全升の広さ（仮
    var gW2w;
    var gH2w;
    // 升に使われる広さ
    var gWm;
    var gHm;
    // 升の表示開始位置
    var gX2;
    var gY2;
    // 全升の広さ
    var gW2;
    var gH2;
    // 升の大きさ
    var gW3;
    var gH3;
    // 升の座標
    var gX3;
    var gY3;
    function CalcGameSize(cellCount, cvs) {
        if (!cvs)
            return;
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
        for (let y = 0; y < gCellCount; y++) {
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
        PLAY_FLEX = getElement("PlayFlex");
        if (IsError)
            return;
        GAME_WINDOW = getElement("GameWindow");
        if (IsError)
            return;
        MSG_WINDOW = getElement("MsgWindow");
        if (IsError)
            return;
        INFO_WINDOW = getElement("InfoWindow");
        if (IsError)
            return;
        STS00NAME = getElement("sts00Name");
        if (IsError)
            return;
        STS00VALUE = getElement("sts00Value");
        if (IsError)
            return;
        STS01NAME = getElement("sts01Name");
        if (IsError)
            return;
        STS01VALUE = getElement("sts01Value");
        if (IsError)
            return;
        STS02NAME = getElement("sts02Name");
        if (IsError)
            return;
        STS02VALUE = getElement("sts02Value");
        if (IsError)
            return;
        STS03NAME = getElement("sts03Name");
        if (IsError)
            return;
        STS03VALUE = getElement("sts03Value");
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
                PLAY_WINDOW.style.width = "65%";
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
        if (STS02NAME)
            STS02NAME.textContent = "CVS.offsetWidth";
        if (STS02VALUE)
            STS02VALUE.textContent = CVS.offsetWidth.toString();
        if (STS03NAME)
            STS03NAME.textContent = "CVS.offsetHeight";
        if (STS03VALUE)
            STS03VALUE.textContent = CVS.offsetHeight.toString();
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
        CalcGameSize(8, canvas);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = 'darkgray';
        ctx.fillRect(gX0, gY0, gW0, gH0);
        for (let y = 0; y < gCellCount; y++) {
            for (let x = 0; x < gCellCount; x++) {
                ctx.fillStyle = 'white';
                ctx.fillRect(gX3[x][y], gY3[x][y], gW3, gH3);
            }
        }
        if (STS00NAME)
            STS00NAME.textContent = "width";
        if (STS00VALUE)
            STS00VALUE.textContent = width.toString();
        if (STS01NAME)
            STS01NAME.textContent = "Height";
        if (STS01VALUE)
            STS01VALUE.textContent = height.toString();
    }
    sample02.Canvas_Writer = Canvas_Writer;
})(sample02 || (sample02 = {}));
