package com.masluch.virtual_florist.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.entities.Adress;
import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.BasketProducts;
import com.masluch.virtual_florist.entities.DeliveryType;
import com.masluch.virtual_florist.entities.MonthlyStatus;
import com.masluch.virtual_florist.entities.Order;
import com.masluch.virtual_florist.entities.OrderProducts;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;
import com.masluch.virtual_florist.entities.User;
import com.masluch.virtual_florist.DAO.AdressDAO;
import com.masluch.virtual_florist.DAO.DeliveryTypeDAO;
import com.masluch.virtual_florist.DAO.MonthlyStatusDAO;
import com.masluch.virtual_florist.DAO.OrderDAO;
import com.masluch.virtual_florist.DAO.OrderProductsDAO;
import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.DAO.StorageDAO;
import com.masluch.virtual_florist.DAO.UserDAO;
import com.masluch.virtual_florist.Requests.DeliveryDetails;
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

	@Autowired
	private DeliveryTypeDAO deliveryTypeDAO;

	@Autowired
	private MonthlyStatusDAO monthlyStatusDAO;
	
	@Autowired
	private BasketService basketService;
	
	

	@Override
	@Transactional
	public List<Order> findAll()
	{
		return orderDAO.findAll();
	}
	
	@Override
	public List<Order> findUserOrders(String userId)
	{
		Integer id;
		try
			{
				id = Integer.decode(userId);
			}
		catch (Exception ex)
			{
				return null;
			}
		
		User user = userDAO.findById(id);
		if(user != null)
			{
				return orderDAO.findByUser(user);
			}
		return null;
		
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
		if (basketProductsList.size() == 0)
			{
				return new ResponseEntity<String>("No products in basket", HttpStatus.BAD_REQUEST);
			}

		for (BasketProducts basketProduct : basketProductsList)
			{
				System.out.println(basketProduct);
				Product product = basketProduct.getProduct();
				product = productDAO.findById(product.getProductId());
				if (product == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}
				Storage storage = storageDAO.findByProduct(product);
				if (storage == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}

				System.out
						.println("[orderService ] storage id " + storage.getStorageId() + "  " + storage.getQuantity());
				if (storage.isEnabled() == false)
					{
						return new ResponseEntity<String>("Product:" + storage.getProduct().getName() + " unavailable",
								HttpStatus.BAD_REQUEST);
					}
				if (basketProduct.getQuantity() > storage.getQuantity())
					{
						return new ResponseEntity<String>(
								"Too much of: " + storage.getProduct().getName() + " in the basket",
								HttpStatus.BAD_REQUEST);
					}
			}

		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@Override
	@Transactional
	public ResponseEntity<String> orderWithAccount(OrderWithAccount orderWithAccount)
	{
		Integer userId = orderWithAccount.getUserId();
		Date deliveryDate = orderWithAccount.getDeliveryDate();
		Integer deliveryId = orderWithAccount.getDeliveryId();

		User user = userDAO.findById(userId);
		DeliveryType deliveryType = deliveryTypeDAO.findById(deliveryId);

		Adress adress = null;

		if (user == null || deliveryType == null || deliveryDate == null)
			{
				return new ResponseEntity<String>("Bad data", HttpStatus.BAD_REQUEST);
			}
		if (orderWithAccount.getOrderProducts() == null || orderWithAccount.getOrderProducts().size() == 0)
			{
				return new ResponseEntity<String>("Bad data", HttpStatus.BAD_REQUEST);
			}

		ResponseEntity<String> responseCheckProducts = checkProducts(orderWithAccount.getOrderProducts());

		if (responseCheckProducts.getStatusCode() != HttpStatus.OK)
			{
				return responseCheckProducts;
			}

		if (deliveryType.getDeliveryTypeId() == 2)
			{
				adress = adressDAO.findById(1);
			}
		else {
			DeliveryDetails deliveryDetails  = orderWithAccount.getDeliveryDetails();
			Adress foundAdress = adressDAO.findByValues(deliveryDetails.getCountry(), deliveryDetails.getCity(), deliveryDetails.getStreet(), deliveryDetails.getLocalNumber());
			if(foundAdress != null) {
				adress = foundAdress;
			}
			else {
				Adress newAdress = new Adress();
				newAdress.setCountry(deliveryDetails.getCountry());
				newAdress.setCity(deliveryDetails.getCity());
				newAdress.setStreet(deliveryDetails.getLocalNumber());
				newAdress.setZipCode(deliveryDetails.getZipCode());
				adress = adressDAO.save(newAdress);
			}
		}

		Order newOrder = new Order();

		newOrder.setUser(user);
		newOrder.setDeliveryAdress(adress);
		newOrder.setDeliveryType(deliveryType);
		newOrder.setDeliveryDate(deliveryDate);
		newOrder.setComment(orderWithAccount.getComment());
		newOrder.setDate(new Date());
		newOrder.setStatus("PENDING");
		newOrder.setTotalPrice(new Double(0));

		Order savedOrder = orderDAO.save(newOrder);

		double totalPrice = 0;
		totalPrice += deliveryType.getCost();

		for (OrderProduct orderProduct : orderWithAccount.getOrderProducts())
			{
				Product product = productDAO.findById(orderProduct.getProductId());
				MonthlyStatus monthlyStatus = monthlyStatusDAO.getLatestStatus();
				Storage storage = storageDAO.findByProduct(product);

				double productsCost = 0;
				int quantity = orderProduct.getProductQuantity();

				productsCost = quantity * product.getPrice();
				totalPrice += productsCost;

				monthlyStatus.setIncome(monthlyStatus.getIncome() + productsCost);
				monthlyStatus.setProductsSold(monthlyStatus.getProductsSold() + quantity);
				monthlyStatusDAO.update(monthlyStatus);

				storage.setQuantity(storage.getQuantity() - quantity);
				storageDAO.update(storage);

				OrderProducts newOrderProduct = new OrderProducts();
				newOrderProduct.setOrderId(savedOrder.getOrderId());
				newOrderProduct.setProduct(product);
				newOrderProduct.setQuantity(orderProduct.getProductQuantity());
				newOrderProduct.setType("NORMAL");

				orderProductsDAO.save(newOrderProduct);
			}
		savedOrder.setTotalPrice(totalPrice);

		orderDAO.update(savedOrder);
		
		basketService.clearAndDeleteBasket(userId);

		return new ResponseEntity<String>("Done", HttpStatus.OK);

	}

	private ResponseEntity<String> checkProducts(List<OrderProduct> orderProductsList)
	{
		for (OrderProduct orderProduct : orderProductsList)
			{
				System.out.println(orderProductsList);
				Product product = productDAO.findById(orderProduct.getProductId());
				if (product == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}
				Storage storage = storageDAO.findByProduct(product);
				if (storage == null)
					{
						return new ResponseEntity<String>("Bad product", HttpStatus.BAD_REQUEST);
					}

				System.out
						.println("[orderService ] storage id " + storage.getStorageId() + "  " + storage.getQuantity());
				if (storage.isEnabled() == false)
					{
						return new ResponseEntity<String>("Product:" + storage.getProduct().getName() + " unavailable",
								HttpStatus.BAD_REQUEST);
					}

				if (orderProduct.getProductQuantity() > storage.getQuantity())
					{
						return new ResponseEntity<String>(
								"Too much of: " + storage.getProduct().getName() + " in the basket",
								HttpStatus.BAD_REQUEST);
					}
			}

		return new ResponseEntity<String>(HttpStatus.OK);
	}



}
