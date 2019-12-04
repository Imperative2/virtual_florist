package com.masluch.virtual_florist.Requests;

public class OrderProduct
{
	private Integer productId;
	private int productQuantity;
	public Integer getProductId()
	{
		return productId;
	}
	public void setProductId(Integer productId)
	{
		this.productId = productId;
	}
	public int getProductQuantity()
	{
		return productQuantity;
	}
	public void setProductQuantity(int productQuantity)
	{
		this.productQuantity = productQuantity;
	}
	@Override
	public String toString()
	{
		return "OrderProducts [productId=" + productId + ", productQuantity=" + productQuantity + "]";
	}
	
	
}
