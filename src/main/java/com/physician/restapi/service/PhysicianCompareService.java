package com.physician.restapi.service;

import java.util.List;

import com.physician.restapi.model.Physician;

public interface PhysicianCompareService {

	public List<Physician> fetchAllPhysicians(Physician physician);
	
}
