const url = {
    BASE_URL: 'https://everark.me/api/',
    // BASE_URL: 'http://localhost:3008/api/',
 
    // AUTH
    LOGIN: 'admin/login',
    SEND_CODE: 'admin/sendResetCode',
    // ADMIN
    GET_ALL:'admin/getAll',
    GET_COUNT:'admin/getCount',
    GET_PROFILE:'admin/getProfile',
    // Donation request
    GET_REQUESTS:'charity/paymentRequests',
    SEND_DONATION:'charity/makePayment',
    // Memorial
    GET_MEMORIAL:'memorial/getMemorial',
    // get user
    GET_USER:'profile/me'
}

export default url;