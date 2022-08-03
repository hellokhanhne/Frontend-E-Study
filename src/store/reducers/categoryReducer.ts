import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryApi from '~/api/categoryApi';
import { ICategory } from '~/interface';
import { toastEmit } from '~/utils/toasify';
import { AppState } from '../index';
import { changeLoading } from './loadingOverlayReducer';

interface IInitState {
  categories: ICategory[];
}

const initialState: IInitState = {
  categories: [],
};

export const getAllCategory = createAsyncThunk('category/getAll', async () => {
  return (await categoryApi.getAll()).data.data;
});

export const getOneCategory = createAsyncThunk('category/getOne', async (id: number) => {
  return (await categoryApi.getOne(id)).data.data;
});

export const createCategory = createAsyncThunk(
  'category/create',
  async (payload: FormData, { dispatch }) => {
    try {
      dispatch(changeLoading(true));
      const res = await categoryApi.create(payload);
      const { data } = res.data;
      dispatch(changeLoading(false));
      return data;
    } catch (error: any) {
      dispatch(changeLoading(false));
      throw new Error(error);
    }
  },
);

export const updateCategory = createAsyncThunk(
  'category/update',
  async ({ id, payload }: { id: number; payload: FormData }, { dispatch }) => {
    try {
      dispatch(changeLoading(true));
      const res = await categoryApi.update(id, payload);
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

export const deleteCategory = createAsyncThunk('category/_delete', async (id: number) => {
  try {
    await categoryApi.delete(id);

    return id;
  } catch (error: any) {
    throw new Error(error);
  }
});

const categorySlice = createSlice({
  initialState,
  name: 'category',
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    build.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter((c) => c.id !== action.payload);
    });
    build.addCase(createCategory.fulfilled, (state, action) => {
      state.categories = [...state.categories, action.payload];
    });
    build.addCase(updateCategory.fulfilled, (state, action) => {
      state.categories = state.categories.map((c) =>
        c.id === action.payload.id ? action.payload : c,
      );
    });
  },
});

export const {} = categorySlice.actions;

export const categorySelector = (state: AppState) => state.category;

export default categorySlice.reducer;
