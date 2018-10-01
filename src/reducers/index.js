import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './appReducer';

const form = formReducer;

const reducers = {
  app, form,
};

export default combineReducers(reducers);
