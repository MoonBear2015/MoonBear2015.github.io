interface Rec {
    Equal(inRec : Rec) : boolean;
}

interface KyRec extends Rec{
    Ky : string;
}
interface KyArray<T extends KyRec> {
    Ky : string;
    Recs : T[];
    add(inRec : T): void;
    addRecs(inArray : Array<T>): void;    
    pasteRecs(inarray : Array<T>): void;
}

class KyArray_Standard<T extends KyRec> implements KyArray<T> {
    public Ky : string;
    public Recs : T[];
    constructor()
    {
        this.Ky = "";
        this.Recs = new Array<T>();
    }
    public add(inRec : T) {
        if (this.Ky == '') {
            this.Ky = inRec.Ky;
        }
        if (this.Ky != inRec.Ky) {
            return;
        }
        this.Recs.push(inRec);
    }
    public addRecs(inArray : Array<T>) {
        inArray.forEach(it => {
            this.add(it);
        }
        );
    }
    public pasteRecs(inArray : Array<T>) {
        this.Recs = new Array<T>();
        this.Recs.length = 0;
        this.addRecs(inArray);
    }
}


interface Itm extends TestItem {
    Wd : string;
    Pc : string;
    Copy : Itm;
    ToKwd(inKy : string) : Kwd;    
}
class Itm_Standard implements Itm {
    public Wd : string;
    public Pc : string;
    constructor(
        inWd? : string
        ,
        inPc? : string
    )
    {
        if (inWd) {
            this.Wd = inWd;
        } else {
            this.Wd = '';
        }
        if (inPc) {
            this.Pc = inPc;
        } else {
            this.Pc = '';
        }
    }
    public get Copy() : Itm {
        return new Itm_Standard(this.Wd,this.Pc);
    }
    public ToKwd(inKy : string) : Kwd {
        return new Kwd_Standard(inKy,this.Wd,this.Pc);
    }

    public ToString() : string
    {
        let result = '';
        if (this.Wd != '') result += '"' + this.Wd + '"';
        if (this.Pc != '') result += '(' + this.Pc + ')';
        return result;
    }
}


interface Kwd extends Itm,TestItem {
    Ky : string;
    Copy : Kwd;
    ToItm() : Itm;
}
class Kwd_Standard extends Itm_Standard implements Kwd {
    public Ky : string;
    constructor(
        inKy? : string
        ,
        inWd? : string
        ,
        inPc? : string
    )
    {
        super(inWd,inPc);

        if (inKy) {
            this.Ky = inKy;
        } else {
            this.Ky = '';
        }
    }
    public get Copy() : Kwd {
        return new Kwd_Standard(this.Ky,this.Wd,this.Pc);
    }
    public ToItm() : Itm {
        return new Itm_Standard(this.Wd,this.Pc);
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
    Push(inKwd : T): void;
    Add(inArray : Array<T>): void;
    
    Paste(inarray : Array<T>): void;
    Copy() : KwdArray<T>;
}

class KwdArray_Standard<T extends Kwd> implements KwdArray<T> {
    public Ky : string;
    public Itms : T[];
    constructor(){
        this.Ky = '';
        this.Itms = new Array<T>();
    }
    public Push(inKwd : T) {
        if (this.Ky == '') {
            this.Ky = inKwd.Ky;
        }
        if (this.Ky != inKwd.Ky) {
            return;
        }
        this.Itms.push(inKwd);
    }
    public Add(inArray : Array<T>) {
        inArray.forEach(it => {
            this.Push(it);
        }
        );
    }
    public Paste(inArray : Array<T>) {
        this.Itms = new Array<T>();
        this.Itms.length = 0;
        this.Add(inArray);
    }
    public Copy() : KwdArray<T> {
        let result = new KwdArray_Standard<T>();
        result.Paste(this.Itms);
        return result;
    }
    public ToString() : string {
        return testItems_string(this.Itms);
    }
}








