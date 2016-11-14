/* tslint:disable:no-unused-variable */
import { SearchComponent } from './app.component.search';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {SpyLocation, MockLocationStrategy  } from '@angular/common/testing';
import {BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { FormsModule }   from '@angular/forms';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { Component, Compiler}    from '@angular/core';
import { Router, RouterLinkWithHref, RouterLink, RouterLinkActive, RouterOutlet  } from '@angular/router'
import { SerachPhysicianService } from './search.physician.service';

////////  SPECS  /////////////
export class routerStub{
    public navigateByUrl(url: string) { return url; }
}

describe('SearchComponent ', function () {
  let de: DebugElement;
  let comp: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
 
  beforeEach(async(() => {
   TestBed.configureTestingModule({
       imports:[ FormsModule],
      declarations: [ SearchComponent ],
       providers: [
        { provide: Router, useValue: routerStub },
         { provide: SerachPhysicianService, useValue: SerachPhysicianService }]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      comp    = fixture.componentInstance;
      // de = fixture.debugElement.query(By.css('h1'));
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   comp = fixture.componentInstance;
   
  // });

  it('should create SearchComponent', () => expect(comp).toBeDefined() );
it(' specialities length should be 12', () => {
//console.log(comp.specialities.length);
expect(comp.specialities.length).toEqual(12)
}
);
 it('should create model', () => expect(comp.model).toBeDefined() );
 it('gender should be male', () => expect(comp.model.gender).toEqual("male"));
 
  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const h1 = de.nativeElement;
  //   expect(h1.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "Angular"');
  // });
});
