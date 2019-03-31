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
* 显示图片的两种方法
*/
var laya;
(function (laya) {
    var Sprite_DisplayImage = /** @class */ (function (_super) {
        __extends(Sprite_DisplayImage, _super);
        function Sprite_DisplayImage() {
            var _this = _super.call(this) || this;
            _this.showApe();
            return _this;
        }
        Sprite_DisplayImage.prototype.showApe = function () {
            //加载图片方法一，通过loadImage函数
            var ape = new Laya.Sprite();
            this.addChild(ape);
            ape.loadImage("img/monkey3.png");
            //加载图片方法二，使用drawTexture
            var t = Laya.loader.getRes("img/monkey2.png"); //获取指定资源的地址
            var ape2 = new Laya.Sprite();
            ape2.graphics.drawTexture(t, 0, 0);
            this.addChild(ape2);
            ape2.pos(200, 0);
        };
        return Sprite_DisplayImage;
    }(Laya.Sprite));
    laya.Sprite_DisplayImage = Sprite_DisplayImage;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_DisplayImage.js.map