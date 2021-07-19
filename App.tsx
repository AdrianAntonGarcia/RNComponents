import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Navigation} from './src/navigation/navigation';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

export const App = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;
