package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.WikiEntryDAO;
import com.masluch.virtual_florist.entities.WikiEntry;

@Service
public class WikiEntryServiceImpl implements WikiEntryService
{
	
	@Autowired
	private WikiEntryDAO wikiEntryDAO;

	@Override
	@Transactional
	public List<WikiEntry> findAll()
	{
		return wikiEntryDAO.findAll();
	}

	@Override
	public WikiEntry findById(int wikiEntryId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public WikiEntry save(WikiEntry wikiEntry)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(WikiEntry wikiEntry)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<String> deleteById(int wikiEntryId)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
