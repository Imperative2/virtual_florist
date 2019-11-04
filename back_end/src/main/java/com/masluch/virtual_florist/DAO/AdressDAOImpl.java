package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.entities.Adress;


@Repository
public class AdressDAOImpl implements AdressDAO
{
	
	@Autowired
	private EntityManager entityManager;

	@Override
	@Transactional
	public List<Adress> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<Adress> query = session.createQuery("FROM Adress", Adress.class);
		List<Adress> result = query.getResultList();
		return result;
	}

	@Override
	public Adress findById(int adressId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void save(Adress adress)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void update(Adress adress)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteById(int adressId)
	{
		// TODO Auto-generated method stub

	}

}
