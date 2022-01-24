import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  let updatedProducts = [...state.products];
  let existingProductIndex;
  switch (action.type) {
    case "INCREASE":
      existingProductIndex = updatedProducts.findIndex((product) => {
        return product.id === action.id;
      });
      updatedProducts[existingProductIndex].count += 1;
      return {
        count: 1 + state.count,
        products: updatedProducts,
      };
    case "DECREASE":
      existingProductIndex = updatedProducts.findIndex((product) => {
        return product.id === action.id;
      });
      updatedProducts[existingProductIndex].count -= 1;
      if (updatedProducts[existingProductIndex].count === 0) {
        updatedProducts.splice(existingProductIndex, 1);
      }
      return {
        count: state.count - 1,
        products: updatedProducts,
      };
    case "ADD_PRODUCT":
      existingProductIndex = state.products.findIndex((product) => {
        return product.id === action.product.id;
      });
      const existingProduct = state.products[existingProductIndex];

      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          count: existingProduct.count + action.product.count,
        };
        updatedProducts[existingProductIndex] = updatedProduct;
      } else {
        updatedProducts = state.products.concat(action.product);
      }
      return {
        count: action.product.count + state.count,
        products: updatedProducts,
      };

    default:
      return {
        count: state.count,
        products: state.products,
      };
  }
};

const CartContextProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, {
    count: 0,
    products: [],
  });

  const addProductHandler = (product) => {
    cartAction({ type: "ADD_PRODUCT", product: product });
  };
  const decreaseHandler = (id) => {
    cartAction({ type: "DECREASE", id });
  };
  const increaseHandler = (id) => {
    cartAction({ type: "INCREASE", id });
  };

  const cartContext = {
    count: cartState.count,
    onProductAdd: addProductHandler,
    onIncrease: increaseHandler,
    onDecrease: decreaseHandler,
    products: cartState.products,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
