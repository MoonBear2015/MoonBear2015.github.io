
interface Itm {
    equal(inItm : any) : boolean;
    copy() : Itm;
    toString() : string;    
}

class ItmSt implements Itm {
    constructor() {}
    public equal (itm : any) : boolean {
        return true;
    }
    public copy () : Itm {
        return new ItmSt();
    } 
    public toString () : string {
        return this.toString();
    }
}

interface ItmArray<T extends Itm> {
    readonly length : number;
    itms : T[];
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

    public clear () {
        this.itms = [];
    } 

    public add (inItm : T) {
        this.itms.push(inItm);
    };

    public append (inItms : T[]) {
        inItms.forEach(it => {
            this.add(it);
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
    tagKey : string;    
}
class ItmDictionarySt<T extends Wrd> extends ItmArraySt<T> implements ItmDictionary<T>
{
    public tagKey : string;
    // public tagKey: string;
    constructor(public inTagKey:string,inItms?: T[])
    {
        super();
        this.tagKey = inTagKey;
        if (inItms) {
            this.append(inItms);
        }
    }

    public copy() : ItmDictionary<T> {
        return new ItmDictionarySt<T>(this.tagKey,this.itms);
    }

    public add(inItm : T) {
        if ((this.tagKey) && inItm.isTagCheck(this.tagKey)){
            this.itms.push(inItm);
        }
    };

    public toString() : string {
        let result = ">>>>>>>>>>>>>>>>>>>>>>> [" + this.tagKey + "]\r\n";
        result += super.toString();
        return result;
    }

}

interface TagReplacer<T extends Wrd> {
    tag : Tag;
    next() : T | undefined;
    tagReplace(inText : string) : string;
}

abstract class TagReplacerSt<T extends Wrd> implements TagReplacer<T> {
    public tag : Tag;
    abstract next() : T | undefined;

    constructor(inKey : string,inSel? : string) {
        this.tag = new Tag(inKey,inSel);
    }

    public tagReplace(inText : string) : string {
        let result = inText;
        
        while(true) {
            if (result.indexOf(this.tag.tag) === -1) break;
            let wrd = this.next();
            if (wrd) {
                result = result.replace(this.tag.tag,wrd.txt);
                if (wrd.pic) {
                    while(true) {
                        if (result.indexOf(this.tag.pTag) === -1) break;
                        result = result.replace(this.tag.pTag,wrd.pic);
                    }
                }
            }       
        }
        return result;
    }
}


interface WrdSelector<T extends Wrd> 
    extends TagReplacer<T>
{
    tag : Tag;
    tagSel : string;
    dic : ItmDictionary<T>;
    tagKey :   string;
    reset() : void;
    next() : T | undefined;
    toString() : string;
}


class WrdSelectorSt<T extends Wrd>
    extends TagReplacerSt<T>
    implements WrdSelector<T>
{
    public dic : ItmDictionary<T>
    private idx : number;
    public tagSel : string;
    public tagKey : string;
    public tag : Tag;

    constructor(inDic : ItmDictionary<T>,inSel : string) {
        super(inDic.tagKey,inSel);
        this.idx = -1;
        this.dic = inDic;
        this.tagKey = this.dic.tagKey;
        if (inSel) {
            this.tagSel = inSel;
        }
        else
        {
            this.tagSel = "";
        }
        this.tag = new Tag(this.tagKey,this.tagSel);
    }

    public reset () : void {
        this.idx = -1;
    }

    public next () : T | undefined {
        if (this.dic.length == 0) return undefined;
        switch(this.tagSel) {
            case SEL_SEQ:
                return this.next_Seq();
                break;
            case SEL_RND:
                return this.next_Rnd();
                break;
            case SEL_LCK:
                return this.next_Lck();
                break;
        }
        return undefined;
    }

    public next_Seq () : T | undefined {
        if (this.idx >= (this.dic.length - 1)) {
            this.idx = 0;
        }        
        else {
            this.idx++;
        }
        return this.dic.itms[this.idx];
    }

    public next_Rnd () : T | undefined {
        return this.dic.itms[RanMax(this.dic.itms.length)];
    }

    public next_Lck () : T | undefined {
        if (this.idx == -1) {
            this.idx = RanMax(this.dic.itms.length);
        }
        return this.dic.itms[this.idx];
    }
    
    public toString() : string {
        let result = "------------------------- [" + this.tagSel + "]\r\n";
        result += this.dic.toString();
        return result;
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
    public equal (inItm : any) :boolean {
        if (inItm instanceof TxtSt) {
            let checkItm = inItm as Txt;
            return checkItm.txt == this.txt;
        }
        return false;
    }

    public toString () : string {
        return this.txt;
    }
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

    public equal (inItm : any) : boolean {
        if (inItm instanceof WrdSt) {
            let checkItm = inItm as Wrd;
            return (checkItm.txt == this.txt) && (checkItm.tagTxt == this.tagTxt);
        }
        return false;
    }

    public isTagCheck (inTagKey : string) : boolean {
        return isInKeys(this.tagTxt,inTagKey);
    }

    public copy () : Wrd {
        return new WrdSt(this.txt,this.tagTxt,this.pic);
    }

    public toString () : string {
        return this.txt + " [" + this.tagTxt + "]";
    }
}

class DictionaryBase {
    public  wrds : Wrd[];

    public dictionarys : { [tagKey:string] : ItmDictionary<Wrd>};
    public selectors : {[tag:string] : WrdSelector<Wrd>};

    constructor() {
        this.wrds = [];
        this.dictionarys = {};
        this.selectors = {};       
    }

    public AddWrds (inWrds : Wrd[]) {
        inWrds.forEach( wrd => this.AddWrd(wrd) );
    }

    public AddWrd (inWrd : Wrd) {
        this.wrds.push(inWrd);
        let keys = TagTxt_TagKeys(inWrd.tagTxt);
        keys.forEach(key => {
            this.NewDictionary(key);
            this.dictionarys[key].add(inWrd);
        }
        );
    }

    public NewDictionary (inTagKey : string) {
        if (!this.dictionarys[inTagKey]) {
            let newDictionary = new ItmDictionarySt<Wrd>(inTagKey);
            this.dictionarys[inTagKey] = newDictionary;
            SELS.forEach(sel => this.NewSelector(inTagKey,newDictionary,sel));
        }
    }

    public NewSelector (inTagKey : string,inDictionary : ItmDictionary<Wrd>,inSelMode : string) {        
        let tag = new Tag(inTagKey,inSelMode);
        if (!this.selectors[tag.tag]) {
            let newSelector : WrdSelector<Wrd> = new WrdSelectorSt<Wrd>(inDictionary,inSelMode);
            this.selectors[tag.tag] = newSelector;
        }
    }

    public reset() {
        for(let key in this.selectors) {
            this.selectors[key].reset();
        }
    }

    public tagReplace(inText : string) : string {
        let result = inText;
        let cnt = 0;
        while(true) {
            if (result.indexOf(TAG_CHR) === -1) {
                break;
            }
            cnt++;
            if (cnt > 100) {
                alert("Over Work!!");
                break;
            }
            for(let key in this.selectors) {
                result = this.selectors[key].tagReplace(result);                
            }
        }
        return result;
    }

    public toString () : string {
        let result : string = "";
        for(let key in this.dictionarys) {
            result += this.dictionarys[key].toString();
        }
        return result;
    }

}




