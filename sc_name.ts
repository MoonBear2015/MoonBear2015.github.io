class NameMakerAll implements INameMaker {
    private makers : Array<INameMaker>;

    constructor()
    {
        this.makers = new Array<INameMaker>();
        this.makers.push(new NameMaker_cha());
        this.makers.push(new NameMaker_eng());
        this.makers.push(new NameMaker_rus());
        this.makers.push(new NameMaker_jpn());
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

class NameMaker_cha extends NameMaker implements INameMaker  {
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
        ];
    }

    public create(){
        return ruby_change(super.create());
    }
}


class NameMaker_rus extends NameMaker implements INameMaker {
    constructor(){
        super('・');
        this.name01 = [
            'アレクサンドル'
            ,
            'ミハイル'
            ,
            'アルチョム'
            ,
            'マクシム'
            ,
            'ダニール'
            ,
            'イヴァン'
            ,
            'ドミトリー'
            ,
            'キリル'
            ,
            'マトヴェイ'
            ,
            'ソフィア'
            ,
            'マリヤ'
            ,
            'アンナ'
            ,
            'アリサ'
            ,
            'ヴィクトリア'
            ,
            'アナスタシア'
            ,
            'ポリーナ'
            ,
            'アレクサンドラ'
            ,
            'エリザヴェータ'
            ,
            'エカチェリーナ'
        ];
        this.name02 = [
            'スミルノフ'
            ,
            'イワノフ'
            ,
            'クズネツォフ'
            ,
            'ポポフ'
            ,
            'ソコロフ'
            ,
            'レベジェフ'
            ,
            'コズロフ'
            ,
            'ノヴィコフ'
            ,
            'モロゾフ'
            ,
            'ペトロフ'
        ];
    }
}

class NameMaker_jpn extends NameMaker implements INameMaker {
    constructor(){
        super('');
        this.name01 = [
            '鈴木'
            ,
            '田中'
            ,
            '川村'
            ,
            '加藤'
            ,
            '佐藤'
            ,
            '伊藤'
            ,
            '斉藤'
            ,
            '渡辺'
            ,
            '山田'
            ,
            '高橋'
            ,
            '吉田'
            ,
            '佐々木'
            ,
            '徳川'
            ,
            '織田'
            ,
            '藤原'
            ,
            '坂本'
            ,
            '坂本'
            ,
            '大川'
            ,
            '松本'
            ,
            '山本'
            ,
            '谷口'
        ];
        this.name02 = [
            '一郎'
            ,
            '次郎'
            ,
            '三郎'
            ,
            '四郎'
            ,
            '吾郎'
            ,
            '太郎'
            ,
            '隆太'
            ,
            '竜太'
            ,
            '孝史'
            ,
            '健二'
            ,
            '健一'
            ,
            '浩一'
            ,
            '仁'
            ,
            '和彦'
            ,
            '徹也'
            ,
            '哲平'
            ,
            '聖子'
            ,
            '久美子'
            ,
            '佐知子'
            ,
            '花子'
            ,
            '美由紀'
            ,
            '真弓'
            ,
            '貞子'
            ,
            '由美子'
            ,
            '薫'
            ,
            '桜子'
            ,
            '順子'
        ];

    }
}

class NameMaker_eng extends NameMaker implements INameMaker {
    constructor(){
        super('・');
        this.name01 = [
            'ジョーン'
            ,
            'ロバート'
            ,
            'ジョセフ'
            ,
            'トーマス'
            ,
            'リチャード'
            ,
            'ジェームズ'
            ,
            'トム'
            ,
            'サム'
            ,
            'ジム'
            ,
            'マイケル'
            ,
            'デイビッド'
            ,
            'ケニー'
            ,
            'ライアン'
            ,
            'ビル'
            ,
            'トニー'
            ,
            'リチャード'
            ,
            'ボブ'
            ,
            'メアリー'
            ,
            'ジェーン'
            ,
            'キャンディー'
            ,
            'リンダ'
            ,
            'バーバラ'
            ,
            'エリザベス'
            ,
            'マーガレット'
            ,
            'ドロシー'
            ,
            'ジェニファー'
            ,
            'バーバラ'
        ];
        this.name02 = [
            'ゲイツ'
            ,
            'ジャクソン'
            ,
            'マクレガー'
            ,
            'マッケンロー'
            ,
            'キンバリー'
            ,
            'カーペンター'
            ,
            'ロジャース'
            ,
            'ホプキンス'
            ,
            'ブラウン'
            ,
            'ミラー'
            ,
            'ウィルソン'
            ,
            'ジョーンズ'
            ,
            'スミス'
            ,
            'テイラー'
            ,
            'ジョンソン'
        ];

    }
}