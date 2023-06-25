import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from 'firebase/auth';
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  InputLabel,
  OutlinedInput,
  FormControl,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { firebaseConfig } from '../..';

const AuthForm = ({ signup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const changeEmailHandler = event => {
    setEmail(event.target.value);
  };
  const changePasswordHandler = event => {
    setPassword(event.target.value);
  };

  const submitHandler = async event => {
    event.preventDefault();
    const auth = getAuth(firebaseConfig);
    // connectAuthEmulator(auth, 'http://localhost:3000/');

    if (signup) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
    
        console.log(response.user);
  
      } catch (error) {
        console.log(error);
      }
    }
  };

  const auth = getAuth();
  console.log(auth);

  return (
    <Card component="form" onSubmit={submitHandler}>
      <CardContent>
        <Grid container spacing={2} sx={{ maxWidth: 'sm' }}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h5"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {signup ? 'Sign Up' : 'Login'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              fullWidth
              value={email}
              onChange={changeEmailHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                endAdornment={
                  <IconButton onClick={togglePasswordHandler} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                }
                value={password}
                onChange={changePasswordHandler}
              />
            </FormControl>
          </Grid>
          {signup && (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  label="Confirm Password"
                  endAdornment={
                    <IconButton
                      onClick={toggleConfirmPasswordHandler}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  }
                />
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button fullWidth variant="contained" type="submit">
              {signup ? 'Sign Up' : 'Login'}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="subtitle1"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              {signup ? `Already have an account? ` : `Don't have an account?`}
              {signup ? (
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  &nbsp;Login
                </Link>
              ) : (
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  &nbsp;Sign Up
                </Link>
              )}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
