import { ADMIN_USER_SUCCESS } from 'actions/types';
import { ADMIN_LEGACY_SUCCESS } from 'actions/types';
import { ADMIN_DONATION_SUCCESS } from 'actions/types';
import { COUNT_REQUEST } from 'actions/types';
import { COUNT_FAILURE } from 'actions/types';
import { ADMIN_PROFILE_SUCCESS } from 'actions/types';
import { UPDATE_LEGACY } from 'actions/types';
import { GET_MEMORIAL_SUCCESS } from 'actions/types';
import { GET_USER_REQUEST } from 'actions/types';
import { GET_USER_SUCCESS } from 'actions/types';
import { GET_USER_FAILURE } from 'actions/types';
import { GET_MEMORIAL_FAILURE } from 'actions/types';
import { GET_MEMORIAL_REQUEST } from 'actions/types';
import { ADMIN_PROFILE_FAILURE } from 'actions/types';
import { ADMIN_PROFILE_REQUEST } from 'actions/types';
import { COUNT_SUCCESS } from 'actions/types';
import { ADMIN_CHARITY_SUCCESS } from 'actions/types';
import { ADMIN_BURIAL_SUCCESS } from 'actions/types';
import {
    ADMIN_REQUEST,
    ADMIN_SUCCESS,
    ADMIN_FAILURE
} from 'actions/types';

import { PROFILE_DATA } from 'const/app';
import AppUtils from 'utils/AppUtils';

const initialState = {
    loading: false,
    errors: [],
    users: [],
    legacy: [],
    burial: [],
    charity: [],
    donation: [],
    count: {},
    profile: {},
    memorial: {},
    user:{
        number: {
            phone: '',
            other: ''
        },
        address: {
            street: '',
            house: '',
            city: '',
            country: '',
            state: '',
            zip: ''
        },
        filePath:'',
        firstName: '',
        lastName: '',
        fullName: '',
        prefix: '',
        suffix: '',
        legal_name: '',
        middle_name: '',
        isLegal: false,
        isBilling: false,
        isVeteran: false,
        isName: false,
        isEmail: false,
        dob: '',
        dop: '',
        martial: '',
        religon: '',
        gender: 'm'
    }
};

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case ADMIN_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }

        case ADMIN_USER_SUCCESS:
            return {
                ...state,
                users: payload.data,
                loading: false,
                errors: []
            }
        case ADMIN_LEGACY_SUCCESS:
            return {
                ...state,
                legacy: payload.data,
                loading: false,
                errors: []
            }
        case ADMIN_BURIAL_SUCCESS:
            return {
                ...state,
                burial: payload.data,
                loading: false,
                errors: []
            }
        case ADMIN_CHARITY_SUCCESS:
            return {
                ...state,
                charity: payload.data,
                loading: false,
                errors: []
            }
        case ADMIN_DONATION_SUCCESS:
            return {
                ...state,
                donation: payload.data,
                loading: false,
                errors: []
            }

        case ADMIN_FAILURE:
            // clearLocalStorage();
            AppUtils.showMessage("payload", payload)
            return {
                ...state,
                errors: payload.errors,
                loading: false,
                data: []
            }

        case COUNT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case COUNT_SUCCESS:
            return {
                ...state,
                count: payload.data,
                loading: false,
                errors: []
            }
        case COUNT_FAILURE:
            return {
                ...state,
                count: {},
                loading: false,
                errors: []
            }
        case ADMIN_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADMIN_PROFILE_SUCCESS:
            return {
                ...state,
                profile: payload.data,
                loading: false,
                errors: []
            }
        case ADMIN_PROFILE_FAILURE:
            return {
                ...state,
                count: {},
                loading: false,
                errors: []
            }
        case GET_MEMORIAL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_MEMORIAL_SUCCESS:
            return {
                ...state,
                memorial: payload.data,
                loading: false,
                errors: []
            }
        case GET_MEMORIAL_FAILURE:
            return {
                ...state,
                memorial: {},
                loading: false,
                errors: []
            }
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                user: payload.data,
                loading: false,
                errors: []
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                memorial: {},
                loading: false,
                errors: []
            }
        default:
            return state
    }
}
