import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectBodyType from '../../Constants/PageStructures/SelectBodyType';
import FatMen from '../../../assets/images/model/men/fat-men.jpg';
import NormalMen from '../../../assets/images/model/men/normal-men.jpg';
import SlimMen from '../../../assets/images/model/men/slim-men.jpeg';
import { Box } from '@mui/system';
import SelectBodyTypeStyles from '../../Constants/PageStructures/SelectBodyType.module.css';

export const Men = () => {
  return (
    <>
      <SelectBodyType>
        <Typography sx={{margin: '30px 0'}} variant="h2" component="h1">Select Body Type</Typography>
        <Box className={SelectBodyTypeStyles['body-type-section']}>
          {/* <Box className={SelectBodyTypeStyles['body-type-cards']}>
            <Link to="/trial-room/men/healthy">
              <img src={FatMen} alt="Healthy Man" />
            </Link>
            <Link to="/trial-room/men/healthy">
              <Button>Healthy</Button>
            </Link>
          </Box> */}
          <Box className={SelectBodyTypeStyles['body-type-cards']}>
            <Link to="/trial-room/men/normal">
              <img src={NormalMen} alt="Normal Man" />
            </Link>
            <Link to="/trial-room/men/normal">
              <Button>Normal</Button>
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
