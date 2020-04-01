const FACE_PATH = 'pics/FACE/@FACE_PATH@';

function Age_to_AgeCode(in_Age_Num : number) : string
{
    if (in_Age_Num < 13) return 'C';
    if (in_Age_Num < 30) return 'Y';
    return 'O';
}


interface INmItm {
    NmStr : string;
    NmSex : string;
    NmTyp : string;
    NmAge : string;
    Copy() : INmItm;

    Paset : INmItm;

    Add(in_Nm : INmItm): any;

    to_NmCode(in_Age? : string) : string;

    to_FilePath(in_Age? : string) : string;
}

class NmItm implements INmItm {
    public NmStr : string;
    public NmSex : string;
    public NmTyp : string;
    public NmAge : string;
    constructor(in_NmStr : string,in_NmSex : string,in_NmTyp : string, in_NmAge : string)
    {
        this.NmStr = in_NmStr;
        this.NmSex = in_NmSex;
        this.NmTyp = in_NmTyp;
        this.NmAge = in_NmAge;
    }

    Copy() : INmItm {
        return new NmItm(this.NmStr,this.NmSex,this.NmTyp,this.NmAge);
    }
    
    set Paset(in_Nm : INmItm) {
        this.NmStr = in_Nm.NmStr;
        this.NmSex = in_Nm.NmSex;
        this.NmTyp = in_Nm.NmTyp;
        this.NmAge = in_Nm.NmAge;
    }

    Add(in_Nm : INmItm)
    {
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
        super(in_Str,'','','');
    }
}

class NmAgM extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,'','','');
        this.NmSex = 'M';
        this.NmTyp = 'A';
    }
}
class NmAgF extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,'','','');
        this.NmSex = 'F';
        this.NmTyp = 'A';
    }
}

class NmWsM extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,'','','');
        this.NmSex = 'M';
        this.NmTyp = 'W';
    }
}
class NmWsF extends NmItm implements INmItm {
    constructor(in_Str : string)
    {
        super(in_Str,'','','');
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
        nm01.NmStr = ruby_change(nm01.NmStr);
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
            new NmNon('|오|オ	|')
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


class NameCreater_cha extends NameCreater_ruby implements INameCreater  {
    constructor(){
        super('');
        this.name01 = [
            '|王|ワン|'
            ,
            '|李|リー|'
            ,
            '|張|ヂャン|'
            ,
            '|劉|リィゥ|'
            ,
            '|陳|チェン|'
            ,
            '|楊|ヤン|'
            ,
            '|黄|フゥァン|'
            ,
            '|趙|ヂャオ|'
            ,
            '|呉|ウー|'
            ,
            '|周|ヂョウ|'
            ,
            '|孙|スン|'
        ];
        this.name02 = [
            '|浩宇|ハオ ユー|'
            ,
            '|浩然|ハオ ラン|'
            ,
            '|宇轩|ユー シュェン|'
            ,
            '|宇航|ユー ハン|'
            ,
            '|宇泽|ユー ゼァ|'
            ,
            '|梓豪|ズー ハオ|'
            ,
            '|子轩|ジー シュェン|'
            ,
            '|浩轩|ハオ シュェン|'
            ,
            '|宇辰|ユー チェン|'
            ,
            '|子豪|ズー ハオ|'
            ,
            '|梓涵|ズー ハン|'
            ,
            '|一诺|イー ヌオ|'
            ,
            '|欣怡|シン イー|'
            ,
            '|诗涵|シー ハン|'
            ,
            '|依诺|イー ヌオ|'
            ,
            '|欣妍|シン イェン|'
            ,
            '|雨桐|ユー トン|'
            ,
            '|梓萱|ズー シュェン|'
            ,
            '|可馨|クァ シン|'
            ,
            '|佳怡|ジャ イー|'
            ,
            '|悟空|ウー コン|'
        ];
    }
}


class NameCreater_rus extends NameCreater_ruby implements INameCreater {
    constructor(){
        super(' ');
        this.name01 = [
            '|Александр|アレクサンドル|'
            ,
            '|Михаил|ミハイル|'
            ,
            '|Артём|アルチョム|'
            ,
            '|Максим|マクシム|'
            ,
            '|Даниил|ダニール|'
            ,
            '|Иван|イヴァン|'
            ,
            '|Дмитрий|ドミトリー|'
            ,
            '|Кирилл|キリル|'
            ,
            '|Матвей|マトヴェイ|'
            ,
            '|Софья|ソフィア|'
            ,
            '|Мария|マリヤ|'
            ,
            '|Анна|アンナ|'
            ,
            '|Алиса|アリサ|'
            ,
            '|Виктория|ヴィクトリア|'
            ,
            '|Анастасия|アナスタシア|'
            ,
            '|Полина|ポリーナ|'
            ,
            '|Александра|アレクサンドラ|'
            ,
            '|Елизавета|エリザヴェータ|'
            ,
            '|Екатерина|エカチェリーナ|'
        ];
        this.name02 = [
            '|Cмирно́в|スミルノフ|'
            ,
            '|Иванов|イワノフ|'
            ,
            '|Кузнецов|クズネツォフ|'
            ,
            '|Попов|ポポフ|'
            ,
            '|Соколов|ソコロフ|'
            ,
            '|Лебедев|レベジェフ|'
            ,
            '|Козлов|コズロフ|'
            ,
            '|Новиков|ノヴィコフ|'
            ,
            '|Морозов|モロゾフ|'
            ,
            '|Петров|ペトロフ|'
        ];
    }
}

class NameCreater_jpn extends NameCreater_ruby implements INameCreater {
    constructor(){
        super('');
        this.name01 = [
            '|鈴木|すずき|'
            ,
            '|田中|たなか|'
            ,
            '|川村|かわむら|'
            ,
            '|加藤|かとう|'
            ,
            '|佐藤|さとう|'
            ,
            '|伊藤|いとう|'
            ,
            '|斉藤|さいとう|'
            ,
            '|渡辺|わたなべ|'
            ,
            '|山田|やまだ|'
            ,
            '|高橋|たかはし|'
            ,
            '|吉田|よしだ|'
            ,
            '|佐々木|ささき|'
            ,
            '|徳川|とくがわ|'
            ,
            '|織田|おだ|'
            ,
            '|藤原|ふじわら|'
            ,
            '|坂本|さかもと|'
            ,
            '|大川|おおかわ|'
            ,
            '|松本|まつもと|'
            ,
            '|山本|やまもと|'
            ,
            '|谷口|たにぐち|'
            ,
            '|塩見|しおみ|'
            ,
            '|渚|なぎさ|'
        ];
        this.name02 = [
            '|一郎|いちろう|'
            ,
            '|次郎|じろう|'
            ,
            '|三郎|さぶろう|'
            ,
            '|四郎|しろう|'
            ,
            '|吾郎|ごろう|'
            ,
            '|太郎|たろう|'
            ,
            '|隆太|りゅうた|'
            ,
            '|竜太|りゅうた|'
            ,
            '|孝史|たかし|'
            ,
            '|健二|けんじ|'
            ,
            '|健一|けんいち|'
            ,
            '|浩一|こういち|'
            ,
            '|仁|ひとし|'
            ,
            '|和彦|かずひこ|'
            ,
            '|徹也|てつや|'
            ,
            '|哲平|てっぺい|'
            ,
            '|小太郎|こたろう|'
            ,
            '|味平|あじへい|'
            ,
            '|聖子|せいこ|'
            ,
            '|久美子|くみこ|'
            ,
            '|佐知子|さちこ|'
            ,
            '|花子|はなこ|'
            ,
            '|美由紀|みゆき|'
            ,
            '|真弓|まゆみ|'
            ,
            '|貞子|さだこ|'
            ,
            '|由美子|ゆみこ|'
            ,
            '|薫|かをる|'
            ,
            '|桜子|さくらこ|'
            ,
            '|順子|じゅんこ|'
        ];

    }
}

class NameCreater_eng extends NameCreater_ruby implements INameCreater {
    constructor(){
        super(' ');
        this.name01 = [
            '|John|ジョン|'
            ,
            '|Robert|ロバート|'
            ,
            '|Joseph|ジョセフ|'
            ,
            '|Thomas|トーマス|'
            ,
            '|Richard|リチャード|'
            ,
            '|James|ジェームズ|'
            ,
            '|Tom|トム|'
            ,
            '|Sam|サム|'
            ,
            '|Jim|ジム|'
            ,
            '|Michael|マイケル|'
            ,
            '|David|デイビッド|'
            ,
            '|Kenny|ケニー|'
            ,
            '|Ryan|ライアン|'
            ,
            '|Bill|ビル|'
            ,
            '|Tony|トニー|'
            ,
            '|Bob|ボブ|'
            ,
            '|Amuro|アムロ|'
            ,
            '|Char|シャア|'
            ,
            '|Frodo|フロド|'
            ,
            '|Bilbo|ビルボ|'
            ,
            '|Samwise|サムワイズ|'
            ,
            '|Anakin|アナキン|'
            ,
            '|Luke|ルーク|'
            ,
            '|Mary|メアリー|'
            ,
            '|Jane|ジェーン|'
            ,
            '|Candy|キャンディー|'
            ,
            '|Rinda|リンダ|'
            ,
            '|Barbara|バーバラ|'
            ,
            '|Elizabeth|エリザベス|'
            ,
            '|Margaret|マーガレット|'
            ,
            '|Dorothy|ドロシー|'
            ,
            '|Jennifer|ジェニファー|'
        ];
        this.name02 = [
            '|Gates|ゲイツ|'
            ,
            '|Jackson|ジャクソン|'
            ,
            '|McGregor|マクレガー|'
            ,
            '|McEnroe|マッケンロー|'
            ,
            '|Kimberly|キンバリー|'
            ,
            '|Carpenter|カーペンター|'
            ,
            '|Rogers|ロジャース|'
            ,
            '|Hopkins|ホプキンス|'
            ,
            '|Brown|ブラウン|'
            ,
            '|Miller|ミラー|'
            ,
            '|Wilson|ウィルソン|'
            ,
            '|Jones|ジョーンズ|'
            ,
            '|Smith|スミス|'
            ,
            '|Taylor|テイラー|'
            ,
            '|Johnson|ジョンソン|'
            ,
            '|Ray|レイ|'
            ,
            '|Aznable|アズナブル|'
            ,
            '|Baggins|バギンズ|'
            ,
            '|Skywalker|スカイウォーカー|'
            ,
            '|Gamgee|ギャムジー|'
        ];

    }
}