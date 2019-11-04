package com.masluch.virtual_florist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "surname")
	private String surname;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "enabled")
	private boolean enabled;
	
	@OneToOne()
	@JoinColumn(name = "adress_id", nullable = true)
	private Adress adress;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "buisness_client", columnDefinition = "BOOLEAN")
	private boolean buisnessClient;

	public int getUserId()
	{
		return userId;
	}

	public void setUserId(int userId)
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

	public boolean isBuisnessClient()
	{
		return buisnessClient;
	}

	public void setBuisnessClient(boolean buisnessClient)
	{
		this.buisnessClient = buisnessClient;
	}

	@Override
	public String toString()
	{
		return "User [userId=" + userId + ", name=" + name + ", surname=" + surname + ", email=" + email + ", password="
				+ password + ", enabled=" + enabled + ", adress=" + adress + ", phoneNumber=" + phoneNumber
				+ ", buisnessClient=" + buisnessClient + "]";
	}
	
	
}
