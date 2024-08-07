export const msalConfig = {
    auth: {
        clientId: '8f86647c-14c2-4fd4-9eb7-3cf255c3bcbc',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'https://testsso-zeta.vercel.app/', 
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ['User.Read']
};
