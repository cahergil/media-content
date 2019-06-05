import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import ReactImageFallback from "react-image-fallback";

import fallbackImage from '../../../../assets/images/image_na.png'

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    // backgroundImage: props => `url(${props.imageUrl})`,
    // // backgroundSize: '20rem 20rem',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    minWidth: '25rem',
    maxWidth: '25rem',
    minHeight: '20rem',
    maxHeight: '20rem'
  },
  title: {
    fontWeight: '700',
    color: '#333',
    fontSize: '1.3rem'

  }
})

const GridItem = (props) => {
  const { title, imageUrl, id } = props;
  const classes = useStyles(props);
  const handleClick = (id) => {
    console.log(id);
  }
  return (
    <div className={classes.root} onClick={() =>handleClick(id)}>
      <div>
        <ReactImageFallback
          src={imageUrl}
          fallbackImage={fallbackImage}
          alt={title}
          className={classes.image} />
      </div>
      <div className={classes.title}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default withRouter(GridItem);