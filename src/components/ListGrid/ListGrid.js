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
      content = <List media={filteredMediaList}/>
    } else if (showGrid) {
      content = <Grid media={filteredMediaList} />
    }
   
  }
  return (
    <div>
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