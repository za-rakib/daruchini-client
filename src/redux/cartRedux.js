import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      switch (action.type) {
        case 'cart/addProduct':
          const { tryTop = {}, tryBottom = {} } = action.payload;
          if (tryTop) {
            state.quantity += parseInt(tryTop.inBag);
            state.total += parseFloat(tryTop.price) * parseInt(tryTop.inBag);
            const hasProduct = state.products.findIndex((r) => r.id === tryTop.id);
            if (hasProduct > -1) {
              state.products[hasProduct].inBag += tryTop.inBag;
            } else {
              state.products = [
                ...state.products,
                tryTop,
              ]
            }
          } else if (tryBottom) {
            state.quantity += parseInt(tryBottom.inBag);
            state.total += parseFloat(tryBottom.price) * parseInt(tryBottom.inBag);
            const hasProduct = state.products.findIndex((r) => r.id === tryBottom.id);
            if (hasProduct > -1) {
              state.products[hasProduct].inBag += tryBottom.inBag;
            } else {
              state.products = [
                ...state.products,
                tryBottom,
              ]
            }
          }
          break;
        default:
          break;
      }
    },
    updateProduct: (state, action) => {
      switch (action.type) {
        case 'cart/updateProduct':
          const { product = null, value = 0 } = action.payload;
          console.log({product, value})

          const hasProduct = state.products.findIndex((r) => r.id === product);
          if (hasProduct > -1) {
            const inBag = state.products[hasProduct].inBag;
            const price = state.products[hasProduct].price;
            const quantity = state.quantity;
            const total = state.total;
            if (inBag > parseInt(value)) {
              state.quantity = (quantity + (parseInt(value) - inBag));
              state.total = (total + ((parseInt(value) - inBag) * parseFloat(price)));
              state.products[hasProduct].inBag = parseInt(value);
            } else {
              state.quantity = (quantity - (inBag - parseInt(value)));
              state.total = (total - ((inBag - parseInt(value)) * parseFloat(price)));
              state.products[hasProduct].inBag = parseInt(value);
            }
          }
          break;
        default:
          break;
      }
    },
    deleteProduct: (state, action) => {
      switch (action.type) {
        case 'cart/deleteProduct':
          const hasProduct = state.products.findIndex((r) => r.id === action.payload);
          if (hasProduct > -1) {
            const inBag = state.products[hasProduct].inBag;
            const price = state.products[hasProduct].price;
            const quantity = state.quantity;
            const total = state.total;
            state.quantity = (quantity - inBag);
            state.total = (total - (inBag * parseFloat(price)));
            state.products = state.products.filter((r) => r.id !== action.payload);
          }
          break;
        default:
          break;
      }
    },
  },
});
export const { addProduct, updateProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;