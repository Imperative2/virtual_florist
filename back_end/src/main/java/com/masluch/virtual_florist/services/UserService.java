package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.masluch.virtual_florist.Requests.UserRegisterData;
import com.masluch.virtual_florist.entities.User;
import com.masluch.virtual_florist.entities.WikiEntry;

public interface UserService
{
	public List<User> findAll();
	
	public User findById(int userId);
	
	public User save(User user);
	
	public void update(User user);
	
	public void setUserAsTemporary(Integer userId);
	
	public ResponseEntity<User> deleteById(int userId);
	
	public ResponseEntity<String> registerUser(UserRegisterData userRegisterData);
	
	public ResponseEntity<String> updateUser(UserRegisterData userUpdateData, String userId);
	
	public ResponseEntity<User> login(String email, String password);
	
}
