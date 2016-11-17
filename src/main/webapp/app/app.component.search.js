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
var searchmodel_1 = require("./searchmodel");
var router_1 = require('@angular/router');
var search_physician_service_1 = require('./search.physician.service');
/**
 * This component is for searching the physicians
 */
var SearchComponent = (function () {
    function SearchComponent(router, service) {
        this.model = new searchmodel_1.SearchModel("", "male", "", "");
        this.advancesearch = true;
        this.specialities = ["PHYSICAL THERAPY", "CHIROPRACTIC", "OCCUPATIONAL THERAPY", "CLINICAL SOCIAL WORKER", "DERMATOLOGY",
            "PEDIATRIC EYE ASSOCIATES INC", "PODIATRY", "PERIPHERAL VASCULAR DISEASE", "PHYSICAL THERAPY",
            "DIAGNOSTIC RADIOLOGY", "OPTOMETRY", "NUCLEAR MEDICINE"];
        this.router = router;
        this.service = service;
    }
    /**
     * Method to get the inputs from the search
     */
    SearchComponent.prototype.onSubmit = function () {
        if (!this.advancesearch) {
            this.model.speciality = this.model.speciality === "" ? null : this.model.speciality.toLowerCase();
            this.model.name = this.model.name === "" ? null : this.model.name.toLowerCase();
        }
        else {
            this.model.speciality = null;
            this.model.name = null;
        }
        this.model.location = this.model.location === "" ? null : this.model.location.toLowerCase();
        console.log(this.model.gender);
        this.model.zip = this.model.zip === "" ? null : this.model.zip.toLowerCase();
        var result = this.service.getSearchedPhysician(this.model, this.advancesearch);
        var link = ['searchresult', JSON.stringify(result)];
        this.router.navigate(link);
    };
    /**
     * method to handle the advanced search
     */
    SearchComponent.prototype.togleAdvanceSearch = function (event, flag) {
        var ele = event.target || event.srcElement || event.currentTarget;
        this.advancesearch = !flag;
        if (this.advancesearch) {
            ele.innerHTML = "Advance Search";
        }
        else {
            ele.innerHTML = "Show less Search";
        }
    };
    /**
     * method to reset the search criteria
     */
    SearchComponent.prototype.reset = function () {
        this.model = new searchmodel_1.SearchModel("", "", "", "", "");
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: "html/app.component.search.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, search_physician_service_1.SerachPhysicianService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=app.component.search.js.map