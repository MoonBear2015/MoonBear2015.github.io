"use strict";
class Itm_Standard {
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
        return new Itm_Standard(this.Wd, this.Pc);
    }
    ToKwd(inKy) {
        return new Kwd_Standard(inKy, this.Wd, this.Pc);
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
class Kwd_Standard extends Itm_Standard {
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
        return new Kwd_Standard(this.Ky, this.Wd, this.Pc);
    }
    ToItm() {
        return new Itm_Standard(this.Wd, this.Pc);
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
class KwdArray_Standard {
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
    Add(inArray) {
        inArray.forEach(it => {
            this.Push(it);
        });
    }
    Paste(inArray) {
        this.Itms = new Array();
        this.Itms.length = 0;
        this.Add(inArray);
    }
    Copy() {
        let result = new KwdArray_Standard();
        result.Paste(this.Itms);
        return result;
    }
    ToString() {
        return testItems_string(this.Itms);
    }
}
