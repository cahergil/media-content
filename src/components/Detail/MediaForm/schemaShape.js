import * as Yup from 'yup';
import * as validators from './validations';
const INVALID_FIELD = 'invalid field';
export const schemaShows = {
  id: Yup.string(),
  type: Yup.string(),
  title: Yup.string().required('title required'),
  categories: Yup.string()
    .test('test-categories', INVALID_FIELD, validators.validateCategories)
    .required('categories required'),
  synopsis: Yup.string()
    .test('test-synopsis', INVALID_FIELD, validators.validateSynopsis)
    .required('synopsis required'),
  releaseDate: Yup.string().required('release date required'),
  score: Yup.string()
    .test('test-score', INVALID_FIELD, validators.validateScore)
    .required('score required'),
  episodes: Yup.string()
    .test('test-episodes', INVALID_FIELD, validators.validateEpisodes)
    .required('episodes required'),
  imageUrl: Yup.string()
    .test('test-image', INVALID_FIELD, validators.validateImageUrl)
    .required('image required')
};

export const SchquemaEpidose = {
  id: Yup.string(),
  type: Yup.string(),
  title: Yup.string().required('title required'),
  categories: Yup.string()
    .test('test-categories', INVALID_FIELD, validators.validateCategories)
    .required('categories required'),
  synopsis: Yup.string()
    .test('test-synopsis', INVALID_FIELD, validators.validateSynopsis)
    .required('synopsis required'),
  releaseDate: Yup.string().required('release date required'),
  score: Yup.string()
    .test('test-score', INVALID_FIELD, validators.validateScore)
    .required('score required'),
  imageUrl: Yup.string()
    .test('test-image', INVALID_FIELD, validators.validateImageUrl)
    .required('image required')
};
