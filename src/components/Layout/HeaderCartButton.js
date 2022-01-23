import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartProducts from "../Cart/CartProducts";
const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);
  const [areShowingProducts, setAreShowingProducts] = useState(false);

  const showProducts = () => {
    setAreShowingProducts(true);
  };
  const hideProducts = () => {
    setAreShowingProducts(false);
  };
  return (
    <>
      <button className={classes.button} onClick={showProducts}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>{cartCtx.count}</span>
      </button>
      {areShowingProducts && (
        <CartProducts products={cartCtx.products} onClick={hideProducts} />
      )}
    </>
  );
};

export default HeaderCartButton;
