import {configureStore} from '@reduxjs/toolkit';

import countSlice from './count-slice';

export const store = configureStore({
  reducer: {
    count: countSlice,
  }
})
