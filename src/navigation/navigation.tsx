import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {View} from 'react-native';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{header: () => <></>}}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
