import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Wrapper from "../UI/Wrapper";
import Hero from "./Hero";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Wrapper className={classes.header__nav}>
          <h2>React Meals</h2>
          <HeaderCartButton onOpen={props.onOpen} />
        </Wrapper>
      </header>
      <Hero />
    </>
  );
};

export default React.memo(Header);
