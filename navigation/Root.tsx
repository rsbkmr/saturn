import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {AddWallet} from '../screens/AddWallet';
import {CreateWallet} from '../screens/CreateWallet';
import {Home} from '../screens/Home';
import {Onboarding} from '../screens/Onboarding';
import {Scan} from '../screens/Scan';
import {Send} from '../screens/Send';

export type RootNavigationList = {
  Onboarding: undefined;
  Home: undefined;
  AddWallet: undefined;
  CreateWallet: undefined;
  Scan: undefined;
  Send: {addressOrInvoice: string};
};

export type RootNavigationProp = NativeStackNavigationProp<RootNavigationList>;

const RootStack = createNativeStackNavigator<RootNavigationList>();

export function Root() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Onboarding" component={Onboarding} />
        <RootStack.Screen name="AddWallet" component={AddWallet} />
        <RootStack.Screen name="CreateWallet" component={CreateWallet} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Scan" component={Scan} />
        <RootStack.Screen name="Send" component={Send} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
