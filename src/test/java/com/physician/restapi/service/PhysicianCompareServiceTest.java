/**
 * 
 */
package com.physician.restapi.service;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.physician.restapi.model.Physician;

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
		test = new PhysicianCompareServiceImpl();
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
		Physician physician = new Physician();
		List<Physician> list = test.fetchAllPhysicians(physician);
		Assert.assertNotNull("The list should not be null, but was.", list);
		Assert.assertEquals("The list should have a size of zero", 0, list.size());
	}

}
