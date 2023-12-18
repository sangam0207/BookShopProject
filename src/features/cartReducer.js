import { createSlice } from '@reduxjs/toolkit';
 

const defaultState = {
  cartItems: [],
  orderItem:[],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 0,
 
  orderTotal: 0,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState:  defaultState,
  reducers: {
    
        addItem: (state, action) => {
          const { product } = action.payload;
          state.cartItems.push(product);
          state.numItemsInCart += 1;
          state.cartTotal += product.price ;
         cartSlice.caseReducers.calculateTotals(state);
          // toast.success('Item added to cart');
        },
    
        orderItem:(state,action)=>{
          const {product}=action.payload;
          state.orderItem.push(product);
          cartSlice.caseReducers.calculateTotals(state);
          // toast.success('Item has been ordered');
        },
    
      
    removeItem: (state, action) => {
      const {cartId}=action.payload;
      const product=state.cartItems.find((i)=>{
        return i.cartId===cartId
      })
      state.cartItems=state.cartItems.filter((i)=>i.cartId!==cartId)
      state.numItemsInCart -=  1;
          state.cartTotal -= product.price  ;
          cartSlice.caseReducers.calculateTotals(state);
          // toast.success('Item removed from the Cart');
    
        },
    
    calculateTotals:(state)=>{
     
      state.orderTotal = state.cartTotal ;
      localStorage.setItem('cart', JSON.stringify(state));
    }
 
    

  },
});

export const { addItem, removeItem,calculateTotals,orderItem} = cartSlice.actions;

export default cartSlice.reducer;