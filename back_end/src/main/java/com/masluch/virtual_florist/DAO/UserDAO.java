package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.User;
import com.masluch.virtual_florist.entities.WikiEntry;

public interface UserDAO
{
	public List<User> findAll();
	
	public User findById(Integer userId);
	
	public List<User> findByEmail(String email);
	
	public User save(User user);
	
	public void update(User user);
	
	public void deleteById(Integer userId);
}
