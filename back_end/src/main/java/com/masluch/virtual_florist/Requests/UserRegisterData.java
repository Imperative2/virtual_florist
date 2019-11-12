package com.masluch.virtual_florist.Requests;

public class UserRegisterData
{
	private Integer userId;
	private String name;
	private String surname;
	private String email;
	private String password;
	private String phoneNumber;
	
	private String city;
	private String street;
	private String localNumber;
	private String zipCode;
	
	
	public Integer getUserId()
	{
		return userId;
	}
	public void setUserId(Integer userId)
	{
		this.userId = userId;
	}
	public String getName()
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
	public String getSurname()
	{
		return surname;
	}
	public void setSurname(String surname)
	{
		this.surname = surname;
	}
	public String getEmail()
	{
		return email;
	}
	public void setEmail(String email)
	{
		this.email = email;
	}
	public String getPassword()
	{
		return password;
	}
	public void setPassword(String password)
	{
		this.password = password;
	}
	public String getPhoneNumber()
	{
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber)
	{
		this.phoneNumber = phoneNumber;
	}
	public String getCity()
	{
		return city;
	}
	public void setCity(String city)
	{
		this.city = city;
	}
	public String getStreet()
	{
		return street;
	}
	public void setStreet(String street)
	{
		this.street = street;
	}
	public String getLocalNumber()
	{
		return localNumber;
	}
	public void setLocalNumber(String localNumber)
	{
		this.localNumber = localNumber;
	}
	public String getZipCode()
	{
		return zipCode;
	}
	public void setZipCode(String zipCode)
	{
		this.zipCode = zipCode;
	}
	@Override
	public String toString()
	{
		return "UserRegisterData [userId=" + userId + ", name=" + name + ", surname=" + surname + ", email=" + email
				+ ", password=" + password + ", phoneNumber=" + phoneNumber + ", city=" + city + ", street=" + street
				+ ", localNumber=" + localNumber + ", zipCode=" + zipCode + "]";
	}
	
	
	
}
