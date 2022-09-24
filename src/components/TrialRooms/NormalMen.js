import { Box, Button, FormControlLabel, Paper, Switch, Tab, Tabs } from '@mui/material';
import React from 'react';
import CommonStyles from './Common.module.css';
import NormalMenImage from '../../assets/images/model/men/normal-men.jpg';
import fakeData from './data.json';

const NormalMen = (props) => {
  const [value, setValue] = React.useState(0);
  const [tryTop, setTryTop] = React.useState(1);
  const [tryBottom, setTryBottom] = React.useState({
    bottom: 0,
    category: "pant",
    desc: "Pant 001",
    height: "202px",
    id: 5,
    img: "https://drive.google.com/uc?id=1a3n-Ui2GBKHsEQWBawsVJhnRtpWLgaCu",
    inStock: true,
    left: 125,
    price: "1200",
    right: 0,
    setId: 5,
    size: ['S', 'M', 'L', 'XL'],
    title: "Pant 001",
    top: 230,
    width: "104px"
  });
  const [tuckIn, setTuckIn] = React.useState(false);
  const [topCart, setTopCart] = React.useState(null);
  const [bottomCart, setBottomCart] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shirts = fakeData?.filter((r) => r.category === 'shirt');
  const allPanjabi = fakeData?.filter((r) => r.category === 'panjabi');
  const findShirts = fakeData?.find((r) => r.category === 'trialShirt' && r.id === tryTop);
  const findPanjabis = fakeData?.find((r) => r.category === 'trialPanjabi' && r.id === tryTop);
  const pants = fakeData?.filter((r) => r.category === 'pant');
  const allLungi = fakeData?.filter((r) => r.category === 'lungi');

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
              <Tab label="Panjabi" />
              <Tab label="Lungi" />
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
                          <Button variant="outlined" onClick={() => {setTryTop(shirt?.setId); setTopCart(shirt);}}>Try</Button>
                        </Box>
                      </Paper>
                    );})
                  }
                </>
              </Box>
            )}
            {value === 1 && (
              <Box className={CommonStyles['col-box']}>
                <>
                  {pants?.map((pant) => {
                    return (
                      <Paper sx={{margin: '10px 10px 0 0'}}>
                        <Box className={CommonStyles['col-cards-pant']} key={pant?.id}>
                          <img src={pant?.img} alt="Shirt 001" />
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
                            <Box component="b">৳{pant?.price}</Box>
                          </Box>
                          <Button variant="outlined" onClick={() => {setTryBottom(pant); setBottomCart(pant);}}>Try</Button>
                        </Box>
                      </Paper>
                    );})
                  }
                </>
              </Box>
            )}
            {value === 2 && (
              <Box className={CommonStyles['col-box']}>
                <>
                  {allPanjabi?.map((panjabi) => {
                    return (
                      <Paper sx={{margin: '10px 10px 0 0'}}>
                        <Box className={CommonStyles['col-cards-pant']} key={panjabi?.id}>
                          <img src={panjabi?.img} alt="Shirt 001" />
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
                            <Box component="b">৳{panjabi?.price}</Box>
                          </Box>
                          <Button variant="outlined" onClick={() => {setTryTop(panjabi?.setId); setTuckIn(false); setTopCart(panjabi);}}>Try</Button>
                        </Box>
                      </Paper>
                    );})
                  }
                </>
              </Box>
            )}
            {value === 3 && (
              <Box className={CommonStyles['col-box']}>
                <>
                  {allLungi?.map((lungi) => {
                    return (
                      <Paper sx={{margin: '10px 10px 0 0'}}>
                        <Box className={CommonStyles['col-cards-pant']} key={lungi?.id}>
                          <img src={lungi?.img} alt="Shirt 001" />
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
                            <Box component="b">৳{lungi?.price}</Box>
                          </Box>
                          <Button variant="outlined" onClick={() => {setTryBottom(lungi); setBottomCart(lungi);}}>Try</Button>
                        </Box>
                      </Paper>
                    );})
                  }
                </>
              </Box>
            )}
          </Box>
          <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, position: 'relative' }}>
            <img src={NormalMenImage} alt="Model" className={CommonStyles['trial-room-image']} />
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
                  zIndex: !tuckIn ? 1 : null,
                }}
              />
            )}
            {tryTop && findPanjabis && (
              <img
                src={findPanjabis?.img}
                alt="Design"
                className={CommonStyles['trial-dress']}
                style={{
                  width: findPanjabis.width,
                  height: findPanjabis.height,
                  top: findPanjabis.top || null,
                  left: findPanjabis.left || null,
                  bottom: findPanjabis.bottom  || null,
                  right: findPanjabis.right || null,
                  zIndex: 1,
                }}
              />
            )}
            {tryBottom && (
              <img
                src={tryBottom?.img}
                alt="Design"
                className={CommonStyles['trial-dress']}
                style={{
                  width: tryBottom.width,
                  height: tryBottom.height,
                  top: tryBottom.top || null,
                  left: tryBottom.left || null,
                  bottom: tryBottom.bottom  || null,
                  right: tryBottom.right || null,
                }}
              />
            )}
            {!findPanjabis && (
              <Box style={{textAlign: 'right'}}>
                <FormControlLabel
                  value={tuckIn}
                  control={<Switch color="secondary" />}
                  label="Tuck in"
                  labelPlacement="start"
                  onClick={() => setTuckIn(!tuckIn)}
                />
              </Box>
            )}
            <Button variant="outlined" style={{width: '100%', marginTop: '20px'}}>Add to cart</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NormalMen;