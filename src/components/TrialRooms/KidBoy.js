import { Box, Button, Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import CommonStyles from './Common.module.css';
import KidBoyImage from '../../assets/images/model/kid/boy-kid.jpg';
import fakeData from './data.json';

const KidBoy = (props) => {
  const [value, setValue] = React.useState(0);
  const [tryTop, setTryTop] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shirts = fakeData?.filter((r) => r.category === 'boyCol');
  const findShirts = fakeData?.find((r) => r.category === 'trialBoyCol' && r.id === tryTop);

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
              <Tab label="Boy" />
            </Tabs>

            {value === 0 && (
              <Box className={CommonStyles['col-box']}>
                <>
                  {shirts?.map((shirt) => {
                    return (
                      <Paper sx={{margin: '10px 10px 0 0'}}>
                        <Box className={CommonStyles['col-cards']} key={shirt?.id}>
                          <img src={shirt?.img} alt="Shirt 001" />
                          <Box
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              margin: '10px 0',
                              fontSize: '18px',
                            }}
                          >
                            <Box>Price:</Box>
                            <Box component="b">৳{shirt?.price}</Box>
                          </Box>
                          <Button variant="outlined" onClick={() => setTryTop(shirt?.setId)}>Try</Button>
                        </Box>
                      </Paper>
                    );})
                  }
                </>
              </Box>
            )}
          </Box>
          <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, position: 'relative' }}>
            <img src={KidBoyImage} alt="Model" className={CommonStyles['trial-room-image']} />
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
            <Button variant="outlined" style={{width: '100%', marginTop: '20px'}}>Add to cart</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default KidBoy;