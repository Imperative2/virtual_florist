package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.DeliveryType;
import com.masluch.virtual_florist.entities.Order;

@Repository
public class DeliveryTypeDAOImpl implements DeliveryTypeDAO
{

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<DeliveryType> findAll()
	{
		Session session = entityManager.unwrap(Session.class);

		Query<DeliveryType> query = session.createQuery("FROM DeliveryType", DeliveryType.class);
		List<DeliveryType> result = query.getResultList();
		return result;
	}

	@Override
	public DeliveryType findById(int deliveryTypeId)
	{
		Session session = entityManager.unwrap(Session.class);
		DeliveryType order = session.get(DeliveryType.class, deliveryTypeId);
		return order;
	}

	@Override
	public DeliveryType save(DeliveryType deliveryType)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(deliveryType);
		return deliveryType;
	}

	@Override
	public void update(DeliveryType deliveryType)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(deliveryType);
	}

	@Override
	public void deleteById(int deliveryTypeId)
	{
		Session session = entityManager.unwrap(Session.class);
		DeliveryType deliveryType = session.get(DeliveryType.class, deliveryTypeId);
		session.delete(deliveryType);
	}

}
