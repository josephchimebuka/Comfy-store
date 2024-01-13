// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export interface RootState {
  cartreducer: ReturnType<typeof cartReducer>;
  // ... other slices
}

const rootReducer = combineReducers({
  cartreducer: cartReducer,
  // ... other slices
});

export default rootReducer;
