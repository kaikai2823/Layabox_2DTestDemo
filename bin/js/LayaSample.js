var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var Stage = Laya.Stage;
var Texture = Laya.Texture;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(1285, 727, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        //加载资源并执行回调函数
        Laya.loader.load(Consts.resources, Laya.Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        var mainView = new laya.Sprite_Guide();
        Laya.stage.addChild(mainView);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map