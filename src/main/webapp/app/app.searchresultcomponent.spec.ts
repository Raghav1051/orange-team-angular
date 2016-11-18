import {async, TestBed, ComponentFixture, inject } from '@angular/core/testing';
// import {
//   expect, it, iit, xit,
//   describe, ddescribe, xdescribe,
//   beforeEach, beforeEachProviders, withProviders,
//   async, inject
// } from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';

import { ActivatedRoute, Router, RouterOutlet, RouterOutletMap, Params } from '@angular/router';
import {Component, OnInit, Injector, HostBinding, trigger, transition, animate, style, state, Injectable, Compiler, NgModule, DebugElement, Type} from '@angular/core';
import {NgModuleFactoryLoader } from '@angular/core';
import {NgModuleFactory  } from '@angular/core';
import {NgModuleRef  } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Physician } from "./physician";
import { PHYSICIANLIST } from "./physicianlist";
import { SearchModel } from "./searchmodel";
import { SerachPhysicianService } from './search.physician.service';
import {SearchResult} from "./app.searchresultcomponent";

class DummyRouter {
  public navigateByUrl(url: string) { return url; }
}

@Injectable()
export class ActivatedRouteStub {
  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}
describe('SearchResult in app.searchresultcomponent', () => {
  let component: SearchResult;
  let fixture: ComponentFixture<SearchResult>;
  let el: HTMLElement;
  let service: SerachPhysicianService;


  // let searchModel:SearchModel = new SearchModel(location:string,sex:string,speciality:string,name:string,zipCode:string);
  let searchModel:SearchModel = new SearchModel("a","male","KINNE",null,null);
// let searchModel:SearchModel = new SearchModel("IRONDALE","male","KINNE",null,null);

  let serachPhysicianService: SerachPhysicianService = new SerachPhysicianService();
  // serachPhysicianService.location = "IRONDALE";
  let searchData = serachPhysicianService.getSearchedPhysician(searchModel,true);

  // let physician: Physician = new Physician();
  // physician.city = "IRONDALE";

  let activatedRoutestub: ActivatedRouteStub = new ActivatedRouteStub();



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Ng2PaginationModule, FormsModule],
      declarations: [SearchResult],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoutestub },
        { provide: Router, useValue: RouterTestingModule },
        { provide: SerachPhysicianService, useValue: serachPhysicianService }
        // { provide: Injector, useValue: Injector }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchResult);
        component = fixture.componentInstance;

        activatedRoutestub.testParams = { physician: JSON.stringify(searchData)};
        // activatedRoutestub.testParams = { physician: JSON.stringify(serachPhysicianService.getPhysicians())};
        // service = component.service;
        fixture.detectChanges();
        // service = fixture.debugElement.injector.get(SerachPhysicianService);
      });
  }));

  // it('should instantiate component',()=>{
  //     async(inject([TestComponentBuilder, ActivatedRoute], (tcb: TestComponentBuilder, ar: ActivatedRoute) => {
  //       // tcb.createAsync(SearchResult).then((fixture) => {
  //       //   expect(fixture.componentInstance instanceof SearchResult).toBe(true, 'should create Route1DetailComponent');
  //       //   console.log(ar);
  //       // }
  //     }));
  // });



      // beforeEach(() => {
      //   TestBed.configureTestingModule({
      //     imports: [Ng2PaginationModule],
      //     // imports: [NgModule, NgModuleFactoryLoader, NgModuleFactory, NgModuleRef, Injector, Ng2PaginationModule],
      //     declarations: [SearchResult],
      //     providers: [
      //       { provide: ActivatedRoute, useValue: ActivatedRoute },
      //       { provide: Router, useValue: Router },
      //       { provide: SerachPhysicianService, useValue: DummySerachPhysicianService }
      //     ]
      //   })
      //     .compileComponents()
      //     .then(() => {
      //       fixture = TestBed.createComponent(SearchResult);
      //       component = fixture.componentInstance;
      //       // fixture.detectChanges();
      //       // tick();
      //       // service = fixture.debugElement.injector.get(SerachPhysicianService);
      //       // spy = spyOn(service, 'getQuote').and.returnValue(Promise.resolve("IRONDALE"));
      //       console.log("-------------------------------------" + service);
      //     });
      // });

      it('should create SearchResult component', () => {
        expect(component).toBeDefined();
      });

      it('should create Router object in SearchResult', () => {
        expect(component.router).toBeDefined();
      });

      it('should create SerachPhysicianService object in SearchResult', () => {
        expect(component.service).toBeDefined();
      });

      it('component should not be null', () => {
        expect(component).not.toBeNull();
      });

      it('objects should not be null', () => {
        expect(component.router).not.toBeNull();
        expect(component.service).not.toBeNull();
      });



    });
