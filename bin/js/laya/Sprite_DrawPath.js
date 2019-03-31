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
* 绘制多边形
*/
var laya;
(function (laya) {
    var Sprite_DrawPath = /** @class */ (function (_super) {
        __extends(Sprite_DrawPath, _super);
        function Sprite_DrawPath() {
            var _this = _super.call(this) || this;
            _this.drawPentagram();
            return _this;
        }
        Sprite_DrawPath.prototype.drawPentagram = function () {
            var canvas = new Laya.Sprite();
            this.addChild(canvas);
            //定义数组
            var path = [];
            path.push(0, -130);
            path.push(33, -33);
            path.push(137, -30);
            path.push(55, 32);
            path.push(85, 130);
            path.push(0, 73);
            path.push(-85, 130);
            path.push(-55, 32);
            path.push(-137, -30);
            path.push(-33, -33);
            //绘制多边形
            canvas.graphics.drawPoly(Laya.stage.width / 2, Laya.stage.height / 2, path, "#ff0000");
        };
        return Sprite_DrawPath;
    }(Laya.Sprite));
    laya.Sprite_DrawPath = Sprite_DrawPath;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_DrawPath.js.map