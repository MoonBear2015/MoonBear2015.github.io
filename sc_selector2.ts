// 独自配列用レコード
interface Rec {
    equal(inRec : Rec) : boolean;

}

// 独自配列用レコード：標準
abstract class Rec_St {
    // レコード比較 true:一致
    abstract equal(inRec : Rec) : boolean;
}

// 独自配列（独自ルールを適応した配列カプセル化）
interface Ary<T extends Rec> {
    // 検索（添え字位置を返却し、なければ-1）
    indexOf(inRec : T) : number;

    // 追加（独自ルールを定義する）
    add(inRec : T)  : void;

    // 配列追加（独自addを必ず経由）
    addAry(inAry : T[]): void;

    // 配列置き換え（独自addを必ず経由）
    pasteAry(inAry : T[]): void;  
}

// 独自配列：標準型
class Ary_St<T extends Rec> implements Ary<T>{
    public ary : T[];
    constructor()
    {
        this.ary = [];
    }
    public add(inRec : T) {
        this.ary.push(inRec);
    }
    public indexOf(inRec : T) : number{
        let result : number = -1;
        for(let i = 0;i < this.ary.length;i++) {
            if (this.ary[i].equal(inRec)) {
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
        this.ary = [];
        this.ary.length = 0;
        this.addAry(inAry);
    }
}

/*
*   キー：識別キー レコードを分類するためのキー
*/

// キーレコード（文字列変換キー付きレコード）
interface KyRec extends Rec{
    // キー
    ky : string;
    equal(inRec : KyRec) : boolean;
}
// キーレコード・標準型
abstract class KyRec_St implements KyRec {
    public ky : string;
    constructor(in_ky : string) {
        this.ky = in_ky;
    }
    abstract equal(inRec : KyRec) : boolean;
}


// キーレコード用配列・独自配列より継承
interface KyAry<T extends KyRec> extends Ary<T> {
    // 登録されているキー
    ky : string;
}
// キーレコード用配列（同じキーのアイテムしか登録できない） 
class KyAry_St<T extends KyRec>
    extends Ary_St<T>
    implements KyAry<T> 
{
    public ky : string;
    constructor()
    {
        super();
        this.ky = "";
    }
    public add(inRec : T) {
        if (this.ky == "") {
            this.ky = inRec.ky;
        }
        if (this.ky != inRec.ky) {
            return;
        }
        this.ary.push(inRec);
    }
}

interface KyArys<T extends KyRec> {

}



interface Itm extends TestItem {
    wd : string;
    pc : string;
    copy : Itm;
    toKwd(inKy : string) : Kwd;    
}
class Itm_St implements Itm {
    public wd : string;
    public pc : string;
    constructor(
        inWd? : string
        ,
        inPc? : string
    )
    {
        if (inWd) {
            this.wd = inWd;
        } else {
            this.wd = '';
        }
        if (inPc) {
            this.pc = inPc;
        } else {
            this.pc = '';
        }
    }
    public get copy() : Itm {
        return new Itm_St(this.wd,this.pc);
    }
    public toKwd(inKy : string) : Kwd {
        return new Kwd_St(inKy,this.wd,this.pc);
    }

    public ToString() : string
    {
        let result = '';
        if (this.wd != '') result += '"' + this.wd + '"';
        if (this.pc != '') result += '(' + this.pc + ')';
        return result;
    }
}


interface Kwd extends Itm,TestItem {
    Ky : string;
    copy : Kwd;
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
    public get copy() : Kwd {
        return new Kwd_St(this.Ky,this.wd,this.pc);
    }
    public ToItm() : Itm {
        return new Itm_St(this.wd,this.pc);
    }

    public ToString() : string
    {
        let result = '';
        if (this.Ky != '') result += '[' + this.Ky + ']';
        if (this.wd != '') result += '"' + this.wd + '"';
        if (this.pc != '') result += '(' + this.pc + ')';
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








