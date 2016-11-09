"use strict";
/**
 * This class is for search model to take the inputs from the search component
 */
var SearchModel = (function () {
    function SearchModel(location, sex, speciality, name, zipCode) {
        this.location = location;
        this.gender = sex;
        this.speciality = speciality;
        this.name = name;
        this.zip = zipCode;
    }
    return SearchModel;
}());
exports.SearchModel = SearchModel;
//# sourceMappingURL=searchmodel.js.map