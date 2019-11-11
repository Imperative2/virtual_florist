package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.masluch.virtual_florist.entities.Product;

public interface ProductService
{
	public List<Product> findAll();
	
	public Product findById(int productId);
	
	public Product save(Product product);
	
	public void update(Product product);
	
	public ResponseEntity<String> deleteById(int productId);
	
	public ResponseEntity<Product> addNewProduct(Product newProduct);
	
	public ResponseEntity<Product> addNewProductWithWiki(Product newProduct, String wikiEntryId);
}
