package com.masluch.virtual_florist.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.masluch.virtual_florist.entities.WikiEntry;

@Repository
public class WikiEntryDAOImpl implements WikiEntryDAO
{
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<WikiEntry> findAll()
	{
		Session session = entityManager.unwrap(Session.class);
		
		Query<WikiEntry> query = session.createQuery("FROM WikiEntry", WikiEntry.class);
		List<WikiEntry> result = query.getResultList();
		return result;
	}

	@Override
	public WikiEntry findById(int wikiEntryId)
	{
		Session session = entityManager.unwrap(Session.class);
		WikiEntry wikiEntry = session.get(WikiEntry.class, wikiEntryId);
		return wikiEntry;
	}

	@Override
	public void save(WikiEntry wikiEntry)
	{
		Session session = entityManager.unwrap(Session.class);
		session.save(wikiEntry);	

	}

	@Override
	public void update(WikiEntry wikiEntry)
	{
		Session session = entityManager.unwrap(Session.class);
		session.update(wikiEntry);
	}

	@Override
	public void deleteById(int wikiEntryId)
	{
		Session session = entityManager.unwrap(Session.class);
		WikiEntry wikiEntry = session.get(WikiEntry.class, wikiEntryId);
		session.delete(wikiEntry);
	}

}
