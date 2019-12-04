package com.masluch.virtual_florist.Requests;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

public class OrderWithoutAccount
{
	private Integer userId;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private Date deliveryDate;
	private String comment;
	private Integer deliveryId;
	
	private List<OrderProduct> orderProducts;
	private DeliveryDetails deliveryDetails;
	
	private UserRegisterData userRegisterData;

	public Integer getUserId()
	{
		return userId;
	}

	public void setUserId(Integer userId)
	{
		this.userId = userId;
	}

	public Date getDeliveryDate()
	{
		return deliveryDate;
	}

	public void setDeliveryDate(Date deliveryDate)
	{
		this.deliveryDate = deliveryDate;
	}

	public String getComment()
	{
		return comment;
	}

	public void setComment(String comment)
	{
		this.comment = comment;
	}

	public Integer getDeliveryId()
	{
		return deliveryId;
	}

	public void setDeliveryId(Integer deliveryId)
	{
		this.deliveryId = deliveryId;
	}

	public List<OrderProduct> getOrderProducts()
	{
		return orderProducts;
	}

	public void setOrderProducts(List<OrderProduct> orderProducts)
	{
		this.orderProducts = orderProducts;
	}

	public DeliveryDetails getDeliveryDetails()
	{
		return deliveryDetails;
	}

	public void setDeliveryDetails(DeliveryDetails deliveryDetails)
	{
		this.deliveryDetails = deliveryDetails;
	}

	public UserRegisterData getUserRegisterData()
	{
		return userRegisterData;
	}

	public void setUserRegisterData(UserRegisterData userRegisterData)
	{
		this.userRegisterData = userRegisterData;
	}

	@Override
	public String toString()
	{
		return "OrderWithoutAccount [userId=" + userId + ", deliveryDate=" + deliveryDate + ", comment=" + comment
				+ ", deliveryId=" + deliveryId + ", orderProducts=" + orderProducts + ", deliveryDetails="
				+ deliveryDetails + ", userRegisterData=" + userRegisterData + "]";
	}
	
	
}
