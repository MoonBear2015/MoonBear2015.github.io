namespace cellgame {
    export interface ICellGameSystem {
        /** ゲーム名 */
        gameName : string;

        /** 背景色 */
        backColor : string;

        /** 升目の数（縦・横） */
        cellSize : number;

        /** cellコード */
        cells : ICellArray<number>;

        /** 表示メッセージ */
        messages : IMessage[];

        /** ステータス名称 */
        statusName : string[];

        /** ステータス名称表示フラグ */
        statusNameIsVisible : boolean[];

        /** ステータス */
        status : number[];

        /** ステータス表示フラグ */
        statusIsVisible : boolean[];
        
        /** 
         * ゲームステップ : ゲームの現在の状態 
         * ゲームスタート・ゲーム中のレベル・ゲームオーバーなど
         * */
        gameStep : number;
        
        /** 初期化 */
        init() : void;

        /** ステータス初期化 */
        statusInit() : void;

        /** タッチ箇所受信
         * @param p : タッチ桁位置
         */
        touchPointRecv(p : Point) : void;

        /** コードカウントアップ 
         * @param code : 現在のコード
         * @returns 次のコード 
        */
        codeCountUp(code : number) : number;

        /** セル選択
         * @param point : 選択桁位置
         */
        pointSelect(point : Point) : void;

        /**
         * 表示作成
         */
        displayMaker() : void;

        /** 勝利メッセージ返却 */
        msgWinSelector() : string;
        /**　敗北メッセージ返却 */
        msgLoseSelector() : string;

        /** 説明 */
        toComment() : string;

        /** 駒の説明 */
        toKomaHelp() : string;
 
    }

}