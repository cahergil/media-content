import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import queryString from 'query-string';

import Poster from '../../components/Detail/Poster/Poster';
import MediaForm from '../../components/Detail/MediaForm/MediaForm';
import Episodes from './../../components/Detail/Episodes/Epidoses';

const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '22.5rem 1fr',
    gridTemplateRows: '30rem min-content',
    gridColumnGap: '2rem',
    gridRowGap: '4rem',
    [theme.breakpoints.down(700)]: {
      gridTemplateColumns: '80%',
      gridTemplateRows: '30rem min-content min-content min-content',
      justifyContent: 'center'
    }
  }

}));

const ContentDetailPanel = (props) => {
  const { media } = props;
  const SHOW = 'show'
  const classes = useStyles(props);
  let isShow = true;
  const id = queryString.parse(props.location.search).id;
  let content = null;
  if (media) {
    const result = media.filter(mediaItem => mediaItem.id == id)[0];
    isShow = result.type === SHOW;
    content = (
      <React.Fragment>
        <div>
          <Poster />

        </div>
        <MediaForm />
        { isShow ? <Episodes/>: null}
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
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ContentDetailPanel);