import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import HomePage from './pages/Home.js';
import ProductsPage from './pages/Product.js';
import React from 'react';
import RootLayout from './pages/Root.js';
import ErrorPage from './pages/Error.js';
import ProductDetailPage from './pages/ProductDetailPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {path: '', element: <HomePage />},
      {path:'products', element: <ProductsPage></ProductsPage> },
      {path:'products/:productId', element: <ProductDetailPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;