import * as actionTypes from "../actions/actionTypes";

const initialState = {
  deliveryTypes: [
    {
      deliveryTypeId: 1,
      name: "Fast delivery",
      description: "Fast delivery in between 1-3 days",
      cost: 9
    },
    {
      deliveryTypeId: 2,
      name: "Store pickup",
      description: "Your package will wait for you in the store",
      cost: 0
    },
    {
      deliveryTypeId: 3,
      name: "Priority delivery",
      description: "You package will be first to be delivered",
      cost: 25
    }
  ]
};

const deliveryTypeReducer = (state = initialState, action) => {
  switch (action.type) {
  }
  return state;
};

export default deliveryTypeReducer;
