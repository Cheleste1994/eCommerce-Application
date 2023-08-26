import { CustomerSignin, MyCustomerDraft } from '@commercetools/platform-sdk';
import apiRootClient from './BuildClient';
import authCustomer from './BuildCustomer';
import tokenAuthorization from './checkAuthorization';

const MAX_LIMIT_CATEGORIES = 100;

const request = {
  createCustomer: (body: MyCustomerDraft) => apiRootClient.me().signup().post({ body }).execute(),
  login: () => tokenAuthorization().me().get().execute(),
  token: (body: CustomerSignin) =>
    authCustomer({ username: body.email, password: body.password }).me().get().execute(),
  products: () => apiRootClient.products().get().execute(),
  categories: () =>
    apiRootClient
      .categories()
      .get({
        queryArgs: {
          limit: MAX_LIMIT_CATEGORIES,
          expand: ['parent', 'ancestors[*]'],
        },
      })
      .execute(),
  categoriesWithId: (ID: string) =>
    apiRootClient
      .productProjections()
      .search()
      .get({
        queryArgs: {
          filter: `categories.id:"${ID}"`,
        },
      })
      .execute(),
};

export enum ERequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
}

export default request;
