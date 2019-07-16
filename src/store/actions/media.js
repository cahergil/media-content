import * as actionTypes from './actionTypes';
import axios from 'axios';
import { transformData } from '../../Utils/utils';
// import jsonFile from '../../assets/files/playas.json' not working
// set json file in public directory
export const setMediaContentStart = () => {
  return {
    type: actionTypes.SET_MEDIA_CONTENT_START
  }
}


export const setMediaContentSucceed = (mediaContentList) => {
  return {
    type: actionTypes.SET_MEDIA_CONTENT_SUCCEED,
    payload: mediaContentList
  }
}


export const setMediaContentFailed = (error) => {
  return {
    type: actionTypes.SET_MEDIA_CONTENT_FAILED,
    payload: error
  }
}

export const setMediaContent = () => {
  return dispatch => {
    dispatch(setMediaContentStart());
    // axios.get('./data.json')
    const route = '../data.json';
    let finalRoute;
    if (process.env.NODE_ENV === 'production') {
      finalRoute = route.substr(3);
    } else {
      finalRoute = route
    }
    axios.get(finalRoute)
      .then(response => {
        dispatch(setMediaContentSucceed(transformData(response.data.contents)))
      }
    ).catch(err => {
        dispatch(setMediaContentFailed())
        console.log('error accesing the file',err)
      })


    }

}