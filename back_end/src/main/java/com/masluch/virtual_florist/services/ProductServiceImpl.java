package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.DAO.WikiEntryDAO;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.WikiEntry;

@Service
public class ProductServiceImpl implements ProductService
{

	@Autowired
	private ProductDAO productDAO;
	
	@Autowired
	private WikiEntryDAO wikiEntryDAO;
	
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

}
