package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.Order;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.WikiEntry;

public interface OrderDAO
{
	public List<Order> findAll();
	
	public Order findById(int orderId);
	
	
	public Order save(Order order);
	
	public void update(Order order);
	
	public void deleteById(int orderId);
	
}
