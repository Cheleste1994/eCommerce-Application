import {
  CategoryPagedQueryResponse,
  ProductPagedQueryResponse,
  ProductProjectionPagedSearchResponse,
} from '@commercetools/platform-sdk';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import request, { ERequestStatus } from '../../common/request';

export interface IProductsState {
  all: ProductPagedQueryResponse | null;
  productsCategory: ProductProjectionPagedSearchResponse | null;
  categories: CategoryPagedQueryResponse | null;
  status: ERequestStatus;
}

const initialState: IProductsState = {
  all: null,
  productsCategory: null,
  categories: null,
  status: ERequestStatus.IDLE,
};

export const getClientProducts = createAsyncThunk('products/all', async () => {
  const response = await request.products();
  return response.body;
});

export const getClientCategories = createAsyncThunk('products/categories', async () => {
  const response = await request.categories();
  return response.body;
});

export const getClientCategoriesWithId = createAsyncThunk(
  'products/categoriesWithId',
  async (ID: string) => {
    const response = await request.categoriesWithId(ID);
    return response.body;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClientProducts.fulfilled, (state, action) => ({
        ...state,
        all: { ...state.all, ...action.payload },
        productsCategory: null,
      }))
      .addCase(getClientCategories.fulfilled, (state, action) => {
        const catParents = {
          ...action.payload,
          results: action.payload.results
            .filter((x) => !x.parent)
            .sort((x, y) => (x.name['en-US'] < y.name['en-US'] ? -1 : 1)),
        };
        return {
          ...state,
          categories: catParents,
        };
      })
      .addCase(getClientCategoriesWithId.fulfilled, (state, action) => ({
        ...state,
        all: null,
        productsCategory: { ...action.payload },
      }));
  },
});

export const selectAllProducts = (state: RootState) => state.products.all;
export const selectCategoryProducts = (state: RootState) => state.products.productsCategory;
export const selectCategories = (state: RootState) => state.products.categories;

export default productsSlice.reducer;
