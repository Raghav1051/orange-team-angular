import {APP_BASE_HREF} from '@angular/common';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AppModule} from './app.module';
import {AppRoutingModule} from './app-routing.module';

describe('app-routing.module.ts', () => {

  let fix: ComponentFixture<AppRoutingModule>;
  let instance: AppRoutingModule;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents()
      .then(() => {
        fix = TestBed.createComponent(AppRoutingModule);
        instance = fix.componentInstance;
      });
  }));
  it('should instantiate component', () => {
    expect(instance).toEqual(jasmine.any(AppRoutingModule));
  });
  it('should have expected text', () => {
    let el = fix.debugElement.query(By.css('header.sub')).nativeElement;
    expect(el.textContent).toMatch("/about");
  });

});
