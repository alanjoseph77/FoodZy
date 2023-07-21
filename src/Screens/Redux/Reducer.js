// import { combineReducers } from 'redux';
// import cartReducer from './CartItems';

// // Import other reducers as needed

// const rootReducer = combineReducers({
//     cart: cartReducer,
    
//     // Add other reducers here
//   });
  
//   export default rootReducer;
import cartItemsReducer from './CartItems';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  cartItems: cartItemsReducer,
});

export default rootReducer;
