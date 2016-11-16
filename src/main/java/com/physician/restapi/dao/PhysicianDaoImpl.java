package com.physician.restapi.dao;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.physician.restapi.model.Physician;

/**
 * 
 * @This class responsible for to fetch data from data base.
 * @Repository annotation is used for to store data.
 *
 */
@Repository(value="physicianDao")
public class PhysicianDaoImpl implements PhysicianDao {
	
	private static final Logger logger =
			LoggerFactory.getLogger(PhysicianDaoImpl.class);

	@Autowired
	@Qualifier(value="jdbcTempalate")
	private JdbcTemplate jdbcTemplate;

	/**
	 * @see com.physician.restapi.dao.PhysicianDao#fetchAll(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Physician> fetchAll(String location, String gender,String speciality,String lastName) {
		
		String zip=null;
		List<String> searchList= new LinkedList<String>();
		List<Physician> physicianList=null;
		StringBuilder sb= new StringBuilder();
		sb.append(PHYSICIANS_SQLQUERY);

		boolean isNumeric = location.chars().allMatch( Character::isDigit );
		if(location!=null && !location.trim().isEmpty()){
			if(isNumeric==true){
				zip=location;
				sb.append(" and ZIP_CODE=?");
				searchList.add(zip);
				location="";
			}
			else if(location.length()==2){
				sb.append(" and STATE=?");
				searchList.add(location);
			}else{
				sb.append(" and CITY=?");
				searchList.add(location);
			}		
		}
		if(gender!=null && !gender.trim().isEmpty()){
			sb.append(" and GENDER=?");
			searchList.add(gender);
		}
		if(speciality!=null && !speciality.trim().isEmpty()){
			sb.append(" and SPECIALTY=?");
			searchList.add(speciality);
		}
		if(lastName!=null && !lastName.trim().isEmpty()){
			sb.append(" and LAST_NAME=?");
			searchList.add(lastName);
		}
		
		try{
			physicianList=jdbcTemplate.query(sb.toString(),searchList.toArray(new String[searchList.size()]),new BeanPropertyRowMapper(Physician.class) );
			logger.info("physician size====>"+physicianList.size());
			
		}catch(DataAccessException de){
			logger.error(de.getMessage());
		}catch(Exception e){
			logger.error(e.getMessage());
		}
		return physicianList;
	}
}

