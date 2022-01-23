import React from "react";
import Card from "../UI/Card";
import classes from "./MealsInformation.module.css";
const MealsInformation = () => {
  return (
    <Card className={classes.mealsInfo}>
      <h2 className={classes.mealsInfo__title}>Delicious food, Delivered to you</h2>
      <p className={classes.mealsInfo__para}>
        You can alter the alignment of the replaced element's content object
        within the element's box using the object-position property.
      </p>
      <p className={classes.mealsInfo__para}>
        You can alter the alignment of the replaced element's content object
        within the element's box using the object-position property.
      </p>
    </Card>
  );
};

export default MealsInformation;
