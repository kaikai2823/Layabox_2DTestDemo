/**
* 旋转缩放 
*/
module laya{
	export class Sprite_RoateAndScale extends Laya.Sprite{
		private ape:Laya.Sprite;
		private scaleDelta:number = 0;
		constructor(){
			super();
			this.createApe();
		}
		private createApe():void{
			this.ape = new Laya.Sprite();

			this.ape.loadImage("img/monkey2.png");
			this.addChild(this.ape);
			this.ape.pivot(55,72);
			this.ape.pos(Laya.stage.width/2,Laya.stage.height/2);

			Laya.timer.frameLoop(1,this,this.animate);
		}
		private animate(e:Event):void{
			this.ape.rotation += 2;

			//心跳缩放
			this.scaleDelta += 0.02;
			//根据sin曲线，让他的值在 0 到 1 之间
			var scaleValue:number = Math.abs(Math.sin(this.scaleDelta));
			this.ape.scale(scaleValue,scaleValue);//x和y等比例缩放
		}
	}
}