import React, { useState, useContext, useCallback } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartProduct from "./CartProduct";
import CartAction from "./CartAction";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";
import Button from "../UI/Button";

const Cart = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSendingOrder, setIsSendingOrder] = useState(false);
  const [didOrderSent, setDidOrderSent] = useState(false);
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

  const submitOrderHandler = async (userData) => {
    setIsSendingOrder(true);
    const res = await fetch(
      "https://food-order-f3a45-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.products,
        }),
      }
    );
    cartCtx.clear();
    setIsSendingOrder(false);
    setDidOrderSent(true);
  };
  const totalAmount = cartCtx.products.reduce((amount, product) => {
    return amount + product.price * product.count;
  }, 0);

  const content = (
    <>
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
      {isOrdered && (
        <Checkout onSubmit={submitOrderHandler} onClose={props.onClose} />
      )}
      {!isOrdered && (
        <CartAction
          onClose={props.onClose}
          onOrder={orderHandler}
          totalAmount={totalAmount}
        />
      )}
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSendingOrder && !didOrderSent && content}
      {isSendingOrder && !didOrderSent && (
        <p>Sending your order! please wait</p>
      )}
      {!isSendingOrder && didOrderSent && (
        <section>
          <p>We recieved your order! Contact you soon! Thank you.</p>
          <div className={classes.cartAction}>
            <Button onClick={props.onClose}>Confirm</Button>
          </div>
        </section>
      )}
    </Modal>
  );
};

export default React.memo(Cart);
