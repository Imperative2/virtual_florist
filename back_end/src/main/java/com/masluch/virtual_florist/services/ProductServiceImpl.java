package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.entities.Product;

@Service
public class ProductServiceImpl implements ProductService
{

	@Autowired
	private ProductDAO productDAO;
	
	@Override
	public List<Product> findAll()
	{
		return productDAO.findAll();
	}

	@Override
	public Product findById(int productId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product save(Product product)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Product product)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<String> deleteById(int productId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Product> addNewProduct(Product newProduct)
	{
		Product savedProduct = productDAO.save(newProduct);
		ResponseEntity<Product> response = new ResponseEntity<Product>(savedProduct, HttpStatus.OK);
		return response;
	}

}
