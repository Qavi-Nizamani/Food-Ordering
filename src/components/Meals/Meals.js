import React from "react";
import Wrapper from "../UI/Wrapper";
import MealsInformation from "./MealsInformation";
import Card from "../UI/Card";
import classes from "./Meals.module.css";
import Meal from "./Meal";
const meals = [
  {
    id: 1,
    title: "Burger",
    description: "Double roti zinger burger spicy!",
    price: 200.99,
  },
  {
    id: 2,
    title: "Roll",
    description: "Chicken chatpatta roll!",
    price: 99.99,
  },
  {
    id: 3,
    title: "Chicken Tikka",
    description: "Mouth watering chicken Tikka!",
    price: 200.99,
  },
];
const Meals = () => {
  return (
    <Wrapper className={classes.meals}>
      <MealsInformation />
      <Card className={classes.meals__list}>
        {meals.map((meal) => {
          return (
            <Meal
              key={meal.id.toString()}
              id={meal.id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </Card>
    </Wrapper>
  );
};

export default Meals;
