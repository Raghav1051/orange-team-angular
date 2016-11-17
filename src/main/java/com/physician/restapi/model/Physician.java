package com.physician.restapi.model;

public class Physician {
	private String lastName;
	private String firstName;
	private String middleName;
	private String speciality;
	private String gender;
	private String groupPracticeName;
	private String streetAddress;
	private String city;
	private String state;
	private String zip;
	private String phoneNumber;

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName
	 *            the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName
	 *            the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the middleName
	 */
	public String getMiddleName() {
		return middleName;
	}

	/**
	 * @param middleName
	 *            the middleName to set
	 */
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	/**
	 * @return the speciality
	 */
	public String getSpeciality() {
		return speciality;
	}

	/**
	 * @param speciality
	 *            the speciality to set
	 */
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}

	/**
	 * @param gender
	 *            the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}

	/**
	 * @return the groupPracticeName
	 */
	public String getGroupPracticeName() {
		return groupPracticeName;
	}

	/**
	 * @param groupPracticeName
	 *            the groupPracticeName to set
	 */
	public void setGroupPracticeName(String groupPracticeName) {
		this.groupPracticeName = groupPracticeName;
	}

	/**
	 * @return the streetAddress
	 */
	public String getStreetAddress() {
		return streetAddress;
	}

	/**
	 * @param streetAddress
	 *            the streetAddress to set
	 */
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}

	/**
	 * @param city
	 *            the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}

	/**
	 * @return the state
	 */
	public String getState() {
		return state;
	}

	/**
	 * @param state
	 *            the state to set
	 */
	public void setState(String state) {
		this.state = state;
	}

	/**
	 * @return the zip
	 */
	public String getZip() {
		return zip;
	}

	/**
	 * @param zip
	 *            the zip to set
	 */
	public void setZip(String zip) {
		this.zip = zip;
	}

	/**
	 * @return the phoneNumber
	 */
	public String getPhoneNumber() {
		return phoneNumber;
	}

	/**
	 * @param phoneNumber
	 *            the phoneNumber to set
	 */
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public void setLocation(String location) {
		if (location == null || location.trim().length() == 0) {
			return;
		}
		String[] s = location.split(" ");
		for (String m : s) {
			if (m.matches("^[0-9]{5}(?:-[0-9]{4})?$")) {
				zip = m;
			} else if (m.length() == 2) {
				state = m;
			} else {
				city = m;
			}
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Physician [lastName=" + lastName + ", firstName=" + firstName + ", middleName=" + middleName
				+ ", speciality=" + speciality + ", gender=" + gender + ", groupPracticeName=" + groupPracticeName
				+ ", streetAddress=" + streetAddress + ", city=" + city + ", state=" + state + ", zip=" + zip
				+ ", phoneNumber=" + phoneNumber + "]";
	}

}
