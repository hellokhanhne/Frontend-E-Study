import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../index';

interface IInitState {
  isLoading: boolean;
}

const initialState: IInitState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  initialState,
  name: 'loading',
  reducers: {
    changeLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { changeLoading } = loadingSlice.actions;

export const loadingSelector = (state: AppState) => state.loadingOverlay;

export default loadingSlice.reducer;
