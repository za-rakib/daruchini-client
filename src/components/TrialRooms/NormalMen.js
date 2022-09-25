import { Box, Button, FormControlLabel, List, ListItem, ListItemText, Paper, Switch, Tab, Tabs, TextField } from '@mui/material';
import React from 'react';
import CommonStyles from './Common.module.css';
import NormalMenImage from '../../assets/images/model/men/normal-men.jpg';
import fakeData from './data.json';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';

const NormalMen = (props) => {
  const [value, setValue] = React.useState(0);
  const [tryTop, setTryTop] = React.useState(null);
  const [tryBottom, setTryBottom] = React.useState(null);
  const [tuckIn, setTuckIn] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shirts = fakeData?.filter((r) => r.category === 'shirt');
  const allPanjabi = fakeData?.filter((r) => r.category === 'panjabi');

  const pants = fakeData?.filter((r) => r.category === 'pant');
  const allLungi = fakeData?.filter((r) => r.category === 'lungi');


  const handleAddToCart = () => {
    dispatch(addProduct({tryTop, tryBottom}))
  }

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
                      <Paper sx={{margin: '10px 10px 0 0'}} key={shirt?.id}>
                        <Box className={CommonStyles['col-cards']}>
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
                          <Button variant="outlined" onClick={() => setTryTop(shirt)}>Try</Button>
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
                          <Button variant="outlined" onClick={() => setTryBottom(pant)}>Try</Button>
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
                          <Button variant="outlined" onClick={() => {setTryTop(panjabi); setTuckIn(false);}}>Try</Button>
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
                          <Button variant="outlined" onClick={() => {setTryBottom(lungi); setTuckIn(false);}}>Try</Button>
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
            {tryTop && (
              <img
                src={tryTop?.trialImg}
                alt="Design"
                className={CommonStyles['trial-dress']}
                style={{
                  width: tryTop.width,
                  height: tryTop.height,
                  top: tryTop.top || null,
                  left: tryTop.left || null,
                  bottom: tryTop.bottom  || null,
                  right: tryTop.right || null,
                  zIndex: !tuckIn ? 1 : null,
                }}
              />
            )}
            {/* {tryTop && (
              <img
                src={tryTop?.trialImg}
                alt="Design"
                className={CommonStyles['trial-dress']}
                style={{
                  width: tryTop.width,
                  height: tryTop.height,
                  top: tryTop.top || null,
                  left: tryTop.left || null,
                  bottom: tryTop.bottom  || null,
                  right: tryTop.right || null,
                  zIndex: 1,
                }}
              />
            )} */}
            {tryBottom && (
              <img
                src={tryBottom?.trialImg}
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
            {tryTop?.category === 'shirt' && tryBottom?.category === 'pant' && (
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
            {/* Top small cart */}
            {tryTop && (
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem
                  disableGutters
                  secondaryAction={
                    <>
                      <TextField
                        id="inBag"
                        label="In Bag"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          min: 1,
                          max: 10,
                          step: 1,
                        }}
                        defaultValue={tryTop.inBag}
                        variant="standard"
                        sx={{maxWidth: '70px'}}
                        onChange={(e) => {
                          setTryTop((prev) => { return { ...prev, inBag: parseInt(e.target.value) } })
                        }}
                      />
                    </>
                  }
                >
                  <ListItemText primary={tryTop.title} />
                </ListItem>
              </List>
            )}
            {/* Bottom small cart */}
            {tryBottom && (
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem
                  disableGutters
                  secondaryAction={
                    <>
                      <TextField
                        id="inBag"
                        label="In Bag"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          min: 1,
                          max: 10,
                          step: 1,
                        }}
                        defaultValue={tryBottom.inBag}
                        variant="standard"
                        sx={{maxWidth: '70px'}}
                        onChange={(e) => {
                          setTryBottom((prev) => { return { ...prev, inBag: parseInt(e.target.value) } })
                        }}
                      />
                    </>
                  }
                >
                  <ListItemText primary={tryBottom.title} />
                </ListItem>
              </List>
            )}
            {(tryTop || tryBottom) && (
              <Button
                variant="outlined"
                style={{width: '100%', marginTop: '20px'}}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NormalMen;