/**
 * 
 */
package com.phyician.restapi.service;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 * @author JamesB
 *
 */
public class PhysicianCompareServiceTest {
	private PhysicianCompareService test;
	
	/**
	 * @throws java.lang.Exception
	 */
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
		test = new PhysicianCompareService();
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testFindAllPhysicians_AllNull() {
		String location = null;
		String gender = null;
		String specialty = null;
		String zipCode = null;
		String lastName = null;
		List<Physician> list = test.findAllPhysicians(location, gender, speciality, zipCode, lastName);
		assertNotNull(list, "The list should not be null, but was.");
		assertEquals(0, list.size(), "The list should have a size of zero");
	}

}
