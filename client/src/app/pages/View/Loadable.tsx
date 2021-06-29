/**
 * Asynchronously loads the component for View
 */

import { lazyLoad } from 'utils/loadable';

export const View = lazyLoad(
  () => import('./index'),
  module => module.View,
);
