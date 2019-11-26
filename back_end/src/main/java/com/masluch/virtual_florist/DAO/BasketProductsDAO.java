package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.BasketProducts;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;

public interface BasketProductsDAO
{
	public List<BasketProducts> findAll();
	
	public BasketProducts findById(int basketProductsId);
	
	public List<BasketProducts> findByBasketId(Integer basketId);
	
	public BasketProducts save(BasketProducts basketProducts);
	
	public BasketProducts update(BasketProducts basketProducts);
	
	public void deleteById(Integer basketProductsId);
	

}
