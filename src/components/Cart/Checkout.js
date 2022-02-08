import React from "react";
import classes from "./Checkout.module.css";
const CheckOut = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Confirm</button>
      </div>
    </form>
  );
};

export default React.memo(CheckOut);
