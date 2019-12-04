package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.DeliveryType;
import com.masluch.virtual_florist.entities.MonthlyStatus;

@Repository
public class MonthlyStatusDAOImpl implements MonthlyStatusDAO
{

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<MonthlyStatus> findAll()
	{
		Session session = entityManager.unwrap(Session.class);

		Query<MonthlyStatus> query = session.createQuery("FROM MonthlyStatus", MonthlyStatus.class);
		List<MonthlyStatus> result = query.getResultList();
		return result;
	}

	@Override
	public MonthlyStatus findById(int monthlyStatusId)
	{
		Session session = entityManager.unwrap(Session.class);
		MonthlyStatus status = session.get(MonthlyStatus.class, monthlyStatusId);
		return status;
	}

	@Override
	public MonthlyStatus save(MonthlyStatus monthlyStatus)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(monthlyStatus);
		return monthlyStatus;
	}

	@Override
	public void update(MonthlyStatus monthlyStatus)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(monthlyStatus);
	}

	@Override
	public void deleteById(int monthlyStatusId)
	{
		Session session = entityManager.unwrap(Session.class);
		MonthlyStatus monthlyStatus = session.get(MonthlyStatus.class, monthlyStatusId);
		session.delete(monthlyStatus);
	}

	@Override
	public MonthlyStatus getLatestStatus()
	{
		Session session = entityManager.unwrap(Session.class);
		Query<MonthlyStatus> query = session.createQuery("from MonthlyStatus m order by m.monthlyStatusId DESC", MonthlyStatus.class);
		query.setMaxResults(1);
		MonthlyStatus result =  query.uniqueResult();
		return result;
	}

}
