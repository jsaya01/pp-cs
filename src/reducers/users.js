import {
    USER_SUCCESS,
    USER_FAILURE
} from 'actions/types';

const initialState = {
    loading: false,
    user: null,
    errors: []
};

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
       
        case USER_SUCCESS:
            
            return {
                ...state,
                user:payload
            }

        case USER_FAILURE:
            // clearLocalStorage();
            AppUtils.showMessage("payload", payload)
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}
