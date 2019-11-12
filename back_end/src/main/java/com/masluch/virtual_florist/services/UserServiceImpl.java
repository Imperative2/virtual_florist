package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.masluch.virtual_florist.DAO.UserDAO;
import com.masluch.virtual_florist.Requests.UserRegisterData;
import com.masluch.virtual_florist.entities.User;


@Service
public class UserServiceImpl implements UserService
{
	
	@Autowired
	private UserDAO userDAO;

	@Override
	public List<User> findAll()
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findById(int userId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User save(User user)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(User user)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<User> deleteById(int user)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<String> registerUser(UserRegisterData userRegisterData)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
