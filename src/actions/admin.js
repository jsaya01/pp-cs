import {
    ADMIN_REQUEST,
    ADMIN_SUCCESS,
    ADMIN_FAILURE,
    ADMIN_USER_SUCCESS,
    ADMIN_LEGACY_SUCCESS,
    ADMIN_BURIAL_SUCCESS,
    ADMIN_DONATION_SUCCESS,
    ADMIN_CHARITY_SUCCESS,
    COUNT_REQUEST,
    COUNT_SUCCESS,
    COUNT_FAILURE,
    ADMIN_PROFILE_REQUEST,
    ADMIN_PROFILE_SUCCESS,
    ADMIN_PROFILE_FAILURE,
    GET_MEMORIAL_REQUEST,
    GET_MEMORIAL_SUCCESS,
    GET_MEMORIAL_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from "./types";
import axios from 'axios'
import url from "const/url";
import AppUtils from "utils/AppUtils";

// login user 

export const adminRequest = () => {
    return {
        type: ADMIN_REQUEST
    }
}
export const adminUserSuccess = (data) => {
    return {
        type: ADMIN_USER_SUCCESS,
        payload: data
    }
}

export const adminLegacySuccess = (data) => {
    return {
        type: ADMIN_LEGACY_SUCCESS,
        payload: data
    }
}

export const adminBurialSuccess = (data) => {
    return {
        type: ADMIN_BURIAL_SUCCESS,
        payload: data
    }
}

export const adminCharitySuccess = (data) => {
    return {
        type: ADMIN_CHARITY_SUCCESS,
        payload: data
    }
}

export const adminDonationSuccess = (data) => {
    return {
        type: ADMIN_DONATION_SUCCESS,
        payload: data
    }
}

export const adminFailure = (data) => {
    return {
        type: ADMIN_FAILURE,
        payload: data
    }
}

export const getAdminData = ({
    type,
    charity,
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.GET_ALL}`;
    const headers = await AppUtils.getCommonHeaders()
    const config = {
        headers
    }

    const body = JSON.stringify({
        type,
        charity
    });

    try {
        dispatch(adminRequest())
        const res = await axios.post(_url, body, config);
        AppUtils.showMessage("type ", res)
        switch(type) {
            case 'user':
                dispatch(adminUserSuccess(res.data))
                break
            case 'legacy':
                dispatch(adminLegacySuccess(res.data))
                break
            case 'burial':
                dispatch(adminBurialSuccess(res.data))
                break
            case 'charity':
                dispatch(adminCharitySuccess(res.data))
                break
            case 'donation':
                dispatch(adminDonationSuccess(res.data))
                break
        }
        
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(adminFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }
    }
}

/**
 * 
 * get admin total
 */
export const countRequest = () => {
    return {
        type: COUNT_REQUEST
    }
}
export const countSuccess = (data) => {
    return {
        type: COUNT_SUCCESS,
        payload: data
    }
}

export const countFailure = (data) => {
    return {
        type: COUNT_FAILURE,
        payload: data
    }
}
export const getCountData = ({
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.GET_COUNT}`;
    const headers = await AppUtils.getCommonHeaders()
    const config = {
        headers
    }
    let data = {}  
    const body = JSON.stringify({
        data
    });

    try {
        dispatch(countRequest())
        const res = await axios.post(_url, body, config);
        dispatch(countSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(countFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }
    }
}

/**
 * 
 * get admin profile
 */

export const adminProfileRequest = () => {
    return {
        type: ADMIN_PROFILE_REQUEST
    }
}
export const adminProfileSuccess = (data) => {
    return {
        type: ADMIN_PROFILE_SUCCESS,
        payload: data
    }
}

export const adminProfileFailure = (data) => {
    return {
        type: ADMIN_PROFILE_FAILURE,
        payload: data
    }
}
export const getAdminProfile = ({
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.GET_PROFILE}`;
    const headers = await AppUtils.getCommonHeaders()
    const config = {
        headers
    }
    let data = {}  
    const body = JSON.stringify({
        data
    });

    try {
        dispatch(adminProfileRequest())
        const res = await axios.post(_url, body, config);
        dispatch(adminProfileSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(adminProfileFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }
    }
}

/**
 * 
 * get memorial request 
 */

export const getMemorialRequest = () => {
    return {
        type: GET_MEMORIAL_REQUEST
    }
}
export const getMemorialSuccess = (data) => {
    return {
        type: GET_MEMORIAL_SUCCESS,
        payload: data
    }
}

export const getMemorialFailure = (data) => {
    return {
        type: GET_MEMORIAL_FAILURE,
        payload: data
    }
}
export const getMemorialData = ({
    data,
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.GET_MEMORIAL}`;
    const headers = await AppUtils.getCommonHeaders()
    const config = {
        headers
    }
    
    try {
        dispatch(getMemorialRequest())
        const res = await axios.post(_url, data, config);
        dispatch(getMemorialSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(getMemorialFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }
    }
}

/**
 * 
 * get user request 
 */

export const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST
    }
}
export const getUserSuccess = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    }
}

export const getUserFailure = (data) => {
    return {
        type: GET_USER_FAILURE,
        payload: data
    }
}
export const getUserProfile = ({
    user_id,
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.GET_USER}?user_id=${user_id}`;
    const headers = await AppUtils.getCommonHeaders()
    const config = {
        headers
    }
    
    try {
        dispatch(getUserRequest())
        const res = await axios.get(_url, config);
        dispatch(getUserSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(getUserFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }
    }
}