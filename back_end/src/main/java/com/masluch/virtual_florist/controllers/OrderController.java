package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.services.BasketService;
import com.masluch.virtual_florist.services.OrderService;
import com.masluch.virtual_florist.entities.Order;;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController
{
	@Autowired
	private OrderService orderService;
	
	@GetMapping("/")
	public List<Order> getAllOrders(){
		return orderService.findAll();
	}
	
	@PostMapping("/verifyBasket")
	public ResponseEntity<String> verifyBasket(@RequestBody Basket basket){
		System.out.println(basket);
		return orderService.verifyBasket(basket);
		
	}
	

}
