import React from "react";

const CartContext = React.createContext({
  count: 0,
  onProductAdd: () => {},
  onDecrease: () => {},
  onIncrease: () => {},
  clear: () => {},
  products: [],
});

export default CartContext;
