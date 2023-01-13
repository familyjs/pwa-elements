import { Config } from '@rindo/core';

export const config: Config = {
  namespace: 'navifypwaelements',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    { type: 'www' },
  ],
};
