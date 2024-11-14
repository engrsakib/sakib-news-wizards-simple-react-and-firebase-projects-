import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../Layouts/Home';
import Career from '../Layouts/Career';
import About from '../Layouts/About';
import Fourzeror from '../Layouts/Fourzeror';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Navigate to={`/category/01`}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <h1>data</h1>,
      },
    ],
  },
  {
    path: "/news",
    element: <h1>news</h1>,
  },
  {
    path: "/auth",
    element: <h1>LogIn</h1>,
  },
  {
    path: "*",
    element: <Fourzeror></Fourzeror>,
  },
  {
    path: "/career",
    element: <Career></Career>,
  },
  {
    path: "/abot",
    element: <About></About>,
  },
]);

export default Router;