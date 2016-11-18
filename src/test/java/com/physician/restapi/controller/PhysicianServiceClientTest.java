package com.physician.restapi.controller;

import static org.junit.Assert.*;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class PhysicianServiceClientTest {
	private static final String USER_AGENT = "Mozilla/5.0";

	private static final String GET_URL = "http://localhost:8080/PhysicianCompare/";
	
	/**
	 * 
	 * @author RoopaP
	 *
	 */

	@Test
	public void test() {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		HttpGet httpGet = new HttpGet(GET_URL);
		httpGet.addHeader("User-Agent", USER_AGENT);
		CloseableHttpResponse httpResponse = null;
		try {
			httpResponse = httpClient.execute(httpGet);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println("GET Response Status:: "
				+ httpResponse.getStatusLine().getStatusCode());

		BufferedReader reader = null;
		try {
			reader = new BufferedReader(new InputStreamReader(
					httpResponse.getEntity().getContent()));
		} catch (UnsupportedOperationException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		String inputLine;
		StringBuffer response = new StringBuffer();

		try {
			while ((inputLine = reader.readLine()) != null) {
				response.append(inputLine);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			reader.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// print result
		System.out.println(response.toString());
		try {
			httpClient.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}

}
