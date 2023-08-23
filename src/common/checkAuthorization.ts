import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import {
  ClientBuilder,
  ExistingTokenMiddlewareOptions,
  HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

const projectKey = `${import.meta.env.VITE_CTP_PROJECT_KEY}`;

const tokenAuthorization = () => {
  const storedToken = localStorage.getItem('token');
  const { token } = JSON.parse(storedToken as string);
  const authorization: string = `Bearer ${token}`;

  const httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: 'https://api.europe-west1.gcp.commercetools.com',
    fetch,
  };

  const options: ExistingTokenMiddlewareOptions = {
    force: true,
  };

  const client = new ClientBuilder()
    .withHttpMiddleware(httpMiddlewareOptions)
    .withExistingTokenFlow(authorization, options)
    .build();

  const checkAuth = createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey,
  });

  return checkAuth;
};

export default tokenAuthorization;
