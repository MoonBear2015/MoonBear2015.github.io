
var BoxSts : number[] = Array(12).fill(0);
var BOX_OFF : number = 0;
var BOX_ON : number = 1;
var BOX_HIT : number = 2;

var Image_Off : HTMLImageElement = new Image();
var Image_On : HTMLImageElement = new Image();
var Image_Hit : HTMLImageElement = new Image();
var Image_Back : HTMLImageElement = new Image();

function PicLoad() {
    Image_Off.src = ".\\pics\\test\\box.png";
    Image_On.src = ".\\pics\\test\\box_blank.png";
    Image_Hit.src = ".\\pics\\test\\box_max.png";
    Image_Back.src = ".\\pics\\test\\umi.jpg";
}

function changeBox() {
    for(let i = 0;i < BoxSts.length; i++) {
        if (g_rnd(9) > 3) {
            BoxSts[i] = BOX_OFF;
        } else {
            BoxSts[i] = BOX_ON;
        }
        
    }
}


function canvas_writer (canvas : HTMLCanvasElement,
    width : number,
    height : number
) {
    if (canvas == undefined) return;
    if (canvas == null) return;
    let context = canvas.getContext("2d");
    if (context == null) return;

    let BACK_SIZE : number = height / 4;
    let BOX_W : number = width / 4;
    let BOX_H : number = height / 4;


    context.drawImage(Image_Back,0,0,width,BACK_SIZE);

    for(let i : number = 0; i < BoxSts.length; i++)
    {
        let x = ( i % 4) * BOX_W;
        let y = BACK_SIZE + Math.floor(i / 4) * BOX_H;
        switch(BoxSts[i]) {
            case BOX_OFF:
                context.drawImage(Image_Off,x,y,BOX_W,BOX_H);
                break;
        case BOX_ON:
                context.drawImage(Image_On,x,y,BOX_W,BOX_H);
                break;
            case BOX_HIT:
                context.drawImage(Image_Hit,x,y,BOX_W,BOX_H);
                break;
        }
    }
}

function touchHandler(
    x : number,
    y : number,
    canvas : HTMLCanvasElement,
    width : number,
    height : number
) {
    let px = x;
    let py = y;
    let BACK_SIZE : number = height / 4;
    let BOX_W : number = width / 4;
    let BOX_H : number = height / 4;

    let px2 = Math.floor(px / BOX_W);
    let py2 = Math.floor((py - BACK_SIZE) / BOX_H);
    let no = py2 * 4 + px2;
    console.log(px2 + "," + py2 + "=" + no);
    if (BoxSts[no] == BOX_ON) {
        BoxSts[no] = BOX_HIT;
    }
    canvas_writer(canvas,width,height);
}

let toRad = (deg : number) : number => deg * Math.PI / 180;

let randomColor = () :string => "#" + g_rnd(0xFFFFFF).toString(16);

