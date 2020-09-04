enum SelectMode {
    Seq,
    Rnd
}

interface Item {
    equal(item : Item) : boolean;
    Copy() : Item;
}

interface ItemArray<T extends Item> {
    items : T[];
    mode : SelectMode;
    reset() : void;
    next() : T | undefined;
    reNew(in_array : T[]): void;
    add(in_array : T[]): void;
    copy() : ItemArray<T>;   
}
class ItemArraySt<T extends Item> implements ItemArray<T> {
    public items : T[];
    private idx : number;
    public mode : SelectMode; 

    constructor(inItems? : T[],inMode? : SelectMode) {
        this.items = [];
        this.idx = -1;
        if (inMode) {
            this.mode = inMode;
        } else {
            this.mode = SelectMode.Seq;
        }
        if (inItems) {
            this.add(inItems);
        }
    }

    public reset() : void {
        this.idx = -1;
    }

    public next() : T | undefined {
        if (this.items.length == 0) return undefined;
        switch(this.mode) {
            case SelectMode.Seq:
                return this.next_Seq();
                break;
        }
        return undefined;
    }

    public next_Seq() : T | undefined {
        if (this.idx < 0 || this.idx >= this.items.length) {
            this.idx = 0;
        }
        else {
            this.idx++;
        }
        return this.items[this.idx];
    }

    public next_Rnd : T | undefined {
        return this.items[RanMax()];
    }

    public add(inItems : T[]) {
        inItems.forEach(it => {
            this.items.push(it);
        }
        );
    }
    public new() {
        this.items = [];
    }
    public reNew(inItems : T[]) {
        this.new();
        this.add(inItems);
    }
    public copy() : ItemArray<T> {
        return new ItemArraySt<T>(this.items);
    }
}



