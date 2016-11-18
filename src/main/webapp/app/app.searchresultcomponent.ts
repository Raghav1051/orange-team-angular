
import {
  Component, OnInit, HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SerachPhysicianService } from './search.physician.service';

/**
 * This component is for displaying the results for the search criteria
 */
@Component({
  templateUrl: './app/html/app.component.result.html',
})

export class SearchResult implements OnInit {
  public router: Router;
  public service: SerachPhysicianService;
  public route: ActivatedRoute;
  searchInputs:any;
  listPhysicians: any;
  length:any;
  profile = true;
  location:any;
  enteredLocation:any;

  /**
   * Method to expand the physician profile
   */
  onClick() {
    this.profile = !this.profile;
  }

  constructor(route: ActivatedRoute, router: Router, service: SerachPhysicianService) {
    this.route = route;
    this.router = router;
    this.service = service;
    this.enteredLocation = this.service.getEnteredLocation();
    console.log(this.enteredLocation);
  }

  /**
   * Method to get list of physicians in the array
   */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.listPhysicians = JSON.parse(params['physician']);
      this.length = this.listPhysicians.length;
    });
  }
}
