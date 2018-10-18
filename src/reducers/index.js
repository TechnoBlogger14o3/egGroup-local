import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './appReducer';
import auth from "./authReducer";

const form = formReducer;

const reducers = {
  app, form, auth
};

export default combineReducers(reducers);
