package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.Photo;
import com.masluch.virtual_florist.entities.Product;

@Repository
public class PhotoDAOImpl implements PhotoDAO
{

	
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Photo> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<Photo> query = session.createQuery("FROM Photo", Photo.class);
		List<Photo> result = query.getResultList();
		return result;
	}

	@Override
	public Photo findById(int photoId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Photo photoId)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void update(Photo photo)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int photo)
	{
		// TODO Auto-generated method stub

	}

}
