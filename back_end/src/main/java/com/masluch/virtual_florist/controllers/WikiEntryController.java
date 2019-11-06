package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
}
