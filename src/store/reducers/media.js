import * as actionTypes from '../actions/actionTypes';
const initialState = {
  mediaList: [],
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
    case actionTypes.SET_MEDIA_ITEM:
      let temp = [...state.mediaList];
      let k = 0;
      for (let i = 0; i < temp.length; i++) {
        // eslint-disable-next-line eqeqeq
        if (temp[i].id == action.payload.id) {
          k = i;
          break;
        }
      }

      return {
        ...state,
        mediaList: state.mediaList.map((mediaItem,i) => {
          return i === k ? {...action.payload.item}: mediaItem 
        })
        // mediaList: [
        //   ...state.mediaList.slice(0, k),
        //   action.payload.item,
        //   ...state.mediaList.slice(k+1)
        // ]
      }

    default:
      return state;
  }


}

export default reducer;