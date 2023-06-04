import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './routes/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import Products from './routes/Products';
// import ErrorPage from './routes/ErrorPage';
import AddProduct from './routes/AddProduct';
import SearchNotFound from './routes/SearchNotFound';
import SingleProductDetails from './components/Products/SingleProductDetails';
import { Provider } from 'react-redux';
import store from './store/index';
import Cart from './routes/Cart';
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
        path: '/item/:productId',
        element: <SingleProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
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
