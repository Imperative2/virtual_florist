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
		Session session = entityManager.unwrap(Session.class);
		Adress adress = session.get(Adress.class, adressId);
		return adress;
	}

	@Override
	public Adress findByValues(String country, String city,String street , String localNumber)
	{
		Session session = entityManager.unwrap(Session.class);
		Query<Adress> query = session.createQuery(
				"FROM Adress a WHERE a.country=:country AND a.city=:city AND a.localNumber=:localNumber AND a.street=:street", Adress.class);
		query.setParameter("country", country);
		query.setParameter("city", city);
		query.setParameter("localNumber", localNumber);
		query.setParameter("street", street);
		List<Adress> adressList = query.getResultList();
		if (adressList.size() > 0)
			return adressList.get(0);
		else
			return null;
	}

	@Override
	public Adress save(Adress adress)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(adress);
		return adress;
	}

	@Override
	public void update(Adress adress)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(adress);
	}

	@Override
	public void deleteById(int adressId)
	{
		Session session = entityManager.unwrap(Session.class);
		Adress adress = session.get(Adress.class, adressId);
		session.delete(adress);
	}

}
