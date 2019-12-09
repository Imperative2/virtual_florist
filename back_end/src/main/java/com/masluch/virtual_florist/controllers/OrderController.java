package com.masluch.virtual_florist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.masluch.virtual_florist.DAO.MonthlyStatusDAO;
import com.masluch.virtual_florist.Requests.OrderWithAccount;
import com.masluch.virtual_florist.Requests.OrderWithoutAccount;
import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.services.BasketService;
import com.masluch.virtual_florist.services.OrderService;
import com.masluch.virtual_florist.services.UserService;
import com.masluch.virtual_florist.entities.Order;;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController
{
	@Autowired
	private OrderService orderService;

	@Autowired
	private UserService userService;

	@Autowired
	private MonthlyStatusDAO monthlyStatusDAO;

	@GetMapping("/")
	public List<Order> getAllOrders()
	{
		return orderService.findAll();
	}

	@PostMapping("/verifyBasket")
	public ResponseEntity<String> verifyBasket(@RequestBody Basket basket)
	{
		System.out.println(basket);
		return orderService.verifyBasket(basket);

	}

	@PostMapping("/submitWithAccount")
	public ResponseEntity<String> submitOrderWithAccount(
			@RequestBody(required = true) OrderWithAccount orderWithAccount)
	{
		System.out.println(orderWithAccount);
		System.out.println(monthlyStatusDAO.getLatestStatus());
		return orderService.orderWithAccount(orderWithAccount);
	}

	@PostMapping("/submitWithoutAccount")
	public ResponseEntity<String> submitWithoutAccount(
			@RequestBody(required = true) OrderWithoutAccount orderWithoutAccount)
	{
		System.out.println(orderWithoutAccount);

		ResponseEntity<String> userResponse = userService.registerTemporaryUser(orderWithoutAccount.getUserRegisterData());
		if (userResponse.getStatusCode() != HttpStatus.OK)
		{
			return userResponse;
		}
		
		orderWithoutAccount.setUserId(Integer.decode(userResponse.getBody()));
		
		OrderWithAccount orderWithAccount = new OrderWithAccount();
		orderWithAccount.setUserId(orderWithoutAccount.getUserId());
		orderWithAccount.setComment(orderWithoutAccount.getComment());
		orderWithAccount.setDeliveryDate(orderWithoutAccount.getDeliveryDate());
		orderWithAccount.setDeliveryDetails(orderWithoutAccount.getDeliveryDetails());
		orderWithAccount.setDeliveryId(orderWithoutAccount.getDeliveryId());
		orderWithAccount.setOrderProducts(orderWithoutAccount.getOrderProducts());

		ResponseEntity<String>  orderResponse = orderService.orderWithAccount(orderWithAccount);
		if(orderResponse.getStatusCode() != HttpStatus.OK) {
			userService.deleteById(orderWithAccount.getUserId());
			return orderResponse;
		}
		else {
			userService.setUserAsTemporary(orderWithAccount.getUserId());
			return orderResponse;
		}
	}

}
