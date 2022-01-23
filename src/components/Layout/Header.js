import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealImg from "../../assets/meals.jpg";
import Wrapper from "../UI/Wrapper";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <Wrapper className={classes.header__nav}>
          <h2>React Meals</h2>
          <HeaderCartButton />
        </Wrapper>
      </header>
      <div className={classes.headerBottom}>
        <img src={mealImg} alt="Delicious food on table" />
      </div>
    </>
  );
};

export default Header;
