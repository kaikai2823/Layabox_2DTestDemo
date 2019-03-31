var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* 新手指引
*/
var laya;
(function (laya) {
    var Sprite_Guide = /** @class */ (function (_super) {
        __extends(Sprite_Guide, _super);
        function Sprite_Guide() {
            var _this = _super.call(this) || this;
            _this.guideStep = 0;
            //any 类型的数组，将显示位置，半径，以及资源路径写在一起
            _this.guideSteps = [
                { x: 151, y: 575, radius: 150, tip: "img/help6.png", tipx: 200, tipy: 250 },
                { x: 883, y: 620, radius: 100, tip: "img/help4.png", tipx: 730, tipy: 380 },
                { x: 1128, y: 583, radius: 110, tip: "img/help3.png", tipx: 900, tipy: 300 }
            ];
            _this.init();
            return _this;
        }
        Sprite_Guide.prototype.init = function () {
            //显示背景
            var gameContainer = new Laya.Sprite();
            gameContainer.loadImage("img/crazy_snowball.png");
            this.addChild(gameContainer);
            //引导所在的容器
            this.guideContainer = new Laya.Sprite();
            //设置容器为画布缓存
            this.guideContainer.cacheAs = "bitmap";
            this.addChild(this.guideContainer);
            gameContainer.on("click", this, this.nextStep);
            //绘制遮罩区域，包含透明度，可见游戏背景
            var maskArea = new Laya.Sprite();
            maskArea.alpha = 0.5; //透明度为0.5
            maskArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"); //设为长方形区域
            //放入引导所在容器
            this.guideContainer.addChild(maskArea);
            //绘制一个圆形区域，利用叠加模式，从遮罩区域抠出可交互区
            this.interactionArea = new Laya.Sprite();
            //设置叠加模式
            this.interactionArea.blendMode = "destination-out";
            this.guideContainer.addChild(this.interactionArea);
            //设置可点击区域
            this.hitArea = new Laya.HitArea();
            //默认整个屏幕不可点击
            this.hitArea.unHit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
            this.guideContainer.hitArea = this.hitArea;
            this.guideContainer.mouseEnabled = true;
            //提示容器
            this.tipContainer = new Laya.Sprite();
            this.addChild(this.tipContainer);
            this.nextStep();
        };
        Sprite_Guide.prototype.nextStep = function () {
            if (this.guideStep == this.guideSteps.length) {
                this.removeChild(this.guideContainer);
                this.removeChild(this.tipContainer);
            }
            else {
                var step = this.guideSteps[this.guideStep++];
                //设定可点击区域
                this.hitArea.hit.clear();
                this.hitArea.hit.drawCircle(step.x, step.y, step.readius, "#000000");
                //在相同位置显示交互区域
                this.interactionArea.graphics.clear();
                this.interactionArea.graphics.drawCircle(step.x, step.y, step.radius, "#000000");
                //根据交互的位置显示提示信息
                this.tipContainer.graphics.clear();
                this.tipContainer.loadImage(step.tip); //加载提示图片
                this.tipContainer.pos(step.tipx, step.tipy);
            }
        };
        return Sprite_Guide;
    }(Laya.Sprite));
    laya.Sprite_Guide = Sprite_Guide;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_Guide.js.map