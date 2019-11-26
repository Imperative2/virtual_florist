package com.masluch.virtual_florist.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Basket
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "basket_id")
	private int basketId;
	
	@JsonIgnore
	@Column(name = "user_id")
	private Integer userId;
	
	
	@OneToMany()
	@JoinColumn(name = "basket_id")
	private List<BasketProducts> basketProducts;
	
	@Column(name = "valid", columnDefinition = "BOOLEAN")
	private boolean valid;

	public int getBasketId()
	{
		return basketId;
	}

	public void setBasketId(int basketId)
	{
		this.basketId = basketId;
	}


	public Integer getUserId()
	{
		return userId;
	}

	public void setUserId(Integer userId)
	{
		this.userId = userId;
	}

	public List<BasketProducts> getBasketProducts()
	{
		return basketProducts;
	}

	public void setBasketProducts(List<BasketProducts> basketProducts)
	{
		this.basketProducts = basketProducts;
	}

	public boolean isValid()
	{
		return valid;
	}

	public void setValid(boolean valid)
	{
		this.valid = valid;
	}

	@Override
	public String toString()
	{
		return "Basket [basketId=" + basketId + ", userId=" + userId + ", basketProducts=" + basketProducts + ", valid="
				+ valid + "]";
	}


	
	
	
}
