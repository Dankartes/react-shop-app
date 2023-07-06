import { authenticate, logout } from './auth-slice';
const API_KEY = 'AIzaSyC-UfzY6CtjYi8m0cz7PW0at_BaekN9X4g';

export const authenticateThunk = (email, password, signup = false) => {
  return async dispatch => {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    if (signup)
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      dispatch(authenticate(data));
    } catch (error) {
      console.log('big error:', error);
    }
  };
};
