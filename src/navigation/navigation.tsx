import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {TextInputScreen} from '../screens/TextInputScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{header: () => <></>}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Animation101Screen"
        options={{header: () => <></>}}
        component={Animation101Screen}
      />
      <Stack.Screen
        name="Animation102Screen"
        options={{header: () => <></>}}
        component={Animation102Screen}
      />
      <Stack.Screen
        name="SwitchScreen"
        options={{header: () => <></>}}
        component={SwitchScreen}
      />
      <Stack.Screen
        name="AlertScreen"
        options={{header: () => <></>}}
        component={AlertScreen}
      />
      <Stack.Screen
        name="TextInputScreen"
        options={{header: () => <></>}}
        component={TextInputScreen}
      />
    </Stack.Navigator>
  );
};
