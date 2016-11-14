"use strict";
var common_1 = require('@angular/common');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var app_module_1 = require('./app.module');
var app_routing_module_1 = require('./app-routing.module');
describe('app-routing.module.ts', function () {
    var fix;
    var instance;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [app_module_1.AppModule],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
        }).compileComponents()
            .then(function () {
            fix = testing_1.TestBed.createComponent(app_routing_module_1.AppRoutingModule);
            instance = fix.componentInstance;
        });
    }));
    it('should instantiate component', function () {
        expect(instance).toEqual(jasmine.any(app_routing_module_1.AppRoutingModule));
    });
    it('should have expected text', function () {
        var el = fix.debugElement.query(platform_browser_1.By.css('header.sub')).nativeElement;
        expect(el.textContent).toMatch("/about");
    });
});
//# sourceMappingURL=app-routing.module.spec.js.map