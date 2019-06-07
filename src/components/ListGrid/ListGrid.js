import React from 'react';

import List from './List/List';
import Grid from './Grid/Grid';
import { filterMedia } from '../../Utils/utils';

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

export default ListGrid;