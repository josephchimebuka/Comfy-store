// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice'

export interface RootState {
  cartreducer: ReturnType<typeof cartReducer>;
  userreducer: ReturnType<typeof userReducer>;
  // ... other slices
}

const rootReducer = combineReducers({
  cartreducer: cartReducer,
  userreducer: userReducer
  // ... other slices
});

export default rootReducer;
