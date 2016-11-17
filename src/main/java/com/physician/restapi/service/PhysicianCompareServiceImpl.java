package com.physician.restapi.service;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.physician.restapi.dao.PhysicianDao;
import com.physician.restapi.dao.PhysicianDaoImpl;
import com.physician.restapi.model.Physician;

/**
 * 
 * @This class responsible for to get the data from dao layer.
 *
 */

@Service("physicianCompareService")
public class PhysicianCompareServiceImpl implements PhysicianCompareService{
	
	private static final Logger logger =
			LoggerFactory.getLogger(PhysicianCompareServiceImpl.class);

	@Autowired
	private PhysicianDao physicianDao;

	/** 
	 * @see com.physician.restapi.service.PhysicianCompareService#fetchAllPhysicians(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
	 * @return list of Physicians.
	 */

	public List<Physician> fetchAllPhysicians(Physician physician){
		List<Physician> physicians=null;
		if(physicianDao == null) {
			physicianDao = new PhysicianDaoImpl();
		}
		try{
			physicians= physicianDao.fetchAll(physician);
		}catch(Exception ex){
			ex.printStackTrace();
			logger.error(ex.getMessage());
		}
		return physicians;

	}



}
