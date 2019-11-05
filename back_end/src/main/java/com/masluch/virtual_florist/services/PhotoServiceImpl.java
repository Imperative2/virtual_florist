package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.PhotoDAO;
import com.masluch.virtual_florist.entities.Photo;

@Service
public class PhotoServiceImpl implements PhotoService
{
	
	@Autowired
	private PhotoDAO photoDAO;

	@Override
	@Transactional
	public List<Photo> findAll()
	{
		return photoDAO.findAll();
	}

	@Override
	public Photo findById(int photoId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Photo> findByProductId(int productId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Photo save(Photo photo)
	{
		
			return photoDAO.save(photo);

	}

	@Override
	@Transactional
	public void update(Photo photo)
	{
		photoDAO.update(photo);

	}

	@Override
	public ResponseEntity<Photo> saveImage(Photo photo)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPhotoPath(Photo photo)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<String> deleteById(int photoId)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
