import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '../../ListGrid/Grid/Grid';
import { Typography } from '@material-ui/core';

import classesScss from './Episodes.module.scss';


const useStyles = makeStyles(theme => ({
  root: {
    gridColumn: ' 1 / span 2',
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
    <div className={`${classes.root} ${classesScss.Root}`}>
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