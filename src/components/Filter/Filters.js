import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  filterLabel: {
    // fontSize : '1.5rem'
    paddingTop: '6px'
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
    // margin: theme.spacing(1),
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
    // if (name === 'listButton') {
      clickList(true);
    // } else {
    // }
  }
  const buttonGridHandler = () => {
    
    clickGrid(true);
  }
  return (
    <div className={classes.root}>
      {/* <div className={classes.filterLabel}>Filter</div> */}
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

export default withStyles(styles)(Filter)