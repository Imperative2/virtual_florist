package com.masluch.virtual_florist.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Order
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_id;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "buyer_adress_id")
	private Adress buyerAdress;
	
	@ManyToOne
	@JoinColumn(name = "delivery_adress_id")
	private Adress deliveryAdress;
	
	@Column(name = "delivery_date")
	private Date deliveryDate;
	
	@Column(name = "comment")
	private String comment;
	
	@Column(name = "date")
	private Date date;
	
	@Column(name = "status")
	private String status;

	public int getOrder_id()
	{
		return order_id;
	}

	public void setOrder_id(int order_id)
	{
		this.order_id = order_id;
	}

	public User getUser()
	{
		return user;
	}

	public void setUser(User user)
	{
		this.user = user;
	}

	public Adress getBuyerAdress()
	{
		return buyerAdress;
	}

	public void setBuyerAdress(Adress buyerAdress)
	{
		this.buyerAdress = buyerAdress;
	}

	public Adress getDeliveryAdress()
	{
		return deliveryAdress;
	}

	public void setDeliveryAdress(Adress deliveryAdress)
	{
		this.deliveryAdress = deliveryAdress;
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

	public Date getDate()
	{
		return date;
	}

	public void setDate(Date date)
	{
		this.date = date;
	}

	public String getStatus()
	{
		return status;
	}

	public void setStatus(String status)
	{
		this.status = status;
	}

	@Override
	public String toString()
	{
		return "Order [order_id=" + order_id + ", user=" + user + ", buyerAdress=" + buyerAdress + ", deliveryAdress="
				+ deliveryAdress + ", deliveryDate=" + deliveryDate + ", comment=" + comment + ", date=" + date
				+ ", status=" + status + "]";
	}
	
	
}
