import React from "react";
import mealImg from "../../assets/meals.jpg";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <img src={mealImg} alt="Delicious food on table" />
    </div>
  );
};

export default Hero;
