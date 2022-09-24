import React, { useEffect, useState } from 'react';
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
import registerVideo from '../../../assets/Video/registerVideo.mp4'
import { publicRequest } from '../../../requestMethod';
import { useDispatch } from 'react-redux';

const theme = createTheme();

export const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  //   console.log(data);
  // };
 
const handleInputData =(e)=>{
  console.log({e});
  setRegisterData((prev)=>{
    return {
      ...prev ,[e.target.name]:e.target.value
    }
  })
}


useEffect(() => {
  const getUser = async () => {
    try {
      const res = await publicRequest.get("/users/registervalid");
      setUserData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  getUser();
}, []);

const handleClick = (e) => {
  e.preventDefault();

  if (registerData.password !== registerData.confirmPassword) {
    alert("Password does not match");
  } else if (registerData.password.trim().length <= 6) {
    alert("Password must have 6 characters");
  } else if (
    userData.find((user) => user.userName === registerData.userName)
  ) {
    alert("User name already exists");
  } else if (userData.find((user) => user.email === registerData.email)) {
    alert("This Email already exists");
  } else {
    const { confirmPassword, ...rest } = registerData;
    // register(dispatch, rest);
     alert("Registration Successful");
  }
};

console.log({userData});

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
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
          >   <source src={registerVideo} type="video/mp4" />
          </video>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
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
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
              onChange={handleInputData}
                fullWidth
                label="Your Name"
                name="name"
                margin="normal"
              />
              <TextField
              onChange={handleInputData}
                required
                fullWidth
                label="Email Address"
                name="email"
                margin="normal"
              />
              <TextField
              onChange={handleInputData}
                margin="normal"
                fullWidth
                id="username"
                label="User Name"
                name="username"
              />
              <TextField
              onChange={handleInputData}
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
              >
                Sign UP
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
