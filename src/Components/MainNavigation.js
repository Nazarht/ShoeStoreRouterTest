import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {

   const cart = useSelector(state => state.cart);

   let cartAmount = 0;

   const allItems = Object.values(cart);
   for (const item of allItems) {
    const amounts = Object.values(item);

       const sum = amounts.reduce((acc,value) => acc + value, 0);
        cartAmount += sum;
   }

  return (
    <header>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              end
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <div className={classes.cart}>
            <NavLink to='cart'>


            <img src='https://img.icons8.com/sf-black-filled/512/shopping-cart.png' />
            <span>{cartAmount}</span>
            </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
