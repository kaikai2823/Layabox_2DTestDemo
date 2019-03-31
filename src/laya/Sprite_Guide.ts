/**
* 新手指引
* 1.加载背景
* 2.设置半透明遮罩
* 3.利用混合模式，显示出可交互区域
* 4.设置 hitArea,使特定的区域可以被点击
* 5.通过 step 变量和数组，控制显示从顺序
*/
module laya{
	export class Sprite_Guide extends Laya.Sprite{
		private red:Laya.Sprite;
		private guideContainer:Laya.Sprite;
		private tipContainer:Laya.Sprite;

		private guideStep:number = 0;
		//由于 HitArea 没有混合模式，所以单独设置一个鼠标点击区域，跟交互区域的位置大小一样
		public hitArea:Laya.HitArea;//??为什么不能是私有
		private interactionArea:Laya.Sprite;//显示出来的交互区域，设置混合模式
		
		//any 类型的数组，将显示位置，半径，以及资源路径写在一起
		private guideSteps:Array<any> = 
		[
			{ x: 151, y: 575, radius:150, tip:"img/help6.png", tipx:200, tipy:250 },
			{ x: 883, y: 620, radius:100, tip:"img/help4.png", tipx:730, tipy:380 },
			{ x: 1128, y: 583, radius:110, tip:"img/help3.png", tipx:900, tipy:300 }
		];
		constructor(){
			super();
			this.init();
		}
		private init():void{
			//显示背景
			var gameContainer:Laya.Sprite = new Laya.Sprite();
			gameContainer.loadImage("img/crazy_snowball.png");
			this.addChild(gameContainer);

			//引导所在的容器
			this.guideContainer = new Laya.Sprite();
			//设置容器为画布缓存
			this.guideContainer.cacheAs = "bitmap";
			this.addChild(this.guideContainer);
			
			gameContainer.on("click",this,this.nextStep);

			//绘制遮罩区域，包含透明度，可见游戏背景
			var maskArea:Laya.Sprite = new Laya.Sprite();
			maskArea.alpha = 0.5;//透明度为0.5
			maskArea.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000");//设为长方形区域
			//放入引导所在容器
			this.guideContainer.addChild(maskArea);

			//绘制一个圆形区域，利用叠加模式，从遮罩区域抠出可交互区
			this.interactionArea = new Laya.Sprite();
			//设置叠加模式
			this.interactionArea.blendMode = "destination-out";
			this.guideContainer.addChild(this.interactionArea);

			//设置可点击区域
			this.hitArea = new Laya.HitArea();
			//默认整个屏幕不可点击
			this.hitArea.unHit.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#000000");
			
			this.guideContainer.hitArea = this.hitArea;
			this.guideContainer.mouseEnabled = true;
			
			//提示容器
			this.tipContainer = new Laya.Sprite();
			this.addChild(this.tipContainer);

			this.nextStep();

		}
		private nextStep():void{
			if(this.guideStep == this.guideSteps.length){
				this.removeChild(this.guideContainer);
				this.removeChild(this.tipContainer);
			}else{
				var step:any = this.guideSteps[this.guideStep++];
				//设定可点击区域
				this.hitArea.hit.clear();
				this.hitArea.hit.drawCircle(step.x,step.y,step.readius,"#000000");
				//在相同位置显示交互区域
				this.interactionArea.graphics.clear();
				this.interactionArea.graphics.drawCircle(step.x,step.y,step.radius,"#000000");

				//根据交互的位置显示提示信息
				this.tipContainer.graphics.clear();
				this.tipContainer.loadImage(step.tip);//加载提示图片
				this.tipContainer.pos(step.tipx,step.tipy);
			}
		}
	}
}