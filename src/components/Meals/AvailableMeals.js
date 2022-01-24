import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Meal from "./Meal";
const DUMMY_MEALS = [
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
    price: 59.99,
  },
  {
    id: 4,
    title: "Chicken Malai Boti",
    description: "Delicious Chicken Malai Boti!",
    price: 109.99,
  },
  {
    id: 5,
    title: "Mutton Tikka",
    description: "People's choice Mutton Chikka!",
    price: 199.99,
  },
];
const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => {
    return (
      <Meal
        key={meal.id.toString()}
        id={meal.id}
        title={meal.title}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return <Card className={classes.availableMeals}>{meals}</Card>;
};

export default AvailableMeals;
