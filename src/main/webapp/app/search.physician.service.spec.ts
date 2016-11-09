import {SerachPhysicianService} from "./search.physician.service";
import {SearchModel} from "./searchmodel"

describe('SerachPhysicianService Tests', () => {
    let service:SerachPhysicianService = new SerachPhysicianService();

    it('Should return an empty list of doctors', () => {

      var searchModel:SearchModel = new SearchModel("","","","","");
        var items = service.getSearchedPhysician(searchModel, false);

        expect(items).toEqual(0);
    });
    it('Should return a list of doctors by last name', () => {

      var searchModel:SearchModel = new SearchModel("","","","Smith","");
        var items = service.getSearchedPhysician(searchModel, false);

        expect(items).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty', () => {

      var searchModel:SearchModel = new SearchModel("","","dermatology","","");
        var items = service.getSearchedPhysician(searchModel, false);

        expect(items).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty and last name', () => {

      var searchModel:SearchModel = new SearchModel("","","dermatology","smith","");
        var items = service.getSearchedPhysician(searchModel, false);

        expect(items).toBeGreaterThan(0);
    });
});
