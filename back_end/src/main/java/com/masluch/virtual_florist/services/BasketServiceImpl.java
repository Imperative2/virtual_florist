package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.masluch.virtual_florist.DAO.BasketDAO;
import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.Product;

@Service
public class BasketServiceImpl implements BasketService
{

	@Autowired
	private BasketDAO basketDAO;
	
	@Override
	public List<Basket> findAll()
	{
		return basketDAO.findAll();
	}

	@Override
	public Basket findById(int basketId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Basket save(Basket basket)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Basket basket)
	{
		// TODO Auto-generated method stub
		
	}

	@Override
	public ResponseEntity<String> deleteById(int storageId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Basket> getUserBasket(String userId)
	{
		Integer id;
		try {
			id = Integer.decode(userId);
		}
		catch(Exception ex) {
			return new ResponseEntity<Basket>(HttpStatus.BAD_REQUEST);
		}
		
		Basket foundBasket = basketDAO.findByUserId(id);
		if(foundBasket == null) {
			return new ResponseEntity<Basket>(HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<Basket>(foundBasket,HttpStatus.OK);
	}

}
