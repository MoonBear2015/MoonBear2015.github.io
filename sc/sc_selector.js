"use strict";
class ItmSt {
    constructor() { }
    equal(itm) {
        return true;
    }
    copy() {
        return new ItmSt();
    }
    toString() {
        return this.toString();
    }
}
class ItmArraySt {
    constructor(inItms) {
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
    clear() {
        this.itms = [];
    }
    add(inItm) {
        this.itms.push(inItm);
    }
    ;
    append(inItms) {
        inItms.forEach(it => {
            this.add(it);
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
        if (inTagKey) {
            this.tagKey = inTagKey;
        }
        else {
            this.tagKey = "";
        }
    }
    copy() {
        return new ItmDictionarySt(this.tagKey, this.itms);
    }
    add(inItm) {
        alert(inItm.tagTxt + " << " + this.tagKey);
        if (inItm.isTagCheck(this.tagKey)) {
            this.itms.push(inItm);
        }
    }
    ;
    toString() {
        let result = ">>>>>>>>>>>>>>>>>>>>>>> " + this.tagKey + "\r\n";
        result += super.toString();
        return result;
    }
}
class ItmSelectorSt {
    constructor(inDic, inMode) {
        this.idx = -1;
        this.dic = inDic;
        this.tagKey = this.dic.tagKey;
        if (inMode) {
            this.mode = inMode;
        }
        else {
            this.mode = "";
        }
    }
    reset() {
        this.idx = -1;
    }
    next() {
        if (this.dic.length == 0)
            return undefined;
        switch (this.mode) {
            case SEL_SEQ:
                return this.next_Seq();
                break;
            case SEL_RND:
                return this.next_Rnd();
                break;
            case SEL_LCK:
                return this.next_Lck();
                break;
        }
        return undefined;
    }
    next_Seq() {
        if (this.idx >= (this.dic.length - 1)) {
            this.idx = 0;
        }
        else {
            this.idx++;
        }
        return this.dic.itms[this.idx];
    }
    next_Rnd() {
        return this.dic.itms[RanMax(this.dic.itms.length)];
    }
    next_Lck() {
        if (this.idx == -1) {
            this.idx = RanMax(this.dic.itms.length);
        }
        return this.dic.itms[this.idx];
    }
}
class TxtSt extends ItmSt {
    constructor(inTxt) {
        super();
        this.txt = "";
        if (inTxt)
            this.txt = inTxt;
    }
    equal(inItm) {
        if (inItm instanceof TxtSt) {
            let checkItm = inItm;
            return checkItm.txt == this.txt;
        }
        return false;
    }
    toString() {
        return this.txt;
    }
}
class WrdSt extends TxtSt {
    constructor(inTxt, inTag, inPic) {
        super(inTxt);
        this.tagTxt = inTag;
        if (inPic && inPic != "") {
            this.pic = inPic;
        }
        else {
            this.pic = undefined;
        }
    }
    equal(inItm) {
        if (inItm instanceof WrdSt) {
            let checkItm = inItm;
            return (checkItm.txt == this.txt) && (checkItm.tagTxt == this.tagTxt);
        }
        return false;
    }
    isTagCheck(inTagKey) {
        return StrInTxtCheck(this.tagTxt, inTagKey);
    }
    copy() {
        return new WrdSt(this.txt, this.tagTxt, this.pic);
    }
    toString() {
        return this.txt + " [" + this.tagTxt + "]";
    }
}
class DictionaryBase {
    constructor() {
        this.wrds = [];
        this.dictionarys = {};
    }
    AddWrd(inWrd) {
        this.wrds.push(inWrd);
        let keys = TagTxt_TagKeys(inWrd.tagTxt);
        keys.forEach(key => {
            this.NewDictionary(key);
            this.dictionarys[key].add(inWrd);
        });
    }
    NewDictionary(inTagKey) {
        if (!this.dictionarys[inTagKey]) {
            this.dictionarys[inTagKey] = new ItmDictionarySt(inTagKey);
        }
    }
    toString() {
        let result = "";
        for (let key in this.dictionarys) {
            result += this.dictionarys[key].toString();
        }
        return result;
    }
}
