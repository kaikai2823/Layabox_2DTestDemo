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
* 缓存为静态图片
*/
var laya;
(function (laya) {
    var Sprite_Cache = /** @class */ (function (_super) {
        __extends(Sprite_Cache, _super);
        function Sprite_Cache() {
            var _this = _super.call(this) || this;
            _this.setup();
            return _this;
        }
        Sprite_Cache.prototype.setup = function () {
            var textBox = new Laya.Sprite();
            //随机摆放文本
            var text;
            for (var i = 0; i < 1000; i++) {
                text = new Laya.Text();
                text.fontSize = 20;
                text.text = (Math.random() * 100).toFixed(0);
                text.rotation = Math.random() * 360;
                text.color = "#cccccc";
                text.pos(Math.random() * Laya.stage.width, Math.random() * Laya.stage.height);
                textBox.addChild(text);
            }
            //将指定对象缓存为静态图像
            //@bitmap 为缓存的参数
            textBox.cacheAs = "bitmap";
            this.addChild(textBox);
        };
        return Sprite_Cache;
    }(Laya.Sprite));
    laya.Sprite_Cache = Sprite_Cache;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_Cache.js.map