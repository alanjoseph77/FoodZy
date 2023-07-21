export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const ON_BUY="ON_BUY"

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const incrementQuantity = (item) => ({
  type: INCREMENT_QUANTITY,
  payload: item,
});

export const decrementQuantity = (item) => ({
  type: DECREMENT_QUANTITY,
  payload: item,
});
export const onbuy=(item)=>({
  type:ON_BUY,
  payload:item,
});
