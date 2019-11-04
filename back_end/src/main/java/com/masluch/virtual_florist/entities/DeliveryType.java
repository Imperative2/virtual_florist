package com.masluch.virtual_florist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DeliveryType
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "delivery_type_id")
	private int deliveryTypeId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name= "cost")
	private double cost;

	public int getDeliveryTypeId()
	{
		return deliveryTypeId;
	}

	public void setDeliveryTypeId(int deliveryTypeId)
	{
		this.deliveryTypeId = deliveryTypeId;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public double getCost()
	{
		return cost;
	}

	public void setCost(double cost)
	{
		this.cost = cost;
	}

	@Override
	public String toString()
	{
		return "DeliveryType [deliveryTypeId=" + deliveryTypeId + ", name=" + name + ", description=" + description
				+ ", cost=" + cost + "]";
	}
	
	
}
