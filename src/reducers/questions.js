import {
    QUESTION_SUCCESS,
    QUESTION_FAILURE
} from 'actions/types';

const initialState = {
    loading: false,
    questions: null,
    errors: []
};

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
       
        case QUESTION_SUCCESS:
            
            return {
                ...state,
                questions:payload
            }

        case QUESTION_FAILURE:
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
