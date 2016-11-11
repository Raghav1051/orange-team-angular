package com.emids.physiciancompare.db;

import java.sql.*;
import com.emids.physiciancompare.model.PhysicianData;
public class H2DbConnector {
	public Connection connectDb() {
		Class.forName("org.h2.Driver");
		try {
			Connection conn = DriverManager.getConnection("jdbc:h2:~/test", "sa", "");
			return conn;
		} catch(Exception e) { return null; }
	}
	public void createTableFromFile(String infile) {
		String s = "CREATE TABLE TEST AS SELECT * FROM CSVREAD('" + infile + "')";
	}
	public void insertPhysicianRecord(PhysicianData data) {
		String s = "INSERT INTO physicians SET(lname, fname, specialty, city, state, zip, gender) " +
				"VALUES(" + data.lastName + ")";
	}
	public void closeConnection(Connection conn) {
		try {
			conn.close();
		} catch(Exception e) { }
	}
}