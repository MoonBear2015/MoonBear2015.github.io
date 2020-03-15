
//------------------------------------ selector's

interface ISctItm {
    Wrd : string;
    SctPic : string;
}

interface ISctCod extends ISctItm {
    CodLength : number;
}

class SctItm implements ISctItm {
    constructor(
        public Wrd : string
        ,
        public SctPic : string
    ){
    };
    static Copy(inItm : SctItm) : SctItm {
        return new SctItm(inItm.Wrd,inItm.SctPic);
    }
    get Copy() : SctItm {
        return SctItm.Copy(this);
    }
    set Copy(value : SctItm){
        this.Wrd = value.Wrd;
        this.SctPic = value.SctPic;    
    }
}

class SctCod extends SctItm implements ISctCod {
    constructor(
        inWrd : string
        ,
        inSctPic : string
        ,
        public CodLength : number
    )
    {
        super(inWrd,inSctPic);
    }

    get to_SctItm() : ISctItm {
        return new SctItm(this.Wrd,this.SctPic);
    }

    to_length(in_length : number,in_key : string) : Array<ISctItm> {
        let results = new Array<ISctItm>();


        return results;
    }

    add(inCod : ISctCod) : ISctCod {
        let resWrd = this.Wrd + inCod.Wrd;
        let resPic = this.SctPic;
        let resLen = this.CodLength + inCod.CodLength;
        return new SctCod(resWrd,resPic,resLen);
    }

}

class SctWrd extends SctItm implements ISctItm {
    constructor(
        in_Wrd : string
    )
    {
        super(in_Wrd,"");
    }
    static Copy(inWrd : SctWrd) : SctWrd {
        return new SctWrd(inWrd.Wrd);
    }
    get Copy() : SctWrd {
        return SctWrd.Copy(this);
    }
    set Copy(value : SctWrd){
        this.Wrd = value.Wrd;
    }
}

interface IItmSelector<T extends ISctItm> {
    rnd_Itm : T;
}

class ItmSelector<T extends ISctItm> implements IItmSelector<T> {
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

class ItmCounter<T extends ISctItm> implements IItmSelector<T> {
    protected itms : T[];
    private bef_num : number;
    constructor(){
        this.itms = new Array<T>();
        this.bef_num = -1;
    }
    get rnd_Itm() : T {
        let i = this.bef_num + 1;
        if (i == this.itms.length)
        {
            i = this.itms.length - 1;
        }
        this.bef_num = i;
        return this.itms[i];
    }
}


interface ISctItm_Selector extends IItmSelector<SctItm> {
    // rnd_Itm : SctItm;
    itm_key : string;
    pic_key : string;
}

class SctItm_Selector extends ItmSelector<SctItm> implements ISctItm_Selector {
    constructor(
        public itm_key : string
        ,
        public pic_key : string
    )
    {
        super();
    }
}

class SctWrd_Selector extends SctItm_Selector implements ISctItm_Selector {
    constructor(
        in_itm_key : string
    )
    {
        super(in_itm_key,'');
    }
}


class SctItm_SelectLocker extends SctItm_Selector implements ISctItm_Selector {
    private is_lock : boolean;
    private lock_item : SctItm;

    constructor(
        public itm_key : string
        ,
        public pic_key : string
    )
    {
        super(itm_key,pic_key);
        this.is_lock = false;
        this.lock_item = new SctItm('','');
    }

    get rnd_Itm() : SctItm {
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

class SctWrd_SelectLocker extends SctWrd_Selector implements ISctItm_Selector {
    private is_lock : boolean;
    private lock_item : SctWrd;

    constructor(
        public itm_key : string
    )
    {
        super(itm_key);
        this.is_lock = false;
        this.lock_item = new SctWrd('');
    }

    get rnd_Itm() : SctItm {
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

class SctItm_FirstLocker extends SctItm_Selector implements ISctItm_Selector {
    private is_first : boolean;
    constructor(
        public itm_key : string
        ,
        public pic_key : string
    )
    {
        super(itm_key,pic_key);
        this.is_first = true;
    }

    get rnd_Itm() : SctItm {
        if (this.is_first)
        {
            this.is_first = false;
            return this.itms[0];
        }
        let i = rnd_max(this.itms.length);
        return this.itms[i];
    }
}

//------------------------------------ poem

class SctItm_Counter extends ItmCounter<SctItm> implements ISctItm_Selector {
    constructor(
        public itm_key : string
        ,
        public pic_key : string
    )
    {
        super();
    }
}
class SctWrd_Counter extends SctItm_Counter implements ISctItm_Selector {
    constructor(
        in_itm_key : string
    )
    {
        super(in_itm_key,'');
    }
}

class Selector_Generator<T extends ISctCod> {
    protected itms : T[];
    constructor(
        public itm_key : string
        ,
        public pic_key : string
    )
    {
        this.itms = new Array<T>();
    }

    Generate(
                in_max : number
                ,
                in_selector : ISctItm_Selector
                ) : Array<ISctItm_Selector>{

        let results = new Array<ISctItm_Selector>();

        for(let c = 1; c <= in_max; c++)
        {
            let is = new Array<T>();
            
        }

        return results;

    }
}
