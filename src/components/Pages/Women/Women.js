import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import SlimWomen from '../../../assets/images/model/women/slim-women.jpg';
import NormalWomen from '../../../assets/images/model/women/normal-women.jpg';
import SelectBodyType from '../../Constants/PageStructures/SelectBodyType';
import SelectBodyTypeStyles from '../../Constants/PageStructures/SelectBodyType.module.css';

export const Women = () => {
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
            <Link to="/trial-room/women/normal">
              <img src={NormalWomen} alt="Normal Man" />
            </Link>
            <Link to="/trial-room/women/normal">
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
