import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./CartProduct.module.css";
const CartProduct = ({ id, title, price, count }) => {
  const cartCtx = useContext(CartContext);
  // const product = { id, title, price, count };
  return (
    <div className={classes.cartProduct}>
      <div className={classes.cartProduct__detail}>
        <span className={classes.cartProduct__detail_title}>{title}</span>
        <div className={classes.cartProduct__detail_info}>
          <span className={classes.cartProduct__detail__info_price}>
            ${price}
          </span>
          <span className={classes.cartProduct__detail__info_quantity}>
            x{count}
          </span>
        </div>
      </div>
      <div className={classes.cartProduct__action}>
        <Button
          className={classes.cartProduct__action_button}
          onClick={() => cartCtx.onDecrease({ type: "DECREASE", id })}
        >
          -
        </Button>
        <Button
          className={classes.cartProduct__action_button}
          onClick={() => cartCtx.onIncrease({ type: "INCREASE", id })}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
