"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this._defaultColor = 'red';
        this.el = el.nativeElement;
    }
    Object.defineProperty(HighlightDirective.prototype, "defaultColor", {
        set: function (colorName) {
            this._defaultColor = colorName || this._defaultColor;
        },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.onMouseEnter = function () { this.highlight(this.highlightColor || this._defaultColor); };
    HighlightDirective.prototype.onMouseLeave = function () { this.highlight(null); };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HighlightDirective.prototype, "defaultColor", null);
    __decorate([
        core_1.Input('myHighlight'), 
        __metadata('design:type', String)
    ], HighlightDirective.prototype, "highlightColor", void 0);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[myHighlight]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
var HightlightDirective = (function () {
    function HightlightDirective(el) {
        this._defaultColor = 'red';
        this._defaultFontSize = '12';
        this.el = el.nativeElement;
    }
    Object.defineProperty(HightlightDirective.prototype, "defaultColor", {
        set: function (colorName) {
            this._defaultColor = colorName || this._defaultColor;
        },
        enumerable: true,
        configurable: true
    });
    HightlightDirective.prototype.onMouseEnter = function () { this.highlight(this.highlightColor || this._defaultColor); };
    HightlightDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
    };
    Object.defineProperty(HightlightDirective.prototype, "defaultFontSize", {
        set: function (Sizename) {
            this._defaultFontSize = Sizename || this._defaultFontSize;
        },
        enumerable: true,
        configurable: true
    });
    HightlightDirective.prototype.onMouseEnter = function () { this.fontsize(this.myfontsize || this._defaultColor); };
    HightlightDirective.prototype.fontsize = function (size) {
        this.el.style.fontSize = size;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HightlightDirective.prototype, "defaultColor", null);
    __decorate([
        core_1.Input('myHighlight'), 
        __metadata('design:type', String)
    ], HightlightDirective.prototype, "highlightColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], HightlightDirective.prototype, "defaultFontSize", null);
    __decorate([
        core_1.Input('myfontzie'), 
        __metadata('design:type', String)
    ], HightlightDirective.prototype, "myfontsize", void 0);
    return HightlightDirective;
}());
exports.HightlightDirective = HightlightDirective;
//# sourceMappingURL=highlight.directive.js.map