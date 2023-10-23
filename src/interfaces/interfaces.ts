import {store} from "../redux/store";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type TCountSliceState = {
    minValue: number;
    maxValue: number;
    count: number;
    error: boolean;
    editMode: boolean;
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
