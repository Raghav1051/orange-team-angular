package com.physician.restapi.controller;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.http.ResponseEntity;

import com.physician.restapi.model.Physician;

public class PhysicianControllerTest {
	private PhysicianCompareRestController test;
	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
		test = new PhysicianCompareRestController();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
		String location = null;
		String gender = null;
		String specialty = null;
		String zipCode = null;
		String lastName = null;
		ResponseEntity<List<Physician>> list = test.fetchAllPhysicians(location, gender, specialty, zipCode, lastName);
		Assert.assertNotNull("The list should not be null, but was.", list);
	}

}
