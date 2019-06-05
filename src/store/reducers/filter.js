import * as actionTypes from '../actions/actionTypes';


const initialState = {
  shows: true,
  episodes: true,
  list: true,
  grid: false
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SET_SHOWS_FILTER:
      return {
        ...state,
        shows: action.payload
      }

    case actionTypes.SET_EPISODES_FILTER:
      return {
        ...state,
        episodes: action.payload
      }
    case actionTypes.SET_LIST_FILTER:
      return {
        ...state,
        list: action.payload,
        grid: !action.payload
      }
    case actionTypes.SET_GRID_FILTER:
      return {
        ...state,
        grid: action.payload,
        list: !action.payload
      }

    default:
      return state;
  }
}

export default reducer;