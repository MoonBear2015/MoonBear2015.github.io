function canvas_writer (canvas : HTMLCanvasElement,
    width : number,
    height : number
) {
    if (canvas == undefined) return;
    if (canvas == null) return;
    var context = canvas.getContext("2d");
    if (context == null) return;
    context.fillStyle = "black";
    context.fillRect(0,0,width,height);

    let mx : number = width / 15;
    let my : number = height / 15;
    let lx : number = width - mx;
    let ly : number = height - my;

    let x1 : number = width / 2;
    let y1 : number = height / 15;
    let x2 : number = lx;
    let y2 : number = ly;

    context.beginPath();
    context.moveTo(mx,ly);
    context.arcTo(x1,y1,x2,y2,40);
    context.lineTo(x2,y2);

    context.fillStyle = randomColor();
    context.fill();
    context.lineWidth = width / 30;
    context.strokeStyle = randomColor();
    context.stroke();

}

let toRad = (deg : number) : number => deg * Math.PI / 180;

let randomColor = () :string => "#" + g_rnd(0xFFFFFF).toString(16);