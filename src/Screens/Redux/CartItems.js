const cartItemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.payload, quantity: 1 }];


      case 'REMOVE_FROM_CART':
        const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      
        if (existingItemIndex !== -1) {
          // If the item exists in the cart, create a new array and remove the item at the existingItemIndex
          const updatedState = [...state];
          updatedState.splice(existingItemIndex, 1);
          return updatedState;
        }
        case 'INCREMENT_QUANTITY':
          return state.map(item =>
            item === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          );
    
        case 'DECREMENT_QUANTITY':
          return state.map(item =>
            item === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          case'ON_BUY':
          return [...state, { ...action.payload, quantity: 1 }];
        
        

    default:
      return state;
  }
};

export default cartItemsReducer;
