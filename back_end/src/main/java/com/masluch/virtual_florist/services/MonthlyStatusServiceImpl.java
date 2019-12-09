package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.MonthlyStatusDAO;
import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.MonthlyStatus;

@Service
public class MonthlyStatusServiceImpl implements MonthlyStatusService
{
	@Autowired
	private MonthlyStatusDAO monthlyStatusDAO;

	@Override	
	@Transactional
	public List<MonthlyStatus> findAll()
	{
		return monthlyStatusDAO.findAll();
	}

	@Override
	public Basket findById(int monthlyStatusId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Basket save(MonthlyStatus monthlyStatus)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(MonthlyStatus monthlyStatus)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<MonthlyStatus> deleteById(int monthlyStatusId)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
