import * as actionTypes from '../actions/actionTypes';
const initialState = {
  medialist: [],
  error: false
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.SET_MEDIA_CONTENT_START:
      return {
        ...state,
        error: false
      }

    case actionTypes.SET_MEDIA_CONTENT_SUCCEED:
      return {
        ...state,
        mediaList: [...action.payload],
        error: false
      }
    case actionTypes.SET_MEDIA_CONTENT_FAILED:
      return {
        ...state,
        error: true
      }

    default:
      return state;
  }


}

export default reducer;