/* tslint:disable:no-unused-variable */
import { SearchComponent } from './app.component.search';
import {
  async, ComponentFixture, fakeAsync, inject, TestBed, tick
} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router} from '@angular/router'
import { SerachPhysicianService } from './search.physician.service';

////////  SPECS  /////////////
export class routerStub{
    public navigateByUrl(url: string) { return url; }
}
describe('SearchComponent ', function () {
  let de: DebugElement;
  let comp: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let button:any;
  let service:SerachPhysicianService;
 
  beforeEach(async(() => {
   TestBed.configureTestingModule({
      imports:[ BrowserModule,FormsModule],
      declarations: [ SearchComponent ],
       providers: [
        { provide: Router, useValue: routerStub },
         { provide: SerachPhysicianService, useValue:SerachPhysicianService }]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(SearchComponent);
      comp    = fixture.componentInstance;
      fixture.detectChanges();
      button = fixture.debugElement.queryAll(By.css('button'));
      service = fixture.debugElement.injector.get(SerachPhysicianService);
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
  it('should getPhysicians from the service', () => { console.log(service);expect(service.getPhysicians()).toBeUndefined() });
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
    console.log(comp.advancesearch + "Adv");
     expect(comp.advancesearch).toEqual(false) 
   //fixture.detectChanges();
    click(button[2]);
    fixture.detectChanges();
    console.log(comp.searchName);
     console.log(comp.advancesearch + "   "+comp.searchName);
     expect(comp.advancesearch).toEqual(true) 
     });

      it('Search button click without any location', () =>{
    
    click(button[0]);
     expect(comp.advancesearch).toEqual(false)
      });
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