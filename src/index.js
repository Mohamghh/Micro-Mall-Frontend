import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddProduct from './pages/AddProduct';
import Products from './pages/Products';


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

  ]
}
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




