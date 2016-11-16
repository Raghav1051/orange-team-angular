package com.physician.restapi.dao;

import java.util.List;

import com.physician.restapi.constants.ApplicationConstants;
import com.physician.restapi.model.Physician;

public interface PhysicianDao extends ApplicationConstants {

	public List<Physician> fetchAll(String location, String gender,String speciality,String lastName);
}
