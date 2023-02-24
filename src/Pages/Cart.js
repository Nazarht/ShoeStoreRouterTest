import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import Form from "../Components/Form";
import { useState } from "react";

function Cart() {
  const [showForm, setShowForm] = useState(false);
  const cart = useSelector((state) => state.cart);
  const data = useLoaderData();
  const dispatch = useDispatch();

  const handleAdd = (size, prod, e) => {
    dispatch(cartActions.addSize([prod, size]));
  };

  const handleMinus = (size, prod, e) => {
    dispatch(cartActions.minusSize([prod, size]));
  };

  const loadedCart = [];
  let totalPrice = 0;

  for (const product in cart) {
    const loadedSizes = [];

    const sizes = {};
    Object.entries(cart[product])
      .sort((a, b) => {
        const one = a[0].match(/[+-]?([0-9]*[.])?[0-9]+/);
        const two = b[0].match(/[+-]?([0-9]*[.])?[0-9]+/);
        if (+one[0] > +two[0]) {
          console.log(a[0], one[0], b[0], two[0], "Yes");
          return 1;
        } else {
          console.log(a[0], one[0], b[0], two[0], "No");
          return -1;
        }
      })
      .forEach((item) => {
        sizes[item[0]] = item[1];
      });

    for (const size in sizes) {
      loadedSizes.push(
        <div className={classes["product-info"]} key={size}>
          <p>{size}</p>{" "}
          <div className={classes["product-control"]}>
            <div>
              <button onClick={handleMinus.bind(this, size, product)}>-</button>
              <button onClick={handleAdd.bind(this, size, product)}>+</button>
            </div>
            <p>{cart[product][size]}</p>
          </div>
        </div>
      );
    }

    const amount = Object.values(cart[product]).reduce((a, b) => a + b, 0);
    const price = data[product].price * amount;
    totalPrice += price;

    loadedCart.push(
      <div className={classes["cart-item"]} key={product}>
        <img src={data[product].img} alt="a pair of sneakers" />
        <div>
          <div className={classes["cart-info"]}>
            <h3>{data[product].name}</h3>
            <span>Amount: {amount}</span>
            <p>Price for all: {price.toFixed(2)} $</p>
          </div>
          <div>
            <h3>Sizes</h3>
            {loadedSizes}
          </div>
        </div>
      </div>
    );
  }

  const onShow = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  const cartIsFull = (
    <>
      <h1>Cart</h1>
      {loadedCart}
      <div className={classes.price}>
        <p>Total price: {totalPrice.toFixed(2)} $ </p>
        {!showForm && <button onClick={onShow}>Submit</button>}
        {showForm && <button onClick={onShow}>Close</button>}
      </div>

      {showForm && (
        <div className={classes.form}>
          <Form />
        </div>
      )}
    </>
  );

  const cartIsEmpty = (
    <div className={classes.empty}>
      <h2>Your cart is empty...</h2>
    </div>
  );

  return <div className={classes["cart-holder"]}>{totalPrice !== 0 ? cartIsFull : cartIsEmpty}</div>;
}

export default Cart;
