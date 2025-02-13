import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basketId: 0,
  valid: false,
  basketProducts: [
    {
      quantity: 0,
      product: {
        productId: 1
      }
    }
  ]
};

const basketReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_BASKET: {
      return { ...state, ...action.basket };
    }

    case actionTypes.ADD_ITEM_TO_BASKET: {
      if (state === null) {
        return {
          basketProducts: [
            {
              quantity: action.form.quantity,
              product: {
                productId: action.form.productId
              }
            }
          ]
        };
      } else {
        console.log(state);
        let found = false;
        let products = state.basketProducts.map(basketProduct => {
          console.log(basketProduct);
          if (basketProduct.product.productId === action.form.productId) {
            found = true;
            return {
              ...basketProduct,
              quantity: basketProduct.quantity + action.form.quantity
            };
          }
          return { ...basketProduct };
        });

        if (found === false) {
          products.push({
            quantity: action.form.quantity,
            product: { productId: action.form.productId }
          });
        }

        console.log(products);

        let newState = { ...state, basketProducts: [...products] };
        console.log(newState);
        return newState;
      }
    }

    case actionTypes.REMOVE_ITEM_FROM_BASKET: {
      console.log(action);
      if (state === null) {
        return state;
      } else {
        let products = state.basketProducts.map(basketProduct => {
          console.log(basketProduct);
          if (basketProduct.product.productId === action.form.productId) {
            if (basketProduct.quantity + action.form.quantity <= 0) {
              return null;
            } else {
              return {
                ...basketProduct,
                quantity: basketProduct.quantity + action.form.quantity
              };
            }
          }
          return { ...basketProduct };
        });

        products = products.filter(product => {
          if (product !== null) return product;
        });

        if (products.length == 0) {
          return null;
        }

        let newState = { ...state, basketProducts: [...products] };
        console.log(products);
        console.log(newState);
        return newState;
      }
    }

    case actionTypes.CLEAR_BASKET: {
      return null;
    }
  }

  return state;
};

export default basketReducer;
