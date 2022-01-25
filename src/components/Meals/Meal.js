import React from "react";
import classes from "./Meal.module.css";
import MealItemForm from "./MealItemForm";
const Meal = (props) => {
  console.log('meal');
  return (
    <div className={classes.meal}>
      <div className={classes.meal__detail}>
        <span className={classes.meal__detail_title}>{props.title}</span>
        <span className={classes.meal__detail_desc}>{props.description}</span>
        <span className={classes.meal__detail_price}>${props.price}</span>
      </div>
      <MealItemForm id={props.id} title={props.title} price={props.price} />
    </div>
  );
};

export default Meal;
