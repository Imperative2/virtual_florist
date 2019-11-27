package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.BasketProducts;
import com.masluch.virtual_florist.entities.Storage;

public interface BasketService
{
	public List<Basket> findAll();
	
	public Basket findById(int basketId);
	
	public Basket save(Basket basket);
	
	public void update(Basket basket);
	
	public ResponseEntity<String> deleteById(int storageId);
	
	public ResponseEntity<Basket> getUserBasket(String userId);
	
	public ResponseEntity<Basket> addProductToBasket(BasketProducts basketProduct, String userId);
	

}
