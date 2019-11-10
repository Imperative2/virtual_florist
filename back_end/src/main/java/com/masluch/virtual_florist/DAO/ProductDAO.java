package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.WikiEntry;



public interface  ProductDAO
{
	public List<Product> findAll();
	
	public Product findById(int productId);
	
	public List<Product> findProducts(int numOfProducts);
	
	public Product save(Product product);
	
	public void update(Product product);
	
	public void deleteById(int productId);
	
	public Product findByWikiEntry(WikiEntry wikiEntry);
}
