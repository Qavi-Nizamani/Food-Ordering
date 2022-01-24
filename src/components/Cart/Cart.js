import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartProduct from "./CartProduct";
import CartForm from "./CartForm";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onAdd = (id) => {
    cartCtx.onIncrease(id);
  };
  const onRemove = (id) => {
    cartCtx.onDecrease(id);
  };
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartCtx.products.map((product) => {
          return (
            <CartProduct
              key={product.id.toString()}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              count={product.count}
              onAdd={onAdd.bind(null, product.id)}
              onRemove={onRemove.bind(null, product.id)}
            />
          );
        })}
      </ul>
      <CartForm onClose={props.onClose} />
    </Modal>
  );
};

export default Cart;
