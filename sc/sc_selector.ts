enum SelectMode {
    Seq
    ,
    Rnd
    ,
    Lck
}

interface Itm {
    equal(itm : Itm) : boolean;
    copy() : Itm;
}

class ItmSt implements Itm {
    constructor() {}
    public equal = (itm : Itm) : boolean => true;
    public copy = () : Itm => new ItmSt(); 
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
}

interface ItmSelector<T extends Itm> extends ItmArray<T> {
    mode : SelectMode;
    reset() : void;
    next() : T | undefined;
}

class ItmSelectorSt<T extends Itm> 
    extends ItmArraySt<T> 
    implements ItmSelector<T> 
{
    private idx : number;
    public mode : SelectMode; 

    constructor(inItms? : T[],inMode? : SelectMode) {
        super(inItms);
        this.idx = -1;
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

interface Wrd extends Itm {
    txt : string;
    pic : string | undefined;
}

class WrdSt implements Wrd {
    public txt : string;
    public pic : string | undefined;

    constructor(inTxt : string,inPic? : string) {
        this.txt = inTxt;
        this.pic = "";
        if (inPic) {
            this.pic = inPic;
        }
        else {
            this.pic = undefined;
        }
    }

    public equal = (inWrd : Wrd) : boolean => (this.txt === inWrd.txt);

    public copy = () : Wrd => new WrdSt(this.txt,this.pic);
}


