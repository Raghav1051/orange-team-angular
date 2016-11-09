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
var router_1 = require('@angular/router');
var search_physician_service_1 = require('./search.physician.service');
/**
 * This component is for displaying the results for the search criteria
 */
var SearchResult = (function () {
    function SearchResult(route, router, service) {
        this.profile = true;
        this.route = route;
        this.router = router;
        this.service = service;
        this.enteredLocation = this.service.getEnteredLocation();
        console.log(this.enteredLocation);
    }
    /**
     * Method to expand the physician profile
     */
    SearchResult.prototype.onClick = function () {
        this.profile = !this.profile;
    };
    /**
     * Method to get list of physicians in the array
     */
    SearchResult.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.listPhysicians = JSON.parse(params['physician']);
            _this.length = _this.listPhysicians.length;
        });
    };
    SearchResult = __decorate([
        core_1.Component({
            templateUrl: './app/html/app.component.result.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, search_physician_service_1.SerachPhysicianService])
    ], SearchResult);
    return SearchResult;
}());
exports.SearchResult = SearchResult;
//# sourceMappingURL=app.searchresultcomponent.js.map