"use strict";
var search_physician_service_1 = require("./search.physician.service");
var searchmodel_1 = require("./searchmodel");
describe('SerachPhysicianService Tests', function () {
    var service = new search_physician_service_1.SerachPhysicianService();
    it('Should fail', function () {
        expect(false).toBeTruthy();
    });
    it('Should return a list of doctors by last name', function () {
        var searchModel = new searchmodel_1.SearchModel("", "", "", "", "");
        var items = service.getSearchedPhysician(searchModel, false);
        expect(items).toBeGreaterThan(5);
    });
});
//# sourceMappingURL=search.physician.service.spec.js.map