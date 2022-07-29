import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import courseApi from '~/api/CourseApi';
import { ICourse } from '~/interface';
import { toastEmit } from '~/utils/toasify';
import { AppState } from '../index';
import { changeLoading } from './loadingOverlayReducer';

interface IInitState {
  courses: ICourse[];
}

const initialState: IInitState = {
  courses: [],
};

export const getAllCourse = createAsyncThunk('course/getAll', async () => {
  return (await courseApi.getAll()).data.data;
});

export const getOneCourse = createAsyncThunk('course/getOne', async (id: number) => {
  return (await courseApi.getOne(id)).data.data;
});

export const createCourse = createAsyncThunk('course/create', async (payload: FormData) => {
  try {
    const res = await courseApi.create(payload);
    const { data } = res.data;
    Swal.fire('Create course successfully !', '', 'success');
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
});

export const updateCourse = createAsyncThunk(
  'course/update',
  async ({ id, payload }: { id: number; payload: FormData }, { dispatch }) => {
    try {
      dispatch(changeLoading(true));
      const res = await courseApi.update(id, payload);
      const { data, message } = res.data;

      dispatch(changeLoading(false));
      toastEmit({
        message,
        type: 'success',
      });
      return data;
    } catch (error: any) {
      dispatch(changeLoading(false));
      throw new Error(error);
    }
  },
);

export const deleteCourse = createAsyncThunk('course/_delete', async (id: number) => {
  try {
    await courseApi.delete(id);

    return id;
  } catch (error: any) {
    throw new Error(error);
  }
});

const courseSlice = createSlice({
  initialState,
  name: 'course',
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllCourse.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
    build.addCase(deleteCourse.fulfilled, (state, action) => {
      state.courses = state.courses.filter((c) => c.id !== action.payload);
    });
    build.addCase(createCourse.fulfilled, (state, action) => {
      state.courses = [...state.courses, action.payload];
    });
    build.addCase(updateCourse.fulfilled, (state, action) => {
      state.courses = state.courses.map((c) => (c.id === action.payload.id ? action.payload : c));
    });
  },
});

export const {} = courseSlice.actions;

export const courseSelector = (state: AppState) => state.course;

export default courseSlice.reducer;
