import React, { useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import Breadcrum from './components/Breadcrum';
import PropTypes from 'prop-types';


import * as mediaActions from './store/actions/media';
import * as breadcrumActions from './store/actions/breadcrum';

import ContentMediaPanel from './containers/ContentMediaPanel/ContentMediaPanel';
import ContentDetailPanel from './containers/ContentDetailPanel/ContentDetailPanel';


const styles = ({
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
  const { classes, pathSegment, onSetPathSegment,setMediaContent} = props;
  useEffect(() => {
    setMediaContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
     
    <div className={classes.root}>
      <Breadcrum
        pathSegment={pathSegment}
        onSetPathSegment={onSetPathSegment} />
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
    setMediaContent: () => dispatch(mediaActions.setMediaContent()),
    onSetPathSegment: (segment) => dispatch(breadcrumActions.setBreadcrumPath(segment))
  }
}

App.propTypes = {
  pathSegment: PropTypes.string.isRequired,
  setMediaContent: PropTypes.func.isRequired,
  onSetPathSegment: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(App)
  


