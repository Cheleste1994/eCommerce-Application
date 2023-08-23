import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';

const projectKey = `${import.meta.env.VITE_CTP_PROJECT_KEY}`;
const scopes = [`manage_project:${import.meta.env.VITE_CTP_PROJECT_KEY}`];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: `${import.meta.env.VITE_CTP_CLIENT_ID}`,
    clientSecret: `${import.meta.env.VITE_CTP_CLIENT_SECRET}`,
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

// Export the ClientBuilder
const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  // .withLoggerMiddleware()
  .build();

const apiRootClient = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: `${import.meta.env.VITE_CTP_PROJECT_KEY}`,
});

export default apiRootClient;
