package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;

public interface BasketDAO
{
	public List<Basket> findAll();
	
	public Basket findById(Integer basketId);
	
	public Basket findByUserId(Integer userId);
	
	public Basket save(Basket basket);
	
	public Basket update(Basket basket);
	
	public void deleteById(Integer basketId);
	

}
