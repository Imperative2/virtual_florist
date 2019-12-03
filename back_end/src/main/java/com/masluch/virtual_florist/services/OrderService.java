package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.Order;
import com.masluch.virtual_florist.entities.Product;

public interface OrderService
{
	public List<Order> findAll();
	
	public Order findById(Integer orderId);
	
	public Order save(Order order);
	
	public void update(Order order);
	
	public ResponseEntity<String> verifyBasket(Basket basket);
}
