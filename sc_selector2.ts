
interface Kwd extends TestItem {
    Ky : string;
    Wd : string;
    Pc : string;
    Copy : Kwd;
}
class KwdStndard implements Kwd {
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
    public get Copy() : Kwd {
        return new KwdStndard(this.Ky,this.Wd,this.Pc);
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

interface KwdArray<T extends Kwd> extends TestItem {
    Ky : string;
    Itms : T[];
    Push(in_Kwd : T): void;
    Add(in_array : Array<T>): void;
    
    Paste(in_array : Array<T>): void;
    Copy() : KwdArray<T>;
}
class KwdArray_St<T extends Kwd> implements KwdArray<T> {
    public Ky : string;
    public Itms : T[];
    constructor(){
        this.Ky = '';
        this.Itms = new Array<T>();
    }
    public Push(in_Kwd : T) {
        if (this.Ky == '') {
            this.Ky = in_Kwd.Ky;
        }
        if (this.Ky != in_Kwd.Ky) {
            return;
        }
        this.Itms.push(in_Kwd);
    }
    public Add(in_array : Array<T>) {
        in_array.forEach(it => {
            this.Push(it);
        }
        );
    }
    public Paste(in_array : Array<T>) {
        this.Itms = new Array<T>();
        this.Itms.length = 0;
        this.Add(in_array);
    }
    public Copy() : KwdArray<T> {
        let result = new KwdArray_St<T>();
        result.Paste(this.Itms);
        return result;
    }
    public ToString() : string {
        return testItems_string(this.Itms);
    }

} 





