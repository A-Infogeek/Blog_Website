import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog';
import Home from './components/Home';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path:"blog/:blogId",
    element: <Blog />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
   <RouterProvider router={router} />
  </React.StrictMode>
);