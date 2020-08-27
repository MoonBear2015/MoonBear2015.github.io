interface Item {
    word : string;
    picF : string | undefined;    
    tags : string[] | undefined;
}

class ItemSt implements Item {
    public word : string;
    public picF : string | undefined;
    public tags : string[] | undefined;
    constructor(inWord : string,inPicF? : string,inTagsString? : string)
    {   
        this.word = inWord;
        if (inPicF) {
            this.picF = inPicF;
        }
        else {
            this.picF = undefined;
        }
        if (inTagsString) {
            this.tags = to_Tags(inTagsString);
        }
        else {
            this.tags = undefined;
        }
    } 
}

interface ItemArray<T extends Item> {
    items : T[];
    ReNew(in_array : Array<T>): void;
    Add(in_array : Array<T>): void;
    Copy() : ItemArray<T>;
}

class ItemArraySt<T extends Item> implements ItemArray<T> {
    public items : T[];
    constructor(inItems? : T[]) {
        this.items = [];
        if (inItems) {

        }
    }
    public Add(inItems : T[]) {
        inItems.forEach(it => {
            this.items.push(it);
        }
        );
    }
    public New() {
        this.items = [];
    }
    public ReNew(inItems : T[]) {
        this.New();
        this.Add(inItems);
    }
    public Copy() : ItemArray<T> {
        return new ItemArraySt<T>(this.items);
    }

}