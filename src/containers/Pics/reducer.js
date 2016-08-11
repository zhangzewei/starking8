import * as at from 'constants/actionTypes';
import immutable from 'immutable';

const initialState = immutable.fromJS({
  info: {
    id: 0,
    src: './src/images/1.jpg',
  },
});

export default function pics(state = initialState, action) {
  switch (action.type) {
    case at.CLICK_IMAGE:
      return state.update('info', () => action.info);
    default:
      return state;
  }
}
