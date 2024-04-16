import React, { createContext, useEffect, useState } from 'react';

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if(!userData) return;
        const parsedUserData = JSON.parse(userData);
        setState(parsedUserData);
    }, []);

    return (
        <LoginContext.Provider value={{ state, setState }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginContextProvider };
