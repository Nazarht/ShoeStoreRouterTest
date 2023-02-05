import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart(state, action) {
      //          object expected : {id: objectid, cartInfo: {amount: x, size: productSize}}
      //          cart state: {id: {size:amount, size:amount}, id: {size:amount, size:amount}}
      if (state[action.payload.id]) {
            if(state[action.payload.id][action.payload.cartInfo.size]) {
                state[action.payload.id][action.payload.cartInfo.size] = +state[action.payload.id][action.payload.cartInfo.size] + +action.payload.cartInfo.amount;
            } else {
                state[action.payload.id][action.payload.cartInfo.size] = +action.payload.cartInfo.amount;
            }
        } else {
            state[action.payload.id] = { [action.payload.cartInfo.size] : +[action.payload.cartInfo.amount]}
        }
    },
    addSize(state, action) {
        //expected arr: [id, size]
        //cart state: {id: {size:amount, size:amount}, id: {size:amount, size:amount}}
        state[action.payload[0]][action.payload[1]] += 1;
        
    },
    minusSize(state, action) {
        //expected arr: [id, size]
        //cart state: {id: {size:amount, size:amount}, id: {size:amount, size:amount}}
        state[action.payload[0]][action.payload[1]] -= 1;
        if ( state[action.payload[0]][action.payload[1]] === 0) {
            delete  state[action.payload[0]][action.payload[1]];
        } 
    }
  },
});

export const cartActions = cart.actions;

export default cart.reducer
