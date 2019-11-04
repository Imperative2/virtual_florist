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
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.masluch.virtual_florist.DAO.AdressDAO;
import com.masluch.virtual_florist.DAO.AdressDAOImpl;
import com.masluch.virtual_florist.DAO.PhotoDAO;
import com.masluch.virtual_florist.DAO.PhotoDAOImpl;
import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.entities.Adress;
import com.masluch.virtual_florist.entities.Photo;
import com.masluch.virtual_florist.entities.Product;

@RestController
@RequestMapping(path = "/")
public class TestController
{
	@Autowired
	private AdressDAO adressDAOImpl;
	
	@Autowired 
	private ProductDAO productDAOImpl;
	
	@Autowired
	private PhotoDAO photoDAOImpl;

	@GetMapping(path = "/adress")
	public List<Adress> listAdresses()
	{
		List<Adress> adressList = adressDAOImpl.findAll();
		return adressList;
	}
	
	@GetMapping(path = "/product")
	public List<Product> listProducts()
	{
		List<Product> productList = productDAOImpl.findAll();
		return productList;
	}
	
	@GetMapping(path = "/photo")
	public List<Photo> listPhotos()
	{
		List<Photo> adressList = photoDAOImpl.findAll();
		return adressList;
	}
	

	@PostMapping("/upload")
	public ResponseEntity uploadToLocalFileSystem(@RequestParam("file") MultipartFile file)
	{
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		Path path = Paths.get("D:\\" + fileName);
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
	
	
	@GetMapping("/download/{fileName:.+}")
	public ResponseEntity downloadFileFromLocal(@PathVariable String fileName) {
		Path path = Paths.get("D:\\" + fileName);
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
