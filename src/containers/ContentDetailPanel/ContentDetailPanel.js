import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import queryString from 'query-string';

import Poster from '../../components/Detail/Poster/Poster';
import MediaForm from '../../components/Detail/MediaForm/MediaForm';
import Episodes from '../../components/Detail/Episodes/Episodes';
import { deepCopy, getEpisodes } from '../../Utils/utils';
import * as formActions from '../../store/actions/form';
import * as breadcrumActions from '../../store/actions/breadcrum';
import classesScss from './ContentDetailPanel.module.scss';
import { MediaType } from './../../Utils/utils';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '22.5rem 1fr',
    gridTemplateRows: 'min-content min-content',
    gridColumnGap: '2rem',
    gridRowGap: '4rem',
    // [theme.breakpoints.down(700)]: {
    //   gridTemplateColumns: '80%',
    //   gridTemplateRows: '30rem min-content min-content min-content',
    //   justifyContent: 'center'
    // }
  }
}));

const ContentDetailPanel = (props) => {
  const { media, onSaveForm, onSetPathSegment } = props;


  const SHOW = 'show'
  const classes = useStyles(props);
  let isShow = true;
  const id = queryString.parse(props.location.search).id;
  let content = null;
  let copiedMedia = [];
  if (media.length > 0) {
    copiedMedia = deepCopy(media);

    // eslint-disable-next-line
    const result = copiedMedia.filter(mediaItem => mediaItem.id == id)[0];
    onSetPathSegment(result.title);
    isShow = result.type === SHOW;
    const episodes = isShow ? getEpisodes(result, copiedMedia) : [];
    // console.log(episodes);
    content = (
      <React.Fragment>
        <div>
          <Poster imageUrl={result.imageUrl} title={result.title} />
        </div>
        <div className={classesScss.FormBoxShadow}>
          <MediaForm
            register={result}
            onSaveForm={onSaveForm} />
        </div>
        {isShow ? <Episodes episodes={episodes} /> : null}


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
    onSaveForm: (id, item) => dispatch(formActions.setMediaItem(id, item)),
    onSetPathSegment: (segment) => dispatch(breadcrumActions.setBreadcrumPath(segment))
  }
}


ContentDetailPanel.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape(MediaType)
  ).isRequired,
  onSaveForm: PropTypes.func.isRequired,
  onSetPathSegment: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentDetailPanel);