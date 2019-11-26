package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;

@Repository
public class BasketDAOImpl implements BasketDAO
{

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Basket> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<Basket> query = session.createQuery("FROM Basket", Basket.class);
		List<Basket> result = query.getResultList();
		return result;
	}

	@Override
	public Basket findById(Integer basketId)
	{
		Session session = entityManager.unwrap(Session.class);
		Basket basket = session.get(Basket.class, basketId);
		return basket;
	}

	@Override
	public Basket findByUserId(Integer userId)
	{
		Session session = entityManager.unwrap(Session.class);
		Query<Basket> query = session.createQuery("FROM Basket b WHERE b.userId=:userId",Basket.class);
		query.setParameter("userId", userId);
		List<Basket> basketsList = query.getResultList();
		if(basketsList.isEmpty())
			return null;
		return basketsList.get(0);
	}

	@Override
	public Basket save(Basket basket)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(basket);	
		return basket;
	}

	@Override
	public Basket update(Basket basket)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(basket);
		return basket;
	}

	@Override
	public void deleteById(Integer basketId)
	{
		Session session = entityManager.unwrap(Session.class);
		Basket basket = session.get(Basket.class, basketId);
		session.delete(basket);

	}

}
