package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.entities.Storage;
import com.masluch.virtual_florist.services.StorageService;

@RestController
@RequestMapping("/storage")
@CrossOrigin
public class StorageController
{
	
	@Autowired
	private StorageService storageService;
	
	@GetMapping("/")
	public List<Storage> getAllStorages()
	{
		return storageService.findAll();
	}
}
