import { useRouteError } from "react-router-dom";
import classes from "./Error.module.css";

function ErrorPage() {
  const error = useRouteError();

  let errorMessage = 'Something went wrong :('
  let errorTitle = "An Error Occured!";

  if (error.status === 500) {
    errorMessage = error.message;
  }

  if (error.status === 404) {
    errorTitle = 'Wrong path';
    errorMessage = 'This path doesent exist, please try other';
  }

  return <div className={classes.error}>
    <h1>{errorTitle}</h1>
    <p>{errorMessage}</p>
  </div>;
}

export default ErrorPage;
