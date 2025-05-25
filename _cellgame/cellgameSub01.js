"use strict";
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
var cellgame;
(function (cellgame) {
    /** 汎用クラス */
    class Obj {
        constructor(code = 0, name = "", isChecked = false) {
            this.code = 0;
            this.name = "";
            this.isChecked = false;
            this.code = code;
            this.name = name;
            this.isChecked = isChecked;
        }
    }
    cellgame.Obj = Obj;
    /** 未設定判定 */
    function isNone(value) {
        return value === null || value === undefined;
    }
    cellgame.isNone = isNone;
    /** 乱数（最小値～この数値未満） */
    function rnd(minOrMax, max) {
        let min;
        if (max === undefined) {
            min = 0;
            max = minOrMax;
        }
        else {
            min = minOrMax;
        }
        return Math.floor(Math.random() * (max - min)) + min;
    }
    cellgame.rnd = rnd;
    /** アトランダムな65535色コード */
    cellgame.randomColor = () => "#" + rnd(0xFFFFFF).toString(16);
    /** ランダムカラーとの選択 */
    cellgame.isRandomColor = (isFlash, backColor) => (isFlash) ? cellgame.randomColor() : backColor;
    // /** 升目の番号計算（x:横，y:縦，w:横幅） */
    // export const addressCalc = (point : Point, w : number): number => 
    //     point.y * w + point.x;
    /** 升目の座標計算（a:番号,w:横幅） */
    cellgame.pointCalc = (a, w) => {
        let y = Math.floor(a / w);
        let x = a % w;
        return new Point(false, x, y);
    };
    /** 数列の配列を出力 */
    function range(start, end) {
        const step = start < end ? 1 : -1;
        return Array.from({ length: Math.abs(end - start) }, (_, i) => start + i * step);
    }
    cellgame.range = range;
    /** 2点間の座標を出力 */
    function pointRange(startPoint, endPoint) {
        const xRange = range(startPoint.x, endPoint.x);
        const yRange = range(startPoint.y, endPoint.y);
        const points = [];
        for (const y of yRange) {
            for (const x of xRange) {
                points.push(new Point(false, x, y));
            }
        }
        return points;
    }
    cellgame.pointRange = pointRange;
    /** 座標 */
    class Point {
        /** コンストラクタ */
        constructor(isUndefined = true, x = 0, y = 0) {
            this.x = 0;
            this.y = 0;
            this.isUndefined = false;
            /** 貼り付け */
            this.Paste = (point) => {
                this.x = point.x;
                this.y = point.y;
                this.isUndefined = point.isUndefined;
            };
            /** コピー */
            this.copy = () => {
                return new Point(this.isUndefined, this.x, this.y);
            };
            /** 突合チェック */
            this.equal = (point) => {
                if (this.isUndefined != point.isUndefined)
                    return false;
                if (point == undefined)
                    return false;
                if (this.isUndefined != point.isUndefined)
                    return false;
                if (this.x != point.x)
                    return false;
                if (this.y != point.y)
                    return false;
                return true;
            };
            /** 移動先の座業 */
            this.Move4To = (direction4s) => cellgame.Move4To(this, direction4s);
            this.x = x;
            this.y = y;
            this.isUndefined = isUndefined;
        }
        /** 座標計算 */
        address(w) {
            if (this.isUndefined) {
                return -1;
            }
            return this.y * w + this.x;
        }
        toString() {
            if (this.isUndefined)
                return "undefined";
            return " (" + this.x + "," + this.y + ")";
        }
    }
    /** undefined */
    Point.Undefined = new Point(true);
    /** 新インスタンス */
    Point.New = (x = 0, y = 0) => new Point(false, x, y);
    /** 0座標 */
    Point.Zero = Point.New(0, 0);
    /** 加算 */
    Point.Add = (point1, point2) => Point.New(point1.x + point2.x, point1.y + point2.y);
    /** 減算 */
    Point.Sub = (point1, point2) => Point.New(point1.x - point2.x, point1.y - point2.y);
    cellgame.Point = Point;
    /** 4方向 */
    cellgame.Direction4s = [
        new Point(false, 0, -1),
        new Point(false, 1, 0),
        new Point(false, 0, 1),
        new Point(false, -1, 0) // 左 
    ];
    /** 8方向 */
    cellgame.Direction8s = [
        new Point(false, 0, -1),
        new Point(false, 1, -1),
        new Point(false, 1, 0),
        new Point(false, 1, 1),
        new Point(false, 0, 1),
        new Point(false, -1, 1),
        new Point(false, -1, 0),
        new Point(false, -1, -1) // 左上
    ];
    /** 座標移動先（4方向） */
    cellgame.Move4To = (point, direction4) => Point.Add(point, cellgame.Direction4s[direction4]);
    class Colors {
    }
    // ピンク
    Colors.MediumVioletRed = "#C71585";
    Colors.DeepPink = "#FF1493";
    Colors.PaleVioletRed = "#DB7093";
    Colors.HotPink = "#FF69B4";
    Colors.LightPink = "#FFB6C1";
    Colors.Pink = "#FFC0CB";
    // 赤
    Colors.DarkRed = "#8B0000";
    Colors.Red = "#FF0000";
    Colors.Firebrick = "#B22222";
    Colors.Crimson = "#DC143C";
    Colors.IndianRed = "#CD5C5C";
    Colors.LightCoral = "#F08080";
    Colors.Salmon = "#FA8072";
    Colors.DarkSalmon = "#E9967A";
    Colors.LightSalmon = "#FFA07A";
    // オレンジ
    Colors.OrangeRed = "#FF4500";
    Colors.Tomato = "#FF6347";
    Colors.DarkOrange = "#FF8C00";
    Colors.Coral = "#FF7F50";
    Colors.Orange = "#FFA500";
    // 黄色
    Colors.DarkKhaki = "#BDB76B";
    Colors.Gold = "#FFD700";
    Colors.Khaki = "#F0E68C";
    Colors.PeachPuff = "#FFDAB9";
    Colors.Yellow = "#FFFF00";
    Colors.PaleGoldenrod = "#EEE8AA";
    Colors.Moccasin = "#FFE4B5";
    Colors.PapayaWhip = "#FFEFD5";
    Colors.LightGoldenrodYellow = "#FAFAD2";
    Colors.LemonChiffon = "#FFFACD";
    Colors.LightYellow = "#FFFFE0";
    // 茶色
    Colors.Maroon = "#800000";
    Colors.Brown = "#A52A2A";
    Colors.SaddleBrown = "#8B4513";
    Colors.Sienna = "#A0522D";
    Colors.Chocolate = "#D2691E";
    Colors.DarkGoldenrod = "#B8860B";
    Colors.Peru = "#CD853F";
    Colors.RosyBrown = "#BC8F8F";
    Colors.Goldenrod = "#DAA520";
    Colors.SandyBrown = "#F4A460";
    Colors.Tan = "#D2B48C";
    Colors.Burlywood = "#DEB887";
    Colors.Wheat = "#F5DEB3";
    Colors.NavajoWhite = "#FFDEAD";
    Colors.Bisque = "#FFE4C4";
    Colors.BlanchedAlmond = "#FFEBCD";
    Colors.Cornsilk = "#FFF8DC";
    // 緑
    Colors.DarkGreen = "#006400";
    Colors.Green = "#008000";
    Colors.DarkOliveGreen = "#556B2F";
    Colors.ForestGreen = "#228B22";
    Colors.SeaGreen = "#2E8B57";
    Colors.Olive = "#808000";
    Colors.OliveDrab = "#6B8E23";
    Colors.MediumSeaGreen = "#3CB371";
    Colors.LimeGreen = "#32CD32";
    Colors.Lime = "#00FF00";
    Colors.SpringGreen = "#00FF7F";
    Colors.MediumSpringGreen = "#00FA9A";
    Colors.DarkSeaGreen = "#8FBC8F";
    Colors.MediumAquamarine = "#66CDAA";
    Colors.YellowGreen = "#9ACD32";
    Colors.LawnGreen = "#7CFC00";
    Colors.Chartreuse = "#7FFF00";
    Colors.LightGreen = "#90EE90";
    Colors.GreenYellow = "#ADFF2F";
    Colors.PaleGreen = "#98FB98";
    // 紫
    Colors.Indigo = "#4B0082";
    Colors.Purple = "#800080";
    Colors.DarkMagenta = "#8B008B";
    Colors.DarkViolet = "#9400D3";
    Colors.DarkSlateBlue = "#483D8B";
    Colors.BlueViolet = "#8A2BE2";
    Colors.DarkOrchid = "#9932CC";
    Colors.Fuchsia = "#FF00FF";
    Colors.Magenta = "#FF00FF";
    Colors.SlateBlue = "#6A5ACD";
    Colors.MediumSlateBlue = "#7B68EE";
    Colors.MediumOrchid = "#BA55D3";
    Colors.MediumPurple = "#9370DB";
    Colors.Orchid = "#DA70D6";
    Colors.Violet = "#EE82EE";
    Colors.Plum = "#DDA0DD";
    Colors.Thistle = "#D8BFD8";
    Colors.Lavender = "#E6E6FA";
    // 青
    Colors.MidnightBlue = "#191970";
    Colors.Navy = "#000080";
    Colors.DarkBlue = "#00008B";
    Colors.MediumBlue = "#0000CD";
    Colors.Blue = "#0000FF";
    Colors.RoyalBlue = "#4169E1";
    Colors.SteelBlue = "#4682B4";
    Colors.DodgerBlue = "#1E90FF";
    Colors.DeepSkyBlue = "#00BFFF";
    Colors.CornflowerBlue = "#6495ED";
    Colors.SkyBlue = "#87CEEB";
    Colors.LightSkyBlue = "#87CEFA";
    Colors.LightSteelBlue = "#B0C4DE";
    Colors.LightBlue = "#ADD8E6";
    Colors.PowderBlue = "#B0E0E6";
    // シアン
    Colors.Teal = "#008080";
    Colors.DarkCyan = "#008B8B";
    Colors.LightSeaGreen = "#20B2AA";
    Colors.CadetBlue = "#5F9EA0";
    Colors.DarkTurquoise = "#00CED1";
    Colors.MediumTurquoise = "#48D1CC";
    Colors.Turquoise = "#40E0D0";
    Colors.Aqua = "#00FFFF";
    Colors.Cyan = "#00FFFF";
    Colors.Aquamarine = "#7FFFD4";
    Colors.PaleTurquoise = "#AFEEEE";
    Colors.LightCyan = "#E0FFFF";
    // 白
    Colors.MistyRose = "#FFE4E1";
    Colors.AntiqueWhite = "#FAEBD7";
    Colors.Linen = "#FAF0E6";
    Colors.Beige = "#F5F5DC";
    Colors.WhiteSmoke = "#F5F5F5";
    Colors.LavenderBlush = "#FFF0F5";
    Colors.OldLace = "#FDF5E6";
    Colors.AliceBlue = "#F0F8FF";
    Colors.Seashell = "#FFF5EE";
    Colors.GhostWhite = "#F8F8FF";
    Colors.Honeydew = "#F0FFF0";
    Colors.FloralWhite = "#FFFAF0";
    Colors.Azure = "#F0FFFF";
    Colors.MintCream = "#F5FFFA";
    Colors.Snow = "#FFFAFA";
    Colors.Ivory = "#FFFFF0";
    Colors.White = "#FFFFFF";
    // 黒
    Colors.Black = "#000000";
    Colors.DarkSlateGray = "#2F4F4F";
    Colors.DimGray = "#696969";
    Colors.SlateGray = "#708090";
    Colors.Gray = "#808080";
    Colors.LightSlateGray = "#778899";
    Colors.DarkGray = "#A9A9A9";
    Colors.DeepDarkGray = "#3F3F3F";
    Colors.Silver = "#C0C0C0";
    Colors.LightGray = "#D3D3D3";
    Colors.Gainsboro = "#DCDCDC";
    cellgame.Colors = Colors;
})(cellgame || (cellgame = {}));
