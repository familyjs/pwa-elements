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
  buildEs5: "prod",
  sourceMap: false,
  extras: {
    enableImportInjection: true
  }
};
