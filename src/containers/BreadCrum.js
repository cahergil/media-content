import React from 'react';
import { Paper, Breadcrumbs, withStyles, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
  const { classes } = props;


  return (
    <div className={classes.root}>

      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
          <Link color="inherit" href="/contents/browse" >
            Contents
            </Link>
          <Link color="inherit" href="/getting-started/installation/">
            Core
          </Link>
          {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
        </Breadcrumbs>
      </Paper>
      
    </div>
  );
}

export default withStyles(styles)(Breadcrum);