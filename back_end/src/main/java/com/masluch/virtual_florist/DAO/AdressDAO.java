package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.Adress;

public interface AdressDAO
{
	public List<Adress> findAll();
	
	public Adress findById(int adressId);
	
	public Adress findByValues(String country, String city, String street , String localNumber);
	
	public Adress save(Adress adress);
	
	public void update(Adress adress);
	
	public void deleteById(int adressId);
}
