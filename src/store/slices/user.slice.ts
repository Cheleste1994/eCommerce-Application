import { Customer, CustomerSignin, MyCustomerDraft } from '@commercetools/platform-sdk';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import request, { ERequestStatus } from '../../common/request';

export interface IUserState {
  loginResult: Customer | null;
  isToken: boolean;
  isLogin: boolean;
  status: ERequestStatus;
}

const initialState: IUserState = {
  loginResult: null,
  isToken: !!localStorage.getItem('token'),
  isLogin: false,
  status: ERequestStatus.IDLE,
};

export const login = createAsyncThunk('user/login', async () => {
  const response = await request.login();
  return response.body;
});

export const createCustomer = createAsyncThunk('user/create', async (body: MyCustomerDraft) => {
  const response = await request.createCustomer(body);
  return response.body;
});

export const customerToken = createAsyncThunk('user/token', async (body: CustomerSignin) => {
  const response = await request.token(body);
  return response;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => ({
      ...state,
      status: ERequestStatus.SUCCEEDED,
      isToken: true,
      loginResult: { ...state.loginResult, ...action.payload },
    }));
  },
});

export const selectSignInResult = (state: RootState) => state.users.loginResult;
export const selectIsAuth = (state: RootState) => state.users.isToken;
export const selectIsLogin = (state: RootState) => state.users.isLogin;
export const selectStatus = (state: RootState) => state.users.status;

export default userSlice.reducer;
