package com.masluch.virtual_florist.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="monthly_status")
public class MonthlyStatus
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "monthly_status_id")
	private int orderedProductId;
	
	@Column(name = "date")
	private Date date;
	
	@OneToOne
	@JoinColumn(name = "income")
	private Double income;
	
	@Column(name = "products_sold")
	private int productsSold;

	public int getOrderedProductId()
	{
		return orderedProductId;
	}

	public void setOrderedProductId(int orderedProductId)
	{
		this.orderedProductId = orderedProductId;
	}

	public Date getDate()
	{
		return date;
	}

	public void setDate(Date date)
	{
		this.date = date;
	}

	public Double getIncome()
	{
		return income;
	}

	public void setIncome(Double income)
	{
		this.income = income;
	}

	public int getProductsSold()
	{
		return productsSold;
	}

	public void setProductsSold(int productsSold)
	{
		this.productsSold = productsSold;
	}

	@Override
	public String toString()
	{
		return "MonthlyStatus [orderedProductId=" + orderedProductId + ", date=" + date + ", income=" + income
				+ ", productsSold=" + productsSold + "]";
	}
	

}
