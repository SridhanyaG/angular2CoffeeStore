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
var app_storeservice_1 = require("./app.storeservice");
var ListPageComponent = (function () {
    function ListPageComponent(service) {
        this.service = service;
        this.pageTitle = 'Mugs List';
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.imageMargin = 2;
        this.listFilter = '';
    }
    ListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Hiiiii");
        this.service.getMugs().subscribe(function (mugs) { return _this.mugs = mugs; }, function (error) { return _this.errorMessage = error; });
    };
    return ListPageComponent;
}());
ListPageComponent = __decorate([
    core_1.Component({
        selector: 'list-mugs',
        templateUrl: 'app/home/list.component.html',
        styleUrls: ['app/home/list.component.css']
    }),
    __metadata("design:paramtypes", [app_storeservice_1.StoreService])
], ListPageComponent);
exports.ListPageComponent = ListPageComponent;
//# sourceMappingURL=list.component.js.map