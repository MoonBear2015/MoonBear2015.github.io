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
    add(inItm : T): void;
    renew(in_array : T[]): void;
    append(in_array : T[]): void;
    copy() : ItmArray<T>;
    toString() : string;
}

class ItmArraySt<T extends Itm> implements ItmArray<T> {
    public itms : T[];

    constructor(inItms? : T[]) {
        this.itms = [];
        if (inItms) {
            this.append(inItms);
        }
    }

    get length() : number {
        if (this.itms) return this.itms.length
        else return 0;
    }

    public clear = () => this.itms = [];

    public add = (inItm : T) => this.itms.push(inItm);

    public append (inItms : T[]) {
        inItms.forEach(it => {
            this.itms.push(it);
        }
        );
    }

    public renew (inItms : T[]) {
        this.clear();
        this.append(inItms);
    }

    public copy() : ItmArray<T> {
        return new ItmArraySt<T>(this.itms);
    }

    public toString() : string {
        let result : string = "----------------------<br>";
        let cnt = 0;
        this.itms.forEach(itm => {
            result += "[" + cnt.toString() + "] ";
            result += itm.toString();
            result += "\r\n";
            cnt++;
        });
        result += "*** count:" + cnt.toString();
        result += "\r\n";
        return result;
    }
}

interface ItmDictionary<T extends Wrd> extends ItmArray<T> {
    tagKey : string | undefined;    
}
class ItmDictionarySt<T extends Wrd> extends ItmArraySt<T> implements ItmDictionary<T>
{
    public tagKey: string | undefined;
    constructor(inTagKey?:string,inItms?: T[])
    {
        super(inItms);
        if (inTagKey) {
            this.tagKey = inTagKey;
        }
        else {
            this.tagKey = undefined;
        }
    }

    public copy = () : ItmDictionary<T> => new ItmDictionarySt<T>(this.tagKey,this.itms);

    public toString() : string {
        let result = ">>>>>>>>>>>>>>>>>>>>>>> " + this.tagKey + "\r\n";
        result += super.toString();
        return result;
    }

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
    tagTxt : string;
    pic : string | undefined;
    isTagCheck(inTagKey : string) : boolean;
}

class WrdSt extends TxtSt implements Wrd {
    public tagTxt : string;
    public pic : string | undefined;

    constructor(inTxt : string,inTag : string,inPic? : string) {
        super(inTxt);
        this.tagTxt = inTag;
        if (inPic && inPic != "") {
            this.pic = inPic;
        }
        else {
            this.pic = undefined;
        }
    }

    public equal = (inItm : any) : boolean => {
        if (inItm instanceof WrdSt) {
            let checkItm = inItm as Wrd;
            return (checkItm.txt == this.txt) && (checkItm.tagTxt == this.tagTxt);
        }
        return false;
    }

    public isTagCheck = (inTagKey : string) : boolean =>
        StrInTxtCheck(this.tagTxt,inTagKey);

    public copy = () : Wrd => new WrdSt(this.txt,this.tagTxt,this.pic);

    public toString = () : string => this.txt + " [" + this.tagTxt + "]";
}

class DictionaryBase {
    public  wrds : Wrd[];

    public dictionarys : { [tagKey:string] : ItmDictionary<Wrd>};

    constructor() {
        this.wrds = [];
        this.dictionarys = {};        
    }

    public AddWrd = (inWrd : Wrd) => {
        this.wrds.push(inWrd);
        let keys = TagTxt_TagKeys(inWrd.tagTxt);
        keys.forEach(key => {
            this.NewDictionary(key);
            this.dictionarys[key].add(inWrd);
        }
        );
    }

    public NewDictionary = (inTagKey : string) => {
        if (!this.dictionarys[inTagKey]) {
            this.dictionarys[inTagKey] = new ItmDictionarySt<Wrd>(inTagKey);
        }
    }

    public toString = () : string => {
        let result : string = "";
        for(let key in this.dictionarys) {
            result += this.dictionarys[key].toString();
        }
        return result;
    }

}




