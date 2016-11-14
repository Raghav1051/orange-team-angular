import { Injectable } from "@angular/core";
import { Physician } from "./physician";
import { PHYSICIANLIST } from "./physicianlist";
import { SearchModel } from "./searchmodel";
@Injectable()

/**
   * This is a service class to return the list of physicians
   */
export class SerachPhysicianService {
  getPhysicians(): Physician[] {
    return PHYSICIANLIST;
  }

  location:any;
  /**
   * This method is to return physician list for the search inputs given in the search criteria
   */
  getSearchedPhysician(model: SearchModel, advanceSearch:boolean): Physician[] {
   this.location=model.location;
    return this.getPhysicians().filter(
      (physician) => {
        if (!advanceSearch) {
          if (model.location == null && model.name == null && model.speciality == null) {
            return physician.gender.toLowerCase() === model.gender;
          }
          if (model.location == null && model.name == null) {
            return (physician.gender.toLowerCase() === model.gender) && physician.speciality.toLowerCase() === (model.speciality);
          } else if (model.location == null && model.speciality == null) {
            return (physician.gender.toLowerCase() === model.gender.toLowerCase()) && (physician.lastName.toLowerCase().indexOf(model.name.toLowerCase()) !== -1);
          }
          else
            if (model.name == null && model.speciality == null) {
              return (physician.gender.toLowerCase() === model.gender) && (physician.state.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.zip.toLowerCase().indexOf(model.location) !== -1)
            } else if (model.name == null) {
              return (physician.gender.toLowerCase() === model.gender) && (physician.state.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.zip.toLowerCase().indexOf(model.location) !== -1) && (physician.speciality.toLowerCase() === (model.speciality))
            }
            else if (model.location == null) {
              return (physician.gender.toLowerCase() === model.gender) && physician.speciality.toLowerCase() === (model.speciality) && physician.lastName.toLowerCase().indexOf(model.name) !== -1;
            } else if (model.speciality == null) {
              return (physician.gender.toLowerCase() === model.gender) && (physician.lastName.toLowerCase().indexOf(model.name) !== -1) && (physician.state.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.zip.toLowerCase().indexOf(model.location) !== -1);
            }
        }
        else {
          if (model.location === null) {
            return physician.gender.toLowerCase() === (model.gender);
          }
          return ((physician.gender.toLowerCase() === (model.gender)) && (physician.zip.toLowerCase().indexOf(model.location) !== -1 || physician.city.toLowerCase().indexOf(model.location) !== -1 || physician.state.toLowerCase().indexOf(model.location) !== -1));
        }


      });
  }

  /**
   * This method is to return the location entered in the search criteria
   */
  getEnteredLocation(): any {
    //console.log(this.location);
    return this.location === null  || this.location === undefined ? "" : this.location.toUpperCase();
  }
}
