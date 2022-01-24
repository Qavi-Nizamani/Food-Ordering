import React from "react";
import Button from "../UI/Button";
import classes from "./CartProductForm.module.css";
const CartProductForm = ({ onAdd, onRemove, count }) => {
  const isQuantityZero = count > 0 ? false : true;
  return (
    <div className={classes.cartProductForm}>
      <Button
        disabled={isQuantityZero}
        className={classes.cartProductForm_button}
        onClick={onRemove}
      >
        -
      </Button>
      <Button className={classes.cartProductForm_button} onClick={onAdd}>
        +
      </Button>
    </div>
  );
};

export default CartProductForm;
