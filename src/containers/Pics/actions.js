import * as at from 'constants/actionTypes';

export function clickImage(id) {
  console.log(id);
  return {
    id,
    type: at.CLICK_IMAGE,
  };
}
