import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ReactImageFallback from "react-image-fallback";

import fallbackImage from '../../../assets/images/image_na.png';
import classesScss from './Poster.module.scss';

const useStyles = makeStyles({
  root: {
    width: '22.5rem',
    height: '20rem',
    objectFit: 'cover'
  }
});

const Poster = (props) => {
  const { imageUrl,title } = props;
  const classes = useStyles(props);
  return (
    <div >
      <ReactImageFallback
        src={imageUrl}
        fallbackImage={fallbackImage}
        alt={title}
        className={`${classes.root} ${classesScss.Poster}`}
      />
    </div>
  );
}

Poster.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Poster;