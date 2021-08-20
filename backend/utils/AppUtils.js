const AppConstants = require("../constants/AppConstant");

const AppUtils = {

    // Format Reponse in the correct format
    formatAndSendResponse({
        res,
        status = AppConstants.API_RESPONSE_CODES.DEFAULT_ERROR,
        data = {},
        message = '',
        errors = [],
        total
    }) {
        res.status(status).json({
            data,
            message,
            errors,
            total: total && total
        }).end();
    },

    // Send Default Error
    sendDefaultError({
        res,
        error = {},
        data = {}
    }) {
        console.log(error);
        res.status(AppConstants.API_RESPONSE_CODES.DEFAULT_ERROR).json({
            data: data,
            message: '',
            errors: [error.message],
            errorMessage: error.toString()
        }).end();
    },

    showMessage: (key, message) => {
        if (typeof message === 'undefined') {
            console.log(key)
        }
        else {
            console.log(key, message)
        }

    },


}

module.exports = AppUtils;