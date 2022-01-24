import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./MealItemForm.module.css";
import Button from "../UI/Button";
const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const isAddedInCart = cartCtx.products.some(
    (product) => props.id === product.id
  );
  const product = {
    id: props.id,
    title: props.title,
    price: props.price,
    count: parseInt(quantity),
  };
  return (
    <form className={classes.form}>
      <div className={classes.form_quantity}>
        <label htmlFor={props.id}>Quantity</label>
        <input
          id={props.id}
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </div>
      <Button
        className={classes.form_button}
        disabled={isAddedInCart}
        onClick={() => cartCtx.onProductAdd(product)}
      >
        +Add
      </Button>
    </form>
  );
};

export default MealItemForm;
