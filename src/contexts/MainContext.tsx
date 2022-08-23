import React, { createContext, ReactNode, useReducer } from "react";

import {
  userInitialState,
  userReducer,
  UserActionType,
  UserStateType,
} from "../reducers/userReducer";

type MainContextType = {
  state: UserStateType;
  dispatch: React.Dispatch<UserActionType>;
};

export const MainContext = createContext<MainContextType>({
  state: userInitialState,
  dispatch: () => null
});

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [ state, dispatch ] = useReducer<React.Reducer<UserStateType, UserActionType
  >>(userReducer, userInitialState);

  return (
    <MainContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </MainContext.Provider>
  )
};
