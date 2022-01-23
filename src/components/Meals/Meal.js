import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./Meal.module.css";
const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const isAddedInCart = cartCtx.products.some(product=>props.id === product.id);

  return (
    <div className={classes.meal}>
      <div className={classes.meal__detail}>
        <span className={classes.meal__detail_title}>{props.title}</span>
        <span className={classes.meal__detail_desc}>{props.description}</span>
        <span className={classes.meal__detail_price}>${props.price}</span>
      </div>
      <div className={classes.meal__action}>
        <div className={classes.meal__action_quantity}>
          <label htmlFor={props.id}>Quantity</label>
          <input
            id={props.id}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <Button
          className={classes.meal__action_button}
          disabled={isAddedInCart}
          onClick={() =>
            cartCtx.onProductAdd({
              type: "ADD_PRODUCT",
              product: {
                id: props.id,
                title: props.title,
                price: props.price,
                count: parseInt(quantity),
              },
            })
          }
        >
          +Add
        </Button>
      </div>
    </div>
  );
};

export default Meal;
