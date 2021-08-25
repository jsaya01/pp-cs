import {
    USER_FAILURE,
    USER_SUCCESS
} from "./types";

// user data

export const userSuccess = (data) => {
    return {
        type: USER_SUCCESS,
        payload: data
    }
}

export const userFailure = (data) => {
    return {
        type: USER_FAILURE,
        payload: data
    }
}

export const saveUserData = ({
    data,
    successCb,
}) => async dispatch => {
   
    
    if (typeof successCb === 'function') {
        successCb(data);
    }
    dispatch(userSuccess(data))
}
