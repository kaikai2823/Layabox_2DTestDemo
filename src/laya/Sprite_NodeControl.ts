/**
* 两个节点控制
*/
module laya{
	export class Sprite_NodeControl extends Laya.Sprite{
		private ape1:Laya.Sprite;
		private ape2:Laya.Sprite;

		constructor(){
			super();
			this.createApes();
		}
		private createApes():void{
			this.ape1 = new Laya.Sprite();
			this.ape2 = new Laya.Sprite();
			this.ape1.loadImage("img/monkey2.png");
			this.ape2.loadImage("img/monkey2.png");

			this.ape1.pivot(55,72);
			//this.ape2.pivot(55,72);

			this.ape1.pos(Laya.stage.width/2,Laya.stage.height/2);
			this.ape2.pos(120,0);

			this.addChild(this.ape1);
			this.ape1.addChild(this.ape2);

			Laya.timer.frameLoop(1,this,this.animate);
		}
		private animate(e:Event):void{
			this.ape1.rotation +=2;
			this.ape2.rotation -=4;
		}
	}
}