import React from "react";
import classes from "./CartProduct.module.css";
import CartProductForm from "./CartProductForm";
const CartProduct = (props) => {
  return (
    <div className={classes.cartProduct}>
      <div className={classes.cartProduct__detail}>
        <span className={classes.cartProduct__detail_title}>{props.title}</span>
        <div className={classes.cartProduct__detail_info}>
          <span className={classes.cartProduct__detail__info_price}>
            ${props.price}
          </span>
          <span className={classes.cartProduct__detail__info_quantity}>
            x{props.count}
          </span>
        </div>
      </div>
      <CartProductForm
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        count={props.count}
      />
    </div>
  );
};

export default CartProduct;
