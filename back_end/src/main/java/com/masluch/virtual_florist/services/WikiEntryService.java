package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.masluch.virtual_florist.entities.Photo;
import com.masluch.virtual_florist.entities.WikiEntry;

public interface WikiEntryService
{
	public List<WikiEntry> findAll();
	
	public WikiEntry findById(int wikiEntryId);
	
	public WikiEntry save(WikiEntry wikiEntry);
	
	public void update(WikiEntry wikiEntry);
	
	public ResponseEntity<String> deleteById(int wikiEntryId);
	
	public ResponseEntity<WikiEntry> addWikiEntry(WikiEntry wikiEntry);
	
	public ResponseEntity<String> deleteWikiEntry(String wikiEntryId);
}
