/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** セルゲームシステム ０１： */
    export class CellGameSystem01 extends CellGameSystem00
    implements ICellGameSystem {

        // game01 self

        public gameSize = 2;
        public nowCell = 0;
        public isGameOver = false;
        public isGameClear = false;
        public isGamePlay = false;

        /** 背景色 */
        public backColor: string = Colors.DeepDarkGray;

        constructor() {
            super();
            this.init();
        }

        /** 初期化 */
        public init() {
            this.statusName = ["段位","","","設問"];
            this.status = [1,0,0,1];

            this.cellReset(6);
        }
        
        /** セル選択
         * @param p : 選択桁位置
         */
        public pointSelect(p : Point) : void {
            if (this.gameStep == 2) {
                let x = p.x;
                let y = p.y;
                let c = this.codeGetter(x,y);
                if (c == 20) {
                    this.nowCell = this.codeLoop(this.nowCell,1);
                    this.codeSetter(x,y,this.nowCell);
                    this.selectCellSetter(x,y);
                    return;
                }
            }        
            if (this.gameStep == 5) {
                let c = this.codeGetter(p.x,p.y);
                if (c == 90) {
                    if (this.isGameClear) {
                        this.gameStep = 1;
                        if (this.gameSize < 6) {
                            this.gameSize++;
                        }
                        this.gameStep = 1;
                        return;
                    }
                    if (this.isGameOver) {
                        this.gameStep = 1;
                        return;
                    }
                }
            }
        }

        /**
         * 表示作成
         */
        public displayMaker() : void {
            switch(this.gameStep) {
                /** ゲームタイトル */
                case 0:
                    {
                        this.cellReset(8);
                        this.gameStep = 1;
                        this.gameSize = 2;
                        this.isGameClear = false;
                        this.isGameOver = false;
                        this.isGamePlay = false;
                        break
                    }
                /** ゲームスタート */
                case 1:
                    {
                        this.isGameClear = false;
                        this.isGameOver = false;
                        this.isGamePlay = false;
                        this.cellAllPaint(9);
                        this.messages = [];
                        this.messages.push(new Message("士農工商を並べよ",1,0,Colors.White,Colors.Black));
                        this.centerHoleMaker(this.gameSize,10);
                        let p = this.centerHolePoint(this.gameSize);
                        let x0 = p.x + (this.gameSize - 1) * rnd(2);
                        let y0 = p.y + (this.gameSize - 1) * rnd(2);
                        this.nowCell = 11;
                        this.codeSetter(x0,y0,this.nowCell);
                        this.selectCellSetter(x0,y0);
                        this.gameStep = 2;
                        this.isGamePlay = true;
                        break;
                    }
                /** ゲームプレイ */
                case 2:
                    {
                        if (!this.isGamePlay) break;
                        this.checkGame01();
                        if (this.isGameClear) {
                            this.gameStep = 3;
                            break;
                        }
                        if (this.isGameOver) {
                            this.gameStep = 4;
                            break;
                        }  
                        break;
                    }
                /** ゲームクリア 表示*/
                case 3:
                    {                        
                        this.messages = [];
                        this.messages.push(new Message(this.msgWinSelector(),1,0,Colors.White,Colors.Black,true));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** ゲームオーバー 表示*/
                case 4:
                    {
                        this.messages = [];
                        this.messages.push(new Message(this.msgLoseSelector(),1,0,Colors.Black,Colors.Red,false));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** 確認待ち */
                case 5:
                    {
                        break;
                    }
                default:
                    {
                        break;
                    }   
            }
        }

        /** okボタン設定 */
        private okButtonSetter() : void {
            let center = Math.floor(this.cellCount / 2);
            this.codeSetter(center,this.cellCount - 1,90);
        }

        /** 選択箇所を作成（01専用）
         * @param x : 横位置
         * @param y : 縦位置
         */        
        private selectCellSetter(x : number, y : number) : void {
            // 初期化
            for(let y0 = 0; y0 < this.cellCount; y0++) {
                for(let x0 = 0; x0 < this.cellCount; x0++) {
                    let c = this.codeGetter(x0,y0);
                    if (c == 20) {
                        this.codeSetter(x0,y0,10);
                    }
                }
            }
            // 設定
            for(let d = 0; d < 4; d++) {
                let xx = x + Direction4s[d].x;
                let yy = y + Direction4s[d].y;
                if (xx < 0 || xx >= this.cellCount) continue;
                if (yy < 0 || yy >= this.cellCount) continue;
                let c = this.codeGetter(xx,yy);
                if (c == 10) {
                    this.codeSetter(xx,yy,20);
                }
            }
        }

        /** ゲーム終了判定 */
        private checkGame01() : void {
            if (this.gameStep != 2) return;

            /** 残りのセルを数える */
            /** 選択肢の数 */
            let count20 = 0;
            /** 空きセルの数 */
            let count10 = 0;
            /** カウント */
            for(let y0 = 0; y0 < this.cellCount; y0++) {
                for(let x0 = 0; x0 < this.cellCount; x0++) {
                    let c = this.codeGetter(x0,y0);
                    if (c == 20) {
                        count20++;
                    }
                    if (c == 10) {
                        count10++;
                    }
                }
            }
            /** 選択肢がなく、全てのセルが埋まっているなら、ゲームクリアー */
            if (count20 == 0 && count10 == 0) {
                this.isGamePlay = false;
                this.isGameClear = true;
            }
            /** 選択肢がなく、空きセルが残っているなら、ゲームオーバー */
            if (count20 == 0 && count10 > 0) {
                this.isGamePlay = false;
                this.isGameOver = true;
            }

        }
    }
}