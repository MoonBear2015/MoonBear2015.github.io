"use strict";
var SelectMode;
(function (SelectMode) {
    SelectMode[SelectMode["Seq"] = 0] = "Seq";
    SelectMode[SelectMode["Rnd"] = 1] = "Rnd";
    SelectMode[SelectMode["Lck"] = 2] = "Lck";
})(SelectMode || (SelectMode = {}));
class ItmArraySt {
    constructor(inItms) {
        this.clear = () => {
            this.itms = [];
        };
        this.add = (inItms) => {
            inItms.forEach(it => {
                this.itms.push(it);
            });
        };
        this.itms = [];
        if (inItms) {
            this.add(inItms);
        }
    }
    get length() {
        if (this.itms)
            return this.itms.length;
        else
            return 0;
    }
    update(inItms) {
        this.clear();
        this.add(inItms);
    }
    copy() {
        return new ItmArraySt(this.itms);
    }
}
class ItmSelectorSt extends ItmArraySt {
    constructor(inItms, inMode) {
        super(inItms);
        this.reset = () => {
            this.idx = -1;
        };
        this.next = () => {
            if (this.itms.length == 0)
                return undefined;
            switch (this.mode) {
                case SelectMode.Seq:
                    return this.next_Seq();
                    break;
                case SelectMode.Rnd:
                    return this.next_Rnd();
                    break;
            }
            return undefined;
        };
        this.next_Seq = () => {
            if (this.idx < 0 || this.idx >= this.itms.length) {
                this.idx = 0;
            }
            else {
                this.idx++;
            }
            return this.itms[this.idx];
        };
        this.next_Rnd = () => {
            return this.itms[RanMax(this.itms.length)];
        };
        this.next_Lck = () => {
            if (this.idx == -1) {
                this.idx = RanMax(this.itms.length);
            }
            return this.itms[this.idx];
        };
        this.idx = -1;
        if (inMode) {
            this.mode = inMode;
        }
        else {
            this.mode = SelectMode.Seq;
        }
    }
}
class WrdSt {
    constructor(inTxt, inTags, inPic) {
        this.txt = inTxt;
        if (inTags) {
            this.tags = inTags;
        }
        if (inPic) {
            this.pic = inPic;
        }
    }
}
