"use strict";
function canvas_sankaku(canvas, width, height) {
    if (canvas == undefined)
        return;
    if (canvas == null)
        return;
    var context = canvas.getContext("2d");
    if (context == null)
        return;
    context.beginPath();
    var x1 = g_rnd(0, width);
    var x2 = g_rnd(0, width);
    var y1 = g_rnd(0, height);
    var y2 = g_rnd(0, height);
    context.moveTo(x1, y1);
    context.lineTo(x1, y2);
    context.lineTo(x2, y2);
    context.lineTo(x1, y1);
    context.closePath();
    context.fillStyle = "#" + g_rnd(0xFFFFFF).toString(16);
    context.fill();
}
