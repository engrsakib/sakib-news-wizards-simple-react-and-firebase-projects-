import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../Layouts/Home';
import Career from '../Layouts/Career';
import About from '../Layouts/About';
import Fourzeror from '../Layouts/Fourzeror';
import CatgNews from '../pages/CatgNews';
import ManiPage from '../pages/ManiPage';
import PrivatePage from '../pages/PrivatePage';
import LogIn from '../pages/LogIn';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <ManiPage></ManiPage>,
        children: [
          {
            path: "",
            element: <Navigate to={`/category/01`}></Navigate>,
          },
          {
            path: "/category/:id",
            element: <CatgNews></CatgNews>,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/news",
    element: <h1>news</h1>,
  },
  {
    path: "/auth",
    element: <PrivatePage></PrivatePage>,
    children:[
      {
        path: '/auth/logIn',
        element: <LogIn></LogIn>
      },
      {
        path: "/auth/register",
        element: <h1>Register</h1>
      }
    ]
   
  },
  {
    path: "*",
    element: <Fourzeror></Fourzeror>,
  },
  
]);

export default Router;