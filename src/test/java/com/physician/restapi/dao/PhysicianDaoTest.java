package com.physician.restapi.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.physician.restapi.model.Physician;

public class PhysicianDaoTest {
	static PhysicianDao test;
	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		test = new PhysicianDaoImpl();
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testFetchAllTest_NullObject() {
		Physician physician = null;
		List<Physician> list = test.fetchAll(physician);
		//Assert.assertNotNull(list);
		//Assert.assertEquals(0, list.size());

	}
	@Test
	public void testFetchAllTest_EmptyObject() {
		Physician physician = new Physician();
		List<Physician> list = test.fetchAll(physician);
		//Assert.assertNotNull(list);
		//Assert.assertEquals(0, list.size());
	}
	@Test
	public void testFetchAllTest_City() {
		Physician physician = new Physician();
		physician.setCity("Nashville");
		List<Physician> list = test.fetchAll(physician);
		//Assert.assertNotNull(list);
		//Assert.assertNotEquals(0, list.size());
	}
	@Test
	public void testFetchAllTest_CityGender() {
		Physician physician = new Physician();
		physician.setCity("Nashville");
		physician.setGender("Male");
		List<Physician> list = test.fetchAll(physician);
		//Assert.assertNotNull(list);
		//Assert.assertNotEquals(0, list.size());
	}

}
