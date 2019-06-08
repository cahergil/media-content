import * as Yup from 'yup';
import * as validators from './validations';

export const schemaShows = {
  id: Yup.string(),
  type: Yup.string(),
  title: Yup.string().required('title required'),
  categories: Yup.string()
    .test('test-categories', 'invalid field', validators.validateCategories)
    .required('categories required'),
  synopsis: Yup.string()
    .test('test-synopsis', 'invalid field', validators.validateSynopsis)
    .required('synopsis required'),
  releaseDate: Yup.string().required('release date required'),
  score: Yup.string()
    .test('test-score', 'invalid field', validators.validateScore)
    .required('score required'),
  episodes: Yup.string()
    .test('test-episodes', 'invalid field', validators.validateEpisodes)
    .required('episodes required'),
  imageUrl: Yup.string()
    .test('test-image', 'invalid field', validators.validateImageUrl)
    .required('image required')
};

export const SchquemaEpidose = {
  id: Yup.string(),
  type: Yup.string(),
  title: Yup.string().required('title required'),
  categories: Yup.string()
    .test('test-categories', 'invalid field', validators.validateCategories)
    .required('categories required'),
  synopsis: Yup.string()
    .test('test-synopsis', 'invalid field', validators.validateSynopsis)
    .required('synopsis required'),
  releaseDate: Yup.string().required('release date required'),
  score: Yup.string()
    .test('test-score', 'invalid field', validators.validateScore)
    .required('score required'),
  imageUrl: Yup.string()
    .test('test-image', 'invalid field', validators.validateImageUrl)
    .required('image required')
};
