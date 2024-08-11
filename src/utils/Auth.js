import { prefetchConfiguration } from 'react-native-app-auth';

const config = {
  warmAndPrefetchChrome: true,
  issuer: '"https://login.qa.idaman.pertamina.com',
  clientId: '6732a6b1-7afd-4646-b70d-9050c10f127d',
  redirectUrl: 'https://localhost:5137',
  scopes: ['api.auth', 'user.read'],
};

prefetchConfiguration(config);
