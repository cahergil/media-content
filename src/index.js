import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store/reducers/index';

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
      primary: '#000',
      secondary: '#D4AC16',

    }
  },
  typography: {
    htmlFontSize: 10,
    useNextVariants: true
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider theme={theme} >
        <App />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>
 
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
