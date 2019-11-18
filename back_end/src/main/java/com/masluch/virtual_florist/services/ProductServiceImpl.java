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
public class ProductServiceImpl implements ProductService
{

	@Autowired
	private ProductDAO productDAO;
	
	@Autowired
	private WikiEntryDAO wikiEntryDAO;
	
	@Autowired
	private PhotoDAO photoDAO;
	
	@Override
	public List<Product> findAll()
	{
		return productDAO.findAll();
	}

	@Override
	public Product findById(int productId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product save(Product product)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Product product)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<String> deleteById(int productId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<Product> addNewProduct(Product newProduct)
	{
		Product savedProduct = productDAO.save(newProduct);
		ResponseEntity<Product> response = new ResponseEntity<Product>(savedProduct, HttpStatus.OK);
		return response;
	}

	@Override
	public ResponseEntity<Product> addNewProductWithWiki(Product newProduct, String wikiEntryId)
	{
		Integer entryId;
		try {
			entryId = Integer.decode(wikiEntryId);
		}
		catch(Exception ex) {
			return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
		}
		if(entryId<1)
			{
				return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
			}
		WikiEntry wikiEntry =  wikiEntryDAO.findById(entryId);
		if(wikiEntry == null)
			{
				return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
			}
		
		newProduct.setWikiEntry(wikiEntry);
		
		productDAO.save(newProduct);
		
		return new ResponseEntity<Product>(newProduct, HttpStatus.OK);
		
	}

	@Override
	@Transactional
	public ResponseEntity<String> deleteProduct(String productId)
	{
		Integer id;
		try {
			id = Integer.decode(productId);
		}
		catch(Exception ex) {
			return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
		}
		if(id<1)
			{
				return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
			}
		
		Product product = productDAO.findById(id);
		if(product == null)
			{
				return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
			}
		
		System.out.println(product);
		
		List<Photo> photosList = product.getPhotos();
		for(Photo photo: photosList)
			{
				photo.setProductId(null);
				photoDAO.update(photo);
				System.out.println(photo);
			}
		
		productDAO.deleteById(product.getProductId());
		
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@Override
	@Transactional
	public ResponseEntity<Product> updateProduct(String productId, Product product, String wikiEntryId)
	{
		
		Integer id = null;
		Integer wikiId = null;
		try {
			id = Integer.decode(productId);
			if(wikiEntryId!=null)
				wikiId = Integer.decode(wikiEntryId);
		}
		catch(Exception ex) {
			System.out.println("1");
			return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
		}
		
		Product productToUpdate = productDAO.findById(id);
		if(productToUpdate == null)
			{
				System.out.println("2");
				return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
			}
		
		if(product.getPrice()==null || product.getPrice()<0.0)
			{
				System.out.println("3");
				return new ResponseEntity<Product>(HttpStatus.BAD_REQUEST);
			}
			
		productToUpdate.setPrice(product.getPrice());
		productToUpdate.setName(product.getName());
		productToUpdate.setLatinName(product.getLatinName());
		productToUpdate.setDescription(product.getDescription());
		productToUpdate.setType(product.getType());
		productToUpdate.setTags(product.getTags());
		productToUpdate.setAvailable(product.isAvailable());
		
		if(wikiId != null)
			{
				WikiEntry wikiEntry = wikiEntryDAO.findById(wikiId);
				productToUpdate.setWikiEntry(wikiEntry);
			}
		
		productDAO.update(productToUpdate);
		
		return new ResponseEntity<Product>(productToUpdate, HttpStatus.OK)
		

		
;
	}
	
	
	

}
