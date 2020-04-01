const FACE_PATH = 'pics/FACE/@FACE_PATH@';

interface INmItm {
    NmStr : string;
    NmSex : string;
    NmTyp : string;
    NmAge : string;
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
        if (in_Nm.NmStr != '') this.NmStr = in_Nm.NmStr;
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

class NameMakerAll implements INameMaker {
    private makers : Array<INameMaker>;

    constructor()
    {
        this.makers = new Array<INameMaker>();
        this.makers.push(new NameMaker_cha());
        this.makers.push(new NameMaker_eng());
        this.makers.push(new NameMaker_rus());
        this.makers.push(new NameMaker_jpn());
        this.makers.push(new NameMaker_kor());

    }

    public create() : string {
        let i = rnd_max(this.makers.length);
        return this.makers[i].create();
    }
}

interface INameMaker{
    create() : string;
}

class NameMaker implements INameMaker {
    protected name01 : string[];
    protected name02 : string[];

    constructor(
        public conect : string
    ){
        this.name01 = new Array<string>();
        this.name02 = new Array<string>();
    }

    public create() : string {
        let n01 : number = rnd_max(this.name01.length);
        let n02 : number = rnd_max(this.name02.length);
        return this.name01[n01] + this.conect + this.name02[n02];
    }
}

class NameMaker_ruby extends NameMaker implements INameMaker {
    public create(){
        return ruby_change(super.create());
    }
}

class NameMaker_kor extends NameMaker_ruby implements INameMaker  {
    constructor(){
        super('');
        this.name01 = [
		'|김|キム|'
		,
		'|이|イ|'
		,
		'|박|パク|'
		,
		'|정|チョン|'
		,
		'|최|チェ|'
		,
		'|조|チョ|'
		,
		'|강|カン|'
		,
		'|장|チャン|'
		,
		'|윤|ユン|'
		,
		'|임|イム|'
		,
		'|신|シン|'
		,
		'|유|ユ|'
		,
		'|한|ハン|'
		,
		'|오|オ	|'
		,
		'|서|ソ|'
		,
		'|전|ジョン|'
		,
		'|권|クォン|'
		,
		'|황|ファン|'
		,
		'|안|アン|'
		,
		'|송|ソン|'
		,
		'|홍|ホン|'
		,
		'|양|ヤン|'
		,
		'|고|コ|'
		,
		'|문|ムン|'
		,
		'|손|ソン|'
		,
		'|배|ペ|'
		,
		'|백|ペク|'
		,
		'|허|ホ|'
		,
		'|노|ノ|'
		,
		'|남|ナム|'
        ];
        this.name02 = [
		'|지안|チアン|'
		,
		'|서아|ソア|'
		,
		'|하윤|ハユン|'
		,
		'|서윤|ソユン|'
		,
		'|하은|ハウン|'
		,
		'|하린|ハリン|'
		,
		'|서연|ソヨン|'
		,
		'|수아|スア|'
		,
		'|지우|チウ|'
		,
		'|지유|チユ|'
		,
		'|서준|ソジュン|'
		,
		'|하준|ハジュン|'
		,
		'|도윤|トユン|'
		,
		'|시우|シウ|'
		,
		'|민준|ミンジュン|'
		,
		'|지호|チホ|'
		,
		'|예준|イェジュン|'
		,
		'|주원|チュウォン|'
		,
		'|은우|ウヌ|'
		,
		'|유준|ユジュン|'
        ];
    }
}


class NameMaker_cha extends NameMaker_ruby implements INameMaker  {
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


class NameMaker_rus extends NameMaker_ruby implements INameMaker {
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

class NameMaker_jpn extends NameMaker_ruby implements INameMaker {
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

class NameMaker_eng extends NameMaker_ruby implements INameMaker {
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