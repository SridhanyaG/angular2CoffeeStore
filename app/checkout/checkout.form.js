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
var core_1 = require("@angular/core");
var checkout_order_1 = require("./checkout.order");
var CheckOutForm = (function () {
    function CheckOutForm() {
        this.order = new checkout_order_1.Order();
    }
    CheckOutForm.prototype.logForm = function (value) {
        console.log(value);
    };
    return CheckOutForm;
}());
CheckOutForm = __decorate([
    core_1.Component({
        selector: 'checkout',
        templateUrl: 'app/checkout/checkout.form.html',
        styles: [
            "\n        .control-label.required::after {\n            content:\"*\";\n            color:red;\n        }\n        .ng-valid[required] {\n        border-left: 5px solid #42A948; /* green */\n        }\n\n        .ng-invalid {\n        border-left: 5px solid #a94442; /* red */\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [])
], CheckOutForm);
exports.CheckOutForm = CheckOutForm;
//# sourceMappingURL=checkout.form.js.map