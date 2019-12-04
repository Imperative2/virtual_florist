package com.masluch.virtual_florist.DAO;

import java.util.List;

import com.masluch.virtual_florist.entities.DeliveryType;
import com.masluch.virtual_florist.entities.MonthlyStatus;

public interface MonthlyStatusDAO
{
	public List<MonthlyStatus> findAll();
	
	public MonthlyStatus findById(int monthlyStatusId);
	
	
	public MonthlyStatus save(MonthlyStatus monthlyStatus);
	
	public void update(MonthlyStatus monthlyStatus);
	
	public void deleteById(int monthlyStatusId);
	
	public MonthlyStatus getLatestStatus();
}
