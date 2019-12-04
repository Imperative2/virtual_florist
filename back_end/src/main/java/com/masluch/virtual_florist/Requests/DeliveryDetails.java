package com.masluch.virtual_florist.Requests;

public class DeliveryDetails
{

	private String country;
	private String city;
	private String street;
	private String localNumber;
	private String zipCode;
	public String getCountry()
	{
		return country;
	}
	public void setCountry(String country)
	{
		this.country = country;
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
		return "DeliveryDetails [country=" + country + ", city=" + city + ", street=" + street + ", localNumber="
				+ localNumber + ", zipCode=" + zipCode + "]";
	}
	
	
}
