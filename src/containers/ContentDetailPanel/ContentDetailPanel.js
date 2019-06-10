import React, { Component} from 'react';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';
import queryString from 'query-string';

import Poster from '../../components/Detail/Poster/Poster';
import MediaForm from '../../components/Detail/MediaForm/MediaForm';
import Episodes from '../../components/Detail/Episodes/Episodes';
import { deepCopy, getEpisodes } from '../../Utils/utils';
import * as formActions from '../../store/actions/form';
import * as breadcrumActions from '../../store/actions/breadcrum';
import classesScss from './ContentDetailPanel.module.scss';
import { MediaType } from './../../Utils/utils';


class  ContentDetailPanel extends Component   {
  state = {
    result:  null,
    episodes: null,
    isShow: false,
    contentFetched: false,
    id: null
  }
  componentDidMount() {
    
    this.loadData();
  }
  componentDidUpdate() {
   
    this.loadData();
  }

  loadData() {
    const SHOW = 'show'
    let isShow = true;
    const id = queryString.parse(this.props.location.search).id;
  
    if (id === this.state.id) {
      return;
    }
    let copiedMedia = [];
    if (this.props.media.length > 0) {
      copiedMedia = deepCopy(this.props.media);

      // eslint-disable-next-line
      const result = copiedMedia.filter(mediaItem => mediaItem.id == id)[0];
      
     
      this.props.onSetPathSegment(result.title);
      isShow = result.type === SHOW;
      
      this.setState({
        episodes: isShow ? getEpisodes(result, copiedMedia) : null,
        isShow: isShow,
        result: result,
        contentFetched: true,
        id: id
      });
      
    

    }
  }
  render() {
 
    let content = null;
    if (this.state.contentFetched) {
      content = (
        <React.Fragment>
          <div>
            <Poster imageUrl={this.state.result.imageUrl} title={this.state.result.title} />
          </div>
          <div className={classesScss.FormBoxShadow}>
            <MediaForm
              onSetPathSegment={this.props.onSetPathSegment}
              register={this.state.result}
              onSaveForm={this.props.onSaveForm} />
          </div>
          { this.state.isShow ? <Episodes episodes={this.state.episodes} /> : null}


        </React.Fragment>
      )
    } 
    return (
         <div className={classesScss.Root}>
        {content}

      </div>
    )
  }
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