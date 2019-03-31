/**
* 不同轴心点 
*/
module laya{
	export class Sprite_Pivot extends Laya.Sprite{
		private sp1: Sprite;
        private sp2: Sprite;
		constructor(){
			super();
			this.createApes();
		}
		private createApes(): void {
			var gap:number = 300;

			this.sp1 = new Laya.Sprite();
			this.sp1.loadImage("img/monkey2.png",0,0);

			this.sp1.pos((Laya.stage.width - gap)/2,Laya.stage.height/2);

			this.sp1.pivot(55,72);
			this.addChild(this.sp1);

			//不设置轴心点默认为左上角
            this.sp2 = new Sprite();
            this.sp2.loadImage("img/monkey2.png", 0, 0);
            this.sp2.pos((Laya.stage.width + gap) / 2, Laya.stage.height / 2);
            Laya.stage.addChild(this.sp2);

            Laya.timer.frameLoop(1, this, this.animate);
        }

        private animate(e: Event): void {
            this.sp1.rotation += 2;
            this.sp2.rotation += 2;
        }
	}
}