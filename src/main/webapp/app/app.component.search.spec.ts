/* tslint:disable:no-unused-variable */
import { SearchComponent } from './app.component.search';
import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { By }           from '@angular/platform-browser';
import { DebugElement,Injectable } from '@angular/core';
import { Router} from '@angular/router'
import { NavigationExtras } from '@angular/router';
import { SerachPhysicianService } from './search.physician.service';
import {SearchModel} from './searchmodel'

////////  SPECS  /////////////

export class routerStub{
  // public navigateByUrl(url: string) { return url; }
   public  navigate(commands: any[], extras?: NavigationExtras) { }
}

describe('SearchComponent ', function () {
  let de: DebugElement;
  let comp: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let button:any;
  let service:SerachPhysicianService = new SerachPhysicianService();
  let spynav:any;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
      imports:[ BrowserModule,FormsModule],
      declarations: [ SearchComponent ],
       providers: [
        { provide: Router, useValue: new routerStub },
         { provide: SerachPhysicianService, useValue:service }]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      comp    = fixture.componentInstance;
      fixture.detectChanges();
      button = fixture.debugElement.queryAll(By.css('button'));
      service = fixture.debugElement.injector.get(SerachPhysicianService);
      let router = fixture.debugElement.injector.get(Router);
      spynav = spyOn(router, 'navigate');
      // de = fixture.debugElement.query(By.css('h1'));
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   comp = fixture.componentInstance;
   
  // });
 

  it('should create SearchComponent', () => expect(comp).toBeDefined() );
it(' specialities length should be 12', () => {
console.log(comp.searchName);

expect(comp.specialities.length).toEqual(12)
}
);
it('should create service', () =>{console.log(comp.service); expect(comp.service).toBeDefined() });
 it('should create model', () => expect(comp.model).toBeDefined() );
 it('gender should be male', () => expect(comp.model.gender).toEqual("male"));
  it('button should be 3', () => expect(button.length).toEqual(3) );
  it('should getPhysicians from the service', () => { console.log(service);expect(service.getPhysicians()).toBeDefined() });
  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const h1 = de.nativeElement;
  //   expect(h1.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "Angular"');
  // });
   it('Advance search should be toggle', () =>{
    fixture.detectChanges();
    click(button[2]);
    fixture.detectChanges();
     expect(comp.advancesearch).toEqual(false,"Advance search is clicked") 
   //fixture.detectChanges();
    click(button[2]);
    fixture.detectChanges();
     expect(comp.advancesearch).toEqual(true,"show less search is clicked") 
     });
  it('reset button click', fakeAsync(() =>{
     let locationInput = fixture.debugElement.queryAll(By.css('input'))[1].nativeElement;
        //  console.log(locationInput)
         locationInput.value = "california";
    locationInput.dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    click(button[1])
     fixture.detectChanges();
     //console.log(comp.model);
      expect(comp.model).toEqual(new SearchModel(" ", " ", "", "", ""));
      
      }));
      it('Search button click with gender male and without any location', fakeAsync(() =>{
    click(button[0])
    tick();
      expect(spynav.calls.any()).toBe(true, 'navigate to result componet');
       let navArgs = spynav.calls.first().args[0][1];
    expect(JSON.parse(navArgs).length).toEqual(57,'search result for only male without loaction')
      }));
        it('Search button click with gender female and without any location', fakeAsync(() =>{
         let locationInput = fixture.debugElement.queryAll(By.css('input'))[1].nativeElement;
        //  console.log(locationInput)
         locationInput.checked = true;
    locationInput.dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    click(button[0])
    tick();
      expect(spynav.calls.any()).toBe(true, 'navigate to result componet');
       let navArgs = spynav.calls.first().args[0][1];
    expect(JSON.parse(navArgs).length).toEqual(8,'search result for only female without loaction')
      }));
       it('Search button click with location', fakeAsync(() =>{
         let locationInput = fixture.debugElement.queryAll(By.css('input'))[2].nativeElement;
        //  console.log(locationInput)
         locationInput.value = "california";
    locationInput.dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    click(button[0])
    tick();
      expect(spynav.calls.any()).toBe(true, 'navigate to result componet');
       let navArgs = spynav.calls.first().args[0][1];
    expect(JSON.parse(navArgs).length).toEqual(8,'search result for only male with loaction california')
      }));
      
});
export const ButtonClickEvents = {
   left:  { button: 0 },
   right: { button: 2 }
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
export function newEvent(eventName: string, bubbles = false, cancelable = false) {
  let evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}
