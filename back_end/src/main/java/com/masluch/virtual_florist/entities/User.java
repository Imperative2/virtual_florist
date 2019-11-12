package com.masluch.virtual_florist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "orders")
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "surname")
	private String surname;
	
	@Column(name = "email")
	private String email;
	
	@JsonIgnore
	@Column(name = "password")
	private String password;
	
	@Column(name = "role")
	private String role;
	
	@Column(name = "enabled")
	private boolean enabled;
	
	@ManyToOne
	@JoinColumn(name = "adress_id", nullable = true)
	private Adress adress;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "business_client", columnDefinition = "BOOLEAN")
	private boolean businessClient;

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

	public String getRole()
	{
		return role;
	}

	public void setRole(String role)
	{
		this.role = role;
	}

	public boolean isEnabled()
	{
		return enabled;
	}

	public void setEnabled(boolean enabled)
	{
		this.enabled = enabled;
	}

	public Adress getAdress()
	{
		return adress;
	}

	public void setAdress(Adress adress)
	{
		this.adress = adress;
	}

	public String getPhoneNumber()
	{
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber)
	{
		this.phoneNumber = phoneNumber;
	}

	public boolean isBusinessClient()
	{
		return businessClient;
	}

	public void setBusinessClient(boolean businessClient)
	{
		this.businessClient = businessClient;
	}

	@Override
	public String toString()
	{
		return "User [userId=" + userId + ", name=" + name + ", surname=" + surname + ", email=" + email + ", password="
				+ password + ", enabled=" + enabled + ", adress=" + adress + ", phoneNumber=" + phoneNumber
				+ ", businessClient=" + businessClient + "]";
	}
	
	
}
