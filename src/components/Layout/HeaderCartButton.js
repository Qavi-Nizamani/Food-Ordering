import React, { useContext, useEffect, useRef } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const buttonRef = useRef();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (cartCtx.count > 0) {
      buttonRef.current.classList.add(classes.anim);
    }
    const i = setTimeout(() => {
      buttonRef.current.classList.remove(classes.anim);
    }, 300);
    return () => {
      clearTimeout(i);
    };
  }, [cartCtx.count]);
  return (
    <>
      <button className={classes.button} onClick={props.onOpen} ref={buttonRef}>
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>{cartCtx.count}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
