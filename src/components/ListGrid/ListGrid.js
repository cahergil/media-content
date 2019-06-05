import React from 'react';
import List from './List/List';
import Grid from './Grid/Grid';







const ListGrid = (props) => {
  const {  media, showList, showGrid, isShows, isEpisodes } = props
  let content;
  if (media) {
   
    if (showList) {
      content = <List media={media}/>
    } else if (showGrid) {
      content = <Grid media={media} />
    }

  }
  return (
    
    <div>
     {content}
    </div>
  )
}

export default ListGrid;