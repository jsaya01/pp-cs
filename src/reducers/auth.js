import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from 'actions/types';

import { PROFILE_DATA } from 'const/app';
import AppUtils from 'utils/AppUtils';

const initialState = {
    refreshToken: localStorage.getItem('admin_refresh_token'),
    accessToken: null,
    loading: false,
    user: null,
    errors: []
};

const clearLocalStorage = () => {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem(PROFILE_DATA)
}

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('admin_refresh_token', payload.data.refreshToken);
            localStorage.setItem('admin_access_token', payload.data.accessToken);
           
            return {
                ...state,
                ...payload.data,
                isAuthenticated: false,
                loading: false,
                errors: [],
                userType: 'user'
            }

        case LOGIN_FAILURE:
            // clearLocalStorage();
            AppUtils.showMessage("payload", payload)
            return {
                ...state,
                errors: payload.errors,
                loading: false,
            }
        default:
            return state
    }
}
