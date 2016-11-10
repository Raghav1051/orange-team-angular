import { Component, Output, EventEmitter } from "@angular/core";
import { SearchModel } from "./searchmodel"
import { Router } from '@angular/router';
import { Physician } from "./physician";
import { SerachPhysicianService } from './search.physician.service';

/**
 * This component is for searching the physicians 
 */
@Component({
  selector: 'search',
  templateUrl: "/app/html/app.component.search.html",
})

export class SearchComponent {
  public model = new SearchModel("", "male", "", "", "");
  location:string;
  advancesearch: boolean = true;

  specialities: string[] = ["PHYSICAL THERAPY", "CHIROPRACTIC", "OCCUPATIONAL THERAPY", "CLINICAL SOCIAL WORKER", "DERMATOLOGY",
                        "PEDIATRIC EYE ASSOCIATES INC", "PODIATRY", "PERIPHERAL VASCULAR DISEASE", "PHYSICAL THERAPY",
                        "DIAGNOSTIC RADIOLOGY", "OPTOMETRY", "NUCLEAR MEDICINE"];

  private router: Router;
  private service: SerachPhysicianService;
  constructor(router: Router, service: SerachPhysicianService) {
    this.router = router;
    this.service = service;
  }

  /**
   * Method to get the inputs from the search
   */
  public onSubmit(): void {
    if (!this.advancesearch) {
      this.model.speciality = this.model.speciality === "" ? null : this.model.speciality.toLowerCase();
      this.model.name = this.model.name === "" ? null : this.model.name.toLowerCase();
    } else {
      this.model.speciality = null;
      this.model.name = null;
    }
    this.model.location = this.model.location === "" ? null : this.model.location.toLowerCase();
    console.log(this.model.gender);
    this.model.zip = this.model.zip === "" ? null : this.model.zip.toLowerCase();
    var result = this.service.getSearchedPhysician(this.model, this.advancesearch);
    let link = ['searchresult', JSON.stringify(result)];
    this.router.navigate(link);
  }

  /**
   * method to handle the advanced search
   */
  public togleAdvanceSearch(event:any, flag: any): void {
    var ele = event.target || event.srcElement || event.currentTarget;
    this.advancesearch = !flag;
    if (this.advancesearch) {
      ele.innerHTML = "Advance Search";
    } else {
      ele.innerHTML = "Show less Search"
    }
  }

  /**
   * method to reset the search criteria
   */
  public reset(): void {
    this.model = new SearchModel(" ", " ", "", "", "");
  }
}
