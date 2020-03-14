"use strict";
//------------------------------------ selector's
class NwsItm {
    constructor(Wrd, NwsPic) {
        this.Wrd = Wrd;
        this.NwsPic = NwsPic;
    }
    ;
    static Copy(inItm) {
        return new NwsItm(inItm.Wrd, inItm.NwsPic);
    }
    get Copy() {
        return NwsItm.Copy(this);
    }
    set Copy(value) {
        this.Wrd = value.Wrd;
        this.NwsPic = value.NwsPic;
    }
}
class NwsWrd extends NwsItm {
    constructor(in_Wrd) {
        super(in_Wrd, "");
    }
    static Copy(inWrd) {
        return new NwsWrd(inWrd.Wrd);
    }
    get Copy() {
        return NwsWrd.Copy(this);
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
class NwsItm_Selector extends ItmSelector {
    constructor(news_key, pic_key) {
        super();
        this.news_key = news_key;
        this.pic_key = pic_key;
    }
}
class NwsWrd_Selector extends NwsItm_Selector {
    constructor(in_news_key) {
        super(in_news_key, '');
    }
}
class NwsItm_SelectLocker extends NwsItm_Selector {
    constructor(news_key, pic_key) {
        super(news_key, pic_key);
        this.news_key = news_key;
        this.pic_key = pic_key;
        this.is_lock = false;
        this.lock_item = new NwsItm('', '');
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
class NwsWrd_SelectLocker extends NwsWrd_Selector {
    constructor(news_key) {
        super(news_key);
        this.news_key = news_key;
        this.is_lock = false;
        this.lock_item = new NwsWrd('');
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
//------------------------------------ poem
class PmsItm_Counter extends ItmCounter {
    constructor(news_key, pic_key) {
        super();
        this.news_key = news_key;
        this.pic_key = pic_key;
    }
}
class PmsWrd_Counter extends PmsItm_Counter {
    constructor(in_news_key) {
        super(in_news_key, '');
    }
}
