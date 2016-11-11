package com.physician.restapi.model;

public class Physician {
	private String firstName;
	private String lastName;
	private String middleName;
	private String zip;
	private String speciality;
	private String groupPracticeName;
	private String streetAddress;
	private String city;
	private String state;
	private String contact;
	private String gender;
	
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public String getGroupPracticeName() {
		return groupPracticeName;
	}
	public void setGroupPracticeName(String groupPracticeName) {
		this.groupPracticeName = groupPracticeName;
	}
	public String getStreetAddress() {
		return streetAddress;
	}
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
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
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	@Override
	public String toString() {
		return "Physician [firstName=" + firstName + ", lastName=" + lastName + ", middleName=" + middleName + ", zip="
				+ zip + ", speciality=" + speciality + ", groupPracticeName=" + groupPracticeName + ", streetAddress="
				+ streetAddress + ", city=" + city + ", state=" + state + ", contact=" + contact + ", gender=" + gender
				+ "]";
	}
}
