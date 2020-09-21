enum SelectMode {
    Seq
    ,
    Rnd
    ,
    Lck
}

interface Itm {
    equal(inItm : any) : boolean;
    copy() : Itm;
    toString() : string;    
}

class ItmSt implements Itm {
    constructor() {}
    public equal = (itm : any) : boolean => true;
    public copy = () : Itm => new ItmSt();
    public toString = () : string => this.toString();
}

interface ItmArray<T extends Itm> {
    itms : T[];
    readonly length : number;
    clear() : void;
    update(in_array : T[]): void;
    add(in_array : T[]): void;
    copy() : ItmArray<T>;   
}

class ItmArraySt<T extends Itm> implements ItmArray<T> {
    public itms : T[];

    constructor(inItms? : T[]) {
        this.itms = [];
        if (inItms) {
            this.add(inItms);
        }
    }

    get length() : number {
        if (this.itms) return this.itms.length
        else return 0;
    }

    public clear = () => this.itms = [];
    
    public add = (inItms : T[]) => {
        inItms.forEach(it => {
            this.itms.push(it);
        }
        );
    }

    public update = (inItms : T[]) => {
        this.clear();
        this.add(inItms);
    }

    public copy = () : ItmArray<T> => new ItmArraySt<T>(this.itms);

    public toString = () : string => {
        let result : string = "";
        let cnt = 0;
        this.itms.forEach(itm => {
            result += "[" + cnt.toString() + "] ";
            result += itm.toString();
            result += "\r\n";
            cnt++;
        });
        result += "*** count:" + cnt.toString();
        return result;
    }
}

interface ItmDictionary<T extends Wrd> extends ItmArray<T> {
    tag : string | undefined;    
}
class ItmDictionarySt<T extends Wrd> extends ItmArraySt<T> implements ItmDictionary<T>
{
    public tag: string | undefined;
    constructor(inTag?:string,inItms?: T[])
    {
        super(inItms);
        if (inTag) {
            this.tag = inTag;
        }
        else {
            this.tag = undefined;
        }
    }
    public copy = () : ItmDictionary<T> => new ItmDictionarySt<T>(this.tag,this.itms);

}


interface ItmSelector<T extends Itm> extends ItmArray<T> {
    mode : SelectMode;
    tag :   string;
    reset() : void;
    next() : T | undefined;
}

class ItmSelectorSt<T extends Itm> 
    extends ItmArraySt<T> 
    implements ItmSelector<T> 
{
    private idx : number;
    public mode : SelectMode;
    public tag : string; 

    constructor(inItms? : T[],inTag? : string,inMode? : SelectMode) {
        super(inItms);
        this.idx = -1;
        if (inTag) {
            this.tag = inTag;
        } 
        else {
            this.tag = "";
        }

        if (inMode) {
            this.mode = inMode;
        } else {
            this.mode = SelectMode.Seq;
        }

    }

    public reset = () : void => {
        this.idx = -1;
    }

    public next = () : T | undefined => {
        if (this.itms.length == 0) return undefined;
        switch(this.mode) {
            case SelectMode.Seq:
                return this.next_Seq();
                break;
            case SelectMode.Rnd:
                return this.next_Rnd();
                break;
            case SelectMode.Lck:
                return this.next_Lck();
                break;
        }
        return undefined;
    }

    public next_Seq = () : T | undefined => {
        if (this.idx < 0 || this.idx >= this.itms.length) {
            this.idx = 0;
        }
        else {
            this.idx++;
        }
        return this.itms[this.idx];
    }

    public next_Rnd = () : T | undefined => {
        return this.itms[RanMax(this.itms.length)];
    }

    public next_Lck = () : T | undefined => {
        if (this.idx == -1) {
            this.idx = RanMax(this.itms.length);
        }
        return this.itms[this.idx];
    }
    
}

interface Txt extends Itm {
    txt : string;
}
class TxtSt extends ItmSt implements Txt {
    public txt : string;
    constructor(inTxt? : string) {
        super();
        this.txt = "";
        if (inTxt) this.txt = inTxt;
    }
    public equal = (inItm : any) :boolean => {
        if (inItm instanceof TxtSt) {
            let checkItm = inItm as Txt;
            return checkItm.txt == this.txt;
        }
        return false;
    }

    public toString = () : string => this.txt;
} 

interface Wrd extends Txt {
    tag : string;
    pic : string | undefined;
}

class WrdSt extends TxtSt implements Wrd {
    public tag : string;
    public pic : string | undefined;

    constructor(inTxt : string,inTag : string,inPic? : string) {
        super(inTxt);
        this.tag = inTag;
        this.pic = "";
        if (inPic) {
            this.pic = inPic;
        }
        else {
            this.pic = undefined;
        }
    }

    public equal = (inItm : any) : boolean => {
        if (inItm instanceof WrdSt) {
            let checkItm = inItm as Wrd;
            return (checkItm.txt == this.txt) && (checkItm.tag == this.tag);
        }
        return false;
    }

    public copy = () : Wrd => new WrdSt(this.txt,this.tag,this.pic);
}

class DictionaryBase {
    public dictionary : { [key:string] : ItmDictionarySt<Wrd>};

    constructor() {
        this.dictionary = {};        
    }

    public Adddictionary = (inTag : string) => {
        this.dictionary[inTag] = new ItmDictionarySt<Wrd>(inTag);
    }
    

}




