const AppConstants = {
    BASE_URL:'',
    DEFAULT_PAGE_SIZE: 20,
    API_RESPONSE_CODES: {
      SUCCESS: 200,
      NOT_FOUND: 404,
      DEFAULT_ERROR: 500,
      UNAUTHORIZED: 401,
      DUPLICATE: 409,
      INVALID_REQUEST: 400,
      FORBIDDEN: 403,
      NO_CONTENT:205
    },
    API_RESPONSE_STATUS: {
      SUCCESS: "SUCCESS",
      ERROR: "ERROR"
    },
  }
  
  module.exports = AppConstants;