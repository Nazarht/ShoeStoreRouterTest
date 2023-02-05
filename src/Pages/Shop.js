import { json, Link, useLoaderData } from "react-router-dom";
import ProductItem from "../Components/ProductItem";
import classes from "./Shop.module.css";

function Shop() {
  const data = useLoaderData();
  console.log(data);
  const loadedProducts = [];

  for (const product in data) {
    console.log(data[product]);
    loadedProducts.push(
      <Link to={product}>
        <ProductItem id={product} key={product} product={data[product]} />
      </Link>
    );
  }

  return (
    <section className={classes.shop}>
      <h1>Shop</h1>
      <div className={classes["product-holder"]}>{loadedProducts}</div>
    </section>
  );
}

export default Shop;

export async function loader() {
  const response = await fetch(
    "https://react-router-c29dd-default-rtdb.firebaseio.com/products.json"
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch products." },
      {
        status: 500,
      }
    );
  }
  return response;
}
