import React from 'react';
import PropTypes from 'prop-types';

import List from './List/List';
import Grid from './Grid/Grid';
import { filterMedia } from '../../Utils/utils';
import { MediaType } from './../../Utils/utils';

const ListGrid = (props) => {
  const {  media, showList, showGrid, isShows, isEpisodes } = props
  let content = null;
  let filteredMediaList = [];
  if (media) {
    filteredMediaList = filterMedia(media, isShows, isEpisodes);
    
    if (showList) {
      content = (
        <div data-test="component-list">
          <List media={filteredMediaList} />
        </div>
      )
    } else if (showGrid) {
      content = (
        <div data-test="component-grid">
          <Grid media={filteredMediaList} />
        </div>
      )
    }
   
  }
  return (
    <div data-test="component-listGrid">
     {content}
    </div>
  )
}

ListGrid.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape(MediaType)
  ).isRequired,
  showList: PropTypes.bool.isRequired,
  showGrid: PropTypes.bool.isRequired,
  isShows: PropTypes.bool.isRequired,
  isEpisodes: PropTypes.bool.isRequired
}

export default ListGrid;