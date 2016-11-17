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
@Repository(value = "physicianDao")
public class PhysicianDaoImpl implements PhysicianDao {

	private static final Logger logger = LoggerFactory.getLogger(PhysicianDaoImpl.class);

	@Autowired
	@Qualifier(value = "jdbcTempalate")
	private JdbcTemplate jdbcTemplate;

	/**
	 * @see com.physician.restapi.dao.PhysicianDao#fetchAll(java.lang.String,
	 *      java.lang.String, java.lang.String, java.lang.String)
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Physician> fetchAll(Physician physician) {

		String zip = null;
		List<String> searchList = new LinkedList<String>();
		List<Physician> physicianList = null;
		StringBuilder sb = new StringBuilder();
		sb.append(PHYSICIANS_SQLQUERY);

		if (physician.getZip() != null && !physician.getZip().isEmpty()) {
			sb.append(" and ZIP_CODE=?");
			searchList.add(physician.getZip());
		}
		if (physician.getState() != null && !physician.getState().isEmpty()) {
			sb.append(" and STATE=?");
			searchList.add(physician.getState());
		}
		if (physician.getCity() != null && !physician.getCity().isEmpty()) {
			sb.append(" and CITY=?");
			searchList.add(physician.getCity());
		}
		if (physician.getGender() != null && !physician.getGender().trim().isEmpty()) {
			sb.append(" and GENDER=?");
			searchList.add(physician.getGender());
		}
		if (physician.getSpeciality() != null && !physician.getSpeciality().trim().isEmpty()) {
			sb.append(" and SPECIALTY=?");
			searchList.add(physician.getSpeciality());
		}
		if (physician.getLastName() != null && !physician.getLastName().trim().isEmpty()) {
			sb.append(" and LAST_NAME=?");
			searchList.add(physician.getLastName());
		}

		try {
			physicianList = jdbcTemplate.query(sb.toString(), searchList.toArray(new String[searchList.size()]),
					new BeanPropertyRowMapper(Physician.class));
			logger.info("physician size====>" + physicianList.size());

		} catch (DataAccessException de) {
			logger.error(de.getMessage());
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		return physicianList;
	}
}
