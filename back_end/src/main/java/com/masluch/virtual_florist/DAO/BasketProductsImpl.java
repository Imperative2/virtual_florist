package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.BasketProducts;
import com.masluch.virtual_florist.entities.Storage;

@Repository
public class BasketProductsImpl implements BasketProductsDAO
{
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<BasketProducts> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<BasketProducts> query = session.createQuery("FROM BasketProducts", BasketProducts.class);
		List<BasketProducts> result = query.getResultList();
		return result;
	}

	@Override
	public BasketProducts findById(int basketProductsId)
	{
		Session session = entityManager.unwrap(Session.class);
		BasketProducts basketProduct = session.get(BasketProducts.class, basketProductsId);
		return basketProduct;
	}

	@Override
	public List<BasketProducts> findByBasketId(Integer basketId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BasketProducts save(BasketProducts basketProducts)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(basketProducts);	
		return basketProducts;
	}

	@Override
	public BasketProducts update(BasketProducts basketProducts)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(basketProducts);
		return basketProducts;
	}

	@Override
	public void deleteById(Integer basketProductsId)
	{
		Session session = entityManager.unwrap(Session.class);
		BasketProducts basketProducts = session.get(BasketProducts.class, basketProductsId);
		session.delete(basketProducts);

	}

}
