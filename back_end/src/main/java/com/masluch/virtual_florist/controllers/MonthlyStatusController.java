package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.MonthlyStatus;
import com.masluch.virtual_florist.services.BasketService;
import com.masluch.virtual_florist.services.MonthlyStatusService;

@RestController
@RequestMapping("/monthlyStatus")
@CrossOrigin
public class MonthlyStatusController
{
	@Autowired
	private MonthlyStatusService monthlyStatusService;
	
	@GetMapping("/")
	public List<MonthlyStatus> getAllMonthlyStatuts(){
		return monthlyStatusService.findAll();
	}

}
