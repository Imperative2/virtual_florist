package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.StorageDAO;
import com.masluch.virtual_florist.entities.Storage;

@Service
public class StorageServiceImpl implements StorageService
{
	@Autowired
	private StorageDAO storageDAO;
	


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
	public ResponseEntity<Storage> addNewStorage(Storage newStorage)
	{
		// TODO Auto-generated method stub
		return null;
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
