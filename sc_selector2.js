"use strict";
class Kwd_Stndard {
    constructor(in_Ky, in_Wd, in_Pc) {
        if (in_Ky) {
            this.Ky = in_Ky;
        }
        else {
            this.Ky = '';
        }
        if (in_Wd) {
            this.Wd = in_Wd;
        }
        else {
            this.Wd = '';
        }
        if (in_Pc) {
            this.Pc = in_Pc;
        }
        else {
            this.Pc = '';
        }
    }
    get Copy() {
        return new Kwd_Stndard(this.Ky, this.Wd, this.Pc);
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
    Push(in_Kwd) {
        if (this.Ky == '') {
            this.Ky = in_Kwd.Ky;
        }
        if (this.Ky != in_Kwd.Ky) {
            return;
        }
        this.Itms.push(in_Kwd);
    }
    Add(in_array) {
        in_array.forEach(it => {
            this.Push(it);
        });
    }
    Paste(in_array) {
        this.Itms = new Array();
        this.Itms.length = 0;
        this.Add(in_array);
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
