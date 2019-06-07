import * as actionTypes from './actionTypes';
export const setBreadcrumPath = (segment) => {

  return {
    type: actionTypes.SET_BREADCRUM_PATH,
    payload: segment
  }
}