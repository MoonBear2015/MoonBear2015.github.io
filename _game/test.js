"use strict";
const element = document.getElementById('a_canvas');
var CVS;
function GetCanvas(element) {
    if (element instanceof HTMLCanvasElement) {
        CVS = element;
        CVS.ontouchstart = function (e) {
            var t1 = e.touches[0];
            touchCall(t1.pageX, t1.pageY);
        };
        if (!isSmartphone()) {
            CVS.onmousedown = function (e) {
                touchCall(e.clientX, e.clientY);
            };
        }
    }
    else {
        alert("Can not!");
    }
}
var Width;
var Height;
var Step = 0;
function resizeCanvas() {
    // const canvas = document.getElementById('a_canvas'); 
    if (CVS == null)
        return;
    call_writer();
    Width = window.innerWidth;
    Height = window.innerHeight;
    CVS.width = Width;
    CVS.height = Height;
}
window.addEventListener('resize', resizeCanvas);
document.addEventListener('DOMContentLoaded', () => {
    resizeCanvas();
    call_writer();
});
setInterval(call_step, 100);
window.onload = function () {
    PicLoad();
    call_writer();
};
function call_step() {
    Step++;
    if (Step > 10) {
        changeBox();
        Step = 0;
    }
    call_writer();
}
function call_writer() {
    canvas_writer(CVS, Width, Height);
}
// iOS/Android検出
function isSmartphone() {
    var ua = navigator.userAgent;
    return (ua.match(/iPhone|iPod|iPad|Android/) !== null);
}
function touchCall(x, y) {
    touchHandler(x, y, CVS, Width, Height);
}
var BoxSts = Array(12).fill(0);
var BOX_OFF = 0;
var BOX_ON = 1;
var BOX_HIT = 2;
var Image_Off = new Image();
var Image_On = new Image();
var Image_Hit = new Image();
var Image_Back = new Image();
function PicLoad() {
    Image_Off.src = ".\\pics\\test\\box.png";
    Image_On.src = ".\\pics\\test\\box_blank.png";
    Image_Hit.src = ".\\pics\\test\\box_max.png";
    Image_Back.src = ".\\pics\\test\\umi.jpg";
}
function changeBox() {
    for (let i = 0; i < BoxSts.length; i++) {
        if (g_rnd(9) > 3) {
            BoxSts[i] = BOX_OFF;
        }
        else {
            BoxSts[i] = BOX_ON;
        }
    }
}
function canvas_writer(canvas, width, height) {
    if (canvas == undefined)
        return;
    if (canvas == null)
        return;
    let context = canvas.getContext("2d");
    if (context == null)
        return;
    let BACK_SIZE = height / 4;
    let BOX_W = width / 4;
    let BOX_H = height / 4;
    context.drawImage(Image_Back, 0, 0, width, BACK_SIZE);
    for (let i = 0; i < BoxSts.length; i++) {
        let x = (i % 4) * BOX_W;
        let y = BACK_SIZE + Math.floor(i / 4) * BOX_H;
        switch (BoxSts[i]) {
            case BOX_OFF:
                context.drawImage(Image_Off, x, y, BOX_W, BOX_H);
                break;
            case BOX_ON:
                context.drawImage(Image_On, x, y, BOX_W, BOX_H);
                break;
            case BOX_HIT:
                context.drawImage(Image_Hit, x, y, BOX_W, BOX_H);
                break;
        }
    }
}
function touchHandler(x, y, canvas, width, height) {
    let px = x;
    let py = y;
    let BACK_SIZE = height / 4;
    let BOX_W = width / 4;
    let BOX_H = height / 4;
    let px2 = Math.floor(px / BOX_W);
    let py2 = Math.floor((py - BACK_SIZE) / BOX_H);
    let no = py2 * 4 + px2;
    console.log(px2 + "," + py2 + "=" + no);
    if (BoxSts[no] == BOX_ON) {
        BoxSts[no] = BOX_HIT;
    }
    canvas_writer(canvas, width, height);
}
let toRad = (deg) => deg * Math.PI / 180;
let randomColor = () => "#" + g_rnd(0xFFFFFF).toString(16);
