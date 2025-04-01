/// <reference path="cellgameLib.ts" />
/// <reference path="cellgameSub01.ts" />
/// <reference path="cellgameSub02.ts" />
/// <reference path="cellgame.ts" />
/// <reference path="icellSystem.ts" />
/// <reference path="cellSystem00.ts" />
namespace cellgame {
    /** セルゲームシステム ０１： */
    export class CellGameSystem01 extends CellGameSystem00
    implements ICellGameSystem {

        // game01 self

        public gameLevel : number = 0;
        public boardSize : number = 2;

        public boardCell : number[] = [];
        // public boardWidth : number = 0;
        public boardHand : IHand[] = [];
        // public boardStep : number = 0;

        public blockPoints : Point[] = [];
        public startPoint : Point = new Point(true);

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
            this.boardSize = 2;
            this.canFreePotision = false;
            this.cells.cellReset(6,0);
        }

        /** メッセージ表示位置 */
        public messagePotision　=　() : number => Math.floor((this.boardSize + 4 - 6) / 2);

        /** セル選択
         * @param p : 選択桁位置
         */
        public pointSelect(p : Point) : void {
            if (this.gameStep == 2) {
                let x = p.x;
                let y = p.y;
                let c = this.cells.cellGetter(x,y);
                if (c == 20) {
                    this.nowCell = this.codeLoop(this.nowCell,1);
                    this.cells.cellSetter(x,y,this.nowCell);
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
                let c = this.cells.cellGetter(p.x,p.y);
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
                        this.boardInit();
                        this.gameStep = 1;
                        break
                    }
                /** ゲームスタート */
                case 1:
                    {
                        this.boardMake();

                        this.statusName = ["","","",""];
                        this.status = [0,0,0,0];
            
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
                        this.cells.cellReset(this.boardSize + 4,0);
                        
                        this.cells.cellAllPaint(9);
                        this.cells.cellCenterHoleMaker(this.boardSize,10);

                        this.boardToCellsSetter();

                        this.gameStep = 2;
                        this.isGamePlay = true;
                        // 再ボタン消去
                        this.cells.cellSetter(this.cellSize - 1,this.boardSize - 1,9);
                        // 説ボタン設置
                        this.cells.cellSetter(0,this.cellSize - 1,93);
                        break;
                    }
                /** ゲームプレイ */
                case 2:
                    {
                        if (!this.isGamePlay) break;
                        this.messages = [];
                        if (this.isPlayStarted) {
                            // 再ボタン設置
                            this.cells.cellSetter(this.cellSize - 1,this.cellSize - 1,92);
                        }
                        else {
                            this.messages.push(new Message("士農工商を並べよ",this.messagePotision(),0,Colors.White,Colors.Black));
                            // 再ボタン消去
                            this.cells.cellSetter(this.cellSize - 1,this.cellSize - 1,9);
                        }
                        this.boardCheck();
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
                        this.cells.cellSetter(this.cellSize - 1,this.cellSize - 1,9);
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
                        this.cells.cellSetter(this.cellSize - 1,this.cellSize - 1,9);
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
            let center = Math.floor(this.cellSize / 2);
            this.cells.cellSetter(center,this.cellSize - 1,90);
        }
        
        /** ゲーム盤からの取得 */
        public boardGetter = (x : number, y : number) : number => {
            let a = addressCalc(x,y,this.boardSize);
            return this.boardCell[a];
        }
        /** ゲーム盤への設定 */
        public boardSetter = (x : number, y : number,code : number) : void => {
            let a = addressCalc(x,y,this.boardSize);
            this.boardCell[a] = code;
        }

        /** ゲーム盤初期化 （レベル等初期値）*/
        public boardInit() : void {
            this.gameLevel = 0;
            this.boardSize = 2;

            this.canFreePotision = false;
            this.haveBlock = false;
            this.blockCount = 0;
            this.isEndless = false;
            this.nowCell = 0;
            this.isGameOver = false;
            this.isGameClear = false;
            this.isGamePlay = false;
            this.isPlayStarted = false;

            this.boardCell = [];
            this.boardHand = [];          
        }

        /** ゲーム枠の大きさを計算 */
        private boardSizeCalc() : void {
            let s = 2 + this.gameLevel;
            if (this.gameLevel == 0) {
                this.boardSize = 2;
                this.canFreePotision = false;
                this.isEndless = false;
                return;
            }
            if (this.gameLevel > 0 && this.gameLevel < 4) {
                this.boardSize = 3;
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
            this.boardSize = 3 + r;
            if (this.boardSize > 5) {
                this.boardSize = 5;
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

        /** ゲーム盤作成　設定済みレベルに応じて作成 */
        public boardMake() : void {
            this.boardSizeCalc();
            this.boardCell = [];
            for(let i = 0; i < this.boardSize * this.boardSize; i++) {
                this.boardCell.push(10);
            }
            // 邪魔ブロック（端には置かない）
            this.blockPoints = [];
            if (this.haveBlock) {
                for(let i = 0; i < this.blockCount; i++) {
                    while(true) {
                        let x = rnd(this.boardSize - 2) + 1;
                        let y = rnd(this.boardSize - 2) + 1;
                        if (this.boardGetter(x,y) != 10) {
                            continue;
                        }
                        let point = new Point(false,x,y);
                        this.blockPoints.push(point);
                        this.boardSetter(x,y,9);
                        break;
                    }
                }
            }
            // スタート位置
            let x0 = 0;
            let y0 = 0;
            if (this.canFreePotision) {
                // 自由位置
                while(true) {
                    x0 = rnd(this.boardSize);
                    y0 = rnd(this.boardSize);
                    // 空きセルでなければやり直し
                    if (this.boardGetter(x0,y0) != 10) {
                        continue;
                    }
                    break;
                }
            } else {
                // 四つ角
                x0 = (this.boardSize - 1) * rnd(2);
                y0 = (this.boardSize - 1) * rnd(2);
            }
            this.startPoint = new Point(false,x0,y0);
            this.nowCell = 11;
            this.boardSetter(x0,y0,this.nowCell);

            this.selectCellSetter(x0,y0);
            
            this.isGameClear = false;
            this.isGameOver = false;
            this.isGamePlay = false;

        }
        
        /** 選択箇所を作成（01専用）
         * @param x : 横位置
         * @param y : 縦位置
         */        
        private selectCellSetter(x : number, y : number) : void {
            // 初期化
            for(let y0 = 0; y0 < this.boardSize; y0++) {
                for(let x0 = 0; x0 < this.boardSize; x0++) {
                    let c = this.boardGetter(x0,y0);
                    if (c == 20) {
                        this.boardSetter(x0,y0,10);
                    }
                }
            }
            // 設定
            for(let d = 0; d < 4; d++) {
                let xx = x + Direction4s[d].x;
                let yy = y + Direction4s[d].y;
                if (xx < 0 || xx >= this.boardSize) continue;
                if (yy < 0 || yy >= this.boardSize) continue;
                let c = this.boardGetter(xx,yy);
                if (c == 10) {
                    this.boardSetter(xx,yy,20);
                }
            }
        }

        /** ゲームリセット そのレベル・ステージなどの初期化 */
        public boardReset() : void {
            // ゲーム盤の初期化
            this.boardCell = [];
            for(let i = 0; i < this.boardSize * this.boardSize; i++) {
                this.boardCell.push(10);
            }
            // ブロックの再現
            for(let i = 0; i < this.blockPoints.length; i++) {
                let p = this.blockPoints[i];
                this.boardSetter(p.x,p.y,9);
            }
            // 初期位置の再現
            let p = this.startPoint;
            this.nowCell = 11;
            this.boardSetter(p.x,p.y,this.nowCell);

            this.selectCellSetter(p.x,p.y);
        }

        /** ボードからセル情報への転送 */
        public boardToCellsSetter() : void {
            for(let i = 0; i < this.boardSize * this.boardSize; i++) {
                this.boardToCellSelectAddressSetter(i);
            }
        }

        /** ボードから指定アドレスのみ転送 */
        public boardToCellSelectAddressSetter(boardAddress : number) : void {
            let point = pointCalc(boardAddress,this.boardSize);
            let center = this.cells.centerHolePoint(this.boardSize);
            let x = center.x + point.x;
            let y = center.y + point.y;   
            this.cells.cellSetter(x,y,this.boardCell[boardAddress]);         
        }

        /** 手の反映 */
        public boardHandPaste (hand : IHand) : void { 
            this.boardCell[hand.address] = hand.code;
        }

        /** 初手から指定の手まで進める */
        public boardHandMove(handNo : number) : void {
            this.boardReset();
            for(let i = 0; i <= handNo; i++) {
                this.boardHandPaste(this.boardHand[i]);
            }
        }

        /** ボードの初期化（０１専用） */
        public board01Clear() : void {
            for(let i = 0; i < this.boardCell.length; i++) {
                if (this.boardCell[i] == 20) this.boardCell[i] = 10;
            }
        }

        /** ゲーム終了判定 */
        private boardCheck() : void {
            if (this.gameStep != 2) return;

            /** 残りのセルを数える */
            /** 選択肢の数 */
            let count20 = 0;
            /** 空きセルの数 */
            let count10 = 0;
            /** カウント */
            for(let y = 0; y < this.boardSize; y++) {
                for(let x = 0; x < this.boardSize; x++) {
                    let c = this.boardGetter(x,y);
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