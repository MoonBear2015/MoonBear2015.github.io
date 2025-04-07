/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellSystem01.ts" />
namespace cellgame {
    export interface ICellGameSystem {
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

        /** ステータス */
        status : number[];
        
        /** 
         * ゲームステップ : ゲームの現在の状態 
         * ゲームスタート・ゲーム中のレベル・ゲームオーバーなど
         * */
        gameStep : number;
        
        /** 初期化 */
        init() : void;

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
 
    }

}