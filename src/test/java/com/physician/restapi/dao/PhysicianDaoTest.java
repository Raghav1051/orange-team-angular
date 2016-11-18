/**
 * 
 */
package com.physician.restapi.dao;

import java.util.List;




import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.physician.restapi.configuration.PhysicianSpringMvcRestApiConfiguration;
import com.physician.restapi.dao.PhysicianDao;
import com.physician.restapi.dao.PhysicianDaoImpl;
import com.physician.restapi.model.Physician;

/**
 * @author RoopaP
 *
 */

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = PhysicianSpringMvcRestApiConfiguration.class)
@WebAppConfiguration
public class PhysicianDaoTest {

	@Autowired
	private PhysicianDao test;
	
	@Test
	public void testFetchAllTest_NullObject() {
		Physician physician = null;
		test.fetchAll(physician);

	}
	
	@Test
	public void testFetchAllTest_EmptyObject() {
		Physician physician = new Physician();
		List<Physician> list = test.fetchAll(physician);
		Assert.assertNotNull(list);
		Assert.assertEquals(176, list.size());
	}
	
	@Test
	public void testFetchAllTest_City() {
		Physician physician = new Physician();
		physician.setCity("ALPINE");
		List<Physician> list = test.fetchAll(physician);
		Assert.assertNotNull(list);
		Assert.assertNotEquals(0, list.size());
	}
	
	@Test
	public void testFetchAllTest_CityGender() {	
		Physician physician = new Physician();
		physician.setCity("HOUSTON");
		physician.setGender("M");
		List<Physician> list = test.fetchAll(physician);
		Assert.assertNotNull(list);
	    Assert.assertNotEquals(0, list.size());
	}
	
	@Test
	public void testFetchAllTest_CityGenderSpeciality() {
		Physician physician=new Physician();
		physician.setCity("HOUSTON");
		physician.setGender("M");
		physician.setSpeciality("CLINICAL SOCIAL WORKER");
		List<Physician> list = test.fetchAll(physician);
		Assert.assertNotNull(list);
	    Assert.assertNotEquals(0, list.size());
	}
	
	@Test
	public void testFetchAllTest_Physicians() {
		
		Physician physician = new Physician();
		physician.setLocation("");
		physician.setGender("M");
		physician.setLastName("");
		physician.setSpeciality("");
		List<Physician> list =test.fetchAll(physician);
		Assert.assertNotNull("The list should not be null, but was.", list);
		//logger.debug(" This is for the testing ====== "+list.size());
	}

	
}
