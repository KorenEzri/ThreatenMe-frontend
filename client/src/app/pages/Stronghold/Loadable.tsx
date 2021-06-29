/**
 * Asynchronously loads the component for Stronghold
 */

import { lazyLoad } from 'utils/loadable';

export const Stronghold = lazyLoad(
  () => import('./index'),
  module => module.Stronghold,
);
