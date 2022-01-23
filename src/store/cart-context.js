import React, { useState } from "react";

const CartContext = React.createContext({
  count: 0,
  onProductAdd: () => {},
  onProductRemove: () => {},
  products: [],
});

export const CartContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const onProductAdd = (product) => {
    setCount((old) => ++old);
    setProducts((old) => {
      let exist = old.find((x, idx) => {
        if (x.id === product.id) {
          old[idx].count = 1 + parseInt(old[idx].count);
          return true;
        }
        return false;
      });
      if (exist) {
        return [...old];
      }
      return [...old, product];
    });
  };
  const onProductRemove = (product) => {
    setCount((old) => --old);
    setProducts((old) => {
      let exist = old.find((x, idx) => {
        if (x.id === product.id) {
          old[idx].count -= 1;
          if (old[idx].count === 0) {
            old = old.filter((item) => item.id !== x.id);
          }
          return true;
        }
        return false;
      });
      if (exist) {
        return [...old];
      }
      setCount((old) => ++old);
      return [...old];
    });
  };

  return (
    <CartContext.Provider
      value={{ count, onProductAdd, onProductRemove, products }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
