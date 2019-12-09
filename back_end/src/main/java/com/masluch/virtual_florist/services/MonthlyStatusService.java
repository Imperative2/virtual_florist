package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.MonthlyStatus;

public interface MonthlyStatusService
{
	public List<MonthlyStatus> findAll();
	
	public Basket findById(int monthlyStatusId);
	
	public Basket save(MonthlyStatus monthlyStatus);
	
	public void update(MonthlyStatus monthlyStatus);
	
	public ResponseEntity<MonthlyStatus> deleteById(int monthlyStatusId);
}
