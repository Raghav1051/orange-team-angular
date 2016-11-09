import {SerachPhysicianService} from "./search.physician.service";
import {SearchModel} from "./searchmodel"

describe('SerachPhysicianService Tests', () => {
    let service:SerachPhysicianService = new SerachPhysicianService();

    it('Should return a list of doctors by last name and gender', () => {

      var searchModel:SearchModel = new SearchModel(null, "MALE", null,"Smith",null);
        var items = service.getSearchedPhysician(searchModel, null);

        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return an empty list of doctors', () => {

      var searchModel:SearchModel = new SearchModel(null,null,null,null,null);
        var items = service.getSearchedPhysician(searchModel, null);

        expect(items.length).toEqual(0);
    });
    it('Should return a list of doctors by last name', () => {

      var searchModel:SearchModel = new SearchModel(null, null, null,"Smith",null);
        var items = service.getSearchedPhysician(searchModel, null);

        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty', () => {

      var searchModel:SearchModel = new SearchModel(null, null,"dermatology",null, null);
        var items = service.getSearchedPhysician(searchModel, null);

        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by specialty and last name', () => {

      var searchModel:SearchModel = new SearchModel(null,null,"dermatology","smith",null);
        var items = service.getSearchedPhysician(searchModel, null);

        expect(items.length).toBeGreaterThan(0);
    });
    it('Should return a list of doctors by gender only', () => {

      var searchModel:SearchModel = new SearchModel(null,"MALE",null,null,null);
        var items = service.getSearchedPhysician(searchModel, null);

        expect(items.length).toBeGreaterThan(0);
    });
});
