import * as actionTypes from './actionTypes';

export const setMediaItem = (id, item) => {
  
  return {
    type: actionTypes.SET_MEDIA_ITEM,
    payload: { id, item }
  }
}