import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { resetPasswordThunk } from '../../store/Auth/auth-actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(state => state.authReducer.userId);

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  const changeEmailHandler = event => {
    setEmail(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    dispatch(resetPasswordThunk(email));
    navigate('/login');
  };

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
              Reset password
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
            <Button fullWidth variant="contained" type="submit">
              Send reset password email
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
