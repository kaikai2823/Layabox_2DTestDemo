/**
* 绘制多边形 
*/
module laya{
	export class Sprite_DrawPath extends Laya.Sprite{
		constructor(){
			super();
			this.drawPentagram();
		}
		private drawPentagram():void{
			var canvas:Laya.Sprite = new Laya.Sprite();
			this.addChild(canvas);
			//定义数组
			var path:Array<number> = [];
			path.push(0, -130);
            path.push(33, -33);
            path.push(137, -30);
            path.push(55, 32);
            path.push(85, 130);
            path.push(0, 73);
            path.push(-85, 130);
            path.push(-55, 32);
            path.push(-137, -30);
            path.push(-33, -33);

			//绘制多边形
			canvas.graphics.drawPoly(Laya.stage.width/2,Laya.stage.height/2,path,"#ff0000");

		}
	}
}