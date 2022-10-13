import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/banner-img.jpg';
import HomeStyles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <Box
        component="main"
        className={HomeStyles.main}
      >
        <Box className={HomeStyles['left-col']}>
          <Link to="/men">
            <Button variant="outlined" color="secondary">Men's Collection</Button>
          </Link>
          <Link to="/women">
            <Button variant="outlined" color="secondary">Women's Collection</Button>
          </Link>
          {/* <Link to="/women">
            <Button variant="outlined" color="secondary">Women's Collection</Button>
          </Link> */}
          <Link to="/kids">
            <Button variant="outlined" color="secondary">Kids's Collection</Button>
          </Link>
        </Box>
        <Box>
          <img src={bannerImg} alt="Daruchini Banner" />
        </Box>
      </Box>
    </>
  );
};
