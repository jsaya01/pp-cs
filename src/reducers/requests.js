import { SEND_DONATION_REQUEST } from 'actions/types';
import { SEND_DONATION_FAILURE } from 'actions/types';
import { SEND_DONATION_SUCCESS } from 'actions/types';
import {
    GET_DONATION_REQUEST,
    GET_DONATION_SUCCESS,
    GET_DONATION_FAILURE
} from 'actions/types';

import AppUtils from 'utils/AppUtils';

const initialState = {
    loading: false,
    errors: [],
    requests: [],
    
};

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        
        case GET_DONATION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_DONATION_SUCCESS:
            return {
                ...state,
                requests: payload.data,
                loading: false,
                errors: []
            }
        case GET_DONATION_FAILURE:
            return {
                ...state,
                requests: [],
                loading: false,
                errors: []
            }

        case SEND_DONATION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SEND_DONATION_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: []
            }
        case SEND_DONATION_FAILURE:
            return {
                ...state,
                loading: false,
                errors: []
            }
        default:
            return state
    }
}
