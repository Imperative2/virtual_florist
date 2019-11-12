package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.Requests.UserRegisterData;
import com.masluch.virtual_florist.entities.User;
import com.masluch.virtual_florist.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController
{
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public List<User> getUsers(){
		return null;
	}
	
	@PutMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody UserRegisterData userRegisterData )
	{
		System.out.println(userRegisterData);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
}
