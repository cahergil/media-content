import React, { useEffect} from 'react';
// import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.scss';

import * as actions from './store/actions/media';

const  App = props => {

  useEffect(() => {
    props.setMediaContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
        
       
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setMediaContent: () => dispatch(actions.setMediaContent())
  }
}


 export default connect(null, mapDispatchToProps)(App);

