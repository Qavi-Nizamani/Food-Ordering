import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartForm.module.css";
import Button from "../UI/Button";
const CartForm = (props) => {
  const cartCtx = useContext(CartContext);
  
  const totalAmount = cartCtx.products.reduce((amount, product) => {
    return amount + product.price * product.count;
  }, 0);

  return (
    <div className={classes.cartForm}>
      <div className={classes.cartForm__totalAmount}>
        <h3>Total Amount:</h3>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.cartForm__action}>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onClose}>Order</Button>
      </div>
    </div>
  );
};

export default CartForm;
