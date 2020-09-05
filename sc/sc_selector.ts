enum SelectMode {
    Seq,
    Rnd
}

interface Itm {
    equal(itm : Itm) : boolean;
    Copy() : Itm;
}

interface ItmArray<T extends Itm> {
    itms : T[];
    mode : SelectMode;
    readonly length : number;
    clear() : void;
    reset() : void;
    next() : T | undefined;
    update(in_array : T[]): void;
    add(in_array : T[]): void;
    copy() : ItmArray<T>;   
}
class ItmArraySt<T extends Itm> implements ItmArray<T> {
    public itms : T[];
    private idx : number;
    public mode : SelectMode; 

    constructor(inItms? : T[],inMode? : SelectMode) {
        this.itms = [];
        this.idx = -1;
        if (inMode) {
            this.mode = inMode;
        } else {
            this.mode = SelectMode.Seq;
        }
        if (inItms) {
            this.add(inItms);
        }
    }

    get length() : number {
        if (this.itms) return this.itms.length
        else return 0;
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

    public add = (inItms : T[]) => {
        inItms.forEach(it => {
            this.itms.push(it);
        }
        );
    }

    public clear = () => {
        this.itms = [];
    }

    public update(inItms : T[]) {
        this.clear();
        this.add(inItms);
    }

    public copy() : ItmArray<T> {
        return new ItmArraySt<T>(this.itms);
    }
}

interface Wrd extends Itm {
    txt : string;
    picF : string;
    tags : string;    
}

interface ItmSelector<T extends Wrd> extends ItmArray<T> {

}

class ItmSelectorSt<T extends Wrd> implements ItmSelector<T> {

} 





