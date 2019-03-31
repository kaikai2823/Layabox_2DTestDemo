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
* 旋转缩放
*/
var laya;
(function (laya) {
    var Sprite_RoateAndScale = /** @class */ (function (_super) {
        __extends(Sprite_RoateAndScale, _super);
        function Sprite_RoateAndScale() {
            var _this = _super.call(this) || this;
            _this.scaleDelta = 0;
            _this.createApe();
            return _this;
        }
        Sprite_RoateAndScale.prototype.createApe = function () {
            this.ape = new Laya.Sprite();
            this.ape.loadImage("img/monkey2.png");
            this.addChild(this.ape);
            this.ape.pivot(55, 72);
            this.ape.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            Laya.timer.frameLoop(1, this, this.animate);
        };
        Sprite_RoateAndScale.prototype.animate = function (e) {
            this.ape.rotation += 2;
            //心跳缩放
            this.scaleDelta += 0.02;
            //根据sin曲线，让他的值在 0 到 1 之间
            var scaleValue = Math.abs(Math.sin(this.scaleDelta));
            this.ape.scale(scaleValue, scaleValue); //x和y等比例缩放
        };
        return Sprite_RoateAndScale;
    }(Laya.Sprite));
    laya.Sprite_RoateAndScale = Sprite_RoateAndScale;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_RoateAndScale.js.map