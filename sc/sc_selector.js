"use strict";
var SelectMode;
(function (SelectMode) {
    SelectMode[SelectMode["Seq"] = 0] = "Seq";
    SelectMode[SelectMode["Rnd"] = 1] = "Rnd";
    SelectMode[SelectMode["Lck"] = 2] = "Lck";
})(SelectMode || (SelectMode = {}));
class ItmSt {
    constructor() {
        this.equal = (itm) => true;
        this.copy = () => new ItmSt();
        this.toString = () => this.toString();
    }
}
class ItmArraySt {
    constructor(inItms) {
        this.clear = () => this.itms = [];
        this.add = (inItms) => {
            inItms.forEach(it => {
                this.itms.push(it);
            });
        };
        this.update = (inItms) => {
            this.clear();
            this.add(inItms);
        };
        this.copy = () => new ItmArraySt(this.itms);
        this.toString = () => {
            let result = "";
            let cnt = 0;
            this.itms.forEach(itm => {
                result += "[" + cnt.toString() + "] ";
                result += itm.toString();
                result += "\r\n";
                cnt++;
            });
            result += "*** count:" + cnt.toString();
            return result;
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
}
class ItmDictionarySt extends ItmArraySt {
    constructor(inTag, inItms) {
        super(inItms);
        this.copy = () => new ItmDictionarySt(this.tag, this.itms);
        if (inTag) {
            this.tag = inTag;
        }
        else {
            this.tag = undefined;
        }
    }
}
class ItmSelectorSt extends ItmArraySt {
    constructor(inItms, inTag, inMode) {
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
                case SelectMode.Lck:
                    return this.next_Lck();
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
        if (inTag) {
            this.tag = inTag;
        }
        else {
            this.tag = "";
        }
        if (inMode) {
            this.mode = inMode;
        }
        else {
            this.mode = SelectMode.Seq;
        }
    }
}
class TxtSt extends ItmSt {
    constructor(inTxt) {
        super();
        this.equal = (inItm) => {
            if (typeof (inItm) == typeof (this)) {
                let checkItm = inItm;
                return checkItm.txt == this.txt;
            }
            return false;
        };
        this.toString = () => this.txt;
        this.txt = "";
        if (inTxt)
            this.txt = inTxt;
    }
}
class WrdSt extends TxtSt {
    constructor(inTxt, inTag, inPic) {
        super(inTxt);
        this.equal = (inItm) => {
            if (typeof (inItm) == typeof (this)) {
                let checkItm = inItm;
                return (checkItm.txt == this.txt) && (checkItm.tag == this.tag);
            }
            return false;
        };
        this.copy = () => new WrdSt(this.txt, this.tag, this.pic);
        this.tag = inTag;
        this.pic = "";
        if (inPic) {
            this.pic = inPic;
        }
        else {
            this.pic = undefined;
        }
    }
}
class DictionaryBase {
    constructor() {
        this.Adddictionary = (inTag) => {
            this.dictionary[inTag] = new ItmDictionarySt(inTag);
        };
        this.dictionary = {};
    }
}
