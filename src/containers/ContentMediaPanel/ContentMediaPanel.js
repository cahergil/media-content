import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


import * as actions from '../../store/actions/filter';
import Filters from '../../components/Filter/Filters';
import ListGrid from '../../components/ListGrid/ListGrid';
import { MediaType } from './../../Utils/utils';


const styles = ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '1.5rem' 
   
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

ContentMediaPanel.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape(MediaType)
  ),
  shows: PropTypes.bool.isRequired,
  episodes: PropTypes.bool.isRequired,
  list: PropTypes.bool.isRequired,
  grid: PropTypes.bool.isRequired,
  onSetShows: PropTypes.func.isRequired,
  onSetEpisodes: PropTypes.func.isRequired,
  onSetList: PropTypes.func.isRequired,
  onSetGrid: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired

}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(ContentMediaPanel);

