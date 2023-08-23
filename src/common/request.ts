import { CustomerSignin, MyCustomerDraft } from '@commercetools/platform-sdk';
import apiRootClient from './BuildClient';
import authCustomer from './BuildCustomer';
import tokenAuthorization from './checkAuthorization';

const request = {
  createCustomer: (body: MyCustomerDraft) => apiRootClient.me().signup().post({ body }).execute(),
  login: () => tokenAuthorization().me().get().execute(),
  token: (body: CustomerSignin) =>
    authCustomer({ username: body.email, password: body.password }).me().get().execute(),
};

export enum ERequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export default request;
