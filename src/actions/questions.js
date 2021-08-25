import {
    QUESTION_SUCCESS,
    QUESTION_FAILURE
} from "./types";

// user data

export const questionSuccess = (data) => {
    return {
        type: QUESTION_SUCCESS,
        payload: data
    }
}

export const questionFailure = (data) => {
    return {
        type: QUESTION_FAILURE,
        payload: data
    }
}

export const saveQuestionData = ({
    data,
    successCb,
}) => async dispatch => {
   
    
    if (typeof successCb === 'function') {
        successCb(data);
    }
    dispatch(questionSuccess(data))
}
