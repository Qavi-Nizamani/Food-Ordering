import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  let i;
  switch (action.type) {
    case "INCREASE":
      i = state.products.findIndex((product) => {
        return product.id === action.id;
      });
      state.products[i].count += 1;
      return {
        count: ++state.count,
        products: state.products,
      };
    case "DECREASE":
      i = state.products.findIndex((product) => {
        return product.id === action.id;
      });
      state.products[i].count -= 1;
      return {
        count: --state.count,
        products: state.products,
      };
    case "ADD_PRODUCT":
      let alreadyAdded = state.products.find((x, idx) => {
        if (x.id === action.product.id) {
          state.products[idx].count += 1;
          return true;
        }
        return false;
      });
      if (alreadyAdded) {
        return { count: state.count, products: state.products };
      }
      return {
        count: action.product.count + state.count,
        products: [...state.products, action.product],
      };

    default:
      return {
        count: state.count,
        products: state.products,
      };
  }
};

const CartContextProvider = (props) => {
  //   const [count, setCount] = useState(0);
  //   const [products, setProducts] = useState([]);
  const [cart, cartAction] = useReducer(cartReducer, {
    count: 0,
    products: [],
  });

  //   const onProductAdd = (product) => {
  //     setCount((old) => ++old);
  //     setProducts((old) => {
  //       let exist = old.find((x, idx) => {
  //         if (x.id === product.id) {
  //           old[idx].count = 1 + parseInt(old[idx].count);
  //           return true;
  //         }
  //         return false;
  //       });
  //       if (exist) {
  //         return [...old];
  //       }
  //       return [...old, product];
  //     });
  //   };
  //   const onProductRemove = (product) => {
  //     setCount((old) => --old);
  //     setProducts((old) => {
  //       let exist = old.find((x, idx) => {
  //         if (x.id === product.id) {
  //           old[idx].count -= 1;
  //           if (old[idx].count === 0) {
  //             old = old.filter((item) => item.id !== x.id);
  //           }
  //           return true;
  //         }
  //         return false;
  //       });
  //       if (exist) {
  //         return [...old];
  //       }
  //       setCount((old) => ++old);
  //       return [...old];
  //     });
  //   };

  return (
    <CartContext.Provider
      value={{
        count: cart.count,
        onProductAdd: cartAction,
        onIncrease: cartAction,
        onDecrease: cartAction,
        products: cart.products,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
