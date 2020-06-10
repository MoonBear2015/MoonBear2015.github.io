
interface ISctKwd extends ITest {
    Ky : string;
    Wd : string;
    Pc : string;
    Copy : ISctKwd;
}
class SctKwd implements ISctKwd {
    public Ky : string;
    public Wd : string;
    public Pc : string;
    constructor(
        in_Ky? : string
        ,
        in_Wd? : string
        ,
        in_Pc? : string
    )
    {
        if (in_Ky) {
            this.Ky = in_Ky;
        } else {
            this.Ky = '';
        }
        if (in_Wd) {
            this.Wd = in_Wd;
        } else {
            this.Wd = '';
        }
        if (in_Pc) {
            this.Pc = in_Pc;
        } else {
            this.Pc = '';
        }
    }
    public get Copy() : ISctKwd {
        return new SctKwd(this.Ky,this.Wd,this.Pc);
    }

    public ToString() : string
    {
        let result = '';
        if (this.Ky != '') result += '[' + this.Ky + ']';
        if (this.Wd != '') result += '"' + this.Wd + '"';
        if (this.Pc != '') result += '(' + this.Pc + ')';
        return result;
    }
}

interface IKwdArray<T extends ISctKwd> extends ITest {
    itms : T[];
    Add(in_array : Array<T>): void;
    
    Paste(in_array : Array<T>): void;
    Copy() : IKwdArray<T>;
}





