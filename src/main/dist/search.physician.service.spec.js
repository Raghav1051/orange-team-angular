"use strict";
var search_physician_service_1 = require("./search.physician.service");
var searchmodel_1 = require("./searchmodel");
describe('SerachPhysicianService Tests', function () {
    var service = new search_physician_service_1.SerachPhysicianService();
    it('Should return a list of doctors by last name and gender', function () {
        var searchModel = new searchmodel_1.SearchModel(null, "MALE", null, "Smith", null);
        var items = service.getSearchedPhysician(searchModel, null);
        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return an empty list of doctors', function () {
        var searchModel = new searchmodel_1.SearchModel(null, null, null, null, null);
        var items = service.getSearchedPhysician(searchModel, null);
        expect(items.length).toEqual(0);
    });
    it('Should return a list of doctors by last name', function () {
        var searchModel = new searchmodel_1.SearchModel(null, null, null, "Smith", null);
        var items = service.getSearchedPhysician(searchModel, null);
        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty', function () {
        var searchModel = new searchmodel_1.SearchModel(null, null, "dermatology", null, null);
        var items = service.getSearchedPhysician(searchModel, null);
        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty and last name', function () {
        var searchModel = new searchmodel_1.SearchModel(null, null, "dermatology", "smith", null);
        var items = service.getSearchedPhysician(searchModel, null);
        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by gender only', function () {
        var searchModel = new searchmodel_1.SearchModel(null, "MALE", null, null, null);
        var items = service.getSearchedPhysician(searchModel, null);
        expect(items.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=search.physician.service.spec.js.map