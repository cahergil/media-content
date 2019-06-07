import * as actionTypes from '../actions/actionTypes';

const initialState = {
  segment: '...'
}
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SET_BREADCRUM_PATH:
      return {
        ...state,
        segment: action.payload
      }
    default:
      return state;
  }

}
export default reducer;