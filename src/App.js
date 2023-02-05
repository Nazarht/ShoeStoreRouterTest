import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductPage, { loader as productPageLoader } from "./Components/ProductPage";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import LayoutRoot from "./Pages/Root";
import Shop, { loader as Productsloader } from "./Pages/Shop";
import ShopRoot from "./Pages/ShopRoot";

const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutRoot />,
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
        loader: Productsloader
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
