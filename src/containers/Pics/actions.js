import * as at from 'constants/actionTypes';

export function clickImage(id, src) {
  const info = {
    id,
    src,
  };
  return {
    info,
    type: at.CLICK_IMAGE,
  };
}
