import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./CartProductForm.module.css";
const CartProductForm = ({ id ,count}) => {
  const cartCtx = useContext(CartContext);
  const isQuantityZero = count > 0 ? false : true;
  return (
    <div className={classes.cartProductForm}>
      <Button
        disabled={isQuantityZero}
        className={classes.cartProductForm_button}
        onClick={() => cartCtx.onDecrease({ type: "DECREASE", id })}
      >
        -
      </Button>
      <Button
        className={classes.cartProductForm_button}
        onClick={() => cartCtx.onIncrease({ type: "INCREASE", id })}
      >
        +
      </Button>
    </div>
  );
};

export default CartProductForm;
