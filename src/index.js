import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import Products from './routes/Products';

import ErrorPage from './routes/ErrorPage';
import AddProduct from './routes/AddProduct';
import SearchNotFound from './routes/SearchNotFound';
import SingleProductDetails from './components/SingleProductDetails';
import { Provider } from 'react-redux';
import store from './store/index';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/products/:pageNumber',
        element: <Products />,

        errorElement: <SearchNotFound />,
      },
      {
        path: '/add-product',
        element: <AddProduct />,
      },
      {
        path: '/item/:productName',
        element: <SingleProductDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
