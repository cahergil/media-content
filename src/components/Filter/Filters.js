import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = ({
  filterLabel: {
    paddingTop: '4px'
  },
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretched'

  },
  grow: {
    flexGrow: 1
  },
  marginCheckbox: {
    margin: '0 1rem'
  },
  marginButton: {
    margin: '1px'
  },
});



const Filter = (props) => {
  const { classes, isShows, isEpisodes, isList, isGrid, clickShows, clickEpisodes, clickList, clickGrid } = props;
  
  const checkBoxHandler = name => event => {
    if (name === 'showsCheckbox') {
      
      clickShows(event.target.checked);
    } else {
      clickEpisodes(event.target.checked);
    }

  }

  const buttonListHandler = () => {
   
    clickList(true);
    
  }
  const buttonGridHandler = () => {
    
    clickGrid(true);
  }
  return (
    <div className={classes.root}>
     
      <Typography className={classes.filterLabel} variant="h5" >
        Filter
      </Typography>
      <FormControlLabel
        className={classes.marginCheckbox}
        control={
          <Checkbox
            checked={isShows}
            onChange={checkBoxHandler('showsCheckbox')}
            value="shows"
            
          />
        }
        label="Shows"
      />
      <FormControlLabel
        className={classes.marginCheckbox}
        control={
          <Checkbox
            checked={isEpisodes}
            onChange={checkBoxHandler('episodesCheckbox')}
            value="episodes"
            
          />
        }
        label="Episodes"
      />
      
      <div className={classes.grow}></div>
      <Button
        variant={isList ? "contained": "outlined"}
        color="primary"
        className={classes.marginButton} 
        size="small"
        onClick={buttonListHandler}
      >
        List
      </Button>
      <Button
        variant={isGrid ? "contained" : "outlined"}
        className={classes.marginButton} 
        color="primary"
        size="small"
        onClick={buttonGridHandler}

      >
        Grid
      </Button>
    </div>
  );


}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  isShows: PropTypes.bool.isRequired,
  isEpisodes: PropTypes.bool.isRequired,
  isList: PropTypes.bool.isRequired,
  isGrid: PropTypes.bool.isRequired,
  clickShows: PropTypes.func.isRequired,
  clickEpisodes: PropTypes.func.isRequired,
  clickList: PropTypes.func.isRequired,
  clickGrid: PropTypes.func.isRequired
}

export default withStyles(styles)(Filter)