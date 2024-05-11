import React from 'react';
import {Root} from './navigation/Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StoreProvider} from './Store';

export default function App() {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <Root />
      </SafeAreaProvider>
    </StoreProvider>
  );
}
