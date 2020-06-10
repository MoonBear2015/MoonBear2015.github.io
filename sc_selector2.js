"use strict";
class SctKwd {
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
        return new SctKwd(this.Ky, this.Wd, this.Pc);
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
