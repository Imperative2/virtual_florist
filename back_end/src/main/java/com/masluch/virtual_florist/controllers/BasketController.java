package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.services.BasketService;

@RestController
@RequestMapping("/basket")
@CrossOrigin
public class BasketController
{
	
	@Autowired
	private BasketService basketService;
	
	@GetMapping("/")
	public List<Basket> getAllBaskets(){
		return basketService.findAll();
	}
	
	@GetMapping("/userBasket")
	public ResponseEntity<Basket> getUserBasket(@RequestParam(name = "userId",required = true)String userId){
		System.out.println(userId);
		return basketService.getUserBasket(userId);
	}
}
