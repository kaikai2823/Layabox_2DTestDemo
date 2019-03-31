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
* 容器的概念
*/
var laya;
(function (laya) {
    var Sprite_Container = /** @class */ (function (_super) {
        __extends(Sprite_Container, _super);
        function Sprite_Container() {
            var _this = _super.call(this) || this;
            _this.createApes();
            return _this;
        }
        Sprite_Container.prototype.createApes = function () {
            //距离中心的距离
            var layoutRadius = 150;
            //图片放置的角度差值
            var radianUnit = Math.PI / 2;
            this.apesCtn = new Laya.Sprite();
            this.addChild(this.apesCtn);
            for (var i = 0; i < 4; i++) {
                var ape = new Laya.Sprite();
                //加载图片
                ape.loadImage("img/monkey" + i + ".png");
                //设置轴心点坐标,一般设置为重心坐标
                ape.pivot(55, 72);
                //以圆排列猩猩图片
                ape.pos(Math.cos(radianUnit * i) * layoutRadius, Math.sin(radianUnit * i) * layoutRadius);
                this.apesCtn.addChild(ape);
            }
            //居中显示在舞台
            this.apesCtn.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            //使用定时函数让它旋转
            Laya.timer.frameLoop(1, this, this.animate);
        };
        Sprite_Container.prototype.animate = function (e) {
            this.apesCtn.rotation += 1;
        };
        return Sprite_Container;
    }(Laya.Sprite));
    laya.Sprite_Container = Sprite_Container;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_Container.js.map