package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.DeliveryType;
import com.masluch.virtual_florist.entities.Order;

public interface DeliveryTypeDAO
{
	public List<DeliveryType> findAll();
	
	public DeliveryType findById(int deliveryTypeId);
	
	
	public DeliveryType save(DeliveryType deliveryType);
	
	public void update(DeliveryType deliveryType);
	
	public void deleteById(int deliveryTypeId);
}
