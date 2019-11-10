package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.PhotoDAO;
import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.DAO.WikiEntryDAO;
import com.masluch.virtual_florist.entities.Photo;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.WikiEntry;

@Service
public class WikiEntryServiceImpl implements WikiEntryService
{
	
	@Autowired
	private WikiEntryDAO wikiEntryDAO;
	
	@Autowired
	private PhotoDAO photoDAO;
	
	@Autowired 
	private ProductDAO productDAO;

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
		wikiEntryDAO.deleteById(wikiEntryId);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@Override
	@Transactional
	public ResponseEntity<WikiEntry> addWikiEntry(WikiEntry wikiEntry)
	{
		if(checkWikiEntry(wikiEntry) == false)
			{
				return new ResponseEntity<WikiEntry>(HttpStatus.BAD_REQUEST);
			}
		WikiEntry savedEntry =  wikiEntryDAO.save(wikiEntry);
		
		return new ResponseEntity<WikiEntry>(savedEntry, HttpStatus.OK);
	}
	
	
	
	private boolean checkWikiEntry(WikiEntry wikiEntry)
	{
		if(wikiEntry.getWikiEntryId() == 0)
			return true;
		return false;
	}

	@Override
	@Transactional
	public ResponseEntity<String> deleteWikiEntry(String wikiEntryId)
	{
		Integer entryId;
		try {
			entryId = Integer.decode(wikiEntryId);
		}
		catch(Exception ex) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		if(entryId<1)
			{
				return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
			}
		
		WikiEntry wikiEntry = wikiEntryDAO.findById(entryId);
		List<Photo> photosList = wikiEntry.getPhotos();
		for(Photo photo: photosList)
			{
				photo.setWikiEntryId(0);
				photoDAO.update(photo);
			}
		
		Product product = productDAO.findByWikiEntry(wikiEntry);
		if(product != null)
			{
				product.setWikiEntry(null);
				productDAO.update(product);
			}
		
		deleteById(wikiEntry.getWikiEntryId());
		

		
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}
