import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '25rem',
    maxWidth: '25rem',
    minHeight: '20rem',
    maxHeight: '20rem'
  }

}));

const Poster = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>Poster</div>
  );
}
export default Poster;