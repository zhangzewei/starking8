import * as at from 'constants/actionTypes';
import immutable from 'immutable';

const initialState = immutable.fromJS({
  id: 0,
});

export default function pics(state = initialState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case at.CLICK_IMAGE:
      return state.update('id', () => action.id);
    default:
      return state;
  }
}
