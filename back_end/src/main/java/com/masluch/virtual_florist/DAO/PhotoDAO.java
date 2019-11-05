package com.masluch.virtual_florist.DAO;

import java.util.List;


import com.masluch.virtual_florist.entities.Photo;

public interface PhotoDAO
{
	public List<Photo> findAll();
	
	public Photo findById(int photoId);
	
	public List<Photo> findByProductId(int productId);
	
	public Photo save(Photo photo);
	
	public void update(Photo photo);
	
	public void deleteById(int photoId);
}
