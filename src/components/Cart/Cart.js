import React, { useState, useContext, useCallback } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartProduct from "./CartProduct";
import CartForm from "./CartForm";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const cartCtx = useContext(CartContext);

  const onAdd = (id) => {
    cartCtx.onIncrease(id);
  };
  const onRemove = (id) => {
    cartCtx.onDecrease(id);
  };

  const orderHandler = useCallback(() => {
    setIsOrdered(true);
  }, []);

  const totalAmount = cartCtx.products.reduce((amount, product) => {
    return amount + product.price * product.count;
  }, 0);
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
      {isOrdered && <Checkout onClose={props.onClose} />}
      {!isOrdered && (
        <CartForm
          onClose={props.onClose}
          onOrder={orderHandler}
          totalAmount={totalAmount}
        />
      )}
    </Modal>
  );
};

export default React.memo(Cart);
