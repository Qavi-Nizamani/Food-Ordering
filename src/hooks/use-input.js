import { useReducer } from "react";

const initialInput = { value: "", isTouched: false };

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return initialInput;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initialInput);

  const isValueValid = validateValue(inputState.value);
  const hasError = !isValueValid && inputState.isTouched;

  const changeHandler = (e) => {
    dispatchInput({ type: "INPUT", value: e.target.value });
  };

  const blurHandler = (e) => {
    dispatchInput({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValueValid,
    hasError,
    isTouched: inputState.isTouched,
    onChange: changeHandler,
    onBlur: blurHandler,
    reset,
  };
};

export default useInput;
