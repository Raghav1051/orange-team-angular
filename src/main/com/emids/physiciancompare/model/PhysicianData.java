package com.emids.physiciancompare.model;

public class PhysicianData {
	private String lastName;
	private String firstName;
	private Boolean isMale;
	private String NPI;
	private String professionalEnrollmentId;
	private String city;
	private String state;
	private String zipCode;
	private String specialty;

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public Boolean getIsMale() {
		return isMale;
	}

	public void setIsMale(Boolean isMale) {
		this.isMale = isMale;
	}

	public String getNPI() {
		return NPI;
	}

	public void setNPI(String nPI) {
		NPI = nPI;
	}

	public String getProfessionalEnrollmentId() {
		return professionalEnrollmentId;
	}

	public void setProfessionalEnrollmentId(String professionalEnrollmentId) {
		this.professionalEnrollmentId = professionalEnrollmentId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getSpecialty() {
		return specialty;
	}

	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}

}
