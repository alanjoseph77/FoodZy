import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './Reducer';

const persistConfig = {
  key: 'cartItems', // Update the key to match the root reducer key
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(/* Add any middleware here if needed */));
const persistor = persistStore(store);

export { store, persistor };
