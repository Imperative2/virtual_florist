package com.masluch.virtual_florist.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class BasketProducts
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "basket_products_id")
	@JsonIgnore
	private int basketProductsId;
	
	@JsonIgnore
	@Column(name = "basket_id")
	private int basketId;
	
	@JsonIgnoreProperties({"name", "description", "price", "wikiEntry", "photos", "latinName", "type", "tags", "available" })
	@OneToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	@JoinColumn(name = "product_id")
	private Product product;
	
	@Column(name = "quantity")
	private int quantity;

	public int getBasketProductsId()
	{
		return basketProductsId;
	}

	public void setBasketProductsId(int basketProductsId)
	{
		this.basketProductsId = basketProductsId;
	}

	public int getBasketId()
	{
		return basketId;
	}

	public void setBasketId(int basketId)
	{
		this.basketId = basketId;
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

	@Override
	public String toString()
	{
		return "BasketProducts [basketProductsId=" + basketProductsId + ", basketId=" + basketId + ", product="
				+ product + ", quantity=" + quantity + "]";
	}
	
	
}
