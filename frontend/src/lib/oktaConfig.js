import { redirect } from "react-router-dom";

export const oktaConfig = {
    clientId: '0oaljgg7sutQZFqJ35d7',
    issuer: 'https://dev-08038990.okta.com/oauth2/default',
    redirectUti: 'http://localhost:5317/login/callback',
    scope: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}