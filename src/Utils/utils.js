
import PropTypes from 'prop-types';
import moment from 'moment';
import Moment from 'moment'

const shuffleArray = (a) => {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export const transformData = (media) => {
  let mediaTransformed = [];
  const mediaCopy = [];
  for (let i = 0; i < media.length; i++) {
    mediaCopy.push({ ...media[i] });
  }
  for (let i = 0; i < media.length; i++) {
    mediaCopy[i].releaseDate = moment(mediaCopy[i].releaseDate)
      // .format('YYYY-MM-DDTHH:mm:ss.SSSZ'); 
  }
  for (let i = 0; i < mediaCopy.length; i++) {
    if (mediaCopy[i].type === 'show') {
      const episodes = mediaCopy[i].episodes;
      const k = i + 1;

      const tempArray = mediaCopy.slice(k).filter(element => new Set(episodes).has(element.id)).map((element, index) => {
        // console.log(element);
        let episodeNumber = (index + 1);
        if (index < 10) {
          episodeNumber = episodeNumber.toString().padStart(2, '0');
        }
        const buildTitle = mediaCopy[i].title + ' 1x' + episodeNumber;
        element.title = buildTitle;
        return element;
      });
      // }
      mediaTransformed = mediaTransformed.concat(mediaCopy[i]).concat(tempArray);
    }
  }
  mediaTransformed = shuffleArray(mediaTransformed);
  return mediaTransformed;

}

export const filterMedia =(media,isShows, isEpisodes) => {
  const copyMediaList = []
  let filteredList = []
 
  
  for (let i = 0; i < media.length; i++) {
    copyMediaList.push(media[i]);
  }

  filteredList = copyMediaList.filter(item => {
    return (item.type === (isShows ? 'show' : '')) || (item.type === (isEpisodes ? 'episode' : ''))
  })

  
  return filteredList;
}

export const deepCopy =(data) => {
  const copiedArray = []
  if (data) {
    for (let i = 0; i < data.length; i++) {
      copiedArray.push(data[i]);
    }
  }
  return copiedArray;
}

export const getEpisodes = (result, media) => {
  const episodesFieldSet = new Set(result.episodes);
  const compare =(a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }
  const episodes = media
    .filter(mediaItem => episodesFieldSet.has(mediaItem.id))
    .sort(compare);
  
  return episodes
}


export const MediaType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  synopsis: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Moment).isRequired,
  score: PropTypes.number.isRequired,
  episodes: PropTypes.arrayOf(PropTypes.number),
  imageUrl: PropTypes.string.isRequired
}