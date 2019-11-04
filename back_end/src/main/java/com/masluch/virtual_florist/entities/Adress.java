package com.masluch.virtual_florist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="adress")
public class Adress
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "adress_id")
	private int adressId;
	
	@Column(name="city")
	private String city;
	
	@Column(name="street")
	private String street;
	
	@Column(name="local_number")
	private String localNumber;
	
	@Column(name="zip_code")
	private String zipCode;
	
	public Adress()
	{
		
	}

	public int getAdressId()
	{
		return adressId;
	}

	public void setAdressId(int adressId)
	{
		this.adressId = adressId;
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
		return "Adress [adressId=" + adressId + ", city=" + city + ", street=" + street + ", localNumber="
				+ localNumber + ", zipCode=" + zipCode + "]";
	}
	
}
