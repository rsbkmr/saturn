import * as Keychain from 'react-native-keychain';
import React, {createContext, useContext, useEffect, useReducer} from 'react';

interface IState {
  mnemonic?: string;
}

const initialState: IState = {
  mnemonic: '',
};

const StoreContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<IState>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: IState, payload: IState) => {
  return {
    ...state,
    ...payload,
  };
};

export function StoreProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const result = await Keychain.getGenericPassword();
      if (result) {
        dispatch({mnemonic: result.password});
      }
    })();
  }, []);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }

  return context;
}
