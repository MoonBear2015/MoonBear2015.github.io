"use strict";
class Rec_St {
}
class Ary_St {
    constructor() {
        this.Ary = new Array();
    }
    add(inRec) {
        this.Ary.push(inRec);
    }
    indexOf(inRec) {
        let result = -1;
        for (let i = 0; i < this.Ary.length; i++) {
            if (this.Ary[i].equal(inRec)) {
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
        this.Ary = new Array();
        this.Ary.length = 0;
        this.addAry(inAry);
    }
}
class KyAry_St extends Ary_St {
    constructor() {
        super();
        this.Ky = "";
    }
    add(inRec) {
        if (this.Ky == "") {
            this.Ky = inRec.Ky;
        }
        if (this.Ky != inRec.Ky) {
            return;
        }
        this.Ary.push(inRec);
    }
}
class Itm_St {
    constructor(inWd, inPc) {
        if (inWd) {
            this.Wd = inWd;
        }
        else {
            this.Wd = '';
        }
        if (inPc) {
            this.Pc = inPc;
        }
        else {
            this.Pc = '';
        }
    }
    get Copy() {
        return new Itm_St(this.Wd, this.Pc);
    }
    ToKwd(inKy) {
        return new Kwd_St(inKy, this.Wd, this.Pc);
    }
    ToString() {
        let result = '';
        if (this.Wd != '')
            result += '"' + this.Wd + '"';
        if (this.Pc != '')
            result += '(' + this.Pc + ')';
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
    get Copy() {
        return new Kwd_St(this.Ky, this.Wd, this.Pc);
    }
    ToItm() {
        return new Itm_St(this.Wd, this.Pc);
    }
    ToString() {
        let result = '';
        if (this.Ky != '')
            result += '[' + this.Ky + ']';
        if (this.Wd != '')
            result += '"' + this.Wd + '"';
        if (this.Pc != '')
            result += '(' + this.Pc + ')';
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
