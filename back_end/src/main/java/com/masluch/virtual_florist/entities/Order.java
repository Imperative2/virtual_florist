package com.masluch.virtual_florist.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_id;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	
	@ManyToOne
	@JoinColumn(name = "delivery_adress_id")
	private Adress deliveryAdress;
	
	@OneToOne(optional = true, cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
	@JoinColumn(name = "delivery_type_id")
	private DeliveryType deliveryType;
	
	@Column(name = "delivery_date")
	private Date deliveryDate;
	
	@Column(name = "comment")
	private String comment;
	
	@Column(name = "date")
	private Date date;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "total_price")
	private Double totalPrice;
	
	@OneToMany()
	@JoinColumn(name = "order_id")
	private List<OrderProducts> orderProducts;

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

	public Adress getDeliveryAdress()
	{
		return deliveryAdress;
	}

	public void setDeliveryAdress(Adress deliveryAdress)
	{
		this.deliveryAdress = deliveryAdress;
	}

	public DeliveryType getDeliveryType()
	{
		return deliveryType;
	}

	public void setDeliveryType(DeliveryType deliveryType)
	{
		this.deliveryType = deliveryType;
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

	public Double getTotalPrice()
	{
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice)
	{
		this.totalPrice = totalPrice;
	}

	public List<OrderProducts> getOrderProducts()
	{
		return orderProducts;
	}

	public void setOrderProducts(List<OrderProducts> orderProducts)
	{
		this.orderProducts = orderProducts;
	}

	@Override
	public String toString()
	{
		return "Order [order_id=" + order_id + ", user=" + user + ", deliveryAdress=" + deliveryAdress
				+ ", deliveryType=" + deliveryType + ", deliveryDate=" + deliveryDate + ", comment=" + comment
				+ ", date=" + date + ", status=" + status + ", totalPrice=" + totalPrice + ", orderProducts="
				+ orderProducts + "]";
	}

	


	
	
}
