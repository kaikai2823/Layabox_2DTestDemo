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
* 放大镜
*/
var laya;
(function (laya) {
    var Sprite_MagnifyingGlass = /** @class */ (function (_super) {
        __extends(Sprite_MagnifyingGlass, _super);
        function Sprite_MagnifyingGlass() {
            var _this = _super.call(this) || this;
            //缩放值
            _this.scaleValue = 3;
            _this.setup();
            return _this;
        }
        Sprite_MagnifyingGlass.prototype.setup = function () {
            //添加缩放前的背景
            var bg = new Laya.Sprite();
            bg.loadImage("img/bg2.png");
            this.addChild(bg);
            //添加缩放后的背景
            this.bg2 = new Laya.Sprite();
            //加载同一张图片设置缩放
            this.bg2.loadImage("img/bg2.png");
            this.addChild(this.bg2);
            //放大三倍,对应后面的坐标计算
            this.bg2.scale(this.scaleValue, this.scaleValue);
            //创建mask
            this.maskSp = new Laya.Sprite();
            this.maskSp.loadImage("img/mask.png");
            this.maskSp.pivot(50, 50);
            //设置mask，遮罩默认在原来图片上再叠加一层图像，如果遮罩图像小于原来的图像，原图像部分不显示，即只显示重叠部分
            //遮罩会跟随背景一起缩放，包括实际显示的位置
            this.bg2.mask = this.maskSp;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        };
        Sprite_MagnifyingGlass.prototype.onMouseMove = function () {
            //根据当前坐标计算出放大后的坐标，再计算出相对位移
            this.bg2.x = Laya.stage.mouseX - Laya.stage.mouseX * this.scaleValue; //缩放三倍后，计算出相对位移
            this.bg2.y = Laya.stage.mouseY - Laya.stage.mouseY * this.scaleValue;
            //遮罩的位置为鼠标当前位置，但实际显示为背景二缩放后的位置，通过上面的移动将其移到对应位置
            this.maskSp.x = Laya.stage.mouseX;
            this.maskSp.y = Laya.stage.mouseY;
        };
        return Sprite_MagnifyingGlass;
    }(Laya.Sprite));
    laya.Sprite_MagnifyingGlass = Sprite_MagnifyingGlass;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_MagnifyingGlass.js.map