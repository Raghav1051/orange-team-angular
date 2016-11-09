import {SerachPhysicianService} from "./search.physician.service";
import {SearchModel} from "./searchmodel"

describe('SerachPhysicianService Tests', () => {
    let service:SerachPhysicianService = new SerachPhysicianService();

    it('Should fail', () => {
      expect(false).toBeTruthy();
    });
    
    it('Should return a list of doctors by last name', () => {

      var searchModel:SearchModel = new SearchModel("","","","","");
        var items = service.getSearchedPhysician(searchModel, false);

        expect(items).toBeGreaterThan(5);
    });
});
