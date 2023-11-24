import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Login from "./Components/Login";
import Categories from "./Components/Categories";
import HomeBody from "./Components/HomeBody";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomeBody />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Auth0Provider
      domain="dev-o3mj8cienxlz118r.us.auth0.com"
      clientId="3ATdUdutCOgtEbqBCQJbEz5GZEL0Mttw"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  );
}
