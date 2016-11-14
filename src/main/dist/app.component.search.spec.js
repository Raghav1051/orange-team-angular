"use strict";
/* tslint:disable:no-unused-variable */
var app_component_search_1 = require('./app.component.search');
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var search_physician_service_1 = require('./search.physician.service');
////////  SPECS  /////////////
var routerStub = (function () {
    function routerStub() {
    }
    routerStub.prototype.navigateByUrl = function (url) { return url; };
    return routerStub;
}());
exports.routerStub = routerStub;
describe('SearchComponent ', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [app_component_search_1.SearchComponent],
            providers: [
                { provide: router_1.Router, useValue: routerStub },
                { provide: search_physician_service_1.SerachPhysicianService, useValue: search_physician_service_1.SerachPhysicianService }]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(app_component_search_1.SearchComponent);
            comp = fixture.componentInstance;
            // de = fixture.debugElement.query(By.css('h1'));
        });
    }));
    // beforeEach(() => {
    //   fixture = TestBed.createComponent(AppComponent);
    //   comp = fixture.componentInstance;
    // });
    it('should create SearchComponent', function () { return expect(comp).toBeDefined(); });
    it(' specialities length should be 12', function () {
        //console.log(comp.specialities.length);
        expect(comp.specialities.length).toEqual(12);
    });
    it('should create model', function () { return expect(comp.model).toBeDefined(); });
    it('gender should be male', function () { return expect(comp.model.gender).toEqual("male"); });
    // it('should have expected <h1> text', () => {
    //   fixture.detectChanges();
    //   const h1 = de.nativeElement;
    //   expect(h1.innerText).toMatch(/angular/i,
    //     '<h1> should say something about "Angular"');
    // });
});
//# sourceMappingURL=app.component.search.spec.js.map