//------------------------------------ selector's

interface INwsItm {
    Wrd : string;
    NwsPic : string;
}

class NwsItm implements INwsItm {
    constructor(
        public Wrd : string
        ,
        public NwsPic : string
    ){
    };
    static Copy(inItm : NwsItm) : NwsItm {
        return new NwsItm(inItm.Wrd,inItm.NwsPic);
    }
    get Copy() : NwsItm {
        return NwsItm.Copy(this);
    }
    set Copy(value : NwsItm){
        this.Wrd = value.Wrd;
        this.NwsPic = value.NwsPic;    
    }
}

class NwsWrd extends NwsItm implements INwsItm {
    constructor(
        in_Wrd : string
    )
    {
        super(in_Wrd,"");
    }
    static Copy(inWrd : NwsWrd) : NwsWrd {
        return new NwsWrd(inWrd.Wrd);
    }
    get Copy() : NwsWrd {
        return NwsWrd.Copy(this);
    }
    set Copy(value : NwsWrd){
        this.Wrd = value.Wrd;
    }
}

interface IItmSelector<T extends INwsItm> {
    rnd_Itm : T;
}

class ItmSelector<T extends INwsItm> implements IItmSelector<T> {
    protected itms : T[];
    private bef_num : number;
    constructor(){
        this.itms = new Array<T>();
        this.bef_num = -1;
    }
    get rnd_Itm() : T {
        let i = -1;
        while(true) {
            i = rnd_max(this.itms.length);
            if (this.itms.length < 2) break;
            if (i != this.bef_num) break;
        }
        this.bef_num = i;
        return this.itms[i];
    }
}

interface INwsItm_Selector extends IItmSelector<NwsItm> {
    // rnd_Itm : NwsItm;
    news_key : string;
    pic_key : string;
}

class NwsItm_Selector extends ItmSelector<NwsItm> implements INwsItm_Selector {
    constructor(
        public news_key : string
        ,
        public pic_key : string
    )
    {
        super();
    }
}

class NwsItm_SelectLocker extends NwsItm_Selector implements INwsItm_Selector {
    private is_lock : boolean;
    private lock_item : NwsItm;

    constructor(
        public news_key : string
        ,
        public pic_key : string
    )
    {
        super(news_key,pic_key);
        this.is_lock = false;
        this.lock_item = new NwsItm('','');
    }

    get rnd_Itm() : NwsItm {
        if (this.is_lock)
        {
            return this.lock_item;
        }
        this.is_lock = true;
        let i = rnd_max(this.itms.length);
        this.lock_item.Copy = this.itms[i];
        return this.itms[i];
    }
}

class NwsWrd_Selector extends NwsItm_Selector implements INwsItm_Selector {
    constructor(
        in_news_key : string
    )
    {
        super(in_news_key,'');
    }
}

//------------------------------------ selector's
