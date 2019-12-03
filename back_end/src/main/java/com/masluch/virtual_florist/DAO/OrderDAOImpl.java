package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.Order;
import com.masluch.virtual_florist.entities.Product;

@Repository
public class OrderDAOImpl implements OrderDAO
{
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Order> findAll()
	{
		Session session = entityManager.unwrap(Session.class);

		Query<Order> query = session.createQuery("FROM Order", Order.class);
		List<Order> result = query.getResultList();
		return result;
	}

	@Override
	public Order findById(int orderId)
	{
		Session session = entityManager.unwrap(Session.class);
		Order order = session.get(Order.class, orderId);
		return order;
	}



	@Override
	public Order save(Order order)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(order);
		return order;
	}

	@Override
	public void update(Order order)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(order);
	}

	@Override
	public void deleteById(int orderId)
	{
		Session session = entityManager.unwrap(Session.class);
		Order order = session.get(Order.class, orderId);
		session.delete(order);
	}

}
