import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './routes/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import Products from './routes/Products';
// import ErrorPage from './routes/ErrorPage';
import SearchNotFound from './routes/SearchNotFound';
import SingleProductDetails from './components/Products/SingleProductDetails';
import { Provider } from 'react-redux';
import store from './store/index';
import Cart from './routes/Cart';
import AdminPanel from './routes/AdminPanel';
import EditProduct from './routes/EditProduct';
import AddProduct from './routes/AddProduct';
import SignUp from './routes/SignUp';
import AuthForm from './components/Auth/AuthForm';
import { initializeApp } from 'firebase/app';

export const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyC-UfzY6CtjYi8m0cz7PW0at_BaekN9X4g',
  authDomain: 'react-http-b5876.firebaseapp.com',
  databaseURL:
    'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-http-b5876',
  storageBucket: 'react-http-b5876.appspot.com',
  messagingSenderId: '537238956412',
  appId: '1:537238956412:web:062c68cdb6f7655450dcf9',
});

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
        path: '/login',
        element: <AuthForm />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/products/:pageNumber',
        element: <Products />,
        errorElement: <SearchNotFound />,
      },

      {
        path: '/item/:productId',
        element: <SingleProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/admin-panel',
        element: <AdminPanel />,
        children: [
          {
            path: 'page/:pageNumber',
            element: <Cart />,
          },
        ],
      },
      {
        path: '/add-product',
        element: <AddProduct />,
      },
      {
        path: '/edit-product/:productId',
        element: <EditProduct />,
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
