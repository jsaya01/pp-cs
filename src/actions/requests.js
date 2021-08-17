
/**
 * 
 * get donation request
 */

import { GET_DONATION_FAILURE, GET_DONATION_REQUEST, GET_DONATION_SUCCESS, SEND_DONATION_FAILURE, SEND_DONATION_REQUEST, SEND_DONATION_SUCCESS } from "./types"
import url from "const/url";
import AppUtils from "utils/AppUtils";
import axios from 'axios'

/**
 * get all donation requests 
 *
 */
 export const getDonationRequest = () => {
    return {
        type: GET_DONATION_REQUEST
    }
}
export const getDonationSuccess = (data) => {
    return {
        type: GET_DONATION_SUCCESS,
        payload: data
    }
}

export const getDonationFailure = (data) => {
    return {
        type: GET_DONATION_FAILURE,
        payload: data
    }
}
export const getDonationData = ({
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.GET_REQUESTS}`;
    const headers = await AppUtils.getCommonHeaders()
    const config = {
        headers
    }
    let data = {}  
    const body = JSON.stringify({
        data
    });

    try {
        dispatch(getDonationRequest())
        const res = await axios.post(_url, body, config);
        dispatch(getDonationSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(getDonationFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }
    }
}

/**
 * send donation requests 
 *
 */

 export const sendDonationRequest = () => {
    return {
        type: SEND_DONATION_REQUEST
    }
}
export const sendDonationSuccess = (data) => {
    return {
        type: SEND_DONATION_SUCCESS,
        payload: data
    }
}

export const sendDonationFailure = (data) => {
    return {
        type: SEND_DONATION_FAILURE,
        payload: data
    }
}
export const sendDonation = ({
    request_id,
    successCb,
    failureCb
}) => async dispatch => {
    const _url = `${url.BASE_URL}${url.SEND_DONATION}`;
    const headers = await AppUtils.getCommonHeaders()
    const config = {
        headers
    }
    
    const body = JSON.stringify({
        request_id
    });

    try {
        dispatch(sendDonationRequest())
        const res = await axios.post(_url, body, config);
        dispatch(sendDonationSuccess(res.data))
        if (typeof successCb === 'function') {
            successCb(res.data);
        }

    } catch (error) {
        AppUtils.showMessage("error ===>",error)
        let response = error.response
        dispatch(sendDonationFailure(response.data))
        if (typeof failureCb === 'function') {
            failureCb(response.data, response.status);
        }
    }
}
