interface Rec {
    equal(inRec : Rec) : boolean;
}
abstract class Rec_St {
    abstract equal(inRec : Rec) : boolean;
}

interface Ary<T extends Rec> {
    indexOf(inRec : T) : number;
    add(inRec : T)  : void;
    addAry(inAry : Array<T>): void;
    pasteAry(inAry : Array<T>): void;  
}

class Ary_St<T extends Rec> implements Ary<T>{
    public Ary : Array<T>;
    constructor()
    {
        this.Ary = new Array<T>();
    }
    public add(inRec : T) {
        this.Ary.push(inRec);
    }
    public indexOf(inRec : T) : number{
        let result : number = -1;
        for(let i = 0;i < this.Ary.length;i++) {
            if (this.Ary[i].equal(inRec)) {
                result = i;
                break;
            }
        }
        return result;
    }
    public addAry(inAry : Array<T>) {
        inAry.forEach(it => {
            this.add(it);
        }
        );
    }
    public pasteAry(inAry : Array<T>) {
        this.Ary = new Array<T>();
        this.Ary.length = 0;
        this.addAry(inAry);
    }
}


interface KyRec extends Rec{
    Ky : string;
}
interface KyAry<T extends KyRec> extends Ary<T> {
    Ky : string;
}

class KyAry_St<T extends KyRec>
    extends Ary_St<T>
    implements KyAry<T> 
{
    public Ky : string;
    constructor()
    {
        super();
        this.Ky = "";
    }
    public add(inRec : T) {
        if (this.Ky == "") {
            this.Ky = inRec.Ky;
        }
        if (this.Ky != inRec.Ky) {
            return;
        }
        this.Ary.push(inRec);
    }
 }


interface Itm extends TestItem {
    Wd : string;
    Pc : string;
    Copy : Itm;
    ToKwd(inKy : string) : Kwd;    
}
class Itm_St implements Itm {
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
        return new Itm_St(this.Wd,this.Pc);
    }
    public ToKwd(inKy : string) : Kwd {
        return new Kwd_St(inKy,this.Wd,this.Pc);
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
class Kwd_St extends Itm_St implements Kwd {
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
        return new Kwd_St(this.Ky,this.Wd,this.Pc);
    }
    public ToItm() : Itm {
        return new Itm_St(this.Wd,this.Pc);
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

interface KwdAry<T extends Kwd> extends TestItem {
    Ky : string;
    Itms : T[];
    Push(inKwd : T): void;
    Add(inAry : Array<T>): void;
    
    Paste(inarray : Array<T>): void;
    Copy() : KwdAry<T>;
}

class KwdAry_St<T extends Kwd> implements KwdAry<T> {
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
    public Add(inAry : Array<T>) {
        inAry.forEach(it => {
            this.Push(it);
        }
        );
    }
    public Paste(inAry : Array<T>) {
        this.Itms = new Array<T>();
        this.Itms.length = 0;
        this.Add(inAry);
    }
    public Copy() : KwdAry<T> {
        let result = new KwdAry_St<T>();
        result.Paste(this.Itms);
        return result;
    }
    public ToString() : string {
        return testItems_string(this.Itms);
    }
}








