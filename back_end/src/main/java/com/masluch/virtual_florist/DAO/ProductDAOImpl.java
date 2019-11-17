package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.WikiEntry;

@Repository
public class ProductDAOImpl implements ProductDAO
{

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Product> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<Product> query = session.createQuery("FROM Product ORDER BY name", Product.class);
		List<Product> result = query.getResultList();
		return result;
	}

	@Override
	public Product findById(int productId)
	{
		Session session = entityManager.unwrap(Session.class);
		Product product = session.get(Product.class, productId);
		return product;
	}
	
	@Override
	public List<Product> findProducts(int numOfProducts)
	{
		Session session = entityManager.unwrap(Session.class);
		Query<Product> query = session.createQuery("FROM Product p LIMIT :numOfProducts",Product.class);
		query.setParameter("numOfProducts", numOfProducts);
		List<Product> productList = query.getResultList();
		return productList;
	}

	@Override
	public Product save(Product product)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(product);	
		return product;
	}

	@Override
	public void update(Product product)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(product);
	}

	@Override
	public void deleteById(int productId)
	{
		Session session = entityManager.unwrap(Session.class);
		Product product = session.get(Product.class, productId);
		session.delete(product);
	}

	@Override
	public Product findByWikiEntry(WikiEntry wikiEntry)
	{
		Session session = entityManager.unwrap(Session.class);
		Query<Product> query = session.createQuery("FROM Product p WHERE p.wikiEntry=:wikiEntry",Product.class);
		query.setParameter("wikiEntry", wikiEntry);
		List<Product> productsList = query.getResultList();
		if(productsList.isEmpty())
			return null;
		return productsList.get(0);
	}


}
