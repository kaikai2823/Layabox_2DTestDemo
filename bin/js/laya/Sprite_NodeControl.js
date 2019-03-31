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
* 两个节点控制
*/
var laya;
(function (laya) {
    var Sprite_NodeControl = /** @class */ (function (_super) {
        __extends(Sprite_NodeControl, _super);
        function Sprite_NodeControl() {
            var _this = _super.call(this) || this;
            _this.createApes();
            return _this;
        }
        Sprite_NodeControl.prototype.createApes = function () {
            this.ape1 = new Laya.Sprite();
            this.ape2 = new Laya.Sprite();
            this.ape1.loadImage("img/monkey2.png");
            this.ape2.loadImage("img/monkey2.png");
            this.ape1.pivot(55, 72);
            //this.ape2.pivot(55,72);
            this.ape1.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            this.ape2.pos(120, 0);
            this.addChild(this.ape1);
            this.ape1.addChild(this.ape2);
            Laya.timer.frameLoop(1, this, this.animate);
        };
        Sprite_NodeControl.prototype.animate = function (e) {
            this.ape1.rotation += 2;
            this.ape2.rotation -= 4;
        };
        return Sprite_NodeControl;
    }(Laya.Sprite));
    laya.Sprite_NodeControl = Sprite_NodeControl;
})(laya || (laya = {}));
//# sourceMappingURL=Sprite_NodeControl.js.map