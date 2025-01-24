import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddProduct from './pages/AddProduct';
import Products from './pages/Products';
import Panier from './pages/Panier';
import Order from './pages/Order';
import OrdersAdmin from './pages/OrdersAdmin';


const router = createBrowserRouter([ {
  path: "/",
  element: <App />,
  children: [ 
    {
      path: "/",
      element: <Homepage />
    },


    {
      path: "/AddProduct",
      element: (
        
          <AddProduct />
       
      ),
    },

    {
      path: "/Products",
      element: (
        
          <Products />
       
      ),
    },

    {
      path: "/Panier",
      element: (
        
          <Panier />
       
      ),
    },

    {
      path: "/Order",
      element: (
        
          <Order />
       
      ),
    },



    {
      path: "/OrdersAdmin",
      element: (
        
          <OrdersAdmin />
       
      ),
    },

  ]
}
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




