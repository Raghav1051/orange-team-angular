"use strict";
var search_physician_service_1 = require("./search.physician.service");
var searchmodel_1 = require("./searchmodel");
describe('SerachPhysicianService Tests', function () {
    var service = new search_physician_service_1.SerachPhysicianService();
    it('Should return an empty list of doctors', function () {
        var searchModel = new searchmodel_1.SearchModel("", "", "", "", "");
        var items = service.getSearchedPhysician(searchModel, false);
        expect(items).toEqual(0);
    });
    it('Should return a list of doctors by last name', function () {
        var searchModel = new searchmodel_1.SearchModel("", "", "", "Smith", "");
        var items = service.getSearchedPhysician(searchModel, false);
        expect(items).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty', function () {
        var searchModel = new searchmodel_1.SearchModel("", "", "dermatology", "", "");
        var items = service.getSearchedPhysician(searchModel, false);
        expect(items).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty and last name', function () {
        var searchModel = new searchmodel_1.SearchModel("", "", "dermatology", "smith", "");
        var items = service.getSearchedPhysician(searchModel, false);
        expect(items).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=search.physician.service.spec.js.map