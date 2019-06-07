import React from 'react';

import { Paper, Breadcrumbs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link, withRouter } from 'react-router-dom';


const useStyles = makeStyles(theme =>({
  root: {
    // marginTop: 'rem',
    justifyContent: 'start',
    
  },
  paper: {
    padding: theme.spacing(1, 0),
  },
  contentsStyle: {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));


const Breadcrum = (props) => {
  const {  pathSegment, onSetPathSegment } = props;
  const classes = useStyles();

  const handleClick = () => {
    props.history.push({ pathname: '/contents/browse' });
    onSetPathSegment('...');
  }

  return (
    <div className={classes.root}>

      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
          <span className={classes.contentsStyle}
            color="inherit"
            onClick={handleClick}
            >
            Contents
          </span>
          <span style={{ color: '#252934'}}>
            {pathSegment}
          </span>
          
        </Breadcrumbs>
      </Paper>
      
    </div>
  );
}

export default withRouter(Breadcrum);