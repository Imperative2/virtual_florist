package com.masluch.virtual_florist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.masluch.virtual_florist.DAO.BasketDAO;
import com.masluch.virtual_florist.DAO.BasketProductsDAO;
import com.masluch.virtual_florist.DAO.ProductDAO;
import com.masluch.virtual_florist.DAO.StorageDAO;
import com.masluch.virtual_florist.entities.Basket;
import com.masluch.virtual_florist.entities.BasketProducts;
import com.masluch.virtual_florist.entities.Product;
import com.masluch.virtual_florist.entities.Storage;

@Service
public class BasketServiceImpl implements BasketService
{

	@Autowired
	private BasketDAO basketDAO;

	@Autowired
	private StorageDAO storageDAO;

	@Autowired
	private ProductDAO productDAO;

	@Autowired
	private BasketProductsDAO basketProductsDAO;

	@Override
	public List<Basket> findAll()
	{
		return basketDAO.findAll();
	}

	@Override
	public Basket findById(int basketId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Basket save(Basket basket)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Basket basket)
	{
		// TODO Auto-generated method stub

	}

	@Override
	public ResponseEntity<String> deleteById(int storageId)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public ResponseEntity<Basket> getUserBasket(String userId)
	{
		Integer id;
		try
			{
				id = Integer.decode(userId);
			}
		catch (Exception ex)
			{
				return new ResponseEntity<Basket>(HttpStatus.BAD_REQUEST);
			}

		Basket foundBasket = basketDAO.findByUserId(id);
		if (foundBasket == null)
			{
				return new ResponseEntity<Basket>(HttpStatus.NO_CONTENT);
			}

		return new ResponseEntity<Basket>(foundBasket, HttpStatus.OK);
	}

	@Override
	@Transactional
	public ResponseEntity<Basket> addProductToBasket(BasketProducts basketProduct, String userId)
	{
		Integer id;
		try
			{
				id = Integer.decode(userId);
			}
		catch (Exception ex)
			{
				System.out.println("1");
				return new ResponseEntity<Basket>(HttpStatus.BAD_REQUEST);
			}
		Basket foundBasket = basketDAO.findByUserId(id);

		if (basketProduct.getQuantity() > 0 || basketProduct.getProduct() != null
				|| basketProduct.getProduct().getProductId() != 0)
			{
				Product foundProduct = productDAO.findById(basketProduct.getProduct().getProductId());
				if (foundProduct == null)
					{
						System.out.println("2");
						return new ResponseEntity<Basket>(HttpStatus.BAD_REQUEST);
					}

				Storage foundStorage = storageDAO.findByProduct(foundProduct);
				System.out.println(foundStorage);
				if (foundStorage == null || foundStorage.isEnabled() == false
						|| foundStorage.getQuantity() < basketProduct.getQuantity())
					{
						System.out.println("3");
						return new ResponseEntity<Basket>(HttpStatus.BAD_REQUEST);
					}

				if (foundBasket == null)
					{
						Basket newBasket = new Basket();
						newBasket.setUserId(id);
						foundBasket = basketDAO.save(newBasket);
					}

				List<BasketProducts> basketProducts = foundBasket.getBasketProducts();
				for (BasketProducts baskProd : basketProducts)
					{
						if (baskProd.getProduct().getProductId() == basketProduct.getProduct().getProductId())
							{
								baskProd.setQuantity(baskProd.getQuantity() + basketProduct.getQuantity());
								baskProd = basketProductsDAO.update(baskProd);
								System.out.println("4");
								return new ResponseEntity<Basket>(foundBasket, HttpStatus.OK);
							}
					}

				BasketProducts newBasketProduct = new BasketProducts();
				newBasketProduct.setQuantity(basketProduct.getQuantity());
				newBasketProduct.setProduct(foundStorage.getProduct());
				newBasketProduct.setBasketId(foundBasket.getBasketId());

				newBasketProduct = basketProductsDAO.save(newBasketProduct);

				System.out.println("5");
				return new ResponseEntity<Basket>(foundBasket, HttpStatus.OK);

			} else
				{
					System.out.println("6");
					return new ResponseEntity<Basket>(HttpStatus.BAD_REQUEST);

				}

	}

}
