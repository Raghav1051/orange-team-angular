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
var physicianlist_1 = require("./physicianlist");
var SerachPhysicianService = (function () {
    function SerachPhysicianService() {
    }
    SerachPhysicianService.prototype.getPhysicians = function () {
        return physicianlist_1.PHYSICIANLIST;
    };
    /**
     * This method is to return physician list for the search inputs given in the search criteria
     */
    SerachPhysicianService.prototype.getSearchedPhysician = function (model, advanceSearch) {
        return this.getPhysicians().filter(function (physician) {
            if (!advanceSearch) {
                if (model.location == null && model.name == null && model.speciality == null) {
                    return physician.gender.toLowerCase() === model.gender;
                }
                if (model.location == null && model.name == null) {
                    return (physician.gender.toLowerCase() === model.gender) && physician.speciality.toLowerCase() === (model.speciality);
                }
                else if (model.location == null && model.speciality == null) {
                    return (physician.gender.toLowerCase() === model.gender.toLowerCase()) && (physician.lastName.toLowerCase().indexOf(model.name.toLowerCase()) !== -1);
                }
                else if (model.name == null && model.speciality == null) {
                    return (physician.gender.toLowerCase() === model.gender) && (physician.state.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.zip.toLowerCase().indexOf(model.location) !== -1);
                }
                else if (model.name == null) {
                    return (physician.gender.toLowerCase() === model.gender) && (physician.state.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.zip.toLowerCase().indexOf(model.location) !== -1) && (physician.speciality.toLowerCase() === (model.speciality));
                }
                else if (model.location == null) {
                    return (physician.gender.toLowerCase() === model.gender) && physician.speciality.toLowerCase() === (model.speciality) && physician.lastName.toLowerCase().indexOf(model.name) !== -1;
                }
                else if (model.speciality == null) {
                    return (physician.gender.toLowerCase() === model.gender) && (physician.lastName.toLowerCase().indexOf(model.name) !== -1) && (physician.state.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.zip.toLowerCase().indexOf(model.location) !== -1);
                }
            }
            else {
                if (model.location === null) {
                    return physician.gender.toLowerCase() === (model.gender);
                }
                return ((physician.gender.toLowerCase() === (model.gender)) && (physician.zip.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.state.toLowerCase().indexOf(model.location) !== -1));
            }
        });
    };
    /**
     * This method is to return the location entered in the search criteria
     */
    SerachPhysicianService.prototype.getEnteredLocation = function () {
        //console.log(this.location);
        return this.location === null ? "" : this.location.toUpperCase();
    };
    SerachPhysicianService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SerachPhysicianService);
    return SerachPhysicianService;
}());
exports.SerachPhysicianService = SerachPhysicianService;
//# sourceMappingURL=search.physician.service.js.map