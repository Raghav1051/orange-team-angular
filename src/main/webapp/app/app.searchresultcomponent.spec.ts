import {async, TestBed, ComponentFixture, inject, TestComponentRenderer, fakeAsync, tick } from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import { SpyLocation}         from '@angular/common/testing';
import { Location }           from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet, RouterOutletMap, Params } from '@angular/router';
import {Component, OnInit, Injector, HostBinding, trigger, transition, animate, style, state, Injectable, Compiler, NgModule, DebugElement, Type} from '@angular/core';
import {NgModuleFactoryLoader,NgModuleFactory,NgModuleRef } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';
import { By }      from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as r                         from  '@angular/router';
import {  RouterLinkWithHref, Routes } from '@angular/router';

import { Physician } from "./physician";
import { PHYSICIANLIST } from "./physicianlist";
import { SearchModel } from "./searchmodel";
import { SerachPhysicianService } from './search.physician.service';
import {SearchResult} from "./app.searchresultcomponent";
import {RootComponent} from './app.component';
import {SearchComponent} from './app.component.search';

import { RouterLinkStubDirective,RouterOutletStubComponent }   from './router-stubs';

// let page: Page;

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

let component: SearchResult;
let fixture: ComponentFixture<SearchResult>;
let el: HTMLElement;
let service: SerachPhysicianService;
let de: DebugElement;
let buttonDebugElementsArray: DebugElement[];
let links: RouterLinkStubDirective[];
let linkDes: DebugElement[];
let router: Router;
let location: SpyLocation;

let rootComponent: RootComponent;
let rootFixture: ComponentFixture<RootComponent>;
let rootLinks: RouterLinkStubDirective[];
let rootLinkDes: DebugElement[];

describe('SearchResult in app.searchresultcomponent', () => {

  // let searchModel:SearchModel = new SearchModel(location:string,sex:string,speciality:string,name:string,zipCode:string);
  let searchModel: SearchModel = new SearchModel("a", "male", "KINNE", null, null);
  // let searchModel:SearchModel = new SearchModel("IRONDALE","male","KINNE",null,null);

  let serachPhysicianService: SerachPhysicianService = new SerachPhysicianService();
  // serachPhysicianService.location = "IRONDALE";
  let searchData = serachPhysicianService.getSearchedPhysician(searchModel, true);

  // let physician: Physician = new Physician();
  // physician.city = "IRONDALE";

  let activatedRoutestub: ActivatedRouteStub = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Ng2PaginationModule, FormsModule],
      declarations: [SearchResult, RouterLinkStubDirective, RouterOutletStubComponent, SearchComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoutestub },
        // { provide: Router, useValue: RouterTestingModule },
        { provide: Router, useValue: DummyRouter },
        { provide: RouterOutlet, useValue: RouterOutlet },
        { provide: RouterOutletMap, useValue: RouterOutletMap },
        { provide: SerachPhysicianService, useValue: serachPhysicianService },
        { provide: SpyLocation, useValue: SpyLocation },
        { provide: Location, useValue: Location },
        { provide: Injector, useValue: Injector }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchResult);
        component = fixture.componentInstance;

        const injector = fixture.debugElement.injector;
        location = injector.get(Location);

        activatedRoutestub.testParams = { physician: JSON.stringify(searchData) };
        fixture.detectChanges();
        buttonDebugElementsArray = fixture.debugElement.queryAll(By.css('button'));
        console.log("buttonDebugElementsArray " + buttonDebugElementsArray);
      });
  }));

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

  it('need to see at most 10 physicians in a page. (Pagination Testing)', () => {
    let debugElements: any = fixture.debugElement.queryAll(By.css('h4'));
    expect(typeof debugElements.length).toEqual('number');
    expect(debugElements.length).toBeLessThan(11);

  });

  it('view Profile testing (Clickable Action)', () => {
    let debugElements: any = fixture.debugElement.queryAll(By.css('h5'));
    for (var i = 0; i < debugElements.length; i++) {
      let viewProfiles: any = debugElements[i];
      fixture.detectChanges();
      click(viewProfiles);
      fixture.detectChanges();
    }
  });

  it('should navigate to Home with fields emptied, reset()', fakeAsync(() => {
    let component1: SearchComponent;
    let fixture1: ComponentFixture<SearchComponent>;
    let router: Router;
    TestBed.compileComponents();
    fixture1 = TestBed.createComponent(SearchComponent);
    component1 = fixture1.componentInstance;
    fixture1.detectChanges();
  }));
});

// function createComponent() {
//
//
// }

// function advance(): void {
//   tick();
//   fixture.detectChanges();
// }

// class Page {
//   aboutLinkDe: DebugElement;
//   homeLinkDe: DebugElement;
//   helpLinkDe: DebugElement;
//   // recordedEvents: any[] = [];
//
//   // for debugging
//   comp: RootComponent;
//   location: SpyLocation;
//   router: Router;
//   fixture: ComponentFixture<RootComponent>;
//
//   // expectEvents(pairs: any[]) {
//   //   const events = this.recordedEvents;
//   //   expect(events.length).toEqual(pairs.length, 'actual/expected events length mismatch');
//   //   for (let i = 0; i < events.length; ++i) {
//   //     expect((<any>events[i].constructor).name).toBe(pairs[i][0].name, 'unexpected event name');
//   //     expect((<any>events[i]).url).toBe(pairs[i][1], 'unexpected event url');
//   //   }
//   // }
//
//   constructor() {
//     // router.events.forEach(e => this.recordedEvents.push(e));
//     const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
//     this.aboutLinkDe = links[1];
//     this.homeLinkDe = links[0];
//     this.helpLinkDe = links[2];
//
//     // for debugging
//     //   this.comp = component;
//     //   this.fixture = fixture;
//     //   this.router = router;
//   }
// }

// function expectPathToBe(path: string, expectationFailOutput?: any) {
//   expect(location.path()).toEqual(path, expectationFailOutput || 'location.path()');
// }
//
// function expectElementOf(type: Type<any>): any {
//   const el = fixture.debugElement.query(By.directive(type));
//   expect(el).toBeTruthy('expected an element for ' + type.name);
//   return el;
// }


export const ButtonClickEvents = {
  left: { button: 0 },
  //  right: { button: 2 }
};

export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
