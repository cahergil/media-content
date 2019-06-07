import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import queryString from 'query-string';

import Poster from '../../components/Detail/Poster/Poster';
import MediaForm from '../../components/Detail/MediaForm/MediaForm';
import Episodes from './../../components/Detail/Episodes/Epidoses';
import { deepCopy } from '../../Utils/utils';
import * as formActions from '../../store/actions/form';

const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '22.5rem 1fr',
    gridTemplateRows: '43rem min-content',
    gridColumnGap: '2rem',
    gridRowGap: '4rem',
    // [theme.breakpoints.down(700)]: {
    //   gridTemplateColumns: '80%',
    //   gridTemplateRows: '30rem min-content min-content min-content',
    //   justifyContent: 'center'
    // }
  },
  spanEpisodes: {
    gridColumn: '1 / span 2'
  },
  posterStyles: {
    // paddingTop: '2rem'
  },
  formStyles: {

    boxShadow: '0px 0px 1px #000',
    borderRadius: '5px'
  }
}));

const ContentDetailPanel = (props) => {
  const { media, onSaveForm } = props;
  const SHOW = 'show'
  const classes = useStyles(props);
  let isShow = true;
  const id = queryString.parse(props.location.search).id;
  let content = null;
  let copiedMedia = [];
  if (media) {
    copiedMedia = deepCopy(media);
    // eslint-disable-next-line
    const result = copiedMedia.filter(mediaItem => mediaItem.id == id)[0];
    isShow = result.type === SHOW;
    content = (
      <React.Fragment>
        <div className={classes.posterStyles}>
          <Poster imageUrl={result.imageUrl} title={result.title}/>
        </div>
        <div className={classes.formStyles}>
          <MediaForm register={result} onSaveForm={onSaveForm}/>
        </div>
        {isShow ? <Episodes />: null}  
  
        
      </React.Fragment>
    )
     
  }
  return (
    <div className={classes.root}>
      {content}
      
    </div>
  );
}
const mapStateToProps = state => {
  return {
    media: state.media.mediaList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSaveForm: (id, item) => dispatch(formActions.setMediaItem(id, item))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ContentDetailPanel);