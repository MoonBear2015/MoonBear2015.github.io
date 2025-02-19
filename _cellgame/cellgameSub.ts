namespace cellgame {
    /** 未設定判定 */
    export function isNone(value: any): value is null | undefined {
        return value === null || value === undefined;
    }

    /** 乱数（０～この数値未満） */
    export function rnd(max: number): number;
    /** 乱数（最小値～この数値未満） */
    export function rnd(min: number, max: number): number;
    /** 乱数（最小値～この数値未満） */
    export function rnd(minOrMax: number, max?: number): number {
        let min: number;
        if (max === undefined) {
            min = 0;
            max = minOrMax;
        }
        else {
            min = minOrMax;
        }
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /** アトランダムな65535色コード */
    export const randomColor = () :string => "#" + rnd(0xFFFFFF).toString(16);

    /** ランダムカラーとの選択 */
    export const isRandomColor = (isFlash : boolean,backColor : string) : string => (isFlash) ? randomColor() : backColor;
    
    /** 升目の番号計算（x:横，y:縦，w:横幅） */
    export const addressCalc = (x : number, y : number, w : number): number => 
        y * w + x;

    /** 升目の座標計算（a:番号,w:横幅） */
    export const pointCalc = (a : number,w : number) => {
        let y = Math.floor(a / w);
        let x = a % w;
        return new Point(false,x,y);
    };

    /** 座標 */
    export class Point {
        x : number = 0;
        y : number = 0;
        isUndefined : boolean = false;
        constructor(isUndefined : boolean = true,x : number = 0,y : number = 0) {
            this.x = x;
            this.y = y;
            this.isUndefined = isUndefined;
        }
        public address(w : number) : number {
            if (this.isUndefined) {
                return -1;
            }
            return this.y * w + this.x;
        }
    }

    export class Colors {
        // ピンク
        static readonly MediumVioletRed : string = "#C71585";
        static readonly DeepPink : string = "#FF1493";
        static readonly PaleVioletRed : string = "#DB7093";
        static readonly HotPink : string = "#FF69B4";
        static readonly LightPink : string = "#FFB6C1";
        static readonly Pink : string = "#FFC0CB";
        // 赤
        static readonly DarkRed : string = "#8B0000";
        static readonly Red : string = "#FF0000";
        static readonly Firebrick : string = "#B22222";
        static readonly Crimson : string = "#DC143C";
        static readonly IndianRed : string = "#CD5C5C";
        static readonly LightCoral : string = "#F08080";
        static readonly Salmon : string = "#FA8072";
        static readonly DarkSalmon : string = "#E9967A";
        static readonly LightSalmon : string = "#FFA07A";
        // オレンジ
        static readonly OrangeRed : string = "#FF4500";
        static readonly Tomato : string = "#FF6347";
        static readonly DarkOrange : string = "#FF8C00";
        static readonly Coral : string = "#FF7F50";
        static readonly Orange : string = "#FFA500";
        // 黄色
        static readonly DarkKhaki : string = "#BDB76B";
        static readonly Gold : string = "#FFD700";
        static readonly Khaki : string = "#F0E68C";
        static readonly PeachPuff : string = "#FFDAB9";
        static readonly Yellow : string = "#FFFF00";
        static readonly PaleGoldenrod : string = "#EEE8AA";
        static readonly Moccasin : string = "#FFE4B5";
        static readonly PapayaWhip : string = "#FFEFD5";
        static readonly LightGoldenrodYellow : string = "#FAFAD2";
        static readonly LemonChiffon : string = "#FFFACD";
        static readonly LightYellow : string = "#FFFFE0";
        // 茶色
        static readonly Maroon : string = "#800000";
        static readonly Brown : string = "#A52A2A";
        static readonly SaddleBrown : string = "#8B4513";
        static readonly Sienna : string = "#A0522D";
        static readonly Chocolate : string = "#D2691E";
        static readonly DarkGoldenrod : string = "#B8860B";
        static readonly Peru : string = "#CD853F";
        static readonly RosyBrown : string = "#BC8F8F";
        static readonly Goldenrod : string = "#DAA520";
        static readonly SandyBrown : string = "#F4A460";
        static readonly Tan : string = "#D2B48C";
        static readonly Burlywood : string = "#DEB887";
        static readonly Wheat : string = "#F5DEB3";
        static readonly NavajoWhite : string = "#FFDEAD";
        static readonly Bisque : string = "#FFE4C4";
        static readonly BlanchedAlmond : string = "#FFEBCD";
        static readonly Cornsilk : string = "#FFF8DC";
        // 緑
        static readonly DarkGreen : string = "#006400";
        static readonly Green : string = "#008000";
        static readonly DarkOliveGreen : string = "#556B2F";
        static readonly ForestGreen : string = "#228B22";
        static readonly SeaGreen : string = "#2E8B57";
        static readonly Olive : string = "#808000";
        static readonly OliveDrab : string = "#6B8E23";
        static readonly MediumSeaGreen : string = "#3CB371";
        static readonly LimeGreen : string = "#32CD32";
        static readonly Lime : string = "#00FF00";
        static readonly SpringGreen : string = "#00FF7F";
        static readonly MediumSpringGreen : string = "#00FA9A";
        static readonly DarkSeaGreen : string = "#8FBC8F";
        static readonly MediumAquamarine : string = "#66CDAA";
        static readonly YellowGreen : string = "#9ACD32";
        static readonly LawnGreen : string = "#7CFC00";
        static readonly Chartreuse : string = "#7FFF00";
        static readonly LightGreen : string = "#90EE90";
        static readonly GreenYellow : string = "#ADFF2F";
        static readonly PaleGreen : string = "#98FB98";
        // 紫
        static readonly Indigo : string = "#4B0082";
        static readonly Purple : string = "#800080";
        static readonly DarkMagenta : string = "#8B008B";
        static readonly DarkViolet : string = "#9400D3";
        static readonly DarkSlateBlue : string = "#483D8B";
        static readonly BlueViolet : string = "#8A2BE2";
        static readonly DarkOrchid : string = "#9932CC";
        static readonly Fuchsia : string = "#FF00FF";
        static readonly Magenta : string = "#FF00FF";
        static readonly SlateBlue : string = "#6A5ACD";
        static readonly MediumSlateBlue : string = "#7B68EE";
        static readonly MediumOrchid : string = "#BA55D3";
        static readonly MediumPurple : string = "#9370DB";
        static readonly Orchid : string = "#DA70D6";
        static readonly Violet : string = "#EE82EE";
        static readonly Plum : string = "#DDA0DD";
        static readonly Thistle : string = "#D8BFD8";
        static readonly Lavender : string = "#E6E6FA";
        // 青
        static readonly MidnightBlue : string = "#191970";
        static readonly Navy : string = "#000080";
        static readonly DarkBlue : string = "#00008B";
        static readonly MediumBlue : string = "#0000CD";
        static readonly Blue : string = "#0000FF";
        static readonly RoyalBlue : string = "#4169E1";
        static readonly SteelBlue : string = "#4682B4";
        static readonly DodgerBlue : string = "#1E90FF";
        static readonly DeepSkyBlue : string = "#00BFFF";
        static readonly CornflowerBlue : string = "#6495ED";
        static readonly SkyBlue : string = "#87CEEB";
        static readonly LightSkyBlue : string = "#87CEFA";
        static readonly LightSteelBlue : string = "#B0C4DE";
        static readonly LightBlue : string = "#ADD8E6";
        static readonly PowderBlue : string = "#B0E0E6";
        // シアン
        static readonly Teal : string = "#008080";
        static readonly DarkCyan : string = "#008B8B";
        static readonly LightSeaGreen : string = "#20B2AA";
        static readonly CadetBlue : string = "#5F9EA0";
        static readonly DarkTurquoise : string = "#00CED1";
        static readonly MediumTurquoise : string = "#48D1CC";
        static readonly Turquoise : string = "#40E0D0";
        static readonly Aqua : string = "#00FFFF";
        static readonly Cyan : string = "#00FFFF";
        static readonly Aquamarine : string = "#7FFFD4";
        static readonly PaleTurquoise : string = "#AFEEEE";
        static readonly LightCyan : string = "#E0FFFF";
        // 白
        static readonly MistyRose : string = "#FFE4E1";
        static readonly AntiqueWhite : string = "#FAEBD7";
        static readonly Linen : string = "#FAF0E6";
        static readonly Beige : string = "#F5F5DC";
        static readonly WhiteSmoke : string = "#F5F5F5";
        static readonly LavenderBlush : string = "#FFF0F5";
        static readonly OldLace : string = "#FDF5E6";
        static readonly AliceBlue : string = "#F0F8FF";
        static readonly Seashell : string = "#FFF5EE";
        static readonly GhostWhite : string = "#F8F8FF";
        static readonly Honeydew : string = "#F0FFF0";
        static readonly FloralWhite : string = "#FFFAF0";
        static readonly Azure : string = "#F0FFFF";
        static readonly MintCream : string = "#F5FFFA";
        static readonly Snow : string = "#FFFAFA";
        static readonly Ivory : string = "#FFFFF0";
        static readonly White : string = "#FFFFFF";
        // 黒
        static readonly Black : string = "#000000";
        static readonly DarkSlateGray : string = "#2F4F4F";
        static readonly DimGray : string = "#696969";
        static readonly SlateGray : string = "#708090";
        static readonly Gray : string = "#808080";
        static readonly LightSlateGray : string = "#778899";
        static readonly DarkGray : string = "#A9A9A9";
        static readonly Silver : string = "#C0C0C0";
        static readonly LightGray : string = "#D3D3D3";
        static readonly Gainsboro : string = "#DCDCDC";
    }
    
}




