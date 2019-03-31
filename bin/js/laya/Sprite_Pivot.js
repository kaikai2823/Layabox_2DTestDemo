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
* 不同轴心点
*/
var laya;
(function (laya) {
    var Sprite_Pivot = /** @class */ (function (_super) {
        __extends(Sprite_Pivot, _super);
        function Sprite_Pivot() {
            var _this = _super.call(this) || this;
            _this.createApes();
            return _this;
        }
        Sprite_Pivot.prototype.createApes = function () {
            var gap = 300;
            this.sp1 = new Laya.Sprite();
            this.sp1.loadImage("img/monkey2.png", 0, 0);
            this.sp1.pos((Laya.stage.width - gap) / 2, Laya.stage.height / 2);
            this.sp1.pivot(55, 72);
            this.addChild(this.sp1);
            //不设置轴心点默认为左上角
            this.sp2 = new Sprite();
            this.sp2.loadImage("img/monkey2.png", 0, 0);
            this.sp2.pos((Laya.stage.width + gap) / 2, Laya.stage.height / 2);
            Laya.stage.addChild(this.sp2);
            Laya.timer.frameLoop(1, this, this.animate);
        };
        Sprite_Pivot.prototype.animate = function (e) {
            this.sp1.rotation += 2;
            this.sp2.rotation += 2;
        };
        return Sprite_Pivot;
    }(Laya.Sprite));
    laya.Sprite_Pivot = Sprite_Pivot;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_Pivot.js.map