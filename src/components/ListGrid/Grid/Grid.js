import React from 'react';
import { withStyles } from '@material-ui/styles';

import GridItem from './GridItem/GridItem';
import { MediaType } from './../../../Utils/utils';
import { PropTypes } from 'prop-types';

const styles = ({
  root: {
    marginTop: "2rem",
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
    gridColumnGap: '2rem',
    gridRowGap: '2rem',

  }
});

const Grid = (props) => {
  const { classes, media } = props;
  
  let content = null;
  if (media) {
   
    content = (
      <div className={classes.root} >
      {
        media.map((mediaItem, index) => {
          return (
            <GridItem
              key={index}
              id={mediaItem.id}
              title={mediaItem.title}
              imageUrl={mediaItem.imageUrl} />
          );

        })
      }
      </div >
    )
    
  }
 
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
  media: PropTypes.arrayOf(
    PropTypes.shape(MediaType)
  ).isRequired,

}

export default withStyles(styles)(Grid);