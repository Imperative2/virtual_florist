package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.DAO.StorageDAO;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;

@Service
public class StorageServiceImpl implements StorageService
{
	@Autowired
	private StorageDAO storageDAO;
	
	@Autowired 
	private ProductDAO productDAO;
	


	@Override
	@Transactional
	public List<Storage> findAll()
	{
		List<Storage> result = storageDAO.findAll();
		return result;
	}

	@Override
	public Storage findById(int storageId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Storage save(Storage storage)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Storage storage)
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
	public ResponseEntity<Storage> addNewStorage(Storage newStorage, String productId)
	{
		Integer prodId;
		try {
			prodId = Integer.decode(productId);
		}
		catch(Exception ex) {
			return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
		}
		
		if(prodId<1)
			{
				return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
			}
		
		Product product = productDAO.findById(prodId);
		
		if(product.isAvailable()== false)
			{
				return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
			}
		
		List<Storage> storagesList = storageDAO.findAll();
		
		for(Storage storage : storagesList)
			{
				if(storage.getProduct().getProductId() == prodId)
					{
						return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
					}
			}
		
		
		if(newStorage.getQuantity()<0)
			{
				return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
			}
		
		
		Storage storage = new Storage();
		storage.setEnabled(newStorage.isEnabled());
		storage.setQuantity(newStorage.getQuantity());
		storage.setProduct(product);
		
		storageDAO.save(storage);
		
		return new ResponseEntity<Storage>(storage, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> deleteProduct(Storage storageId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Storage> updateProduct(String storageId, Storage storage)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
