import classes from "./DeliveryEnd.module.css";
import { Link, redirect } from "react-router-dom";

function DeliveryEnd() {
  return (
    <div className={classes.main}>
      <h1>Thank You for your order.</h1>
      <p>It will be send as soon as possible!</p>
      <Link to='/'>
        <button>Go home</button>
      </Link>
    </div>
  );
}

export default DeliveryEnd;
