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
	private Integer monthlyStatusId;
	
	@Column(name = "date")
	private Date date;
	

	@Column(name = "income")
	private Double income;
	
	@Column(name = "products_sold")
	private Integer productsSold;

	public Integer getMonthlyStatusId()
	{
		return monthlyStatusId;
	}

	public void setMonthlyStatusId(Integer monthlyStatusId)
	{
		this.monthlyStatusId = monthlyStatusId;
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

	public Integer getProductsSold()
	{
		return productsSold;
	}

	public void setProductsSold(Integer productsSold)
	{
		this.productsSold = productsSold;
	}

	@Override
	public String toString()
	{
		return "MonthlyStatus [monthlyStatusId=" + monthlyStatusId + ", date=" + date + ", income=" + income
				+ ", productsSold=" + productsSold + "]";
	}

	
	

}
