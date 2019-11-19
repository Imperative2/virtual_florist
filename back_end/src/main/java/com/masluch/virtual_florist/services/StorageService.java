package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;

public interface StorageService
{
	public List<Storage> findAll();
	
	public Storage findById(int storageId);
	
	public Storage save(Storage storage);
	
	public void update(Storage storage);
	
	public ResponseEntity<String> deleteById(int storageId);
	
	public ResponseEntity<Storage> addNewStorage(Storage newStorage, String productId);
	
	public ResponseEntity<String> deleteProduct(Storage storageId);
	
	public ResponseEntity<Storage> updateProduct(String storageId, Storage storage);

}
