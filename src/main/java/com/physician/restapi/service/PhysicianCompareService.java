package com.physician.restapi.service;

import java.util.List;

import com.physician.restapi.model.Physician;

public interface PhysicianCompareService {

	List<Physician> findAllPhysicians(String location,String gender,String speciality,String zipCode,String lastName); 
	
}
