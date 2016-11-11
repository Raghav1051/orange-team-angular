package com.emids.physiciancompare.db;

import com.emids.physiciancompare.model.PhysicianData;

public class LoadDb {
	public LoadDb(String infile) {
//		H2DbConnector conn = new H2DbConnector();
//		conn.createTableFromFile("C:\\Users\\jamesb\\Downloads\\Physician_Compare\\Physician_Compare_National_Downloadable_File.csv");
		//readProviderFile("C:\\Users\\jamesb\\Downloads\\Physician_Compare\\Physician_Compare_National_Downloadable_File.csv");
	}
	private void readProviderFile(String name) {
		int cnt = 0;
		try (Stream<String> lines = Files.lines(Paths.get(name), Charset.defaultCharset())) {
			lines.forEachOrdered(line -> process(line));
			cnt++;
			if (cnt == 1000) {
				System.out.println(cnt);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private void process(String line) {
		String[] s = line.split(",");
		PhysicianData d = new PhysicianData();
		d.setCity(s[23]);
		d.setFirstName(s[4]);
		d.setIsMale(("M".equals(s[7])));
		d.setLastName(s[3]);
		d.setNPI(s[0]);
		d.setProfessionalEnrollmentId(s[2]);
		d.setState(s[24]);
		d.setZipCode(s[25]);
		d.setSpecialty(s[11]);
	}
}
