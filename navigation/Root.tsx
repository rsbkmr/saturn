import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {Home} from '../screens/Home';

export type RootNavigationList = {
  Home: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootNavigationList>;

const RootStack = createNativeStackNavigator<RootNavigationList>();

export function Root() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
