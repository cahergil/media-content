import React, { useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import Breadcrum from './containers/Breadcrum';

// import './App.scss';

import * as actions from './store/actions/media';
// import Filters from './components/Filter/Filters';
import ContentMediaPanel from './containers/ContentMediaPanel/ContentMediaPanel';
import ContentDetailPanel from './containers/ContentDetailPanel/ContentDetailPanel';


const styles = theme => ({
  root: {
    width: '80%',
    height: '100%',
    margin: '3rem auto',
    
  },
  margin: {
    marginTop: '4rem'
  }

});


const  App = props => {
  const { classes, pathSegment } = props;
  useEffect(() => {
    props.setMediaContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
     
    <div className={classes.root}>
      <Breadcrum pathSegment={props.pathSegment}/>
      <div className={classes.margin}></div>
      <Switch>
        <Route path="/contents/browse" exact component={ContentMediaPanel} />
        <Route path="/contents/edit" exact component={ContentDetailPanel} />
        <Redirect to="/contents/browse" />
      </Switch>
      
       
    </div>
  );
}
const mapStateToProps = state => {
  return {
    pathSegment: state.breadcrum.segment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMediaContent: () => dispatch(actions.setMediaContent())
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(App)
  


