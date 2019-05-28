import React from 'react';

const defaultValue = {
    activeSession: false,
    expirationDate: null,
}

const SessionContext = React.createContext(defaultValue);
export const SessionContextProvider = SessionContext.Provider;
export const SessionContextConsumer = SessionContext.Consumer;