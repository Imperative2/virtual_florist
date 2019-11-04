package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.masluch.virtual_florist.entities.Product;

@Repository
public class ProductDAOImpl implements ProductDAO
{

	@Autowired
	private EntityManager entityManager;

	@Override
	@Transactional
	public List<Product> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<Product> query = session.createQuery("FROM Product", Product.class);
		List<Product> result = query.getResultList();
		return result;
	}

	@Override
	public Product findById(int productId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Product product)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void update(Product product)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int productId)
	{
		// TODO Auto-generated method stub

	}

}
