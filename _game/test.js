"use strict";
function canvas_writer(canvas, width, height) {
    if (canvas == undefined)
        return;
    if (canvas == null)
        return;
    var context = canvas.getContext("2d");
    if (context == null)
        return;
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    let mx = width / 15;
    let my = height / 15;
    let lx = width - mx;
    let ly = height - my;
    let x1 = width / 2;
    let y1 = height / 15;
    let x2 = lx;
    let y2 = ly;
    context.beginPath();
    context.moveTo(mx, ly);
    context.arcTo(x1, y1, x2, y2, 40);
    context.lineTo(x2, y2);
    context.fillStyle = randomColor();
    context.fill();
    context.lineWidth = width / 30;
    context.strokeStyle = randomColor();
    context.stroke();
}
let toRad = (deg) => deg * Math.PI / 180;
let randomColor = () => "#" + g_rnd(0xFFFFFF).toString(16);
