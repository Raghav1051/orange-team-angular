package com.physician.restapi.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.physician.restapi.model.Physician;

@Repository(value="physicianDao")
public class PhysicianDaoImpl implements PhysicianDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	public List<Physician> getPhysicians(String location, String gender, String speciality, String zipCode,
			String lastName) {
		// TODO Auto-generated method stub

		return null;
	}
}

