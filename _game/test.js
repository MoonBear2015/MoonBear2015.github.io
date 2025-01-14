"use strict";
var CVS;
// canvasの取得
function GetCanvas(element) {
    if (!(element instanceof HTMLCanvasElement)) {
        alert("Can not!");
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
    touchHandler(x, y, CVS, WIDTH, HEIGHT);
}
var WIDTH;
var HEIGHT;
var TURN = 0;
// リソース読込完了
window.onload = function () {
    Init();
    PicLoad();
    Call_Writer();
    shufflePuzzle(CVS, WIDTH, HEIGHT);
};
// 画面サイズ変更の検知
window.addEventListener('resize', ResizeCanvas);
document.addEventListener('DOMContentLoaded', () => {
    ResizeCanvas();
    Call_Writer();
});
// 画面サイズ変更
function ResizeCanvas() {
    if (CVS == null)
        return;
    WIDTH = window.innerWidth * 0.9;
    HEIGHT = window.innerHeight * 0.9;
    CVS.width = WIDTH;
    CVS.height = HEIGHT;
}
// タイマー処理
setInterval(Call_Turn, 100);
// ターン処理
function Call_Turn() {
    TURN++;
    if (TURN > 10) {
        TURN = 0;
    }
    Call_Writer();
}
// 画面更新処理を呼び出す
function Call_Writer() {
    Canvas_Writer(CVS, WIDTH, HEIGHT);
}
// ゲーム列数
var COL = 3;
// ゲーム行数
var ROW = 3;
var Block = Array(COL * ROW).fill(0);
// 画像ソース
var Image_Pic = new Image();
// 画像ソース設定
function PicLoad() {
    Image_Pic.src = ".\\pics\\test\\monalisa.jpg";
    //    processAfterLoad(Image_Pic,".\\pics\\test\\monalisa.jpg");
}
// function loadImage(image : HTMLImageElement, src: string): Promise<HTMLImageElement> { 
//     return new Promise((resolve, reject) => { 
//         image.src = src; 
//         image.onload = () => resolve(image); 
//         image.onerror = () => reject(new Error('Failed to load image: ' + src)); 
//     }); 
// }
// async function processAfterLoad(image : HTMLImageElement, src: string): Promise<void> {
//      try { 
//         const loadedimage = await loadImage(image,src);
//     } catch (error) { 
//         console.error(error); 
//     } 
// }
function Init() {
    localSave();
    for (let i = 0; i < Block.length; i++) {
        Block[i] = i;
    }
    Block[COL * ROW - 1] = -1;
    Dirs = new Array(Block.length).fill(0).map(() => new Array(4).fill(0));
    for (let i = 0; i < Block.length; i++) {
        for (let d = 0; d < 4; d++) {
            let x = getX(i);
            let y = getY(i);
            let dx = x + UDRL[d][0];
            let dy = y + UDRL[d][1];
            if (dx < 0 || dx >= COL) {
                Dirs[i][d] = -1;
                continue;
            }
            if (dy < 0 || dy >= ROW) {
                Dirs[i][d] = -1;
                continue;
            }
            Dirs[i][d] = 0;
        }
    }
}
function localSave() {
    let c = localStorage.counter;
    if (c == undefined)
        c = 0;
    c++;
    alert(c + "回目");
    localStorage.counter = c;
}
function Canvas_Writer(canvas, width, height) {
    if (canvas == undefined)
        return;
    if (canvas == null)
        return;
    let context = canvas.getContext("2d");
    if (context == null)
        return;
    let block_w = width / COL;
    let block_h = height / ROW;
    let pic_w = Image_Pic.width / COL;
    let pic_h = Image_Pic.height / ROW;
    for (let i = 0; i < Block.length; i++) {
        let dx = getX(i) * block_w;
        let dy = getY(i) * block_h;
        let no = Block[i];
        if (no < 0) {
            // 空きブロック
            context.fillStyle = "#cccccc";
            context.fillRect(dx, dy, block_w, block_h);
        }
        else {
            let sx = getX(no) * pic_w;
            let sy = getY(no) * pic_h;
            // 画像の一部を切り取って描画
            context.drawImage(Image_Pic, sx, sy, pic_w, pic_h, dx, dy, block_w, block_h);
        }
    }
}
var UDRL = [[0, -1], [1, 0], [0, 1], [-1, 0]];
var TurnNo = [2, 3, 0, 1];
var Dirs;
function shufflePuzzle(canvas, width, height) {
    let scount = 50;
    let blank = ROW * COL - 1;
    let beforeNo = -1;
    let shuffle = function () {
        scount--;
        if (scount <= 0)
            return;
        let r = -1;
        let px = -1;
        let py = -1;
        let no = -1;
        while (1) {
            let c = 0;
            while (true) {
                r = Math.floor(g_rnd(UDRL.length));
                if (beforeNo != TurnNo[r])
                    break;
                if (Dirs[blank][r] == 1)
                    break;
                c++;
                if (c > 10) {
                    alert("NO!!");
                    break;
                }
            }
            px = getX(blank) + UDRL[r][0];
            py = getY(blank) + UDRL[r][1];
            if (px < 0 || px >= COL)
                continue;
            if (py < 0 || py >= ROW)
                continue;
            beforeNo = r;
            no = getNo(px, py);
            break;
        }
        if (no >= 0) {
            Block[blank] = Block[no];
            Block[no] = -1;
            blank = no;
            Canvas_Writer(canvas, width, height);
            setTimeout(shuffle, 100);
        }
    };
    shuffle();
}
let getNo = (x, y) => y * COL + x;
let getX = (no) => no % COL;
let getY = (no) => Math.floor(no / COL);
// タッチ処理
function touchHandler(x, y, canvas, width, height) {
    let px = x;
    let py = y;
    let pic_w = width / COL;
    let pic_h = height / ROW;
    let px2 = Math.floor(px / pic_w);
    let py2 = Math.floor(py / pic_h);
    let no2 = getNo(px2, py2);
    if (Block[no2] == -1)
        return;
    for (let i = 0; i < UDRL.length; i++) {
        let pt = UDRL[i];
        let bx = px2 + pt[0];
        let by = py2 + pt[1];
        let bNo = getNo(bx, by);
        if (bx < 0 || bx >= COL)
            continue;
        if (by < 0 || by >= ROW)
            continue;
        if (Block[bNo] == -1) {
            Block[bNo] = Block[no2];
            Block[no2] = -1;
            Call_Writer();
        }
    }
}
let toRad = (deg) => deg * Math.PI / 180;
let randomColor = () => "#" + g_rnd(0xFFFFFF).toString(16);
