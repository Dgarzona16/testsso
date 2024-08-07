export const msalConfig = {
    auth: {
        clientId: '8f86647c-14c2-4fd4-9eb7-3cf255c3bcbc',
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: 'https://yellow-hill-0ca47791e.5.azurestaticapps.net/', 
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ['User.Read']
};
