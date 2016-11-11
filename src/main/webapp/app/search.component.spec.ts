import {SearchComponent} from './app.component.search';
import {Specialities,SearchModel} from './app.component.search,ts';
import {TestBed, async} from 'from '@angular/core/testing';

describe('SearchComponent Tests', async() =>{
beforeEach(() => {
  let seearchcomponent: SearchComponent = new SearchComponent();
})


it('should return the length of specialities' ,() =>{
let spec[]: specialities[];
expect(spec[].length).toEqual(12);
expect(spec[]).toEqual(["PHYSICAL THERAPY", "CHIROPRACTIC", "OCCUPATIONAL THERAPY", "CLINICAL SOCIAL WORKER", "DERMATOLOGY","PEDIATRIC EYE ASSOCIATES INC", "PODIATRY", "PERIPHERAL VASCULAR DISEASE", "PHYSICAL THERAPY","DIAGNOSTIC RADIOLOGY", "OPTOMETRY", "NUCLEAR MEDICINE"])
});

//it('should return the results on hitting Submit' ,() =>{
//let advsearch: advancesearch
  //expect(onSubmit().advancesearch)
//}

it('should make all fields null after reset', () =>{
var searchModel:SearchModel = new SearchModel(null,null,null,null,null);
expect(reset.searchModel).toBeNull();
});
});
