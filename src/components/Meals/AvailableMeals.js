import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Meal from "./Meal";
const AvailableMeals = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasHttpError, setHasHttpError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://food-order-f3a45-default-rtdb.firebaseio.com/meals.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      setData(await res.json());
      setIsLoading(false);
    };
    fetchData().catch((error) => {
      console.log(error);
      setHasHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return  <Card className={classes.availableMeals}><p className={classes.loading}>Loading...</p></Card>;
  }
  if (hasHttpError) {
    return <Card className={classes.availableMeals}><p className={classes.httpError}>{hasHttpError}</p></Card>;
  }
  const meals = data.map((meal) => {
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
