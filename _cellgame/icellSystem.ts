/// <reference path="cellgame.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    export interface ICellGameSystem {
        /** 升目の数（縦・横） */
        cellWidth : number;
        
        /** 初期化 */
        init() : any;
            
        /** 番地の数 */
        cellLength() : number;

        /** 番地計算 */
        cellAddress(x : number, y : number) : number;

        /** cellコード（x,y指定） */
        code(x : number,y : number) : number;

        /** cellコード設定 (x,y指定) 画面出力込み */
        codeSetter( x : number, y : number, code : number) : any;

        /** Flashフラグ(x,y指定) */
        isFlash(x : number,y : number) : boolean;

        /** Flashフラグ設定(x,y指定) 画面出力込み */
        isFlashSetter(x:number,y:number,isFlash:boolean) : any;

    }

}