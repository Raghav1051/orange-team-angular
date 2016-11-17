// imports starting -->
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { Component, DebugElement, Compiler }    from '@angular/core';
import { Router, RouterOutlet, RouterOutletMap, } from '@angular/router';

import {RootComponent} from './app.component';
import { RouterLinkStubDirective }   from './router-stubs';
import { RouterOutletStubComponent } from './router-stubs';

// imports starting <--

// It is a dummy class for the Router to supply as th useValue in the providers
class DummyRouter {
  public navigateByUrl(url: string) { return url; }
}


describe('RootComponent in app.component', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({ // To override the default providers, directives, pipes, modules of the test injector  which are defined in test_injector.js
      declarations: [RootComponent, RouterLinkStubDirective, RouterOutletStubComponent],
      providers: [
        { provide: Router, useValue: DummyRouter }, // Here we have to provide the classes for component dependencies
        { provide: RouterOutlet, useValue: RouterOutlet },
        { provide: RouterOutletMap, useValue: RouterOutletMap },
      ]
    })
      .compileComponents()  // compile template html and css. Compile components with a templateUrl for the test's NgModule. It is necessary to call this function as fetching urls is asynchronous.
      .then(() => {
        fixture = TestBed.createComponent(RootComponent); // It will return the ComponentFixture  object
        component = fixture.componentInstance; // It will create the instance of the component

        fixture.detectChanges();
        linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
        links = linkDes.map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
      });
  }));



  it('should create RootComponent object', () => {
    expect(component).toBeDefined();
  });


  it('should create Router object in RootComponent', () => {
    expect(component.router).toBeDefined();
  });

  it('should display Physician Compare title', () => {
    expect(component.title).toBe('Physician Compare');
  });


  it('component should not be null', () => {
    expect(component).not.toBeNull();
  });

  it('can get Router Links from template home.html', () => {
    expect(links.length).toBe(3, 'should have 3 links');
    expect(links[0].linkParams).toBe('/home', 'first link should go to Home');
  });

  it('can get Router Links from template about.html', () => {
    expect(links.length).toBe(3, 'should have 3 links');
    expect(links[1].linkParams).toBe('/about', 'first link should go to Home');
  });

  it('can get Router Links from template help.html', () => {
    expect(links.length).toBe(3, 'should have 3 links');
    expect(links[2].linkParams).toBe('/help', 'first link should go to Home');
  });

  it('can click About link in template', () => {
    const aboutLinkDe = linkDes[1];
    const aboutLink = links[1];
    expect(aboutLink.navigatedTo).toBeNull('link should not have navigated yet to About');
    aboutLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(aboutLink.navigatedTo).toBe('/about');
  });

  it('can click Help link in template', () => {
    const helpLinkDe = linkDes[2];
    const helpLink = links[2];
    expect(helpLink.navigatedTo).toBeNull('link should not have navigated yet to Help');
    helpLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(helpLink.navigatedTo).toBe('/help');
  });

});
