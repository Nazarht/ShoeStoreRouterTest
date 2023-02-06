import { useState } from "react";

function useForm(validateFunction) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState();

  const isValid = validateFunction(enteredValue);
  const hasError = !isValid && isTouched;

  const valueFormError = hasError ? "form-control invalid" : "form-control";

  const changeHandler = ({ target }) => {
    setEnteredValue(target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid,
    valueFormError,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
}

export default useForm;
