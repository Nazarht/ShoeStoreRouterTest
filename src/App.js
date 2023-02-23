import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductPage, { loader as productPageLoader } from "./Components/ProductPage";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/Error";
import Home from "./Pages/Home";
import LayoutRoot from "./Pages/Root";
import Shop, { loader as Productsloader } from "./Pages/Shop";
import ShopRoot from "./Pages/ShopRoot";
import { action as cartAction} from "./Components/Form";
import DeliveryEnd from "./Pages/DeliveryEnd";

const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <ShopRoot />,
        children: [
          {
            index: true,
            element: <Shop />,
            loader: Productsloader,
          },
          { path: ":productId", element: <ProductPage />, loader: productPageLoader },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
        loader: Productsloader,
        action: cartAction
      },
      {
        path: 'end',
        element: <DeliveryEnd />
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
