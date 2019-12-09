import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basketVerified: false,
  orderComplete: false,
  orders: [
    {
      orderId: 1,
      user: {
        userId: 4,
        name: "JANUSZ",
        surname: "Kappaf",
        email: "janusz@janusz.com",
        role: "USER",
        enabled: true,
        adress: {
          adressId: 6,
          country: "PL",
          city: "Chelm",
          street: "torunska 18/8",
          localNumber: "18/8",
          zipCode: "33-666"
        },
        phoneNumber: "123456789",
        businessClient: false
      },
      deliveryAdress: {
        adressId: 6,
        country: "PL",
        city: "Chelm",
        street: "torunska 18/8",
        localNumber: "18/8",
        zipCode: "33-666"
      },
      deliveryType: {
        deliveryTypeId: 1,
        name: "Fast delivery",
        description: "Fast delivery in between 1-3 days",
        cost: 9.0
      },
      deliveryDate: "2019-12-03T00:00:00.000+0000",
      comment: "",
      date: "2019-12-04T00:00:00.000+0000",
      status: "PENDING",
      totalPrice: 0.0,
      orderProducts: [
        {
          orderedProductId: 1,
          orderId: 1,
          product: {
            productId: 17
          },
          quantity: 1,
          type: ""
        }
      ]
    }
  ]
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET_VERIFIED: {
      return {
        ...state,
        basketVerified: action.isVerified
      };
    }

    case actionTypes.SET_ORDERS: {
      return {
        ...state,
        orders: [...action.orders]
      };
    }

    case actionTypes.SET_ORDER_COMPLETE: {
      return {
        ...state,
        orderComplete: action.isComplete
      };
    }
  }
  return state;
};

export default orderReducer;
