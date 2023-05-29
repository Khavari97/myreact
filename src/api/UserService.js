import http from "./httpService";

import config from "./config.json";

export const registerUser = user => {
    return http.post(
        'https://e8616269-2b1a-4ed6-861b-138c82415351.mock.pstmn.io/user/signup',
        JSON.stringify(user)
    );
};

export const loginUser = user => {
    return http.post(
        'https://e8616269-2b1a-4ed6-861b-138c82415351.mock.pstmn.io/user/signin',
        JSON.stringify(user)
    );
};
export const otpUser = user => {
    return http.post(
        'https://e8616269-2b1a-4ed6-861b-138c82415351.mock.pstmn.io/user/verify-otp',
        JSON.stringify(user)
        
    );
};