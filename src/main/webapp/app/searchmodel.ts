
/**
 * This class is for search model to take the inputs from the search component
 */
export class SearchModel{
  public location:string;
  public gender:string;
  public speciality:string;
  public name:string;
  public zip:string;
  constructor(location:string,sex:string,speciality:string,name:string,zipCode:string){
    this.location=location;
    this.gender=sex;
    this.speciality=speciality;
    this.name=name;
    this.zip=zipCode;

  }
}
