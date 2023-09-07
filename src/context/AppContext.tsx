import { View, Text } from 'react-native'
import React, { ReactNode, createContext, useState } from 'react'
import { AppContextDto } from '../dtos/AppContextDto';

interface AppContextProviderProps {
    children: ReactNode;
}

type UpdateStateFn = (state: AppContextDto) => void;

export type AppContextProps = {
    state: AppContextDto;
    UpdateState: UpdateStateFn;
};


const DEFAULT_VALUE: AppContextDto = {
    modal: {
        displayName: [],
        isOpenModal: false
    },
    showHeader: true
};


export const AppContext = createContext<AppContextProps>({
    state: DEFAULT_VALUE,
    UpdateState: () => {},
});

export function AppContextProvider({ children }: AppContextProviderProps) {

    const [state, setState] = useState<AppContextDto>(DEFAULT_VALUE);

    const UpdateState: UpdateStateFn = (state) => {
        setState((prevState) => ({
            ...prevState,
            ...state,
        }));
    };

  return (
    <AppContext.Provider value={{state, UpdateState}}>
      {children}
    </AppContext.Provider>
  )
}