import { authenticate, logout } from './auth-slice';
import { openDialogBox } from '../Dialog/dialog-slice';
import { enqueueSnackbar } from 'notistack';
import PersonIcon from '@mui/icons-material/Person';

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

      if (!response.ok) {
        console.log(data);
        switch (data.error.message) {
          case 'INVALID_PASSWORD':
            throw new Error('Invalid password!');

          case 'EMAIL_NOT_FOUND':
            throw new Error('Invalid Email!');

          default:
            throw new Error('An error has occured, please try again later!');
        }
      }

      let dialogMessage = 'Login successful!';
      if (signup) dialogMessage = 'Account has been created!';

      enqueueSnackbar(dialogMessage, {
        variant: 'success',
        iconVariant: {
          success: <PersonIcon style={{ marginRight: '5px' }} />,
        },
      });

      dispatch(authenticate(data));
    } catch (error) {
      dispatch(openDialogBox({ title: 'Error', message: error.message }));
    }
  };
};

export const resetPasswordThunk = email => {
  return async dispatch => {
    try {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ requestType: 'PASSWORD_RESET', email }),
        }
      );

      dispatch(
        openDialogBox({
          title: 'Password reset',
          message:
            'An email has been sent, please check your inbox for further instructions!',
        })
      );
    } catch (error) {
      dispatch(
        openDialogBox({
          title: 'Error',
          message: "Couldn't change password, please try again later!",
        })
      );
    }
  };
};
