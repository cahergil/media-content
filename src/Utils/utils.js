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