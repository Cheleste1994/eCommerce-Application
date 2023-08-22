import { TokenCache } from '@commercetools/sdk-client-v2';

const tokenCache: TokenCache = {
  get: () => {
    const key = `token`;
    const storedToken = localStorage.getItem(key);

    if (storedToken) {
      const token = JSON.parse(storedToken);
      if (token.expirationTime > Date.now()) {
        return token;
      }
    }

    return null;
  },

  set: (cache) => {
    const key = `token`;
    localStorage.setItem(key, JSON.stringify(cache));
  },
};

export default tokenCache;
