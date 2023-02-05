import { json, useLoaderData, useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import { useState } from "react";
import cart, { cartActions } from "../store/cart";
import { useDispatch } from "react-redux";

function ProductPage() {

    const params = useParams()

    const dispatch =  useDispatch();

    const [chosenSize, setChosenSize] = useState('US6');

    console.log(chosenSize)

    const sizes = [
        'US6',    'US6.5',  'US7',
        'US7.5',  'US8',    'US8.5',
        'US9',    'US9.5',  'US10',
        'US10.5', 'US11',   'US11.5',
        'US12',   'US12.5', 'US13',
        'US13.5', 'US14',   'US14.5'
      ]



      const sizesOptions = []
      for (const size of sizes) {
        sizesOptions.push(<option key={size} value={size}>{size}</option>)
      }



  const data = useLoaderData();

  const addHandler = () => {
    dispatch(cartActions.addToCart({id: params.productId, cartInfo: {amount: 1, size: chosenSize}}))
  }

  const changeHandler = ({ target }) => {
    setChosenSize(target.value);
  }

  return (
    <div className={classes["product-page"]}>
      <img src={data.img} />
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <span>{data.price}$</span>
      </div>
      <div className={classes.control}>
        <select id='size' onChange={changeHandler} value={chosenSize}>
        {sizesOptions}
        </select>
        <button onClick={addHandler}>Buy</button>
      </div>
    </div>
  );
}

export default ProductPage;

export async function loader({ params }) {
  const response = await fetch(
    `https://react-router-c29dd-default-rtdb.firebaseio.com/products/${params.productId}.json`
  );

  if (!response.ok) {
    throw json(
      { message: "Colud not fetch a product data." },
      {
        status: 500,
      }
    );
  }

  return response;
}
