import React from 'react';
import { withStyles } from '@material-ui/styles';
import GridItem from './GridItem/GridItem';
import { filterMedia } from '../../../Utils/utils';

const styles = theme => ({
  root: {
    marginTop: "2rem",
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
    gridColumnGap: '2rem',
    gridRowGap: '2rem',

  }
});

const Grid = (props) => {
  const { classes, media, isShows, isEpisodes } = props;
  let filteredMediaList = [];
  if (media) {

    filteredMediaList = filterMedia(media, isShows, isEpisodes);
  }
 
  return (
    <div className={classes.root} >
      {
        filteredMediaList.map((mediaItem, index) => {
          return (
            <GridItem
              key={index}
              id={mediaItem.id}
              title={mediaItem.title}
              imageUrl={mediaItem.imageUrl} />
          );

        })
      }
    </div>
  );
}

export default withStyles(styles)(Grid);