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
        this.add = (inItm) => this.itms.push(inItm);
        this.itms = [];
        if (inItms) {
            this.append(inItms);
        }
    }
    get length() {
        if (this.itms)
            return this.itms.length;
        else
            return 0;
    }
    append(inItms) {
        inItms.forEach(it => {
            this.itms.push(it);
        });
    }
    renew(inItms) {
        this.clear();
        this.append(inItms);
    }
    copy() {
        return new ItmArraySt(this.itms);
    }
    toString() {
        let result = "----------------------<br>";
        let cnt = 0;
        this.itms.forEach(itm => {
            result += "[" + cnt.toString() + "] ";
            result += itm.toString();
            result += "\r\n";
            cnt++;
        });
        result += "*** count:" + cnt.toString();
        result += "\r\n";
        return result;
    }
}
class ItmDictionarySt extends ItmArraySt {
    constructor(inTagKey, inItms) {
        super(inItms);
        this.copy = () => new ItmDictionarySt(this.tagKey, this.itms);
        if (inTagKey) {
            this.tagKey = inTagKey;
        }
        else {
            this.tagKey = undefined;
        }
    }
    toString() {
        let result = ">>>>>>>>>>>>>>>>>>>>>>> " + this.tagKey + "\r\n";
        result += super.toString();
        return result;
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
            if (inItm instanceof TxtSt) {
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
            if (inItm instanceof WrdSt) {
                let checkItm = inItm;
                return (checkItm.txt == this.txt) && (checkItm.tagTxt == this.tagTxt);
            }
            return false;
        };
        this.isTagCheck = (inTagKey) => StrInTxtCheck(this.tagTxt, inTagKey);
        this.copy = () => new WrdSt(this.txt, this.tagTxt, this.pic);
        this.toString = () => this.txt + " [" + this.tagTxt + "]";
        this.tagTxt = inTag;
        if (inPic && inPic != "") {
            this.pic = inPic;
        }
        else {
            this.pic = undefined;
        }
    }
}
class DictionaryBase {
    constructor() {
        this.AddWrd = (inWrd) => {
            this.wrds.push(inWrd);
            let keys = TagTxt_TagKeys(inWrd.tagTxt);
            keys.forEach(key => {
                this.NewDictionary(key);
                this.dictionarys[key].add(inWrd);
            });
        };
        this.NewDictionary = (inTagKey) => {
            if (!this.dictionarys[inTagKey]) {
                this.dictionarys[inTagKey] = new ItmDictionarySt(inTagKey);
            }
        };
        this.toString = () => {
            let result = "";
            for (let key in this.dictionarys) {
                result += this.dictionarys[key].toString();
            }
            return result;
        };
        this.wrds = [];
        this.dictionarys = {};
    }
}
