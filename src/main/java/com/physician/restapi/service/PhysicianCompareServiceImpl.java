package com.physician.restapi.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.physician.restapi.dao.PhysicianDao;
import com.physician.restapi.model.Physician;

@Service("physicianCompareService")
@Transactional
public class PhysicianCompareServiceImpl implements PhysicianCompareService{
	@Autowired
	private PhysicianDao physicianDao;
	public List<Physician> findAllPhysicians(String location, String gender, String speciality, String zipCode,
			String name) {
		return physicianDao.getPhysicians(location, gender, speciality, zipCode, lastName);
	}



}
