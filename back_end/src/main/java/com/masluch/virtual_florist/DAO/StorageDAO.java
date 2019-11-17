package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;



public interface StorageDAO
{
	public List<Storage> findAll();
	
	public Storage findById(int storageId);
	
	public Storage save(Storage storage);
	
	public void update(Storage storage);
	
	public void deleteById(int storageId);
	
	public Storage findByProduct(Product product);
}
