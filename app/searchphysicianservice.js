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
        return Promise.resolve(physicianlist_1.PHYSICIANLIST);
    };
    SerachPhysicianService.prototype.getPhysician = function (id) {
        return this.getPhysicians()
            .then(function (Physicians) { return Physicians.find(function (Physician) { return Physician.id === id; }); });
    };
    SerachPhysicianService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SerachPhysicianService);
    return SerachPhysicianService;
}());
exports.SerachPhysicianService = SerachPhysicianService;
