/**
 * Asynchronously loads the component for Deeppaste
 */

import { lazyLoad } from 'utils/loadable';

export const Deeppaste = lazyLoad(
  () => import('./index'),
  module => module.Deeppaste,
);
