import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/cart/root-reducer'

const store = configureStore({
  reducer: rootReducer,
  // ... other store configurations
});

export default store;