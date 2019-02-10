import { combineReducers } from 'redux';
import searchReducer from './search';
import favouritesReducer from './favourites';

export default combineReducers({
  search: searchReducer,
  favourites: favouritesReducer
});
