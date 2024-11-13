import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
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
    element: <h1>Error</h1>,
  },
]);

export default Router;