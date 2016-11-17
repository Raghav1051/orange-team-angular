package com.physician.restapi.controller;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.physician.restapi.model.Physician;
import com.physician.restapi.service.PhysicianCompareService;

/**
 * This class is a RestController class and it will responsible to handle 
 *  RestApi call and it will return the response in the Json format.
 *
 */

@RestController
public class PhysicianCompareRestController {
	
	private static final Logger logger =
			LoggerFactory.getLogger(PhysicianCompareRestController.class);

	/**
	 * @Autowired annotation is used for to inject dependences.
	 */
	@Autowired
	private PhysicianCompareService physicianCompareService;


	/**
	 * ---------Retrieve All Physicians-------
	 * @param location
	 * @param gender
	 * @param speciality
	 * @param lastName
	 * @return
	 */

	@RequestMapping(value="/physicians/", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Physician>> fetchAllPhysicians(@RequestParam(name="location", required = false) String location,@RequestParam(name="gender", required = false) String gender,@RequestParam(name="speciality", required = false) String speciality, @RequestParam(name="lastName", required = false) String lastName){
		Physician physician = new Physician();
		physician.setLocation(location);
		physician.setGender(gender);
		physician.setSpeciality(speciality);
		physician.setLastName(lastName);
		List<Physician> physicians = physicianCompareService.fetchAllPhysicians(physician);
		if(physicians.isEmpty()){
			return new ResponseEntity<List<Physician>>(HttpStatus.NO_CONTENT);
		}else{
			return new ResponseEntity<List<Physician>>(physicians, HttpStatus.OK);
		}
	}

}
