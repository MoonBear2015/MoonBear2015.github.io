"use strict";
class ItemSt {
    constructor(inWord, inPicF, inTagsString) {
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
class ItemArraySt {
    constructor(inItems) {
        this.items = [];
        if (inItems) {
        }
    }
    Add(inItems) {
        inItems.forEach(it => {
            this.items.push(it);
        });
    }
    New() {
        this.items = [];
    }
    ReNew(inItems) {
        this.New();
        this.Add(inItems);
    }
    Copy() {
        return new ItemArraySt(this.items);
    }
}
