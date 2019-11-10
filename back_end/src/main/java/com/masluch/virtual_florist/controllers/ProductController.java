package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	private List<Product> getAllProducts()
	{
		return productService.findAll();
	}
	
	@PutMapping(path ="/newProduct")
	private ResponseEntity<Product> addProduct(@RequestBody Product newProduct)
	{
		
		return	productService.addNewProduct(newProduct);

	}
	
	
}
