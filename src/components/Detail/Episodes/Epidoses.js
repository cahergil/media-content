import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    gridColumn: ' 1 / span 2'
  }

}));
const Episodes = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>Episodesaddddffffffffffffffffffffffffffffffffff
    afddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    </div>
  );
}
export default Episodes;