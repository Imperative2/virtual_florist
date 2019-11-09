package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.entities.WikiEntry;
import com.masluch.virtual_florist.services.WikiEntryService;

@RestController
@RequestMapping(path = "/wiki")
@CrossOrigin
public class WikiEntryController
{

	@Autowired
	private WikiEntryService wikiEntryService;
	
	
	@GetMapping("/")
	public List<WikiEntry> getAllEntries()
	{
		return wikiEntryService.findAll();
	}
	
	@PutMapping("/newEntry")
	public ResponseEntity<WikiEntry> addWikiEntry(@RequestBody WikiEntry wikiEntry)
	{

		return wikiEntryService.addWikiEntry(wikiEntry);
	}
	
	@PostMapping("/update")
	public ResponseEntity<String> updateWikiEntry(@RequestBody WikiEntry wikiEntry)
	{
		System.out.println(wikiEntry);
		return new ResponseEntity("OK",HttpStatus.OK);
	}
	

}
