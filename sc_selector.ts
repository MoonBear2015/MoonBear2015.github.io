//------------------------------------ etc's

function to_key_with_length(in_key : string,in_length : number)
{
    return in_key + zP2.format(in_length) + '@';
}


//------------------------------------ selector's

interface ISctItm extends ITest {
    Wrd : string;
    SctPic : string;
    Copy : ISctItm;
}

interface ISctCod extends ISctItm,ITest {
    CodLength : number;
    to_SctItm() : ISctItm;
    to_length_itms(in_length : number,in_AKey : string,in_BKey : string)
     : Array<ISctItm>;
}

class SctItm implements ISctItm,ITest {
    constructor(
        public Wrd : string
        ,
        public SctPic : string
    ){
    };
    public get Copy() : ISctItm {
        return new SctItm(this.Wrd,this.SctPic);
    }
    public set Copy(value : ISctItm){
        this.Wrd = value.Wrd;
        this.SctPic = value.SctPic;    
    }
    public ToString() : string
    {
        return this.Wrd + '(' + this.SctPic + ")";
    }
}

class SctCod extends SctItm implements ISctCod,ITest {
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

    to_SctItm() : ISctItm {
        return new SctItm(this.Wrd,this.SctPic);
    }

    to_length_itms(in_length : number,in_AKey : string,in_BKey : string)
     : Array<ISctItm>
    {
        let results = new Array<ISctItm>();
        if (in_length < this.CodLength)
        {
            return results;
        }
        if (in_length == this.CodLength)
        {
            results.push(this.to_SctItm());
            return results;
        }
        let l = in_length - this.CodLength;
        let abs = sepalate_number(l);
        
        for(let i = 0;i < abs.length;i++)
        {
            if (abs[i].A == 1) continue;
            let key = "";
            if (abs[i].A > 1)
            {
                key += to_key_with_length(in_AKey,abs[i].A);
            }
            key += this.Wrd;
            if (abs[i].B > 0)
            {
                key += to_key_with_length(in_BKey,abs[i].B);
            }
            results.push(new SctItm(key,this.SctPic));
        }
        return results;
    }

    add(inCod : ISctCod) : ISctCod {
        let resWrd = this.Wrd + inCod.Wrd;
        let resPic = this.SctPic;
        let resLen = this.CodLength + inCod.CodLength;
        return new SctCod(resWrd,resPic,resLen);
    }

    ToString() : string
    {
        return super.ToString() + this.CodLength.toString(); 
    }
}

class SctWrd extends SctItm implements ISctItm,ITest {
    constructor(
        in_Wrd : string
    )
    {
        super(in_Wrd,'');
    }
    public get Copy() : ISctItm {
        return new SctWrd(this.Wrd);
    }
    public set Copy(value : ISctItm){
        this.Wrd = value.Wrd;
    }
    public ToString() : string
    {
        return super.ToString();
    }
}

interface IItmArray<T extends ISctItm> extends ITest {
    itms : T[];
    
    Paste(in_array : Array<T>): void;
    Copy() : IItmArray<T>;
}

class ItmArray<T extends ISctItm> implements IItmArray<T> {
    public itms : Array<T>;
    constructor(in_array? : Array<T>){
        this.itms = new Array<T>();
        if (in_array)
        {
            this.Paste(in_array);
        }
    }
    public Paste(in_array : Array<T>)
    {
        this.itms = new Array<T>();
        this.itms.length = 0;
        in_array.forEach(it => {
            this.itms.push(it);
        }
        );
    }
    public Copy()
    {
        let result = new ItmArray<T>();
        result.Paste(this.itms);
        return result;
    }

    public ToString() : string {
        return tests_string(this.itms);
    }
}

interface IItmSelector<T extends ISctItm> extends IItmArray<T> {
    rnd_Itm : T;
    Copy() : IItmSelector<T>;
}


class ItmSelector<T extends ISctItm> extends 
    ItmArray<T> 
    implements IItmSelector<T> 
{
    private bef_num : number;
    constructor(in_array? : Array<T>){
        if (in_array) {
            super(in_array);
        }
        else {
            super();
        }
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

    public Copy() : IItmSelector<T>
    {
        let result = new ItmSelector<T>();
        result.Paste(this.itms);
        return result;
    }

}

class ItmCounter<T extends ISctItm> 
    extends ItmArray<T>
    implements IItmSelector<T> 
{
    private bef_num : number;
    constructor(in_array? : Array<T>){
        if (in_array) {
            super(in_array);
        }
        else {
            super();
        }
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
    Copy() : IItmSelector<T>
    {
        let result = new ItmCounter<T>();
        result.Paste(this.itms);
        return result;
    }

}


interface ISctItm_Selector extends IItmSelector<SctItm> {
    // rnd_Itm : SctItm;
    itm_key : string;
    pic_key : string;
    Copy() : ISctItm_Selector;
}

class SctItm_Selector extends ItmSelector<SctItm> implements ISctItm_Selector {
    constructor(
        public itm_key : string
        ,
        public pic_key : string
        ,
        in_array? : Array<SctItm>
    )
    {
        super(in_array);
    }

    public ToString() : string {
        return '[itm_key = ' + this.itm_key + ']\r\n'
        + '[pic_key = ' + this.pic_key + ']\r\n'
        + super.ToString();
    }

    Copy() : ISctItm_Selector
    {
        let result = new SctItm_Selector(this.itm_key,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

}

class SctWrd_Selector extends SctItm_Selector implements ISctItm_Selector {
    constructor(
        in_itm_key : string
        ,
        in_array? : Array<SctItm>
    )
    {
        super(in_itm_key,'',in_array);
    }

    Copy() : ISctItm_Selector
    {
        let result = new SctWrd_Selector(this.itm_key);
        result.Paste(this.itms);
        return result;
    }

}


class SctItm_SelectLocker extends SctItm_Selector implements ISctItm_Selector {
    private is_lock : boolean;
    private lock_item : SctItm;

    constructor(
        public itm_key : string
        ,
        public pic_key : string
        ,
        in_array? : Array<SctItm>
    )
    {
        super(itm_key,pic_key,in_array);
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
    
    Copy() : ISctItm_Selector
    {
        let result = new SctItm_SelectLocker(this.itm_key,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

}

class SctWrd_SelectLocker 
    extends SctWrd_Selector 
    implements ISctItm_Selector {
    
        private is_lock : boolean;
    private lock_item : SctWrd;

    constructor(
        public itm_key : string
        ,
        in_array? : Array<SctWrd>
    )
    {
        super(itm_key,in_array);
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

    Copy() : ISctItm_Selector
    {
        let result = new SctWrd_SelectLocker(this.itm_key);
        result.Paste(this.itms);
        return result;
    }

}

class SctItm_FirstLocker 
    extends SctItm_Selector 
    implements ISctItm_Selector {
    
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

    Copy() : ISctItm_Selector
    {
        let result = new SctItm_FirstLocker(this.itm_key,this.pic_key);
        result.Paste(this.itms);
        return result;
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

    Copy() : ISctItm_Selector
    {
        let result = new SctItm_Counter(this.itm_key,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

}
class SctWrd_Counter extends SctItm_Counter implements ISctItm_Selector {
    constructor(
        in_itm_key : string
    )
    {
        super(in_itm_key,'');
    }

    Copy() : ISctItm_Selector
    {
        let result = new SctWrd_Counter(this.itm_key);
        result.Paste(this.itms);
        return result;
    }

}

class Selector_Generator {
    public cods : ISctCod[];
    constructor(
        public itm_key : string
        ,
        public pic_key : string
    )
    {
        this.cods = new Array<ISctCod>();
    }

    Gene_Itm_no_length() : Array<ISctItm>
    {
        let results = new Array<ISctItm>();
        this.cods.forEach(cod => {
            results.push(cod.to_SctItm());
        });
        return results;
    }

    Gene_Itm_length(in_length : number,in_AKey : string,in_BKey : string)
     : Array<ISctItm>
    {
        let results = new Array<ISctItm>();
        this.cods.forEach(cod => {
            cod.to_length_itms(in_length,in_AKey,in_BKey).forEach(itm => {
                results.push(itm);
            });
        });
        return results;
    }

    Generate(
                in_max : number
                ,
                in_selector : ISctItm_Selector
            ) 
            : Array<ISctItm_Selector>
    {

        let results = new Array<ISctItm_Selector>();

        let selector_no_length = in_selector.Copy();
        selector_no_length.Paste(this.Gene_Itm_no_length());
        results.push(selector_no_length);


        for(let c = 1; c <= in_max; c++)
        {

        }

        return results;

    }
}


