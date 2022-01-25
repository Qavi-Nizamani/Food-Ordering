import React from "react";
import classes from "./CartForm.module.css";
import Button from "../UI/Button";
const CartForm = (props) => {
  
  return (
    <div className={classes.cartForm}>
      <div className={classes.cartForm__totalAmount}>
        <h3>Total Amount:</h3>
        <span>${props.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.cartForm__action}>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onClose}>Order</Button>
      </div>
    </div>
  );
};

export default CartForm;
