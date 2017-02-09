"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PriceFilterPipe = (function () {
    function PriceFilterPipe() {
    }
    PriceFilterPipe.prototype.transform = function (value, filter) {
        return filter ? value.filter(function (mug) {
            return mug.price < filter;
        }) : value;
    };
    return PriceFilterPipe;
}());
PriceFilterPipe = __decorate([
    core_1.Pipe({
        name: 'priceFilter'
    })
], PriceFilterPipe);
exports.PriceFilterPipe = PriceFilterPipe;
//# sourceMappingURL=priceFilterPipe.js.map