import { IconButton, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteForever as DeleteForeverIcon,
} from '@mui/icons-material';
import { deleteProduct, updateProduct } from '../../../redux/cartRedux';

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          textAlign: 'center',
          maxWidth: '1140px',
          margin: 'auto',
        }}
      >
        <Typography variant="h3" component="h2" margin="20px 0">My Cart ({products.quantity}) ({products.total} BDT)</Typography>
        <Box sx={{ display: 'flex', flex: '0 0 33.333333%', flexWrap: 'wrap' }}>
          {products?.products?.map((product) => {
            return (
              <Box sx={{ width: {xs: '100%', md: '33.33%'} }}>
                <Paper sx={{margin: '10px'}}>
                  <Typography variant="h5" component="h5" margin="10px 0">{product.title}</Typography>
                  <Box sx={{maxWidth: '250px', margin: 'auto'}}>
                    <img
                      src={product?.img}
                      alt='product'
                    />
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px',
                    fontSize: '20px',
                  }}>
                    <Box>Total: </Box>
                    <Box component="b">৳{parseFloat(product.price) * parseInt(product.inBag)}</Box>
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="space-between" padding="10px">
                    <Box fontSize="20px">In Bag:</Box>
                    <Box width="50%">
                      <TextField
                        id="inBag"
                        label=""
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          min: 1,
                          max: 10,
                          step: 1,
                        }}
                        defaultValue={product.inBag}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                          dispatch(updateProduct({product: product.id, value: e.target.value}))
                        }}
                      />
                    </Box>
                    <IconButton aria-label="delete" style={{ color: 'white', margin: '0 10px 0 0' }} onClick={() => {
                      dispatch(deleteProduct(product.id))
                    }}>
                      <DeleteForeverIcon color="error" />
                    </IconButton>
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
