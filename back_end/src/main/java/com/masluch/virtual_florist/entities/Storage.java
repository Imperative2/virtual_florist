package com.masluch.virtual_florist.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ValueGenerationType;

@Entity
public class Storage
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "storage_id")
	private int storageId;
	
	@OneToOne(optional = true, cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	@JoinColumn(name = "product_id")
	private Product product;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "enabled", columnDefinition = "BOOLEAN")
	private boolean enabled;

	public int getStorageId()
	{
		return storageId;
	}

	public void setStorageId(int storageId)
	{
		this.storageId = storageId;
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

	public boolean isEnabled()
	{
		return enabled;
	}

	public void setEnabled(boolean enabled)
	{
		this.enabled = enabled;
	}

	@Override
	public String toString()
	{
		return "Storage [storageId=" + storageId + ", product=" + product + ", quantity=" + quantity + ", enabled="
				+ enabled + "]";
	}
	
	
}
