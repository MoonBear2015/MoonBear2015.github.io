function canvas_sankaku (canvas : HTMLCanvasElement,
    width : number,
    height : number
) {
    if (canvas == undefined) return;
    if (canvas == null) return;
    var context = canvas.getContext("2d");
    if (context == null) return;
    context.beginPath();
    var x1 : number = g_rnd(0,width);
    var x2 : number = g_rnd(0,width);
    var y1 : number = g_rnd(0,height);
    var y2 : number = g_rnd(0,height);
    context.moveTo(x1,y1);
    context.lineTo(x1,y2);
    context.lineTo(x2,y2);
    context.lineTo(x1,y1);
    context.closePath();
    context.fillStyle = "#" + g_rnd(0xFFFFFF).toString(16);
    context.fill();
}

