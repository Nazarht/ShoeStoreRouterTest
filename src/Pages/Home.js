import { Link } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.home}>
      <img alt="White sneakers on black background" src="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" />
      <h1>Welcome to our shoes shop</h1>
      <p>
        Every sneaker you want is always available and verified by Us. Buy and
        sell new sneakers & shoes from Air Jordan, Adidas, Nike, Yeezy and more!
      </p>
    </section>
  );
}

export default Home;
