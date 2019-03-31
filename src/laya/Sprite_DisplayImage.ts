/**
* 显示图片的两种方法 
*/
module laya{
	export class Sprite_DisplayImage extends Laya.Sprite{
		constructor(){
			super();
			this.showApe();
		}
		private showApe():void{
			//加载图片方法一，通过loadImage函数
			var ape:Laya.Sprite = new Laya.Sprite();
			this.addChild(ape);
			ape.loadImage("img/monkey3.png");

			//加载图片方法二，使用drawTexture
			var t:Laya.Texture = Laya.loader.getRes("img/monkey2.png");//获取指定资源的地址
			var ape2:Laya.Sprite = new Laya.Sprite();
			ape2.graphics.drawTexture(t,0,0);
			this.addChild(ape2);
			ape2.pos(200,0);
		}
	}
}