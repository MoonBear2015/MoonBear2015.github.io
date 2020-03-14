"use strict";
//------------------------------------ selector's
class SctItm {
    constructor(Wrd, SctPic) {
        this.Wrd = Wrd;
        this.SctPic = SctPic;
    }
    ;
    static Copy(inItm) {
        return new SctItm(inItm.Wrd, inItm.SctPic);
    }
    get Copy() {
        return SctItm.Copy(this);
    }
    set Copy(value) {
        this.Wrd = value.Wrd;
        this.SctPic = value.SctPic;
    }
}
class SctWrd extends SctItm {
    constructor(in_Wrd) {
        super(in_Wrd, "");
    }
    static Copy(inWrd) {
        return new SctWrd(inWrd.Wrd);
    }
    get Copy() {
        return SctWrd.Copy(this);
    }
    set Copy(value) {
        this.Wrd = value.Wrd;
    }
}
class ItmSelector {
    constructor() {
        this.itms = new Array();
        this.bef_num = -1;
    }
    get rnd_Itm() {
        let i = -1;
        while (true) {
            i = rnd_max(this.itms.length);
            if (this.itms.length < 2)
                break;
            if (i != this.bef_num)
                break;
        }
        this.bef_num = i;
        return this.itms[i];
    }
}
class ItmCounter {
    constructor() {
        this.itms = new Array();
        this.bef_num = -1;
    }
    get rnd_Itm() {
        let i = this.bef_num + 1;
        if (i == this.itms.length) {
            i = this.itms.length - 1;
        }
        this.bef_num = i;
        return this.itms[i];
    }
}
class SctItm_Selector extends ItmSelector {
    constructor(news_key, pic_key) {
        super();
        this.news_key = news_key;
        this.pic_key = pic_key;
    }
}
class SctWrd_Selector extends SctItm_Selector {
    constructor(in_news_key) {
        super(in_news_key, '');
    }
}
class SctItm_SelectLocker extends SctItm_Selector {
    constructor(news_key, pic_key) {
        super(news_key, pic_key);
        this.news_key = news_key;
        this.pic_key = pic_key;
        this.is_lock = false;
        this.lock_item = new SctItm('', '');
    }
    get rnd_Itm() {
        if (this.is_lock) {
            return this.lock_item;
        }
        this.is_lock = true;
        let i = rnd_max(this.itms.length);
        this.lock_item.Copy = this.itms[i];
        return this.itms[i];
    }
}
class SctWrd_SelectLocker extends SctWrd_Selector {
    constructor(news_key) {
        super(news_key);
        this.news_key = news_key;
        this.is_lock = false;
        this.lock_item = new SctWrd('');
    }
    get rnd_Itm() {
        if (this.is_lock) {
            return this.lock_item;
        }
        this.is_lock = true;
        let i = rnd_max(this.itms.length);
        this.lock_item.Copy = this.itms[i];
        return this.itms[i];
    }
}
class SctItm_FirstLocker extends SctItm_Selector {
    constructor(news_key, pic_key) {
        super(news_key, pic_key);
        this.news_key = news_key;
        this.pic_key = pic_key;
        this.is_first = true;
    }
    get rnd_Itm() {
        if (this.is_first) {
            this.is_first = false;
            return this.itms[0];
        }
        let i = rnd_max(this.itms.length);
        return this.itms[i];
    }
}
//------------------------------------ poem
class SctItm_Counter extends ItmCounter {
    constructor(news_key, pic_key) {
        super();
        this.news_key = news_key;
        this.pic_key = pic_key;
    }
}
class SctWrd_Counter extends SctItm_Counter {
    constructor(in_news_key) {
        super(in_news_key, '');
    }
}
