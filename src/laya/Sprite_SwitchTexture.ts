/**
* 点击更换纹理 
*/
module laya{
	export class Sprite_SwitchTexture extends Laya.Sprite{
		//字符串用小写的string
		private texture1:string = "img/monkey2.png";
		private texture2:string = "img/monkey3.png";
		private flag:boolean = false;

		private ape:Laya.Sprite;
		
		constructor(){
			super();
			this.onAssetsLoaded();
		}
		private onAssetsLoaded():void{
			this.ape = new Laya.Sprite();
			this.addChild(this.ape);
			this.ape.pivot(55,72);
			this.ape.pos(Laya.stage.width/2,Laya.stage.height/2);
			//显示默认纹理
			this.switchTexture();
			//每次点击更换纹理
			this.ape.on("click",this,this.switchTexture);
		}
		private switchTexture():void{
			//flag重新赋值的同时，判断前面这个flag的值作为条件的真值
			var textureUrl:string = (this.flag = !this.flag)? this.texture1 : this.texture2;

			//清理原来的纹理
			this.ape.graphics.clear();
			//根据路径string获取到图片
			var texture:Laya.Texture = Laya.loader.getRes(textureUrl);
			//绘制图片
			this.ape.graphics.drawTexture(texture,0,0);
			//设置交互区域，ape为sprite容器，默认是没有宽高的
			this.ape.size(texture.width,texture.height);
		}
	}
}