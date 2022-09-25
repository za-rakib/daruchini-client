import { Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteForever as DeleteForeverIcon,
} from '@mui/icons-material';
import StripeCheckout from "react-stripe-checkout";
import { deleteAll, deleteProduct, updateProduct } from '../../../redux/cartRedux';
import { useNavigate } from 'react-router-dom';
import { publicRequest } from '../../../requestMethod';
import logo from '../../../assets/images/logo.png'
const KEY = `pk_test_51IeI82DajAFn8IvdTIwoZrn1AeXHw2WNHkB9MxDrmPpJszevjqo4wdqwRCzdxm8QoAKF86F0zB6epI0D2QKhm5A500ifw7VnS6`

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  //console.log(cart);

  const onToken = (token) => {
    setStripeToken(token);
  };
  //console.log(stripeToken);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await publicRequest.post("/checkouts/payment", {
          tokenId: stripeToken.id,
          amount:products.total * 100,
        });
        dispatch(deleteAll())
        navigate("/success", { state: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && products.total >= 1 && makeRequest();
  }, [stripeToken, products.total, navigate,dispatch]);
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
                  <Box sx={{maxWidth: '250px', maxHeight: '250px', margin: 'auto'}}>
                    <img
                      src={product?.img}
                      alt="Product"
                      style={{
                        maxHeight: '250px',
                        width: 'auto',
                      }}
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

        <StripeCheckout
              name="Wish Hut"
              image={logo}
              shippingAddress
              billingAddress
              description={`Your total is ${""} ${products.total}`}
              amount={products.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
            
              <Button variant='contained' color="success" sx={
         { my:5}
        }>Checkout</Button>
            </StripeCheckout>
      
      </Box>
    </>
  );
};
