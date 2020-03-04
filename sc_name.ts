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
            '王'
            ,
            '李'
            ,
            '張'
            ,
            '劉'
            ,
            '陳'
            ,
            '楊'
            ,
            '趙'
            ,
            '呉'
            ,
            '周'
        ];
        this.name02 = [
            '浩宇'
            ,
            '浩然'
            ,
            '宇轩'
            ,
            '宇航'
            ,
            '宇泽'
            ,
            '梓豪'
            ,
            '子轩'
            ,
            '浩轩'
            ,
            '宇辰'
            ,
            '子豪'
            ,
            '梓涵'
            ,
            '一诺'
            ,
            '欣怡'
            ,
            '诗涵'
            ,
            '依诺'
            ,
            '欣妍'
            ,
            '雨桐'
            ,
            '梓萱'
            ,
            '可馨'
            ,
            '佳怡'
        ];
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