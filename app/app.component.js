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
var router_1 = require('@angular/router');
/**
 * This is the root component for the application
 */
var RootComponent = (function () {
    function RootComponent(router) {
        this.router = router;
    }
    /**
     * This method is to route to about component
     */
    RootComponent.prototype.onClickAbout = function () {
        var link = ['about'];
        this.router.navigate(link);
    };
    /**
     * This method is to route to help component
     */
    RootComponent.prototype.onClickHelp = function () {
        var link = ['help'];
        this.router.navigate(link);
    };
    RootComponent = __decorate([
        core_1.Component({
            selector: "rootapp",
            templateUrl: '/app/html/app.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
//# sourceMappingURL=app.component.js.map