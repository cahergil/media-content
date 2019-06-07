import React from 'react';
import { withStyles } from '@material-ui/styles';
import GridItem from './GridItem/GridItem';

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
  const { classes, media } = props;
  
  let content = null;
  if (media) {
    console.log(media);
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

export default withStyles(styles)(Grid);