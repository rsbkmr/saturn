import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {AddWallet} from '../screens/AddWallet';
import {Home} from '../screens/Home';
import {Onboarding} from '../screens/Onboarding';

export type RootNavigationList = {
  Onboarding: undefined;
  Home: undefined;
  AddWallet: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootNavigationList>;

const RootStack = createNativeStackNavigator<RootNavigationList>();

export function Root() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Onboarding" component={Onboarding} />
        <RootStack.Screen name="AddWallet" component={AddWallet} />
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
