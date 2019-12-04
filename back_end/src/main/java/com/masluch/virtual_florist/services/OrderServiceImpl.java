package com.masluch.virtual_florist.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.BasketProducts;
import com.masluch.virtual_florist.entities.DeliveryType;
import com.masluch.virtual_florist.entities.Order;
import com.masluch.virtual_florist.entities.OrderProducts;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;
import com.masluch.virtual_florist.entities.User;
import com.masluch.virtual_florist.DAO.AdressDAO;
import com.masluch.virtual_florist.DAO.DeliveryTypeDAO;
import com.masluch.virtual_florist.DAO.OrderDAO;
import com.masluch.virtual_florist.DAO.OrderProductsDAO;
import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.DAO.StorageDAO;
import com.masluch.virtual_florist.DAO.UserDAO;
import com.masluch.virtual_florist.Requests.OrderProduct;
import com.masluch.virtual_florist.Requests.OrderWithAccount;;

@Service
public class OrderServiceImpl implements OrderService
{
	
	@Autowired
	private OrderDAO orderDAO;
	
	@Autowired
	private ProductDAO productDAO;
	
	@Autowired
	private StorageDAO storageDAO;
	
	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private AdressDAO adressDAO;
	
	@Autowired
	private OrderProductsDAO orderProductsDAO;
	
	@Autowired DeliveryTypeDAO deliveryTypeDAO;

	@Override
	@Transactional
	public List<Order> findAll()
	{
		return orderDAO.findAll();
	}

	@Override
	public Order findById(Integer orderId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order save(Order order)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Order order)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<String> verifyBasket(Basket basket)
	{
		List<BasketProducts> basketProductsList = basket.getBasketProducts();
		if(basketProductsList.size() == 0) {
			return new ResponseEntity<String>("No products in basket", HttpStatus.BAD_REQUEST);
		}
		
		for(BasketProducts basketProduct: basketProductsList)
			{
				System.out.println(basketProduct);
				Product product = basketProduct.getProduct();
				product = productDAO.findById(product.getProductId());
				if(product == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}
				Storage storage = storageDAO.findByProduct(product);
				if(storage == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}
				
				System.out.println("[orderService ] storage id "+storage.getStorageId()+"  "+storage.getQuantity());
				if(storage.isEnabled() == false)
					{
						return new ResponseEntity<String>("Product:"+storage.getProduct().getName()+" unavailable", HttpStatus.BAD_REQUEST);
					}
				if(basketProduct.getQuantity()> storage.getQuantity()) {
					return new ResponseEntity<String>("Too much of: "+storage.getProduct().getName()+" in the basket", HttpStatus.BAD_REQUEST);
				}
			}
		
		
		
		
		
		
		
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@Override
	public ResponseEntity<String> orderWithAccount(OrderWithAccount orderWithAccount)
	{
		Integer userId = orderWithAccount.getUserId();
		Date deliveryDate = orderWithAccount.getDeliveryDate();
		Integer deliveryId = orderWithAccount.getDeliveryId();
		
		User user = userDAO.findById(userId);
		DeliveryType deliveryType = deliveryTypeDAO.findById(deliveryId);
		
		if(user == null || deliveryType == null || deliveryDate==null) {
			return new ResponseEntity<String>("Bad data", HttpStatus.BAD_REQUEST);
		}
		if(orderWithAccount.getOrderProducts()==null ||  orderWithAccount.getOrderProducts().size() == 0) {
			return new ResponseEntity<String>("Bad data", HttpStatus.BAD_REQUEST);
		}
		
		ResponseEntity<String> responseCheckProducts = checkProducts(orderWithAccount.getOrderProducts());
		
		if(responseCheckProducts.getStatusCode() != HttpStatus.OK) {
			return responseCheckProducts;
		}
		
		double totalPrice = calculateTotalPrice(orderWithAccount.getOrderProducts(), deliveryType)
		
		Order newOrder  = new Order();
		
		newOrder.setUser(user);
		newOrder.setDeliveryType(deliveryType);
		newOrder.setDeliveryDate(deliveryDate);
		newOrder.setComment(orderWithAccount.getComment());
		newOrder.setDate(new Date());
		newOrder.setStatus("PENDING");
		newOrder.setTotalPrice(totalPrice);
		
		Order savedOrder = orderDAO.save(newOrder);
		
		for(OrderProduct orderProduct: orderWithAccount.getOrderProducts()) {
			Product product = productDAO.findById(orderProduct.getProductId());
			
			OrderProducts newOrderProduct = new OrderProducts();
			newOrderProduct.
		}
		
	}
	
	private double calculateTotalPrice(List<OrderProduct> orderProductsList , DeliveryType deliveryType) {
		return 0;
	}
	
	private ResponseEntity<String> checkProducts(List<OrderProduct> orderProductsList) {
		for(OrderProduct orderProduct: orderProductsList)
			{
				System.out.println(orderProductsList);
				Product product = productDAO.findById(orderProduct.getProductId());
				if(product == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}	
				Storage storage = storageDAO.findByProduct(product);
				if(storage == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}
				
				
				System.out.println("[orderService ] storage id "+storage.getStorageId()+"  "+storage.getQuantity());
				if(storage.isEnabled() == false)
					{
						return new ResponseEntity<String>("Product:"+storage.getProduct().getName()+" unavailable", HttpStatus.BAD_REQUEST);
					}
				
				
				if(orderProduct.getProductQuantity()> storage.getQuantity()) {
					return new ResponseEntity<String>("Too much of: "+storage.getProduct().getName()+" in the basket", HttpStatus.BAD_REQUEST);
				}
			}
		
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}
