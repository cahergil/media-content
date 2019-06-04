import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import mediaReducer from './store/reducers/media';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#252934',
      dark: '#000'
    },
    secondary: {
      main: '#D4AC16'
    },
    text: {
      primary: '#fff',
      secondary: '#D4AC16',

    }
  },
  typography: {
    htmlFontSize: 10,
    useNextVariants: true
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  media: mediaReducer
});


const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme} >
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
 
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();