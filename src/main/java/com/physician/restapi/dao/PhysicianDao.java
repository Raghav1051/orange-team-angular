package com.physician.restapi.dao;

import java.util.List;

import com.physician.restapi.model.Physician;

public interface PhysicianDao {
	public List<Physician> getPhysicians(String location, String gender, String speciality, String zipCode,
			String lastName);
}
