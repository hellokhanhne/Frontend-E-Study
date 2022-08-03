import { createSlice } from '@reduxjs/toolkit';
import { ICourse } from '~/interface';
import { ILession } from '~/interface/course.interface';
import { AppState } from '../index';

interface IInitState {
  course: ICourse | null;
  lessionSelected: ILession | null;
  isShow: boolean;
}

const initialState: IInitState = {
  course: null,
  lessionSelected: null,
  isShow: false,
};

const videoLoadingOverlay = createSlice({
  initialState,
  name: 'loading',
  reducers: {
    changeVideoOverlayState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { changeVideoOverlayState } = videoLoadingOverlay.actions;

export const courseOverlaySelector = (state: AppState) => state.courseOverlay;

export default videoLoadingOverlay.reducer;
