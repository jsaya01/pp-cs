import { LOGOUT_SUCCESS } from 'actions/types';
import { combineReducers } from 'redux';

// Reducers
// import DocumentData from './DocumentData';
import auth from './auth'

const appReducer = combineReducers({
    auth,
});

const rootReducer = (state, action) => {

    if ([LOGOUT_SUCCESS].includes(action.type)) {
       state = undefined
    }
  
    return appReducer(state, action)
  }
export default rootReducer;