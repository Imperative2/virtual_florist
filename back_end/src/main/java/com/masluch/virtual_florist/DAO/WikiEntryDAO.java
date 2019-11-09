package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.WikiEntry;



public interface WikiEntryDAO
{
	public List<WikiEntry> findAll();
	
	public WikiEntry findById(int wikiEntryId);
	
	public WikiEntry save(WikiEntry wikiEntry);
	
	public void update(WikiEntry wikiEntry);
	
	public void deleteById(int wikiEntryId);
}
