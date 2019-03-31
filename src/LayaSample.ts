import WebGL = Laya.WebGL;
import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Texture = Laya.Texture;
import Browser = Laya.Browser;
import Handler = Laya.Handler;

// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(1285,727, WebGL);

		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#232628";
        //加载资源并执行回调函数
        Laya.loader.load(Consts.resources,Laya.Handler.create(this,this.onLoaded));
    }
    private onLoaded():void{
        var mainView:laya.Sprite_Guide = new laya.Sprite_Guide();
        Laya.stage.addChild(mainView);
    }
}
new GameMain();