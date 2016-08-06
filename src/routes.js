// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Foo from 'containers/Foo';
import Main from './containers/Foo/components/Main/';
import Notice from './containers/Foo/components/Notice/';
import Pics from './containers/Pics';

export function createRoutes() {
  return {
    path: '/',
    component: Foo,
    indexRoute: { component: Main },
    childRoutes: [
      { path: 'notice', component: Notice },
      { path: 'pics', component: Pics },
    ],
  };
}
