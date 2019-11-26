package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.AdressDAO;
import com.masluch.virtual_florist.DAO.UserDAO;
import com.masluch.virtual_florist.Requests.UserRegisterData;
import com.masluch.virtual_florist.entities.Adress;
import com.masluch.virtual_florist.entities.User;


@Service
public class UserServiceImpl implements UserService
{
	
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private AdressDAO adressDAO;

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
	@Transactional
	public ResponseEntity<String> registerUser(UserRegisterData userRegisterData)
	{
		if(userRegisterData.getName() == null || userRegisterData.getSurname() == null || userRegisterData.getEmail() == null || userRegisterData.getPassword() == null)
			{
				return new ResponseEntity<String>("Bad information",HttpStatus.BAD_REQUEST);
			}
		if(userRegisterData.getCountry() == null || userRegisterData.getCity() == null || userRegisterData.getStreet() == null || userRegisterData.getZipCode() == null)
			{
				return new ResponseEntity<String>("Bad information",HttpStatus.BAD_REQUEST);
			}
		if(userRegisterData.getPhoneNumber() == null)
			{
				return new ResponseEntity<String>("Bad information",HttpStatus.BAD_REQUEST);
			}
		
		if(userRegisterData.getPassword().length() < 6)
			{
				return new ResponseEntity<String>("Password too short",HttpStatus.BAD_REQUEST);
			}
		
		List<User> userEmailTakenList = userDAO.findByEmail(userRegisterData.getEmail());
		if(userEmailTakenList.isEmpty() != true) {
			return new ResponseEntity<String>("Email taken",HttpStatus.BAD_REQUEST);
		}
		
		Adress adress = adressDAO.findByValues(userRegisterData.getCountry(), userRegisterData.getCity(), userRegisterData.getStreet(), userRegisterData.getLocalNumber());

		if(adress == null)
			{
				adress = new Adress();
				adress.setCountry(userRegisterData.getCountry());
				adress.setCity(userRegisterData.getCity());
				adress.setStreet(userRegisterData.getStreet());
				adress.setLocalNumber(userRegisterData.getLocalNumber());
				adress.setZipCode(userRegisterData.getZipCode());
				adress =  adressDAO.save(adress);
			}
		
		User newUser = new User();
		newUser.setName(userRegisterData.getName());
		newUser.setSurname(userRegisterData.getSurname());
		newUser.setEmail(userRegisterData.getEmail());
		newUser.setPassword(userRegisterData.getPassword());
		newUser.setRole("USER");
		newUser.setEnabled(true);
		newUser.setPhoneNumber(userRegisterData.getPhoneNumber());
		newUser.setBusinessClient(false);
		newUser.setAdress(adress);
		
		userDAO.save(newUser);
		

		
		
		return new ResponseEntity<String>(HttpStatus.OK);

	}

	@Override
	public ResponseEntity<User> login(String email, String password)
	{
		if(email == null || password == null) {
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
	
		List<User> userList = userDAO.findByEmail(email);
		if(userList.isEmpty() == true || userList.size()>1)
			{
				return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
			}
		
		User user = userList.get(0);
		
		if(password.equals(user.getPassword()) == false)
			{
				return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
			}
		
		return new ResponseEntity<User>(user, HttpStatus.OK);
	
	}
	
	

}
