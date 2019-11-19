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
import com.masluch.virtual_florist.entities.Storage;
import com.masluch.virtual_florist.services.StorageService;

@RestController
@RequestMapping("/storage")
@CrossOrigin
public class StorageController
{
	
	@Autowired
	private StorageService storageService;
	
	@GetMapping("/")
	public List<Storage> getAllStorages()
	{
		return storageService.findAll();
	}
	
	@PutMapping("/newStorage")
	public ResponseEntity<Storage> addNewStorage(@RequestBody Storage newStorage,@RequestParam(name = "productId",required = true) String productId )
	{
		System.out.println(newStorage);
		System.out.println(productId);
		return storageService.addNewStorage(newStorage, productId);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Storage> updateProduct(@PathVariable(name= "id") String storageId, @RequestBody Storage storage)
	{
		return storageService.updateStorage(storageId, storage);
	}
	
	@PostMapping("/{id}/changeQuantity")
	public ResponseEntity<Storage> changeQuantity(@PathVariable(name= "id") String storageId, @RequestParam(name = "quantity",required = true) String quantity )
	{
		return storageService.changeQuantity(storageId, quantity);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteStorage(@PathVariable(name= "id") String storageId)
	{
		return storageService.deleteStorage(storageId);
	}
}
