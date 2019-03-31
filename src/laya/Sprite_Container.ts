/**
* 容器的概念 
*/
module laya{
	export class Sprite_Container extends Laya.Sprite{
		//该容器用于装载4张猩猩图片
		private apesCtn:Laya.Sprite;

		constructor(){
			super();
			this.createApes();
		}
		private	createApes():void{
			//距离中心的距离
			var layoutRadius:number = 150;
			//图片放置的角度差值
			var radianUnit:number = Math.PI/2;

			this.apesCtn = new Laya.Sprite();
			this.addChild(this.apesCtn);

			for(var i:number = 0;i<4;i++){
				var ape:Laya.Sprite = new Laya.Sprite();
				//加载图片
				ape.loadImage("img/monkey"+i+".png");
				//设置轴心点坐标,一般设置为重心坐标
				ape.pivot(55,72);
				//以圆排列猩猩图片
				ape.pos(
					Math.cos(radianUnit*i)*layoutRadius,
					Math.sin(radianUnit*i)*layoutRadius);

				this.apesCtn.addChild(ape);
			}
			//居中显示在舞台
			this.apesCtn.pos(Laya.stage.width/2,Laya.stage.height/2);
			//使用定时函数让它旋转
			Laya.timer.frameLoop(1,this,this.animate);
		}
		private animate(e:Event):void{
			this.apesCtn.rotation +=1;
		}
	}
}