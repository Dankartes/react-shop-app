import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import Products from './routes/Products';
import { loader as productsLoader } from './components/ShopPagination';
import ErrorPage from './routes/ErrorPage';
import AddProduct, { action as addProductAction } from './routes/AddProduct';
import SearchNotFound from './routes/SearchNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/products/:pageNumber',
        element: <Products />,
        loader: productsLoader,
        errorElement: <SearchNotFound />
      },
      {
        path: '/add-product',
        element: <AddProduct />,
        action: addProductAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
