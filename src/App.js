import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './config/authconfig';

const App = () => {
    const { instance, accounts } = useMsal();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Aplicación React con SSO</h1>
                {accounts.length > 0 ? (
                    <p>Bienvenido, {accounts[0].name}</p>
                ) : (
                    <button onClick={handleLogin}>Iniciar Sesión</button>
                )}
            </header>
        </div>
    );
};

export default App;
