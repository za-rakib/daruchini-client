import { Box, Button, List, ListItem, ListItemText, Paper, Tab, Tabs, TextField } from '@mui/material';
import React from 'react';
import CommonStyles from './Common.module.css';
import KidBoyImage from '../../assets/images/model/kid/boy-kid.jpg';
import fakeData from './data.json';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const KidBoy = (props) => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  const [tryTop, setTryTop] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const shirts = fakeData?.filter((r) => r.category === 'boyCol');

  const handleAddToCart = () => {
    dispatch(addProduct({tryTop}))
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
                          <Button variant="outlined" onClick={() => setTryTop(shirt)}>Try</Button>
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
                }}
              />
            )}
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
            {(tryTop) && (
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

export default KidBoy;