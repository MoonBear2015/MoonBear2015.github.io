"use strict";
// 独自配列用レコード：標準
class Rec_St {
}
// 独自配列：標準型
class Ary_St {
    constructor() {
        this.ary = [];
    }
    add(inRec) {
        this.ary.push(inRec);
    }
    indexOf(inRec) {
        let result = -1;
        for (let i = 0; i < this.ary.length; i++) {
            if (this.ary[i].equal(inRec)) {
                result = i;
                break;
            }
        }
        return result;
    }
    addAry(inAry) {
        inAry.forEach(it => {
            this.add(it);
        });
    }
    pasteAry(inAry) {
        this.ary = [];
        this.ary.length = 0;
        this.addAry(inAry);
    }
}
// キーレコード・標準型
class KyRec_St {
    constructor(in_ky) {
        this.ky = in_ky;
    }
}
// キーレコード用配列（同じキーのアイテムしか登録できない） 
class KyAry_St extends Ary_St {
    constructor() {
        super();
        this.ky = "";
    }
    add(inRec) {
        if (this.ky == "") {
            this.ky = inRec.ky;
        }
        if (this.ky != inRec.ky) {
            return;
        }
        this.ary.push(inRec);
    }
}
class Itm_St {
    constructor(inWd, inPc) {
        if (inWd) {
            this.wd = inWd;
        }
        else {
            this.wd = '';
        }
        if (inPc) {
            this.pc = inPc;
        }
        else {
            this.pc = '';
        }
    }
    get copy() {
        return new Itm_St(this.wd, this.pc);
    }
    toKwd(inKy) {
        return new Kwd_St(inKy, this.wd, this.pc);
    }
    ToString() {
        let result = '';
        if (this.wd != '')
            result += '"' + this.wd + '"';
        if (this.pc != '')
            result += '(' + this.pc + ')';
        return result;
    }
}
class Kwd_St extends Itm_St {
    constructor(inKy, inWd, inPc) {
        super(inWd, inPc);
        if (inKy) {
            this.Ky = inKy;
        }
        else {
            this.Ky = '';
        }
    }
    get copy() {
        return new Kwd_St(this.Ky, this.wd, this.pc);
    }
    ToItm() {
        return new Itm_St(this.wd, this.pc);
    }
    ToString() {
        let result = '';
        if (this.Ky != '')
            result += '[' + this.Ky + ']';
        if (this.wd != '')
            result += '"' + this.wd + '"';
        if (this.pc != '')
            result += '(' + this.pc + ')';
        return result;
    }
}
class KwdAry_St {
    constructor() {
        this.Ky = '';
        this.Itms = new Array();
    }
    Push(inKwd) {
        if (this.Ky == '') {
            this.Ky = inKwd.Ky;
        }
        if (this.Ky != inKwd.Ky) {
            return;
        }
        this.Itms.push(inKwd);
    }
    Add(inAry) {
        inAry.forEach(it => {
            this.Push(it);
        });
    }
    Paste(inAry) {
        this.Itms = new Array();
        this.Itms.length = 0;
        this.Add(inAry);
    }
    Copy() {
        let result = new KwdAry_St();
        result.Paste(this.Itms);
        return result;
    }
    ToString() {
        return testItems_string(this.Itms);
    }
}
