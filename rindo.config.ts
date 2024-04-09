import { Config } from '@rindo/core';

export const config: Config = {
  namespace: 'familypwaelements',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    { type: 'www' },
  ],
  buildEs5: true,
  extras: {
    enableImportInjection: true
  }
};
