import { combineReducers } from 'redux'
import mediaReducer from './media';
import filterReducer from './filter';
import breadcrumReducer from './breadcrum';


export const rootReducer = combineReducers({
  media: mediaReducer,
  filter: filterReducer,
  breadcrum: breadcrumReducer
});

