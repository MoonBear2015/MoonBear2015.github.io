//------------------------------------ etc's

function to_key_with_length(in_key : string,in_length : number)
{
    let result = in_key;
    result = replaceAll(result,'@','');
    return '@' + result + zP2.format(in_length) + '@';
}


//------------------------------------ selector's

interface ISctItm extends TestItem {
    Wrd : string;
    SctPic : string;
    Wrd2 : string;
    pnt : number;
    Copy : ISctItm;
}

interface ISctCod extends ISctItm,TestItem {
    CodLength : number;
    to_SctItm() : ISctItm;
    to_SctItm_NoRubi() : ISctItm;
    to_SctItm_Rubi() : ISctItm;
    to_length_itms(in_length : number,in_KeyA : string,in_KeyB : string,in_MinA : number,in_MinB : number)
     : Array<ISctItm>;
}

class SctItm implements ISctItm,TestItem {
    public Wrd : string;
    public SctPic : string;
    public Wrd2 : string;
    public pnt : number;
    constructor(
        in_Wrd? : string
        ,
        in_SctPic? : string
        ,
        in_Wrd2? : string
    ){
        if (in_Wrd) {
            this.Wrd = in_Wrd;
        } else {
            this.Wrd = '';
        }
        if (in_SctPic) {
            this.SctPic = in_SctPic;
        } else {
            this.SctPic = '';
        }
        if (in_Wrd2) {
            this.Wrd2 = in_Wrd2;
        } else {
            this.Wrd2 = '';
        }
        this.pnt = 0;
    };
    public get Copy() : ISctItm {
        return new SctItm(this.Wrd,this.SctPic,this.Wrd2);
    }
    public set Copy(value : ISctItm){
        this.Wrd = value.Wrd;
        this.Wrd2 = value.Wrd2;
        this.SctPic = value.SctPic;    
    }
    public ToString() : string
    {
        if (this.SctPic != '') {
            return this.Wrd + '(' + this.SctPic + ")";
        }
        return this.Wrd;
    }
}

class SctCod extends SctItm implements ISctCod,TestItem {
    public CodLength : number;
    public KeyA : string;
    public KeyB : string;
    public KeyC : string;
    public MinA : number;
    public MinB : number;

    constructor(
        in_Wrd? : string
        ,
        in_SctPic? : string
        ,
        in_CodLength? : number
    )
    {
        super(in_Wrd,in_SctPic);
        if (in_CodLength) {
            this.CodLength = in_CodLength;
        } else {
            this.CodLength = ruby_beat(this.Wrd);
        }

        this.KeyA = '';
        this.KeyB = '';
        this.KeyC = '';
        this.MinA = 0;
        this.MinB = 0;
    }

    to_SctItm() : ISctItm {
        return new SctItm(this.Wrd,this.SctPic);
    }

    to_SctItm_NoRubi() : ISctItm {
        return new SctItm(ruby_no(this.Wrd),this.SctPic);
    }

    to_SctItm_Rubi() : ISctItm {
        return new SctItm(ruby_kana(this.Wrd),this.SctPic);
    }


    to_length_itms(in_length : number)
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
            if (abs[i].A != 0 && abs[i].A < this.MinA) continue;
            if (abs[i].B != 0 && abs[i].B < this.MinB) continue;
            if (abs[i].A > 0 && this.KeyA == '') continue;
            if (abs[i].B > 0 && this.KeyB == '') continue;

            let key = "";
            if (abs[i].A > 0 && this.KeyA != '')
            {
                if (this.KeyC != '' && abs[i].A == 1) {
                    key += to_key_with_length(this.KeyC,1);
                } else {
                    key += to_key_with_length(this.KeyA,abs[i].A);
                }
            }
            key += this.Wrd;
            if (abs[i].B > 0 && this.KeyB != '')
            {
                if (this.KeyC != '' && abs[i].B == 1) {
                    key += to_key_with_length(this.KeyC,1);
                } else {
                    key += to_key_with_length(this.KeyB,abs[i].B);
                }
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

class SctCod_TI extends SctCod implements ISctCod,TestItem {
    constructor(
        in_Wrd? : string
        ,
        in_SctPic? : string
        ,
        in_CodLength? : number
    )
    {
        super(in_Wrd,in_SctPic,in_CodLength);

        this.KeyA = '@M';
        this.KeyB = '@M';
        this.KeyC = '@C1';
        this.MinA = 2;
        this.MinB = 1;
    }
}

class SctCod_TM extends SctCod implements ISctCod,TestItem {
    constructor(
        in_Wrd? : string
        ,
        in_SctPic? : string
        ,
        in_CodLength? : number
    )
    {
        super(in_Wrd,in_SctPic,in_CodLength);

        this.KeyA = '@I';
        this.KeyB = '@I';
        this.KeyC = '';
        this.MinA = 2;
        this.MinB = 2;
    }
}



class SctCod_It extends SctCod implements ISctCod,TestItem {
    constructor(
        in_Wrd? : string
        ,
        in_SctPic? : string
        ,
        in_CodLength? : number
    )
    {
        super(in_Wrd,in_SctPic,in_CodLength);

        this.KeyA = '@M';
        this.KeyB = '@M';
        this.MinA = 2;
        this.MinB = 2;
    }
}

class SctCod_Mv extends SctCod implements ISctCod,TestItem {
    constructor(
        in_Wrd? : string
        ,
        in_SctPic? : string
        ,
        in_CodLength? : number
    )
    {
        super(in_Wrd,in_SctPic,in_CodLength);

        this.KeyA = '';
        this.KeyB = '';
        this.MinA = 2;
        this.MinB = 2;
    }
}

class SctCod_Km extends SctCod implements ISctCod,TestItem {
    constructor(
        in_Wrd? : string
        ,
        in_SctPic? : string
        ,
        in_CodLength? : number
    )
    {
        super(in_Wrd,in_SctPic,in_CodLength);

        this.KeyA = '@M';
        this.KeyB = '@M';
        this.KeyC = '@C2';
        this.MinA = 2;
        this.MinB = 1;
    }
}



interface IItmArray<T extends ISctItm> extends TestItem {
    itms : T[];
    countItm : number;
    Paste(in_array : Array<T>): void;
    Add(in_array : Array<T>): void;
    Next() : void;
    Restart() : void;
    Copy() : IItmArray<T>;
}

class ItmArray<T extends ISctItm> implements IItmArray<T> {
    public itms : Array<T>;
    get countItm() : number {
        return this.itms.length;
    }
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
        this.Add(in_array);
    }
    public Add(in_array : Array<T>)
    {
        in_array.forEach(it => {
            this.itms.push(it);
        }
        );
    }
    public Next() : void {
        return;
    }
    public Restart() : void {
        return;
    }
    public Copy()
    {
        let result = new ItmArray<T>();
        result.Paste(this.itms);
        return result;
    }

    public ToString() : string {
        return testItems_string(this.itms);
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
    protected bef_num : number;
    protected startNumber : number;
    constructor(in_array? : Array<T>){
        if (in_array) {
            super(in_array);
        }
        else {
            super();
        }
        this.bef_num = -1;
        this.startNumber = 0;
    }
    get rnd_Itm() : T {
        let i = -1;
        while(true) {
            i = this.startNumber + rnd_max(this.itms.length - this.startNumber);
            if (this.itms.length < 2) break;
            if (i != this.bef_num) break;
        }
        this.bef_num = i;
        return this.itms[i];
    }
    public Next() : void {
        return;
    }
    public Restart() : void {
        return;
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
    protected now_num : number;
    protected startNumber : number;
    constructor(in_array? : Array<T>){
        if (in_array) {
            super(in_array);
        }
        else {
            super();
        }
        this.now_num = -1;
        this.startNumber = 0;
    }
    get rnd_Itm() : T {
        if (this.startNumber != 0 && this.now_num == -1) {
            this.now_num = this.startNumber - 1;
        }
        this.Next();
        return this.itms[this.now_num];
    }
    public Next() : void {
        let i = this.now_num + 1;
        if (i == this.itms.length)
        {
            i = this.itms.length - 1;
        }
        this.now_num = i;
    }
    public Restart() : void {
        this.now_num = -1;
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
    itm_key2 : string;
    pic_key : string;
    Copy() : ISctItm_Selector;
    
    Gene_Docs(temp_doc : string) : string;

}

function replace_docs_A(temp_doc : string,selector : ISctItm_Selector) : string {
    let result = temp_doc;
    if (selector.itm_key != ''){
        while(result.search(selector.itm_key) != -1){
            let itm = selector.rnd_Itm;
            result = result.replace(selector.itm_key,itm.Wrd);
            if (selector.pic_key != ''){
                while(result.search(selector.pic_key) != -1){
                    result = result.replace(selector.pic_key,itm.SctPic);
                }
            }
        }
    }
    if (selector.itm_key2 != ''){
        while(result.search(selector.itm_key2) != -1){
            let itm = selector.rnd_Itm;
            result = result.replace(selector.itm_key2,itm.Wrd2);
            if (selector.pic_key != ''){
                while(result.search(selector.pic_key) != -1){
                    result = result.replace(selector.pic_key,itm.SctPic);
                }
            }
        }
    }
    return result;
}
function replace_docs_B(temp_doc : string,selector : ISctItm_Selector) : string {
    let result = temp_doc;
    if (selector.itm_key != ''){
        while(result.search(selector.itm_key) != -1){
            let itm = selector.rnd_Itm;
            result = result.replace(selector.itm_key,itm.Wrd);
            if (selector.pic_key != ''){
                if (result.search(selector.pic_key) != -1){
                    result = result.replace(selector.pic_key,itm.SctPic);
                }
            }
        }
    }
    if (selector.itm_key2 != ''){
        while(result.search(selector.itm_key2) != -1){
            let itm = selector.rnd_Itm;
            result = result.replace(selector.itm_key2,itm.Wrd2);
            if (selector.pic_key != ''){
                if (result.search(selector.pic_key) != -1){
                    result = result.replace(selector.pic_key,itm.SctPic);
                }
            }
        }
    }
    return result;
}

class SctItm_Selector extends ItmSelector<SctItm> implements ISctItm_Selector {
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    
    constructor(
        in_itm_key? : string
        ,
        in_itm_key2? : string
        ,
        in_pic_key? : string
        ,
        in_array? : Array<SctItm>
    )
    {
        super(in_array);
        if (in_itm_key) {
            this.itm_key = in_itm_key;
        } else {
            this.itm_key = '';
        }
        if (in_itm_key2) {
            this.itm_key2 = in_itm_key2;
        } else {
            this.itm_key2 = '';
        }
        if (in_pic_key) {
            this.pic_key = in_pic_key;
        } else {
            this.pic_key = '';
        }
    }

    public ToString() : string {
        return '[itm_key = ' + this.itm_key + ']\r\n'
        + '[pic_key = ' + this.pic_key + ']\r\n'
        + super.ToString();
    }

    Copy() : ISctItm_Selector
    {
        let result = new SctItm_Selector(this.itm_key,this.itm_key2,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }
}

class SctItm_SelectLocker extends SctItm_Selector implements ISctItm_Selector {
    private is_lock : boolean;
    private lock_item : SctItm;

    constructor(
        in_itm_key? : string
        ,
        in_itm_key2? : string
        ,
        in_pic_key? : string
        ,
        in_array? : Array<SctItm>
    )
    {
        super(in_itm_key,in_itm_key2,in_pic_key,in_array);
        this.is_lock = false;
        this.lock_item = new SctItm('','','');
    }

    get rnd_Itm() : SctItm {
        if (this.is_lock)
        {
            return this.lock_item;
        }
        this.is_lock = true;
        let i = this.startNumber + rnd_max(this.itms.length - this.startNumber);
        this.lock_item.Copy = this.itms[i];
        return this.itms[i];
    }
    
    Copy() : ISctItm_Selector
    {
        let result = new SctItm_SelectLocker(this.itm_key,this.itm_key2,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

}

class SctItm_FirstLocker 
    extends SctItm_Selector 
    implements ISctItm_Selector {
    private is_first : boolean;
    constructor(
        in_itm_key? : string
        ,
        in_itm_key2? : string
        ,
        in_pic_key? : string
    )
    {
        super(in_itm_key,in_itm_key2,in_pic_key);
        this.is_first = true;
    }

    get rnd_Itm() : SctItm {
        if (this.is_first)
        {
            this.is_first = false;
            return this.itms[this.startNumber];
        }
        let i = this.startNumber + rnd_max(this.itms.length - this.startNumber);
        return this.itms[i];
    }

    public Restart() : void {
        this.is_first = true;
    }

    Copy() : ISctItm_Selector
    {
        let result = new SctItm_FirstLocker(this.itm_key,this.itm_key2,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

}

// 最初の項目はもう使わない
class SctItm_FirstLocker2 
    extends SctItm_Selector 
    implements ISctItm_Selector {
    private is_first : boolean;
    constructor(
        in_itm_key? : string
        ,
        in_itm_key2? : string
        ,
        in_pic_key? : string
    )
    {
        super(in_itm_key,in_itm_key2,in_pic_key);
        this.is_first = true;
    }

    get rnd_Itm() : SctItm {
        if (this.is_first)
        {
            this.is_first = false;
            return this.itms[this.startNumber];
        }
        let i = this.startNumber + rnd_max(this.itms.length - 1) + 1;
        return this.itms[i];
    }

    public Restart() : void {
        this.is_first = true;
    }

    Copy() : ISctItm_Selector
    {
        let result = new SctItm_FirstLocker(this.itm_key,this.itm_key2,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

}

class SctItm_Rotetion extends SctItm_Selector implements ISctItm_Selector {
    
    constructor(
        in_itm_key? : string
        ,
        in_itm_key2? : string
        ,
        in_pic_key? : string
        ,
        in_array? : Array<SctItm>
    )
    {
        super(in_itm_key,in_itm_key2,in_pic_key,in_array);
    }

    public clear_pnt() {
        this.itms.forEach(itm => {
            itm.pnt = 0;
        });
    }
    
    public count_zero() {
        let result : number = 0;
        this.itms.forEach(itm => {
            if (itm.pnt == 0) {
                result++;
            }
        });
        return result;
    }

    get rnd_Itm() : SctItm {
        if (this.count_zero() == 0) {
            this.clear_pnt();
        }
        let filItms = this.itms.filter(function(itm) {
            return itm.pnt == 0;
        }
        );

        let i = rnd_max(filItms.length);
        filItms[i].pnt = -1;
        return filItms[i];
    }

    public Restart() : void {
        this.clear_pnt();
    }
    
    Copy() : ISctItm_Selector
    {
        let result = new SctItm_Rotetion(this.itm_key,this.itm_key2,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

}

class SctItm_FixSeq extends SctItm_Selector implements ISctItm_Selector {
    private fixAry : ISctItm[];
    private nowCnt : number;

    constructor(
        in_itm_key? : string
        ,
        in_itm_key2? : string
        ,
        in_pic_key? : string
        ,
        in_array? : Array<SctItm>
    )
    {
        super(in_itm_key,in_itm_key2,in_pic_key,in_array);
        this.fixAry = [];
        this.nowCnt = -1;
    }

    get countItm() : number {
        return this.itms.length;
    }
    
    get rnd_Itm() : SctItm {
        if (this.nowCnt == -1) {
            this.fixAry = Shuffle(this.itms);
            this.nowCnt = 0;
        }
        if (this.nowCnt >= this.fixAry.length) {
            this.nowCnt = 0;
        }
        let result = this.fixAry[this.nowCnt];
        return result;
    }
    
    Next() {
        this.nowCnt++;
        if (this.nowCnt >= this.fixAry.length) {
            this.nowCnt = 0;
        }
    }
    Restart() {
        this.nowCnt = 0;
    }

    ReRandom() {
        this.nowCnt = -1;
    }
    
    Copy() : ISctItm_Selector
    {
        let result = new SctItm_FixSeq(this.itm_key,this.itm_key2,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_B(temp_doc,this);
    }


}



//------------------------------------ poem

class SctItm_Counter extends ItmCounter<SctItm> implements ISctItm_Selector {
    public itm_key : string;
    public itm_key2 : string;
    public pic_key : string;
    constructor(
        in_itm_key? : string
        ,
        in_itm_key2? : string
        ,
        in_pic_key? : string
    )
    {
        super();
        if (in_itm_key) {
            this.itm_key = in_itm_key;
        } else {
            this.itm_key = '';
        }
        if (in_itm_key2) {
            this.itm_key2 = in_itm_key2;
        } else {
            this.itm_key2 = '';
        }
        if (in_pic_key) {
            this.pic_key = in_pic_key;
        } else {
            this.pic_key = '';
        }
    }

    Copy() : ISctItm_Selector
    {
        let result = new SctItm_Counter(this.itm_key,this.itm_key2,this.pic_key);
        result.Paste(this.itms);
        return result;
    }

    public Gene_Docs(temp_doc : string) : string {
        return replace_docs_A(temp_doc,this);
    }

}

class Selector_Generator {
    public cods : ISctCod[];
    public itm_key : string;
    public pic_key : string;
    public key_a : string;
    public key_b : string;
    public min_a : number;
    public min_b : number;
    constructor(
        in_itm_key? : string
        ,
        in_pic_key? : string
        ,
        in_key_a? : string
        ,
        in_key_b? : string
        ,
        in_min_a? : number
        ,
        in_min_b? : number
    )
    {
        this.cods = new Array<ISctCod>();
        if (in_itm_key) {
            this.itm_key = in_itm_key;
        } else {
            this.itm_key = '';
        }
        if (in_pic_key) {
            this.pic_key = in_pic_key;
        } else {
            this.pic_key = '';
        }
        if (in_key_a) {
            this.key_a = in_key_a;
        } else {
            this.key_a = '';
        }
        if (in_key_b) {
            this.key_b = in_key_b;
        } else {
            this.key_b = '';
        }
        if (in_min_a) {
            this.min_a = in_min_a;
        } else {
            this.min_a = 2;
        }
        if (in_min_b) {
            this.min_b = in_min_b;
        } else {
            this.min_b = 1;
        }


    }

    Gene_Itm_no_length() : Array<ISctItm>
    {
        let results = new Array<ISctItm>();
        this.cods.forEach(cod => {
            results.push(cod.to_SctItm());
        });
        return results;
    }

    Gene_Itm_length(in_length : number)
     : Array<ISctItm>
    {
        let results = new Array<ISctItm>();
        this.cods.forEach(cod => {
            cod.to_length_itms(in_length,this.key_a,this.key_b,this.min_a,this.min_b).forEach(itm => {
                results.push(itm);
            });
        });
        return results;
    }

    Generate(
                in_max : number
                ,
                in_selector_no_length : ISctItm_Selector
                ,
                in_selector_length : ISctItm_Selector
            ) 
            : Array<ISctItm_Selector>
    {

        let results = new Array<ISctItm_Selector>();

        let itms_no_length = this.Gene_Itm_no_length();
        if (itms_no_length.length > 0) {
            let selector_no_length = in_selector_no_length.Copy();
            selector_no_length.itm_key = this.itm_key + '@';
            selector_no_length.pic_key = this.pic_key;
            selector_no_length.Paste(itms_no_length);
            results.push(selector_no_length);
        }
        for(let c = 1; c <= in_max; c++)
        {
            let itms_length = this.Gene_Itm_length(c);
            if (itms_length.length > 0) {
                let selector_length = in_selector_length.Copy();
                selector_length.itm_key = to_key_with_length(this.itm_key,c);
                selector_length.pic_key = this.pic_key;
                selector_length.Paste(itms_length);
                results.push(selector_length);
            }
        }

        return results;
    }

    Add_cods(in_cods : ISctCod[])
    {
        this.cods = this.cods.concat(in_cods);
    }
}

class docs_maker {
    public selectors : ISctItm_Selector[];
    constructor(){
        this.selectors  = new Array<ISctItm_Selector>();
    }
    public gene_docs(temp_doc : string,isNoCheck? : boolean) : string {
        let result = temp_doc;

        let cnt = 0;
        while(true) {

            this.selectors.forEach(
                (value) => {
                    result = value.Gene_Docs(result);
                }
            );

            if(isNoCheck) {
                break;
            }

            cnt++;
            let chk = result.indexOf('@');
            if (chk < 0) break;
            if (cnt > 10)
            {
                result = "** over work **<br>" + result;
                // alert('over work : ' + chk.toString());
                break;
            }
        }
        return result;
    }

    public Restart() : void {
        this.selectors.forEach (
            (value) => {
                value.Restart();
            }
        )
    }

    dic_push(in_selector : ISctItm_Selector)
    {
        this.selectors.push(in_selector);
    }
    dic_concat(in_selectors : ISctItm_Selector[])
    {
        this.selectors = this.selectors.concat(in_selectors);
    }

}





