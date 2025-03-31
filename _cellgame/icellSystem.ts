/// <reference path="cellgame.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    export interface ICellGameSystem {
        /** 背景色 */
        backColor : string;

        /** 升目の数（縦・横） */
        cellSize : number;

        /** cellコード */
        codes : number[];

        /** 表示メッセージ */
        messages : IMessage[];

        /** ステータス名称 */
        statusName : string[];

        /** ステータス */
        status : number[];
        
        /** 
         * ゲームステップ : ゲームの現在の状態 
         * ゲームスタート・ゲーム中のレベル・ゲームオーバーなど
         * */
        gameStep : number;
        
        /** 初期化 */
        init() : void;

        /** 盤面白紙
         * @param cellCount : セル数
         */
        cellReset(cellCount : number) : void;
            
        /** 番地の数 */
        addressLength() : number;

        /** 番地計算 */
        cellAddress(x : number, y : number) : number;

        /** cellコード（x,y指定） */
        codeGetter(x : number,y : number) : number;

        /** cellコード設定 (x,y指定) */
        codeSetter( x : number, y : number, code : number) : void;

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
         * @param p : 選択桁位置
         */
        pointSelect(p : Point) : void;

        /**
         * 表示作成
         */
        displayMaker() : void;

        /** 勝利メッセージ返却 */
        msgWinSelector() : string;
        /**　敗北メッセージ返却 */
        msgLoseSelector() : string;
        

    }

}