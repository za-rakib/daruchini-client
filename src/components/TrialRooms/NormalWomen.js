import { Box, Button, Tab, Tabs } from '@mui/material';
import React from 'react';
import CommonStyles from './Common.module.css';
import NormalWomenImage from '../../assets/images/model/women/normal-women.jpg';
import fakeData from './data.json';

const NormalWomen = (props) => {
  const [value, setValue] = React.useState(0);
  const [tryTop, setTryTop] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shirts = fakeData?.filter((r) => r.category === 'salwarKameez');
  const findShirts = fakeData?.find((r) => r.category === 'trialSalwarKameez' && r.id === tryTop);

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
              <Tab label="Salwar kameez" />
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
                        );
                      }
                    )
                  }
                </>
              </Box>
            )}
          </Box>
          <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, position: 'relative' }}>
            <img src={NormalWomenImage} alt="Model" className={CommonStyles['trial-room-image']} />
            {tryTop && findShirts && (
              <img
                src={findShirts?.img}
                alt="Design"
                className={CommonStyles['trial-dress']}
                style={{
                  width: findShirts.width,
                  height: findShirts.height,
                  top: findShirts.top || null,
                  left: findShirts.left || null,
                  bottom: findShirts.bottom  || null,
                  right: findShirts.right || null,
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NormalWomen;