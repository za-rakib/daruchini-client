import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectBodyType from '../../Constants/PageStructures/SelectBodyType';
import BoyKid from '../../../assets/images/model/kid/boy-kid.jpg';
import GirlKid from '../../../assets/images/model/kid/girl-kid.jpg';
import SelectBodyTypeStyles from '../../Constants/PageStructures/SelectBodyType.module.css';

export const Kids = () => {
  return (
    <>
      <SelectBodyType>
        <Typography sx={{margin: '30px 0'}} variant="h2" component="h1">Select Body Type</Typography>
        <Box className={SelectBodyTypeStyles['body-type-section']}>
          <Box className={SelectBodyTypeStyles['body-type-cards']}>
            <Link to="/trial-room/kid/boy">
              <img src={BoyKid} alt="Healthy Man" />
            </Link>
            <Link to="/trial-room/kid/boy">
              <Button>Boy</Button>
            </Link>
          </Box>
          <Box className={SelectBodyTypeStyles['body-type-cards']}>
            <Link to="/trial-room/kid/girl">
              <img src={GirlKid} alt="Normal Man" />
            </Link>
            <Link to="/trial-room/kid/girl">
              <Button>Girl</Button>
            </Link>
          </Box>
          {/* <Box className={SelectBodyTypeStyles['body-type-cards']}>
            <Link to="/trial-room/men/slim">
              <img src={SlimMen} alt="Slim Man" />
            </Link>
            <Link to="/trial-room/men/slim">
              <Button>Slim</Button>
            </Link>
          </Box> */}
        </Box>
      </SelectBodyType>
    </>
  );
};
