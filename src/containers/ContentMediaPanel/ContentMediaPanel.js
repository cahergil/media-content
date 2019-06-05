import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux'


import * as actions from '../../store/actions/filter';
import Filters from '../../components/Filter/Filters';
import ListGrid from '../../components/ListGrid/ListGrid';


const styles = theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '1.5rem' 
    // alignItems: 'stretched'
  }
 
});


const ContentMediaPanel = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Filters
        isShows={props.shows}
        isEpisodes={props.episodes}
        isList={props.list}
        isGrid={props.grid}
        clickShows={props.onSetShows}
        clickEpisodes={props.onSetEpisodes}
        clickList={props.onSetList}
        clickGrid={props.onSetGrid}
      />
      <ListGrid
        media={props.media}
        showList={props.list}
        showGrid={props.grid}
        isShows={props.shows}
        isEpisodes={props.episodes}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    media: state.media.mediaList,
    shows: state.filter.shows,
    episodes: state.filter.episodes,
    list: state.filter.list,
    grid: state.filter.grid
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSetShows: (value) => dispatch(actions.setShowsFilter(value)),
    onSetEpisodes: (value) => dispatch(actions.setEpisodesFilter(value)),
    onSetList: (value) => dispatch(actions.setListFilter(value)),
    onSetGrid: (value) => dispatch(actions.setGridFilter(value))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(ContentMediaPanel);

