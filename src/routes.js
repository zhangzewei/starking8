// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Foo from 'containers/Foo';
import Main from './containers/Foo/components/Main/';
import Notice from './containers/Foo/components/Notice/';
import Pics from './containers/Pics';
import Detail from './containers/Pics/components/Detail/';
import Rank from './containers/Pics/components/Rank/';
import SignUp from './containers/Pics/components/SignUp/';
import Login from './containers/Pics/components/Login/';
import Customer from './containers/Foo/components/CustomerCenter/';

export function createRoutes() {
  return {
    path: '/',
    component: Foo,
    indexRoute: { component: Main },
    childRoutes: [
      { path: 'pics', component: Pics },
      { path: 'detail', component: Detail },
      { path: 'rank', component: Rank },
      { path: 'signup', component: SignUp },
      { path: 'login', component: Login },
      { path: 'customer/:id', component: Customer },
      { path: 'notice/:name/:id', component: Notice },
    ],
  };
}
