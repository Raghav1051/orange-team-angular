package com.physician.restapi;


import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

import com.physician.restapi.model.Physician;


public class RestTestClient {
	
	private static final Logger logger =
			LoggerFactory.getLogger(RestTestClient.class);
	
	 public static final String REST_SERVICE_URI = "http://localhost:8087/PhysicianCompare";
	 
	  /* POST */
	    private static void fetchPhysicians() {
	        logger.info("=======Testing Physicians API======");
	        RestTemplate restTemplate = new RestTemplate();
	        Physician physician = new Physician();
	        physician.setGender("M");
	        restTemplate.postForLocation(REST_SERVICE_URI+"/getPhysicians/", physician, Physician.class);
	    }
	    
	public static void main(String[] args) {
		fetchPhysicians();

	}

}
