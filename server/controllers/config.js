// load contents of .env into process.env
require('dotenv').config();

exports.Config = {
    tenantUrl       : process.env.TENANT_URL,
    discoveryUrl    : process.env.DISCOVERY_URL,
    clientId        : process.env.CLIENT_ID,
    clientSecret    : process.env.CLIENT_SECRET,
    redirectUri     : process.env.REDIRECT_URI,
    scope           : process.env.SCOPE,
    signupLink      : process.env.USER_REGISTRATION_LINK,
    themeId         : process.env.THEME_ID,
    resourceBase    : process.env.RESOURCE_BASE_URL,
    apiClientId     : process.env.API_CLIENT_ID,
    apiClientSecret : process.env.API_CLIENT_SECRET,
    mtlsOrJWT       : process.env.MTLS_OR_JWT,
    certBound       : process.env.CERT_BOUND,
    postLogoutUri   : process.env.POST_LOGOUT_REDIRECT_URI,
};