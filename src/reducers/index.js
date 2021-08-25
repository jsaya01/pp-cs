import { USER_FAILURE } from 'actions/types';
import { combineReducers } from 'redux';

// Reducers
// import DocumentData from './DocumentData';
import users from './users'
import questions from './questions'

const appReducer = combineReducers({
    users,
    questions,
});

const rootReducer = (state, action) => {

    if ([USER_FAILURE].includes(action.type)) {
       state = undefined
    }
  
    return appReducer(state, action)
  }
export default rootReducer;