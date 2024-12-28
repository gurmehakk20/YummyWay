import React, { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import './App.css';
import { Outlet } from "react-router-dom";

const Grocery = lazy(() => import('./Components/Grocery'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>LOADING.....</h1>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: '/restaurants/:resid',
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />
  },
]);

const App = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
