import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartProduct from "./CartProduct";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal onClose={props.onClose}>
      {cartCtx.products.map((product) => {
        return (
          <CartProduct
            key={product.id.toString()}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            count={product.count}
          />
        );
      })}
      <div className={classes.cartProducts__action}>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onClose}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
