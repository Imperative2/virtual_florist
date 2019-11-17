package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;

@Repository
public class StorageDAOImpl implements StorageDAO
{
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Storage> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<Storage> query = session.createQuery("FROM Storage", Storage.class);
		List<Storage> result = query.getResultList();
		return result;
	}

	@Override
	public Storage findById(int storageId)
	{
		Session session = entityManager.unwrap(Session.class);
		Storage storage = session.get(Storage.class, storageId);
		return storage;
	}

	@Override
	public Storage save(Storage storage)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(storage);	
		return storage;
	}

	@Override
	public void update(Storage storage)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(storage);
	}

	@Override
	public void deleteById(int storageId)
	{
		Session session = entityManager.unwrap(Session.class);
		Storage storage = session.get(Storage.class, storageId);
		session.delete(storage);
	}

	@Override
	public Storage findByProduct(Product product)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
