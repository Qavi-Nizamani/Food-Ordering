import React from "react";
import Wrapper from "../UI/Wrapper";
import MealsInformation from "./MealsInformation";
import classes from "./Meals.module.css";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <Wrapper className={classes.meals}>
      <MealsInformation />
      <AvailableMeals />
    </Wrapper>
  );
};

export default Meals;
