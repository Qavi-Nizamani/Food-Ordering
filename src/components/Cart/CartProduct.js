import React from "react";
import classes from "./CartProduct.module.css";
import CartProductForm from "./CartProductForm";
const CartProduct = ({ id, title, price, count }) => {
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
      <CartProductForm id={id} count={count}/>
    </div>
  );
};

export default CartProduct;
