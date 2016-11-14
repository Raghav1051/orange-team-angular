package com.physician.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.physician.restapi.dao.PhysicianDao;
import com.physician.restapi.model.Physician;
import com.physician.restapi.service.PhysicianCompareService;

@RestController
public class PhysicianCompareRestController {

	@Autowired
	@Qualifier(value="physicianCompareService")
	private PhysicianCompareService physicianCompareService;

	
	/**
	 * ---------Retrieve All AllPhysicians-------
	 * @param location
	 * @param gender
	 * @param speciality
	 * @param zipCode
	 * @param lastName
	 * @return
	 */
	
	@RequestMapping(value = "/getPhysicians/", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Physician>> fetchAllPhysicians(@RequestParam(name="location", required = false) String location,@RequestParam(name="gender", required = false) String gender,@RequestParam(name="speciality", required = false) String speciality, @RequestParam(name="zipCode", required = false) String zipCode,@RequestParam(name="lastName", required = false) String lastName) {
		List<Physician> physicians = physicianCompareService.findAllPhysicians(location,gender,speciality,zipCode,lastName);
		if(physicians.isEmpty()){
			return new ResponseEntity<List<Physician>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Physician>>(physicians, HttpStatus.OK);
	}


}
