export default {
    oidc: {
      issuer: 'https://dev-08038990.okta.com/oauth2/default',
      clientId: '0oalgl10u1IYJIlTl5d7',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `{window.location.origin}/login/callback`
    },
    widget: {
      issuer: 'https://dev-08038990.okta.com/oauth2/default',
      clientId: '0oalgl10u1IYJIlTl5d7',
      redirectUri: `{window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email'],
    }
  };