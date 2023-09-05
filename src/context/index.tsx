import React, { ReactNode } from 'react';
import { AppContextProvider } from './AppContext';

interface AppContextProps {
  children: ReactNode;
}

const AppContext: React.FC<AppContextProps> = ({ children }) => (
  <AppContextProvider>
    {children}
  </AppContextProvider>
);

export default AppContext;
