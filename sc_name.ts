// import { randomInt } from "crypto";

const FACE_PATH = 'pics/FACE/@FACE_PATH@';

function Num_to_AgeCode(in_Age_Num : number) : string
{
    if (in_Age_Num < 13) return 'C';
    if (in_Age_Num < 40) return 'Y';
    return 'O';
}
function AgeCode_to_Num(in_AgeCode : string) : number
{
    switch(in_AgeCode)
    {
        case 'C':
            {
                return rnd_minmax(8,13);
            }
        case 'Y':
            {
                return rnd_minmax(13,40);
            }
        case 'O':
            {
                return rnd_minmax(40,60);
            }
    }
    return rnd_minmax(8,60);
}


interface INmItm {
    FstNmStr : string;
    NmStr : string;
    NmSex : string;
    NmTyp : string;
    NmAge : string;
    NmAgeNum : number;
    NameAge : string;
    Name : string;
    Age : string;
    Life : string;
    Copy() : INmItm;

    Past : INmItm;

    Add(in_Nm : INmItm): any;

    to_NmCode(in_Age? : string) : string;

    to_FilePath(in_Age? : string) : string;

    html_WRITER(in_picsize : number) : string;
    html_WRITER2(in_picsize : number) : string;
    html_WRITER3(in_picsize : number) : string;
    html_QUESTER(in_picsize : number) : string;
    html_ADVICER(in_picsize : number) : string;
    html_ABOUTER(in_picsize : number) : string;
    html_BOOKWRITER(in_picsize : number) : string;
    html_CHAIR(in_picsize : number) : string;
}

class NmItm implements INmItm {
    public FstNmStr : string;
    public NmStr : string;
    public NmSex : string;
    public NmTyp : string;
    public NmAgeNum : number;
    constructor(in_FstNmStr : string, in_NmStr : string,in_NmSex : string,in_NmTyp : string, in_NmAge : string)
    {
        this.FstNmStr = in_FstNmStr;
        this.NmStr = in_NmStr;
        this.NmSex = in_NmSex;
        this.NmTyp = in_NmTyp;
        this.NmAgeNum = AgeCode_to_Num(in_NmAge);
    }

    html_WRITER(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_R">';
        html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        html += '</figure>';
        html += '</div>';
    
        html += '<h4 id="writer" align="right">';
        html += '©@YEAR@ @WHO2@ <br>';
        html += '<span class="xl">' + this.Name + '</span> ' + this.Age + ' @CO@';
        html += '</h4>';
        return html;
    }
    html_WRITER2(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_R">';
        html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        html += '</figure>';
        html += '</div>';
    
        html += '<h4 id="writer" align="right">';
        html += '©@YEAR@ @WHO4@ <br>';
        html += '<span class="xl">' + this.Name + '</span> '  + this.Age + ' @CO@';
        html += '</h4>';
        return html;
    }
    html_WRITER3(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_L">';
        html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        html += '</figure>';
        html += '</div>';
    
        html += '<h4 id="writer3" align="left">';
        html += '<span class="l">' + this.Name + '</span> '  + this.Age;
        html += ' @WHO4@';
        html += '</h4>';
        return html;
    }

    html_QUESTER(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_L">';
        html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        html += '</figure>';
        html += '</div>';
    
        html += '<h4 id="QAPlayer" align="left">';
        html += '<span class="xl">' + this.Name + '</span> '  + this.Age + '<br>';
        html += ' @WHO4@';
        html += '</h4>';
        return html;
    }

    html_ADVICER(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_R">';
        html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        html += '</figure>';
        html += '</div>';
    
        html += '<h4 id="QAPlayer" align="right">';
        html += ' @WHO4@ <br>';
        html += '<span class="xl">' + this.Name + '</span> ' + this.Age;
        html += '</h4>';
        return html;
    }

    html_ABOUTER(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_L">';
        html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        html += '</figure>';
        html += '</div>';
    
        html += '<h3 id="abouter" align="left">';
        html += '<span class="xl">' + this.Name + '</span> ' + this.Age;
        html += '</h3>';
        return html;
    }

    html_BOOKWRITER(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_L">';
        // html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        // html += '</figure>';
        html += '</div>';
        html += '<br clear="left">';
    
        html += '<h3 id="bookwriter">';
        html += '<span class="xl">' + this.Name + '</span><br>';
        html += this.Life + '<br>';
        html += '@WHO4@';
        html += '</h3>';
        return html;
    }

    html_CHAIR(in_picsize : number) {
        let html = '';
        html += '<div id="face_pic_L">';
        html += '<figure>';
        html += '<img src="pics/FACE/' + this.to_FilePath() + '" width="' 
            + in_picsize.toString() 
            + 'px">';
        html += '</figure>';
        html += '</div>';
    
        html += '<h4 id="chair" align="left">';
        html += '出題者：';
        html += '<span style="font-size : 16pt">' + this.Name + '</span> '  + this.Age + '<br>';
        html += ' @WHO4@';
        html += '</h4>';
        return html;
    }


    
    get NameAge() {
        return this.Name + this.Age;
    }

    get Name() {
        return this.NmStr;
    }

    get Age() {
        return '(' 
        + this.NmAgeNum.toString() 
        + ')';
    }

    get Life() {
        let now = new Date();
        let nowYear = now.getFullYear();
        let birthYear = rnd_minmax(1890,nowYear - 10);
        let deadAge = rnd_minmax(30,100);
        if (deadAge < this.NmAgeNum)
        {
            deadAge = this.NmAgeNum;
        }
        let deadYear = birthYear + deadAge;
        let result = '('
        + birthYear.toString() + '-';
        if (deadYear <= nowYear) {
            result = result + deadYear.toString();
        }
        result = result + ')';
        return result;  
    }

    get NmAge() {
        return Num_to_AgeCode(this.NmAgeNum);
    }
    set NmAge(in_NmAge : string) {
        this.NmAgeNum = AgeCode_to_Num(in_NmAge);
    }

    Copy() : INmItm {
        return new NmItm(this.FstNmStr,this.NmStr,this.NmSex,this.NmTyp,this.NmAge);
    }
    
    set Past(in_Nm : INmItm) {
        this.FstNmStr = in_Nm.FstNmStr;
        this.NmStr = in_Nm.NmStr;
        this.NmSex = in_Nm.NmSex;
        this.NmTyp = in_Nm.NmTyp;
        this.NmAge = in_Nm.NmAge;
    }

    Add(in_Nm : INmItm)
    {
        if (in_Nm.FstNmStr != '') this.FstNmStr = in_Nm.FstNmStr;
        if (in_Nm.NmStr != '') this.NmStr += in_Nm.NmStr;
        if (in_Nm.NmSex != '') this.NmSex = in_Nm.NmSex;
        if (in_Nm.NmTyp != '') this.NmTyp = in_Nm.NmTyp;
        if (in_Nm.NmAge != '') this.NmAge = in_Nm.NmAge;
    }

    to_NmCode(in_Age? : string) : string
    {
        if (in_Age) this.NmAge = in_Age; 
        return (this.NmTyp + this.NmAge + this.NmSex) 
    }

    to_FilePath(in_Age? : string) : string
    {
        let code = this.to_NmCode(in_Age);
        let nm = rnd_max(10);
        let result = code + '/' + code + zP3.format(nm) + '.jpg';
        return result; 
    }

}

class NmNon extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super('',in_Str,'','','');
    }
}

class NmAgM extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,in_Str,'','','');
        this.NmSex = 'M';
        this.NmTyp = 'A';
    }
}
class NmAgF extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,in_Str,'','','');
        this.NmSex = 'F';
        this.NmTyp = 'A';
    }
}

class NmWsM extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,in_Str,'','','');
        this.NmSex = 'M';
        this.NmTyp = 'W';
    }
}
class NmWsF extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,in_Str,'','','');
        this.NmSex = 'F';
        this.NmTyp = 'W';
    }
}

class NameCreaterAll implements INameCreater {
    private creaters : Array<INameCreater>;

    constructor()
    {
        this.creaters = new Array<INameCreater>();
        this.creaters.push(new NameCreater_cha());
        this.creaters.push(new NameCreater_eng());
        this.creaters.push(new NameCreater_rus());
        this.creaters.push(new NameCreater_jpn());
        this.creaters.push(new NameCreater_kor());
    }

    public create() : INmItm {
        let i = rnd_max(this.creaters.length);
        return this.creaters[i].create();
    }
}

interface INameCreater{
    create() : INmItm;
}

class NameCreater implements INameCreater {
    protected name01 : INmItm[];
    protected name02 : INmItm[];

    constructor(
        public conect : string
    ){
        this.name01 = new Array<INmItm>();
        this.name02 = new Array<INmItm>();
    }

    public create() : INmItm {
        let n01 : number = rnd_max(this.name01.length);
        let n02 : number = rnd_max(this.name02.length);
        let nm01 = this.name01[n01].Copy();
        let nm02 = this.name02[n02].Copy();
        if (this.conect != '') nm01.NmStr += this.conect;
        nm01.Add(nm02);
        // nm01.NmStr = ruby_change(nm01.NmStr);
        return nm01;
    }
}

class NameCreater_kor extends NameCreater implements INameCreater  {
    constructor(){
        super('');
        this.name01 = [
            new NmNon('|김|キム|')
            ,
            new NmNon('|이|イ|')
            ,
            new NmNon('|박|パク|')
            ,
            new NmNon('|정|チョン|')
            ,
            new NmNon('|최|チェ|')
            ,
            new NmNon('|조|チョ|')
            ,
            new NmNon('|강|カン|')
            ,
            new NmNon('|장|チャン|')
            ,
            new NmNon('|윤|ユン|')
            ,
            new NmNon('|임|イム|')
            ,
            new NmNon('|신|シン|')
            ,
            new NmNon('|유|ユ|')
            ,
            new NmNon('|한|ハン|')
            ,
            new NmNon('|오|オ|')
            ,
            new NmNon('|서|ソ|')
            ,
            new NmNon('|전|ジョン|')
            ,
            new NmNon('|권|クォン|')
            ,
            new NmNon('|황|ファン|')
            ,
            new NmNon('|안|アン|')
            ,
            new NmNon('|송|ソン|')
            ,
            new NmNon('|홍|ホン|')
            ,
            new NmNon('|양|ヤン|')
            ,
            new NmNon('|고|コ|')
            ,
            new NmNon('|문|ムン|')
            ,
            new NmNon('|손|ソン|')
            ,
            new NmNon('|배|ペ|')
            ,
            new NmNon('|백|ペク|')
            ,
            new NmNon('|허|ホ|')
            ,
            new NmNon('|노|ノ|')
            ,
            new NmNon('|남|ナム|')
        ];
        this.name02 = [
            new NmAgF('|지안|チアン|')
            ,
            new NmAgF('|서아|ソア|')
            ,
            new NmAgF('|하윤|ハユン|')
            ,
            new NmAgF('|서윤|ソユン|')
            ,
            new NmAgF('|하은|ハウン|')
            ,
            new NmAgF('|하린|ハリン|')
            ,
            new NmAgF('|서연|ソヨン|')
            ,
            new NmAgF('|수아|スア|')
            ,
            new NmAgF('|지우|チウ|')
            ,
            new NmAgF('|지유|チユ|')
            ,
            new NmAgM('|서준|ソジュン|')
            ,
            new NmAgM('|하준|ハジュン|')
            ,
            new NmAgM('|도윤|トユン|')
            ,
            new NmAgM('|시우|シウ|')
            ,
            new NmAgM('|민준|ミンジュン|')
            ,
            new NmAgM('|지호|チホ|')
            ,
            new NmAgM('|예준|イェジュン|')
            ,
            new NmAgM('|주원|チュウォン|')
            ,
            new NmAgM('|은우|ウヌ|')
            ,
            new NmAgM('|유준|ユジュン|')
        ];
    }
}


class NameCreater_cha extends NameCreater implements INameCreater  {
    constructor(){
        super('');
        this.name01 = [
            new NmNon('|王|ワン|')
            ,
            new NmNon('|李|リー|')
            ,
            new NmNon('|張|ヂャン|')
            ,
            new NmNon('|劉|リィゥ|')
            ,
            new NmNon('|陳|チェン|')
            ,
            new NmNon('|楊|ヤン|')
            ,
            new NmNon('|黄|フゥァン|')
            ,
            new NmNon('|趙|ヂャオ|')
            ,
            new NmNon('|呉|ウー|')
            ,
            new NmNon('|周|ヂョウ|')
            ,
            new NmNon('|孙|スン|')
        ];
        this.name02 = [
            new NmAgM('|浩宇|ハオ ユー|')
            ,
            new NmAgM('|浩然|ハオ ラン|')
            ,
            new NmAgM('|宇轩|ユー シュェン|')
            ,
            new NmAgM('|宇航|ユー ハン|')
            ,
            new NmAgM('|宇泽|ユー ゼァ|')
            ,
            new NmAgM('|梓豪|ズー ハオ|')
            ,
            new NmAgM('|子轩|ジー シュェン|')
            ,
            new NmAgM('|浩轩|ハオ シュェン|')
            ,
            new NmAgM('|宇辰|ユー チェン|')
            ,
            new NmAgM('|子豪|ズー ハオ|')
            ,
            new NmAgM('|悟空|ウー コン|')
            ,
            new NmAgF('|子豪|ズー ハオ|')
            ,
            new NmAgF('|梓涵|ズー ハン|')
            ,
            new NmAgF('|一诺|イー ヌオ|')
            ,
            new NmAgF('|欣怡|シン イー|')
            ,
            new NmAgF('|诗涵|シー ハン|')
            ,
            new NmAgF('|依诺|イー ヌオ|')
            ,
            new NmAgF('|欣妍|シン イェン|')
            ,
            new NmAgF('|雨桐|ユー トン|')
            ,
            new NmAgF('|梓萱|ズー シュェン|')
            ,
            new NmAgF('|可馨|クァ シン|')
            ,
            new NmAgF('|佳怡|ジャ イー|')
        ];
    }
}

class NameCreater_rus extends NameCreater implements INameCreater {
    constructor(){
        super(' ');
        this.name01 = [
            new NmWsM('|Александр|アレクサンドル|')
            ,
            new NmWsM('|Михаил|ミハイル|')
            ,
            new NmWsM('|Артём|アルチョム|')
            ,
            new NmWsM('|Максим|マクシム|')
            ,
            new NmWsM('|Даниил|ダニール|')
            ,
            new NmWsM('|Иван|イヴァン|')
            ,
            new NmWsM('|Дмитрий|ドミトリー|')
            ,
            new NmWsM('|Кирилл|キリル|')
            ,
            new NmWsM('|Матвей|マトヴェイ|')
            ,
            new NmWsF('|Софья|ソフィア|')
            ,
            new NmWsF('|Мария|マリヤ|')
            ,
            new NmWsF('|Анна|アンナ|')
            ,
            new NmWsF('|Алиса|アリサ|')
            ,
            new NmWsF('|Виктория|ヴィクトリア|')
            ,
            new NmWsF('|Анастасия|アナスタシア|')
            ,
            new NmWsF('|Полина|ポリーナ|')
            ,
            new NmWsF('|Александра|アレクサンドラ|')
            ,
            new NmWsF('|Елизавета|エリザヴェータ|')
            ,
            new NmWsF('|Екатерина|エカチェリーナ|')
        ];
        this.name02 = [
            new NmNon('|Cмирно́в|スミルノフ|')
            ,
            new NmNon('|Иванов|イワノフ|')
            ,
            new NmNon('|Кузнецов|クズネツォフ|')
            ,
            new NmNon('|Попов|ポポフ|')
            ,
            new NmNon('|Соколов|ソコロフ|')
            ,
            new NmNon('|Лебедев|レベジェフ|')
            ,
            new NmNon('|Козлов|コズロフ|')
            ,
            new NmNon('|Новиков|ノヴィコフ|')
            ,
            new NmNon('|Морозов|モロゾフ|')
            ,
            new NmNon('|Петров|ペトロフ|')
        ];
    }
}

class NameCreater_jpn extends NameCreater implements INameCreater {
    constructor(){
        super('');
        this.name01 = [
            new NmNon('|鈴木|すずき|')
            ,
            new NmNon('|田中|たなか|')
            ,
            new NmNon('|川村|かわむら|')
            ,
            new NmNon('|加藤|かとう|')
            ,
            new NmNon('|佐藤|さとう|')
            ,
            new NmNon('|伊藤|いとう|')
            ,
            new NmNon('|斉藤|さいとう|')
            ,
            new NmNon('|渡辺|わたなべ|')
            ,
            new NmNon('|山田|やまだ|')
            ,
            new NmNon('|高橋|たかはし|')
            ,
            new NmNon('|吉田|よしだ|')
            ,
            new NmNon('|佐々木|ささき|')
            ,
            new NmNon('|徳川|とくがわ|')
            ,
            new NmNon('|織田|おだ|')
            ,
            new NmNon('|藤原|ふじわら|')
            ,
            new NmNon('|坂本|さかもと|')
            ,
            new NmNon('|大川|おおかわ|')
            ,
            new NmNon('|松本|まつもと|')
            ,
            new NmNon('|山本|やまもと|')
            ,
            new NmNon('|谷口|たにぐち|')
            ,
            new NmNon('|塩見|しおみ|')
            ,
            new NmNon('|渚|なぎさ|')
            ,
            new NmNon('|川崎|かわさき|')
            ,
            new NmNon('|山崎|やまざき|')
            ,
            new NmNon('|鬼龍院|きりゅういん|')
            ,
            new NmNon('|花京院|かきょういん|')
            ,
            new NmNon('|早乙女|さおとめ|')
            ,
            new NmNon('|鬼瓦|おにがわら|')
        ];
        this.name02 = [
            new NmAgM('|一郎|いちろう|')
            ,
            new NmAgM('|次郎|じろう|')
            ,
            new NmAgM('|三郎|さぶろう|')
            ,
            new NmAgM('|四郎|しろう|')
            ,
            new NmAgM('|吾郎|ごろう|')
            ,
            new NmAgM('|太郎|たろう|')
            ,
            new NmAgM('|隆太|りゅうた|')
            ,
            new NmAgM('|竜太|りゅうた|')
            ,
            new NmAgM('|孝史|たかし|')
            ,
            new NmAgM('|健二|けんじ|')
            ,
            new NmAgM('|健一|けんいち|')
            ,
            new NmAgM('|浩一|こういち|')
            ,
            new NmAgM('|仁|ひとし|')
            ,
            new NmAgM('|和彦|かずひこ|')
            ,
            new NmAgM('|徹也|てつや|')
            ,
            new NmAgM('|哲平|てっぺい|')
            ,
            new NmAgM('|小太郎|こたろう|')
            ,
            new NmAgM('|味平|あじへい|')
            ,
            new NmAgM('|田吾作|たごさく|')
            ,
            new NmAgM('|権蔵|ごんぞう|')
            ,
            new NmAgF('|聖子|せいこ|')
            ,
            new NmAgF('|久美子|くみこ|')
            ,
            new NmAgF('|佐知子|さちこ|')
            ,
            new NmAgF('|花子|はなこ|')
            ,
            new NmAgF('|美由紀|みゆき|')
            ,
            new NmAgF('|真弓|まゆみ|')
            ,
            new NmAgF('|貞子|さだこ|')
            ,
            new NmAgF('|由美子|ゆみこ|')
            ,
            new NmAgF('|薫|かをる|')
            ,
            new NmAgF('|桜|さくら|')
            ,
            new NmAgF('|桜子|さくらこ|')
            ,
            new NmAgF('|順子|じゅんこ|')
        ];

    }
}

class NameCreater_eng extends NameCreater implements INameCreater {
    constructor(){
        super(' ');
        this.name01 = [
            new NmWsM('|John|ジョン|')
            ,
            new NmWsM('|Robert|ロバート|')
            ,
            new NmWsM('|Joseph|ジョセフ|')
            ,
            new NmWsM('|Thomas|トーマス|')
            ,
            new NmWsM('|Richard|リチャード|')
            ,
            new NmWsM('|James|ジェームズ|')
            ,
            new NmWsM('|Tom|トム|')
            ,
            new NmWsM('|Sam|サム|')
            ,
            new NmWsM('|Jim|ジム|')
            ,
            new NmWsM('|Michael|マイケル|')
            ,
            new NmWsM('|David|デイビッド|')
            ,
            new NmWsM('|Kenny|ケニー|')
            ,
            new NmWsM('|Ryan|ライアン|')
            ,
            new NmWsM('|Bill|ビル|')
            ,
            new NmWsM('|Tony|トニー|')
            ,
            new NmWsM('|Bob|ボブ|')
            ,
            new NmWsM('|Amuro|アムロ|')
            ,
            new NmWsM('|Char|シャア|')
            ,
            new NmWsM('|Frodo|フロド|')
            ,
            new NmWsM('|Bilbo|ビルボ|')
            ,
            new NmWsM('|Samwise|サムワイズ|')
            ,
            new NmWsM('|Anakin|アナキン|')
            ,
            new NmWsM('|Luke|ルーク|')
            ,
            new NmWsF('|Mary|メアリー|')
            ,
            new NmWsF('|Jane|ジェーン|')
            ,
            new NmWsF('|Candy|キャンディー|')
            ,
            new NmWsF('|Rinda|リンダ|')
            ,
            new NmWsF('|Barbara|バーバラ|')
            ,
            new NmWsF('|Elizabeth|エリザベス|')
            ,
            new NmWsF('|Margaret|マーガレット|')
            ,
            new NmWsF('|Dorothy|ドロシー|')
            ,
            new NmWsF('|Jennifer|ジェニファー|')
        ];
        this.name02 = [
            new NmNon('|Gates|ゲイツ|')
            ,
            new NmNon('|Jackson|ジャクソン|')
            ,
            new NmNon('|McGregor|マクレガー|')
            ,
            new NmNon('|McEnroe|マッケンロー|')
            ,
            new NmNon('|Kimberly|キンバリー|')
            ,
            new NmNon('|Carpenter|カーペンター|')
            ,
            new NmNon('|Rogers|ロジャース|')
            ,
            new NmNon('|Hopkins|ホプキンス|')
            ,
            new NmNon('|Brown|ブラウン|')
            ,
            new NmNon('|Miller|ミラー|')
            ,
            new NmNon('|Wilson|ウィルソン|')
            ,
            new NmNon('|Jones|ジョーンズ|')
            ,
            new NmNon('|Smith|スミス|')
            ,
            new NmNon('|Taylor|テイラー|')
            ,
            new NmNon('|Johnson|ジョンソン|')
            ,
            new NmNon('|Ray|レイ|')
            ,
            new NmNon('|Aznable|アズナブル|')
            ,
            new NmNon('|Baggins|バギンズ|')
            ,
            new NmNon('|Skywalker|スカイウォーカー|')
            ,
            new NmNon('|Gamgee|ギャムジー|')
        ];

    }
}