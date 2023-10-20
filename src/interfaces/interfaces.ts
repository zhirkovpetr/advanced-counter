import { rootReducer, setupStore } from '../redux/store';

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];

export type TCountSliceState = {
  counter: {
    minValue: number;
    maxValue: number;
    count: number;
    error: boolean;
    editMode: boolean;
  }
};

export type TSetMinValue = {
    minValue: number;
}

export type TSetMaxValue = {
  maxValue: number;
}

export type TSetCount = {
  count: number;
}

export type TSetEditMode = {
  editMode: boolean;
}

export type TSetError = {
  error: boolean;
}

export type TSetCounter = {
  minValue: number;
  maxValue: number;
  count: number;
  error: boolean;
  editMode: boolean;
}
