package com.physician.restapi.model;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class PhysicianTest {
	Physician test;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		test = new Physician();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testSetLocation_City() {
		String testObj = "Nashville";
		test.setLocation(testObj);
		//assertNotNull(test.getCity());
		//assertEquals(testObj, test.getCity());
	}

	@Test
	public void testSetLocation_CityStateZip() {
		String testObj = "TN Nashville 34543";
		test.setLocation(testObj);
		//assertNotNull(test.getCity());
		//assertNotNull(test.getZip());
		//assertNotNull(test.getState());
		//assertEquals("Nashville", test.getCity());
		//assertEquals("TN", test.getState());
		//assertEquals("34543", test.getZip());
	}
}
