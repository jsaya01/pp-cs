import { LOGOUT_SUCCESS } from 'actions/types';
import { combineReducers } from 'redux';

// Reducers
// import DocumentData from './DocumentData';
import auth from './auth'
import admin from './admin'
import requests from './requests'

const appReducer = combineReducers({
    auth,
    admin,
    requests
});

const rootReducer = (state, action) => {

    if ([LOGOUT_SUCCESS].includes(action.type)) {
       state = undefined
    }
  
    return appReducer(state, action)
  }
export default rootReducer;