import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import classesScss from './Episodes.module.scss';
import Grid from '../../ListGrid/Grid/Grid';
import { MediaType } from '../../../Utils/utils';


const useStyles = makeStyles(theme => ({
  root: {
    gridColumn: ' 1 / span 2',
  },
  titleStyles: {
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  margin: {
    margin: '0 2rem'
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
      <div className={classes.margin}>
        <Grid media={episodes}/>
      </div>
    </div>
  );

}

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape(MediaType)
  ).isRequired
}

export default Episodes;