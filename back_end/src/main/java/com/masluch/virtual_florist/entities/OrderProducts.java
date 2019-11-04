package com.masluch.virtual_florist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class OrderProducts
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_products_id")
	private int orderedProductId;
	
	@Column(name = "order_id")
	private int orderId;
	
	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "type")
	private String type;

	public int getOrderedProductId()
	{
		return orderedProductId;
	}

	public void setOrderedProductId(int orderedProductId)
	{
		this.orderedProductId = orderedProductId;
	}

	public int getOrderId()
	{
		return orderId;
	}

	public void setOrderId(int orderId)
	{
		this.orderId = orderId;
	}

	public Product getProduct()
	{
		return product;
	}

	public void setProduct(Product product)
	{
		this.product = product;
	}

	public int getQuantity()
	{
		return quantity;
	}

	public void setQuantity(int quantity)
	{
		this.quantity = quantity;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	@Override
	public String toString()
	{
		return "OrderedProducts [orderedProductId=" + orderedProductId + ", orderId=" + orderId + ", product=" + product
				+ ", quantity=" + quantity + ", type=" + type + "]";
	}
	
	
}
