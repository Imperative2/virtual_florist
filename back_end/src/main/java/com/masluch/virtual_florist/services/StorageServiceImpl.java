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
	@Transactional
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
	@Transactional
	public ResponseEntity<String> deleteStorage(String storageId)
	{
		Integer id;
		try {
			id = Integer.decode(storageId);
		}
		catch(Exception ex) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		Storage storage = storageDAO.findById(id);
		if(storage == null)
			{
				return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
			}
		
		storageDAO.deleteById(storage.getStorageId());
		
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}

	@Override
	@Transactional
	public ResponseEntity<Storage> updateStorage(String storageId, Storage storage)
	{
		Integer id = null;
		try {
			id = Integer.decode(storageId);

		}
		catch(Exception ex) {
			return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
		}
		
		Storage storageToUpdate = storageDAO.findById(id);
		if(storageToUpdate == null)
			{

				return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
			}
		
		storageToUpdate.setEnabled(storage.isEnabled());
		
		storageDAO.update(storageToUpdate);
		
		return new ResponseEntity<Storage>(storageToUpdate, HttpStatus.OK);

				
	}

	@Override
	@Transactional
	public ResponseEntity<Storage> changeQuantity(String storageId, String quantity)
	{
		Integer id = null;
		Integer quan = null;
		try {
			id = Integer.decode(storageId);
			quan = Integer.decode(quantity);

		}
		catch(Exception ex) {
			return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
		}
		
		Storage storageToUpdate = storageDAO.findById(id);
		if(storageToUpdate == null)
			{

				return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
			}
		
		if(quan == null)
			{
				return new ResponseEntity<Storage>(HttpStatus.BAD_REQUEST);
			}
		
		if((storageToUpdate.getQuantity()+quan) < 0)
			{
				storageToUpdate.setQuantity(0);
			}
		else
			{
				storageToUpdate.setQuantity(storageToUpdate.getQuantity()+ quan);
			}
		
		storageDAO.update(storageToUpdate);
		
		return new ResponseEntity<Storage>(storageToUpdate, HttpStatus.OK);

	}

	

}
