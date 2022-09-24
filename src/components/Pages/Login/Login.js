import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
 import loginVideo from '../../../assets/Video/loginVideo.mp4'
 import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/apiCalls';

const theme = createTheme();

export const Login=()=> {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
console.log( isFetching,error);
  //  data send to redux action
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { userName, password });
    // console.log(userName, password);
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ minHeight: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
         
        >
           <video
            loop={true}
            autoPlay={true}
            autoplayTimeout={10000}
            autoplayHoverPause={true}
            muted={true}
          >   <source src={loginVideo} type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             Login
            </Typography>
            <Box component="form" noValidate  sx={{ mt: 1 }}>
              <TextField
           
               onChange={(e) => setUserName(e.target.value)}
                margin="normal"
                fullWidth
                label="User Name"
                name="userName"
              />
              <TextField
                  onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
              >
               Login
              </Button>
              <Grid container>
              {error && 
                <Grid item xs>
                 
                  Something went wrong...
    
                </Grid>}
                <Grid item>
                  <Link to="/register">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}