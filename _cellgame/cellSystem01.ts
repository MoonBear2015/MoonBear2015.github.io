/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub.ts" />
namespace cellgame {
    /** セルゲームシステム ０１： */
    export class CellGameSystem01 extends CellGameSystem00
    implements ICellGameSystem {

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

        // game01 self

        public gameSize = 2;
        
        /** セル選択
         * @param p : 選択桁位置
         */
        public pointSelect(p : Point) : void {
            let code00 = this.codeGetterFromPoint(p);
            let code01 = this.codeCountUp(code00);
            this.codeSetterToPoint(p,code01);
            alert("code = " + code00 + " -> " + code01);
            return;
        }

        /**
         * 表示作成
         */
        public displayMaker() : void {
            switch(this.gameStep) {
                case 0:
                    {
                        this.cellReset(8);
                        this.cellAllPaint(9);
                        this.messages = [];
                        this.messages.push(new Message("士農工商を並べよ",1,0,Colors.White,Colors.Black));
                        this.gameStep = 1;
                        this.gameSize = 2;
                        break
                    }
                case 1:
                    {
                        this.centerHoleMaker(this.gameSize,10);
                        let p = this.centerHolePoint(this.gameSize);
                        let x0 = p.x + (this.gameSize - 1) * rnd(2);
                        let y0 = p.y + (this.gameSize - 1) * rnd(2);
                        this.codeSetter(x0,y0,11);
                        this.selectCellSetter(x0,y0);
                        this.gameStep = 2;
                        break;
                    }
                case 2:
                    {
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
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
    }
}