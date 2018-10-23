/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import npm modules
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import custom Classes
import app from './appReducer';
import auth from "./authReducer";

const form = formReducer;

const reducers = {
  app, form, auth
};

export default combineReducers(reducers);
