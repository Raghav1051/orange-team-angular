"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var app_component_search_1 = require('./app.component.search');
var app_component_search_ts_1 = require('./app.component.search,ts');
/core/testing;
';;
describe('SearchComponent Tests', function () __awaiter(this, void 0, void 0, function* () {
    beforeEach(function () {
        var seearchcomponent = new app_component_search_1.SearchComponent();
    });
    it('should return the length of specialities', function () {
        var spec = [], specialities = [];
        expect(spec[].length).toEqual(12);
        expect(spec[]).toEqual(["PHYSICAL THERAPY", "CHIROPRACTIC", "OCCUPATIONAL THERAPY", "CLINICAL SOCIAL WORKER", "DERMATOLOGY", "PEDIATRIC EYE ASSOCIATES INC", "PODIATRY", "PERIPHERAL VASCULAR DISEASE", "PHYSICAL THERAPY", "DIAGNOSTIC RADIOLOGY", "OPTOMETRY", "NUCLEAR MEDICINE"]);
    });
    //it('should return the results on hitting Submit' ,() =>{
    //let advsearch: advancesearch
    //expect(onSubmit().advancesearch)
    //}
    it('should make all fields null after reset', function () {
        var searchModel = new app_component_search_ts_1.SearchModel(null, null, null, null, null);
        expect(reset.searchModel).toBeNull();
    });
}));
//# sourceMappingURL=search.component.spec.js.map