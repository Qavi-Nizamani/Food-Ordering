import React from "react";
import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.css";
const CheckOut = (props) => {
  const {
    value: nameValue,
    isValueValid: isNameValueValid,
    hasError: nameHasError,
    onChange: nameValueChangeHandler,
    onBlur: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: streetValue,
    isValueValid: isStreetValueValid,
    hasError: streetHasError,
    onChange: streetValueChangeHandler,
    onBlur: streetBlurHandler,
    reset: resetStreet,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: postalValue,
    isValueValid: isPostalValueValid,
    hasError: postalHasError,
    onChange: postalValueChangeHandler,
    onBlur: postalBlurHandler,
    reset: resetPostal,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: cityValue,
    isValueValid: isCityValueValid,
    hasError: cityHasError,
    onChange: cityValueChangeHandler,
    onBlur: cityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim().length > 0);

  const isFormValid =
    isNameValueValid &&
    isCityValueValid &&
    isPostalValueValid &&
    isStreetValueValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }
    props.onSubmit({
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: cityValue,
    });
    resetCity();
    resetName();
    resetStreet();
    resetPostal();
  };

  const nameClasses = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const streetClasses = streetHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const postalClasses = postalHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  const cityClasses = cityHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={nameClasses}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={nameValueChangeHandler}
          value={nameValue}
          onBlur={nameBlurHandler}
        ></input>
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetValueChangeHandler}
          value={streetValue}
          onBlur={streetBlurHandler}
        ></input>
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal</label>
        <input
          type="text"
          id="postal"
          onChange={postalValueChangeHandler}
          value={postalValue}
          onBlur={postalBlurHandler}
        ></input>
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityValueChangeHandler}
          value={cityValue}
          onBlur={cityBlurHandler}
        ></input>
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
