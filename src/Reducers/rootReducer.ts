import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import tripReducer from './tripReducer';
import userReducer from './userReducer';
import pageReducer from './currentPageReducer'
import isSignedReducer from './isSignedReducer';
import themeReducer from "./themePageReducer"

const rootReducer = combineReducers({
  peopleState   : peopleReducer,
  trip          : tripReducer,
  user          : userReducer,
  page          : pageReducer,
  Authinticaiton: isSignedReducer,
  Theme     : themeReducer
});

export default rootReducer;