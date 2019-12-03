package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.Order;
import com.masluch.virtual_florist.entities.OrderProducts;

public interface OrderProductsDAO
{
	public List<OrderProducts> findAll();
	
	public OrderProducts findById(Integer orderProductsId);
	
	public OrderProducts save(OrderProducts orderProducts);
	
	public void update(OrderProducts orderProducts);
	
	public void deleteById(Integer orderProductsId);
}
