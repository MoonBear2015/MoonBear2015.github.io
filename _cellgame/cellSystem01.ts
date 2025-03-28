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

        public gameLevel : number = 0;
        public gameSize : number = 2;
        public canFreePotision : boolean = false;
        public haveBlock : boolean = false;
        public blockCount : number = 0;
        public isEndless : boolean = false;
        public nowCell : number = 0;
        public isGameOver : boolean = false;
        public isGameClear : boolean = false;
        public isGamePlay : boolean = false;
        public isPlayStarted : boolean = false;

        /** 背景色 */
        public backColor: string = Colors.DeepDarkGray;

        constructor() {
            super();
            this.init();
        }

        /** 初期化 */
        public init() {
            this.statusName = ["","","",""];
            this.status = [0,0,0,0];

            this.gameLevel = 0;
            this.gameSize = 2;
            this.canFreePotision = false;
            this.cellReset(6);
        }

        /** ゲーム枠の大きさを計算 */
        private gameSizeCalc() : void {
            let s = 2 + this.gameLevel;
            if (this.gameLevel == 0) {
                this.gameSize = 2;
                this.canFreePotision = false;
                this.isEndless = false;
                return;
            }
            if (this.gameLevel > 0 && this.gameLevel < 4) {
                this.gameSize = 3;
                if (this.gameLevel > 1) {
                    this.canFreePotision = true;
                    if (!this.haveBlock) {
                        this.haveBlock = true;
                        this.blockCount = 1;
                    } 
                }
                else
                {
                    this.canFreePotision = false;
                    this.haveBlock = false;
                    this.blockCount = 0;
                }
                return;
            }
            let r = Math.floor(this.gameLevel / 4);
            this.gameSize = 3 + r;
            if (this.gameSize > 5) {
                this.gameSize = 5;
                this.haveBlock = true;
                this.blockCount = 3;
                this.isEndless = true;
                return;
            } else {
                this.isEndless = false;
            }
            let mod = this.gameLevel % 4;
            if (mod == 0 ) {
                this.canFreePotision = false;
                this.haveBlock = false;
                this.blockCount = 0;
            } else {
                if (mod == 1) {
                    this.canFreePotision = true;
                    this.haveBlock = false;
                    this.blockCount = 0;
                } else {
                    this.canFreePotision = true;
                    this.haveBlock = true;
                    this.blockCount = mod - 1;
                }
            }
            return;
        }

        /** メッセージ表示位置 */
        public messagePotision　=　() : number => Math.floor((this.gameSize + 4 - 6) / 2);

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
                    this.isPlayStarted = true;
                    return;
                }
                if (c == 92) {
                    this.gameStep = 1;
                    return;
                }
                if (c == 93) {
                    alert(this.toComment());
                    return;
                }
            }        
            if (this.gameStep == 5) {
                let c = this.codeGetter(p.x,p.y);
                if (c == 90) {
                    if (this.isGameClear) {
                        this.gameStep = 1;
                        this.gameLevel++;
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
                        this.gameSizeCalc();

                        if (this.gameLevel > 0) {
                            this.statusName[3] = "段位";
                            this.status[3] = this.gameLevel;
                        } else {
                            this.statusName[3] = "";
                            this.status[3] = 0;
                        }
                        if (this.isEndless) {
                            this.statusName[0] = "無限";
                            this.status[0] = -1;
                        } else {
                            this.statusName[0] = "";
                            this.status[0] = -1;
                        }
                        this.cellReset(this.gameSize + 4);

                        this.isGameClear = false;
                        this.isGameOver = false;
                        this.isGamePlay = false;
                        this.cellAllPaint(9);
                        this.messages = [];
                        this.messages.push(new Message("士農工商を並べよ",this.messagePotision(),0,Colors.White,Colors.Black));
                        this.centerHoleMaker(this.gameSize,10);
                        let p = this.centerHolePoint(this.gameSize);
                        let x0 = p.x;
                        let y0 = p.y;
                        if (this.haveBlock) {
                            for(let i = 0; i < this.blockCount; i++) {
                                while(true) {
                                    let x = x0 + rnd(this.gameSize - 2) + 1;
                                    let y = y0 + rnd(this.gameSize - 2) + 1;
                                    if (this.codeGetter(x,y) != 10) {
                                        continue;
                                    }
                                    this.codeSetter(x,y,9);
                                    break;
                                }
                            }
                        }
                        if (this.canFreePotision) {
                            while(true) {
                                x0 = p.x + rnd(this.gameSize);
                                y0 = p.y + rnd(this.gameSize);
                                // 空きセルでなければやり直し
                                if (this.codeGetter(x0,y0) != 10) {
                                    continue;
                                }
                                break;
                            }
                        } else {
                            x0 = p.x + (this.gameSize - 1) * rnd(2);
                            y0 = p.y + (this.gameSize - 1) * rnd(2);
                        }
                        this.nowCell = 11;
                        this.codeSetter(x0,y0,this.nowCell);
                        this.selectCellSetter(x0,y0);
                        this.gameStep = 2;
                        this.isGamePlay = true;
                        // 再ボタン消去
                        this.codeSetter(this.cellCount - 1,this.cellCount - 1,9);
                        // 説ボタン設置
                        this.codeSetter(0,this.cellCount - 1,93);
                        break;
                    }
                /** ゲームプレイ */
                case 2:
                    {
                        if (!this.isGamePlay) break;
                        this.messages = [];
                        if (this.isPlayStarted) {
                            // 再ボタン設置
                            this.codeSetter(this.cellCount - 1,this.cellCount - 1,92);
                        }
                        else {
                            this.messages.push(new Message("士農工商を並べよ",this.messagePotision(),0,Colors.White,Colors.Black));
                            // 再ボタン消去
                            this.codeSetter(this.cellCount - 1,this.cellCount - 1,9);
                        }
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
                        // 再ボタン消去
                        this.codeSetter(this.cellCount - 1,this.cellCount - 1,9);
                        this.isPlayStarted = false;
                        
                        this.messages = [];
                        this.messages.push(new Message(this.msgWinSelector(),this.messagePotision(),0,Colors.White,Colors.Black,true));
                        this.okButtonSetter();
                        this.gameStep = 5;
                        break;
                    }
                /** ゲームオーバー 表示*/
                case 4:
                    {
                        // 再ボタン消去
                        this.codeSetter(this.cellCount - 1,this.cellCount - 1,9);
                        this.isPlayStarted = false;

                        this.messages = [];
                        this.messages.push(new Message(this.msgLoseSelector(),this.messagePotision(),0,Colors.Black,Colors.Red,false));
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

        public toComment() : string {
            let result = "";
            result +="★ 士農工商 ★\n";
            result +="士農工商を順に配置し、\n";
            result +="士農工商で盤面を埋めて、\n";
            result +="士農工商の順列を学ぶのだ。\n";
            result +="尚、盤面に整合性は計られていない。\n";
            result +="無理な場合は'再'を選んでやり直せ。\n";
            result +="その場合の罰則は無い。\n";
            return result;
        }
    }
}