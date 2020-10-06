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
    // public tagKey: string;
    constructor(inTagKey, inItms) {
        super();
        this.inTagKey = inTagKey;
        this.tagKey = inTagKey;
        if (inItms) {
            this.append(inItms);
        }
    }
    copy() {
        return new ItmDictionarySt(this.tagKey, this.itms);
    }
    add(inItm) {
        if ((this.tagKey) && inItm.isTagCheck(this.tagKey)) {
            this.itms.push(inItm);
        }
    }
    ;
    toString() {
        let result = ">>>>>>>>>>>>>>>>>>>>>>> [" + this.tagKey + "]\r\n";
        result += super.toString();
        return result;
    }
}
class TagReplacerSt {
    constructor(inKey, inSel) {
        this.tag = new Tag(inKey, inSel);
    }
    tagReplace(inText) {
        let result = inText;
        while (true) {
            if (result.indexOf(this.tag.tag) === -1)
                break;
            let wrd = this.next();
            if (wrd) {
                result = result.replace(this.tag.tag, wrd.txt);
                if (wrd.pic) {
                    while (true) {
                        if (result.indexOf(this.tag.pTag) === -1)
                            break;
                        result = result.replace(this.tag.pTag, wrd.pic);
                    }
                }
            }
        }
        return result;
    }
}
class WrdSelectorSt extends TagReplacerSt {
    constructor(inDic, inSel) {
        super(inDic.tagKey, inSel);
        this.idx = -1;
        this.dic = inDic;
        this.tagKey = this.dic.tagKey;
        if (inSel) {
            this.tagSel = inSel;
        }
        else {
            this.tagSel = "";
        }
        this.tag = new Tag(this.tagKey, this.tagSel);
    }
    reset() {
        this.idx = -1;
    }
    next() {
        if (this.dic.length == 0)
            return undefined;
        switch (this.tagSel) {
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
    toString() {
        let result = "------------------------- [" + this.tagSel + "]\r\n";
        result += this.dic.toString();
        return result;
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
        return isInKeys(this.tagTxt, inTagKey);
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
        this.selectors = {};
    }
    AddWrds(inWrds) {
        inWrds.forEach(wrd => this.AddWrd(wrd));
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
            let newDictionary = new ItmDictionarySt(inTagKey);
            this.dictionarys[inTagKey] = newDictionary;
            SELS.forEach(sel => this.NewSelector(inTagKey, newDictionary, sel));
        }
    }
    NewSelector(inTagKey, inDictionary, inSelMode) {
        let tag = new Tag(inTagKey, inSelMode);
        if (!this.selectors[tag.tag]) {
            let newSelector = new WrdSelectorSt(inDictionary, inSelMode);
            this.selectors[tag.tag] = newSelector;
        }
    }
    reset() {
        for (let key in this.selectors) {
            this.selectors[key].reset();
        }
    }
    tagReplace(inText) {
        let result = inText;
        let cnt = 0;
        while (true) {
            if (result.indexOf(TAG_CHR) === -1) {
                break;
            }
            cnt++;
            if (cnt > 100) {
                alert("Over Work!!");
                break;
            }
            for (let key in this.selectors) {
                result = this.selectors[key].tagReplace(result);
            }
        }
        return result;
    }
    toString() {
        let result = "";
        for (let key in this.dictionarys) {
            result += this.dictionarys[key].toString();
        }
        return result;
    }
}
