package com.masluch.virtual_florist.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.masluch.virtual_florist.entities.Photo;
import com.masluch.virtual_florist.services.PhotoService;

@RestController
@RequestMapping(path = "/photo")
public class PhotoController
{
	
	@Autowired
	private PhotoService photoService;
	
	
	
	@GetMapping(path = "/")
	public List<Photo> getAllPhotos()
	{
		return photoService.findAll();
	}
	
	@PostMapping("/upload")
	public ResponseEntity uploadToLocalFileSystem(@RequestParam("file") MultipartFile file , @RequestParam(name = "productId", required = false) Integer productId, @RequestParam("type") String type, @RequestParam("description") String description)
	{
		
		System.out.println("uplaod params: productId: "+productId);
		
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		Path path = Paths.get("..//Photos//" + fileName);
		try
			{
				System.out.println(path.toString());
				Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
			}
		catch (IOException e)
			{
				e.printStackTrace();
			}
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/files/download/")
				.path(fileName).toUriString();
		return ResponseEntity.ok(fileDownloadUri);
	}
}
