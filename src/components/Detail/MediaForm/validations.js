export const validateScore = (value) => {
  let error;
  const scoreRegex = /(^\d*\.?\d*[1-9]+\d*$)|(^[1-9]+\d*\.\d*$)/;
  if (value.score === '') {
    error = 'score required'
  }
  else if (!scoreRegex.test(value) || value > 10) {
    error = 'score not valid'
  }

  return error;
}

export const validateTitle = (value) => {
  const titleRegex = /^[-a-z0-9,/()&:.' ]*[a-z][-a-z0-9,/()&:.' ]*$/
  let error;
  if (!value ) {
    error = 'title required';
  } else if (!value.trim() || !titleRegex.test(value)) {
    error = 'title not valid';
  } 

  return error;
}

export const validateSynopsis = (value) => {
  let error;
  // const synopsisItemRegex = /^([-a-z' ]*[a-z][-a-z' ]*){10,}$/i;
  if (!value) {
    error= 'synopsis required'
  } else if (!value.trim()) {
    error = 'synopsis not valid';
  }
  // else if (!synopsisItemRegex.test(value)) {
  // error = 'min 10 characters'
  // }
  return error;
}

export const validateImageUrl = (value) => {
  const imageUrlRegex = /^https?:\/\/(?:[a-z-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|gif|png)$/;
  let error;
  if (!imageUrlRegex.test(value)) {
    error = 'link not valid';
  }  
  return error;
}

export const validateEpisodes = (value) => {
  const episodesItemRegex = /^[1-9]\d*$/;
  let error;
  const splittedEpidosesValues = value.split(',');

  if (splittedEpidosesValues.length === 0) {
    error = 'episodes required'
  }
  else if (splittedEpidosesValues.length > 0) {
    for (let i = 0; i < splittedEpidosesValues.length; i++) {
      // coma missplacement
      if (splittedEpidosesValues[i] === '' || splittedEpidosesValues[i].trim() === '') {
        error = 'episodes not valid'
        break;
      }
      if (!episodesItemRegex.test(splittedEpidosesValues[i])) {
        error = 'not allowed';
        break;
      }

    }
  }
  return error;

}

export const validateCategories = (value) => {
  const categoriesItemRegex = /^[-a-z' ]*[a-z][-a-z' ]*$/i;
  const categoriesItemRegex1 = /^([-a-z' ]*[a-z][-a-z' ]*){3,}$/i;
  let error; 
  const splittedCategoriesValues = value.split(',');
  if (!value || !value.trim()) {
    error = 'categories required'
  }
  else if (splittedCategoriesValues.length > 0) {
    for (let i = 0; i < splittedCategoriesValues.length; i++) {
      // coma missplacement
      if (splittedCategoriesValues[i] === '' || splittedCategoriesValues[i].trim() === '') {
        error = 'categories not valid'
        break;
      }
      if (!categoriesItemRegex.test(splittedCategoriesValues[i])) {
        error = 'only words allowed';
        break;
      }
      if (!categoriesItemRegex1.test(splittedCategoriesValues[i])) {
        error = 'word too short';
        break;
      }
    }
  }
  return error;
}