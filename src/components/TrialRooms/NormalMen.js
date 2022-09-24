import { Box, Button, Tab, Tabs } from '@mui/material';
import React from 'react';
import CommonStyles from './Common.module.css';
import NormalMenImage from '../../assets/images/model/men/normal-men.jpg';
import fakeData from './data.json';

const NormalMen = (props) => {
  const [value, setValue] = React.useState(0);
  const [tryTop, setTryTop] = React.useState(null);
  const [tryBottom, setTryBottom] = React.useState(null);
  const [tuckIn, setTuckIn] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shirts = fakeData?.filter((r) => r.category === 'shirt');
  const findShirts = fakeData?.find((r) => r.category === 'trialShirt' && r.id === tryTop);

  console.log(findShirts)
  return (
    <>
      <Box style={{maxWidth: '100%'}}>
        <Box className={CommonStyles.base}>
          <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, bgcolor: 'background.paper' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              style={{

              }}
            >
              <Tab label="Shirt" />
              <Tab label="Pant" />
            </Tabs>

            {value === 0 && (
            <Box className={CommonStyles['col-box']}>
              <>
                {shirts?.map((shirt) => {
                  return (
                      <Box className={CommonStyles['col-cards']} key={shirt?.id}>
                        <img src={shirt?.img} alt="Shirt 001" />
                        <Button variant="outlined" onClick={() => setTryTop(shirt?.setId)}>Try</Button>
                      </Box>
                      // <Box className={CommonStyles['col-cards']}>
                      //   <img src={shirt002} alt="Shirt 002" />
                      //   <Button variant="outlined">Try</Button>
                      // </Box>
                      );
                    })}
                </>
              </Box>
            )}
            {/* {value === 1 && (
              <Box className={CommonStyles['col-box']}>
                <Box className={CommonStyles['col-cards-pant']}>
                  <img src={pant001} alt="Pant 001" />
                  <Button variant="outlined">Try</Button>
                </Box>
                <Box className={CommonStyles['col-cards-pant']}>
                  <img src={pant002} alt="Pant 002" />
                  <Button variant="outlined">Try</Button>
                </Box>
              </Box>
            )} */}
          </Box>
          <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, position: 'relative' }}>
            <img src={NormalMenImage} alt="Model" className={CommonStyles['trial-room-image']} />
            {console.log(tryTop)}
            {tryTop && (
              <img src={findShirts?.img} alt="Design" className={CommonStyles['trial-dress']} />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NormalMen;