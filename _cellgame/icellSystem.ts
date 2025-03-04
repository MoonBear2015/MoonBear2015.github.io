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

        /** 背景色のフラッシュ？ */
        isflashes : boolean[];
        
        /** 初期化 */
        init() : void;
            
        /** 番地の数 */
        addressLength() : number;

        /** 番地計算 */
        cellAddress(x : number, y : number) : number;

        /** cellコード（x,y指定） */
        code(x : number,y : number) : number;

        /** cellコード設定 (x,y指定) 画面出力込み */
        codeSetter( x : number, y : number, code : number) : void;

        /** Flashフラグ(x,y指定) */
        isFlash(x : number,y : number) : boolean;

        /** Flashフラグ設定(x,y指定) 画面出力込み */
        isFlashSetter(x:number,y:number,isFlash:boolean) : void;

        /** ステータス名称 */
        statusName : string[];

        /** ステータス */
        status : number[];

    }

}