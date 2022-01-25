import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartProduct from "./CartProduct";
import CartForm from "./CartForm";
import classes from "./Cart.module.css";

const Cart = (props) => {
  // console.log('rendered');
  const cartCtx = useContext(CartContext);

  const onAdd = (id) => {
    cartCtx.onIncrease(id);
  };
  const onRemove = (id) => {
    cartCtx.onDecrease(id);
  };
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
      <CartForm onClose={props.onClose} totalAmount={totalAmount} />
    </Modal>
  );
};

export default React.memo(Cart);
