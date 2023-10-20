import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  TCountSliceState,
  TSetCount,
  TSetCounter,
  TSetEditMode,
  TSetError,
  TSetMaxValue,
  TSetMinValue
} from "../interfaces/interfaces";


export const initialState: TCountSliceState = {
  counter: {
    minValue: 0,
    maxValue: 5,
    count: 0,
    error: false,
    editMode: true,
  }
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setMinValue: (state, action: PayloadAction<TSetMinValue>) => ({
      ...state, counter: {
        ...state.counter, minValue: action.payload.minValue,
      }
    }),
    setMaxValue: (state, action: PayloadAction<TSetMaxValue>) => ({
      ...state, counter: {
        ...state.counter, maxValue: action.payload.maxValue,
      }
    }),
    setCount: (state, action: PayloadAction<TSetCount>) => ({
      ...state, counter: {
        ...state.counter, count: action.payload.count,
      }
    }),
    setEditMode: (state, action: PayloadAction<TSetEditMode>) => ({
      ...state, counter: {
        ...state.counter, editMode: action.payload.editMode,
      }
    }),
    setError: (state, action: PayloadAction<TSetError>) => ({
      ...state, counter: {
        ...state.counter, error: action.payload.error,
      }
    }),
    setStateLS: (state, action: PayloadAction<TSetCounter>) => {
      state.counter = action.payload
    }
  }
});

export const {setMinValue, setMaxValue, setCount, setEditMode, setError, setStateLS} = countSlice.actions;
export default countSlice.reducer;
