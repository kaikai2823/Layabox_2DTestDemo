/**
* 缓存为静态图片 
*/
module laya{
	export class Sprite_Cache extends Laya.Sprite{
		constructor(){
			super();
			this.setup();
		}
		setup():void{
			var textBox:Laya.Sprite = new Laya.Sprite();

			//随机摆放文本
			var text:Laya.Text;
			for(var i:number = 0;i<1000;i++){
				text = new Laya.Text();
				text.fontSize = 20;
				text.text = (Math.random()*100).toFixed(0);
				text.rotation = Math.random()*360;
				text.color = "#cccccc";

				text.pos(Math.random()*Laya.stage.width,Math.random()*Laya.stage.height);

				textBox.addChild(text);	
			}
			//将指定对象缓存为静态图像
			//@bitmap 为缓存的参数
			textBox.cacheAs = "bitmap";

			this.addChild(textBox);
		}
	}
}