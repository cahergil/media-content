import React from 'react';
import { makeStyles } from '@material-ui/styles';

import ReactImageFallback from "react-image-fallback";
import fallbackImage from '../../../assets/images/image_na.png';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '22.5rem',
    maxWidth: '22.5rem',
    minHeight: '20rem',
    maxHeight: '20rem'
  }

}));

const Poster = (props) => {
  const { imageUrl,title } = props;
  const classes = useStyles(props);
  return (
    <div >
      <ReactImageFallback
        src={imageUrl}
        fallbackImage={fallbackImage}
        alt={title}
        className={classes.root}
        />
    </div>
  );
}
export default Poster;