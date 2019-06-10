import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { PropTypes } from 'prop-types';

import GridItem from './GridItem/GridItem';
import { MediaType } from './../../../Utils/utils';

const useStyles = makeStyles({
  root: {
    marginTop: "3rem",
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
    gridColumnGap: '2rem',
    gridRowGap: '2rem',

  }
});

const Grid = (props) => {
  const {  media } = props;
  const classes = useStyles();

  let content = null;
  if (media) {
   
    content = (
      <div className={classes.root} data-test="component-grid">
      {
        media.map((mediaItem, index) => {
          return (
            <div data-test="grid-item" key={index}>
              <GridItem
                id={mediaItem.id}
                title={mediaItem.title}
                imageUrl={mediaItem.imageUrl} />
            </div>
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
  media: PropTypes.arrayOf(
    PropTypes.shape(MediaType)
  ).isRequired,

}

export default Grid;