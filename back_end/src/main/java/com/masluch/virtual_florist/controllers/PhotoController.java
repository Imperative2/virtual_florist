package com.masluch.virtual_florist.controllers;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@CrossOrigin
public class PhotoController
{
	
	@Autowired
	private PhotoService photoService;
	
	
	
	@GetMapping(path = "/")
	public List<Photo> getAllPhotos()
	{
		return photoService.findAll();
	}
	
	@PostMapping(path="/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Photo> uploadToLocalFileSystem(@RequestParam("file") MultipartFile file , @RequestParam(name = "productId", required = false) Integer productId,@RequestParam(name = "wikiEntryId",  required = false) Integer wikiEntryId, @RequestParam("type") String type, @RequestParam("description") String description, @RequestParam("enabled") boolean enabled)
	{
		
		Photo newPhoto = new Photo();
		
		if(wikiEntryId != null && wikiEntryId>0)
			{
				newPhoto.setWikiEntryId(wikiEntryId);
			}
		
		if(productId != null && productId>0)
			{
				newPhoto.setProductId(productId);
			}
		
		newPhoto.setDescription(description);
		newPhoto.setEnabled(enabled);
		newPhoto.setType(type);
		newPhoto.setPath("");
		
		Photo savedPhoto = photoService.save(newPhoto);
		
		
		String fileName = StringUtils.cleanPath(savedPhoto.getPhotoId()+".png");
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
//		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/photo/download/")
//				.path(fileName).toUriString();
		
		String fileDownloadUri = "/photo/download/"+ fileName;
		
		savedPhoto.setPath(fileDownloadUri);
		photoService.update(savedPhoto);
		
		return  new ResponseEntity<>(savedPhoto, HttpStatus.OK);
		
	}
	
	@GetMapping("/download/{fileName:.+}")
	public ResponseEntity downloadFileFromLocal(@PathVariable String fileName) {
		Path path = Paths.get("..//Photos//" + fileName);
		Resource resource = null;
		try {
			resource = new UrlResource(path.toUri());
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_PNG)
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}
}
