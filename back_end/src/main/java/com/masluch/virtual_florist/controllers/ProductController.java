package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.services.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController
{
	@Autowired
	private ProductService productService;
	
	@GetMapping(path = "/")
	public List<Product> getAllProducts()
	{
		return productService.findAll();
	}
	
	@PutMapping(path ="/newProduct")
	public ResponseEntity<Product> addProduct(@RequestBody Product newProduct,@RequestParam(name = "wikiEntryId",required = false) String wikiEntryId )
	{
		if(wikiEntryId == null)
			return productService.addNewProduct(newProduct);
		else
			return	productService.addNewProductWithWiki(newProduct, wikiEntryId);

	}
	
	@PostMapping(path="/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable(name= "id") String productId, @RequestBody Product product,@RequestParam(name = "wikiEntryId",required = false) String wikiEntryId )
	{
		System.out.println(wikiEntryId);
		System.out.println(product);
		return productService.updateProduct(productId, product, wikiEntryId);
	}
	
	@DeleteMapping(path="/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable(name = "id") String productId )
	{
		return productService.deleteProduct(productId);
	}
	
	
}
