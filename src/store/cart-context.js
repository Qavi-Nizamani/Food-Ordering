import React from "react";

const CartContext = React.createContext({
  count: 0,
  onProductAdd: () => {},
  onDecrease: () => {},
  onIncrease: () => {},
  products: [],
});

export default CartContext;
