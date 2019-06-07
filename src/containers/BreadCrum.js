import React from 'react';
import { Paper, Breadcrumbs, withStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    // marginTop: 'rem',
    justifyContent: 'start',
    
  },
  paper: {
    padding: theme.spacing(1, 0),
  },

});


const Breadcrum = (props) => {
  const { classes, pathSegment } = props;
  console.log(pathSegment);

  return (
    <div className={classes.root}>

      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
          <Link color="inherit" to="/contents/browse" >
            Contents
            </Link>
          <Link color="inherit" to="/contents/browse">
            {pathSegment}
          </Link>
          {/* <Link color="inherit" href="/contents/browse" >
            Contents
            </Link>
          <Link color="inherit" href="/getting-started/installation/">
            Core
          </Link> */}
          {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
        </Breadcrumbs>
      </Paper>
      
    </div>
  );
}

export default withStyles(styles)(Breadcrum);