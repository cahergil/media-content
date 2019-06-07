import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '../../ListGrid/Grid/Grid';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    gridColumn: ' 1 / span 2',
    boxShadow: '0px 0px 1px #000',
    borderRadius: '5px',
    padding: '2rem'
  },
  titleStyles: {
    margin: '1rem'
  }

}));
const Episodes = (props) => {
  const { episodes } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.titleStyles}>
        <Typography  variant="h5" >
          Episodes
        </Typography>
      </div>
      <Grid media={episodes}/>
    </div>
  );
}
export default Episodes;