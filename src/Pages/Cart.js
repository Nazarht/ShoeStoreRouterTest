import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

function Cart() {
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

  for (const product in cart) {
    const loadedSizes = [];

    const sizes = {};
    Object.entries(cart[product]).sort((a, b) =>{
        const one = a[0].match(/[+-]?([0-9]*[.])?[0-9]+/);
        const two = b[0].match(/[+-]?([0-9]*[.])?[0-9]+/);
        if (+one[0] > +two[0]) {
            console.log(a[0] , one[0], b[0], two[0], 'Yes')
            return 1
        } else {
            console.log(a[0] , one[0], b[0], two[0], 'No')
            return -1
        }
        return 0
    }).forEach((item) => {
        sizes[item[0]] = item[1];
      });

    for (const size in sizes) {
      loadedSizes.push(
        <div className={classes["product-info"]}>
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

    loadedCart.push(
      <div className={classes["cart-item"]}>
        <img src={data[product].img} />
        <div>
          <div className={classes["cart-info"]}>
            <h3>{data[product].name}</h3>
            <span>Amount: {amount}</span>
            <p>Price for all: {(data[product].price * amount).toFixed(2)} $</p>
          </div>
          <div>
            <h3>Sizes</h3>
            {loadedSizes}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>
      {loadedCart}
    </div>
  );
}

export default Cart;
