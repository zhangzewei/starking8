import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import foo from 'containers/Foo/reducer';
import pics from 'containers/Pics/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    foo,
    pics,
    routing: routerReducer,
    ...asyncReducers,
  });
}
