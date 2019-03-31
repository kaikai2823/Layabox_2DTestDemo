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
* 点击更换纹理
*/
var laya;
(function (laya) {
    var Sprite_SwitchTexture = /** @class */ (function (_super) {
        __extends(Sprite_SwitchTexture, _super);
        function Sprite_SwitchTexture() {
            var _this = _super.call(this) || this;
            //字符串用小写的string
            _this.texture1 = "img/monkey2.png";
            _this.texture2 = "img/monkey3.png";
            _this.flag = false;
            _this.onAssetsLoaded();
            return _this;
        }
        Sprite_SwitchTexture.prototype.onAssetsLoaded = function () {
            this.ape = new Laya.Sprite();
            this.addChild(this.ape);
            this.ape.pivot(55, 72);
            this.ape.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            //显示默认纹理
            this.switchTexture();
            //每次点击更换纹理
            this.ape.on("click", this, this.switchTexture);
        };
        Sprite_SwitchTexture.prototype.switchTexture = function () {
            //flag重新赋值的同时，判断前面这个flag的值作为条件的真值
            var textureUrl = (this.flag = !this.flag) ? this.texture1 : this.texture2;
            //清理原来的纹理
            this.ape.graphics.clear();
            //根据路径string获取到图片
            var texture = Laya.loader.getRes(textureUrl);
            //绘制图片
            this.ape.graphics.drawTexture(texture, 0, 0);
            //设置交互区域，ape为sprite容器，默认是没有宽高的
            this.ape.size(texture.width, texture.height);
        };
        return Sprite_SwitchTexture;
    }(Laya.Sprite));
    laya.Sprite_SwitchTexture = Sprite_SwitchTexture;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_SwitchTexture.js.map