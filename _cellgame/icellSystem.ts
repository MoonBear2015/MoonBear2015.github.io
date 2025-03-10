/// <reference path="cellgame.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    export interface ICellGameSystem {
        /** 升目の数（縦・横） */
        cellCount : number;

        /** cellコード */
        codes : number[];

        /** 表示メッセージ */
        messages : IMessage[];
        
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
        code(x : number,y : number) : number;

        /** cellコード設定 (x,y指定) */
        codeSetter( x : number, y : number, code : number) : void;

        /** ステータス名称 */
        statusName : string[];

        /** ステータス */
        status : number[];

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

    }

}