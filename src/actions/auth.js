import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    RESET_CODE_FAILURE,
    RESET_CODE_REQUEST,
    RESET_CODE_SUCCESS
} from "./types";
import axios from 'axios'
import url from "const/url";
import AppUtils from "utils/AppUtils";

// login user 

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFailure = (data) => {
    return {
        type: LOGIN_FAILURE,
        payload: data
    }
}

export const loginAccount = ({
    email,
    password,
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.LOGIN}`;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        email,
        password
    });

    try {
        dispatch(loginRequest())
        const res = await axios.post(_url, body, config);
        AppUtils.showMessage("type ", res)

        dispatch(loginSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(loginFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }

    }
}

// login user 

export const resetCodedRequest = () => {
    return {
        type: RESET_CODE_REQUEST
    }
}
export const resetCodeSuccess = (data) => {
    return {
        type: RESET_CODE_SUCCESS,
        payload: data
    }
}

export const resetCodeFailure = (data) => {
    return {
        type: RESET_CODE_FAILURE,
        payload: data
    }
}

export const resetCodePassword = ({
    email,
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.SEND_CODE}`;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        email
    });

    try {
        dispatch(resetCodedRequest())
        const res = await axios.post(_url, body, config);
        AppUtils.showMessage("type ", res)

        dispatch(resetCodeSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(resetCodeFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }

    }
}