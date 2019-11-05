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
		Session session = entityManager.unwrap(Session.class);
		Photo photo = session.get(Photo.class, photoId);
		return photo;
	}
	
	@Override
	public List<Photo> findByProductId(int productId)
	{
		Session session = entityManager.unwrap(Session.class);
		Query<Photo> query = session.createQuery("FROM Photo p WHERE p.productId=:productId",Photo.class);
		query.setParameter("productId", productId);
		List<Photo> photoList = query.getResultList();
		return photoList;
	}

	@Override
	public Photo save(Photo photo)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(photo);
		return photo;
	}

	@Override
	public void update(Photo photo)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(photo);
	}

	@Override
	public void deleteById(int photoId)
	{
		Session session = entityManager.unwrap(Session.class);
		Photo photo = session.get(Photo.class, photoId);
		session.delete(photo);
	}



}
