import {combineReducers, configureStore, Store} from '@reduxjs/toolkit';

import {TRootState} from '../interfaces/interfaces';
import countSlice from './count-slice';

export const rootReducer = combineReducers({
  countSlice,
});

export const setupStore = (): Store<TRootState> =>
  configureStore({
    reducer: rootReducer,
  });
