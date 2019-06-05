import * as actionTypes from './actionTypes';

export const setShowsFilter = (value) => {
  return {
    type: actionTypes.SET_SHOWS_FILTER,
    payload: value
  }
}

export const setEpisodesFilter = (value) => {
  return {
    type: actionTypes.SET_EPISODES_FILTER,
    payload: value
  }
}

export const setListFilter = (value) => {
  return {
    type: actionTypes.SET_LIST_FILTER,
    payload: value
  }
}

export const setGridFilter = (value) => {
  return {
    type: actionTypes.SET_GRID_FILTER,
    payload: value
  }
}