import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ClientBuilder, PasswordAuthMiddlewareOptions } from '@commercetools/sdk-client-v2';
import tokenCache from './tokenCache';

const projectKey = `${import.meta.env.VITE_CTP_PROJECT_KEY}`;
const scopes = [`manage_project:${import.meta.env.VITE_CTP_PROJECT_KEY}`];

const authCustomer = ({ username, password }: { username: string; password: string }) => {
  const authMiddlewareOptions1: PasswordAuthMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: `${import.meta.env.VITE_CTP_CLIENT_ID}`,
      clientSecret: `${import.meta.env.VITE_CTP_CLIENT_SECRET}`,
      user: {
        username,
        password,
      },
    },
    tokenCache,
    scopes,
    fetch,
  };

  const ctpCl = new ClientBuilder()
    .withProjectKey(projectKey)
    .withPasswordFlow(authMiddlewareOptions1)
    .build();

  const apiRootCustomer = createApiBuilderFromCtpClient(ctpCl).withProjectKey({
    projectKey: `${import.meta.env.VITE_CTP_PROJECT_KEY}`,
  });
  return apiRootCustomer;
};

export default authCustomer;
