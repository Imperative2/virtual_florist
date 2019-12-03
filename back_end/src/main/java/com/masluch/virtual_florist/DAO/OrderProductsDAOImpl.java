package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.OrderProducts;
import com.masluch.virtual_florist.entities.Product;
@Repository
public class OrderProductsDAOImpl implements OrderProductsDAO
{


	@Autowired
	private EntityManager entityManager;

	@Override
	public List<OrderProducts> findAll()
	{
		Session session = entityManager.unwrap(Session.class);

		Query<OrderProducts> query = session.createQuery("FROM OrderProducts ", OrderProducts.class);
		List<OrderProducts> result = query.getResultList();
		return result;
	}

	@Override
	public OrderProducts findById(Integer orderProductsId)
	{
		Session session = entityManager.unwrap(Session.class);
		OrderProducts orderProducts = session.get(OrderProducts.class, orderProductsId);
		return orderProducts;
	}

	@Override
	public OrderProducts save(OrderProducts orderProducts)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(orderProducts);
		return orderProducts;
	}

	@Override
	public void update(OrderProducts orderProducts)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(orderProducts);
	}

	@Override
	public void deleteById(Integer orderProductsId)
	{
		Session session = entityManager.unwrap(Session.class);
		OrderProducts orderProducts = session.get(OrderProducts.class, orderProductsId);
		session.delete(orderProducts);
	}

}
