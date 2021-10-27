import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigationContainerRef,
  Theme,
} from '@react-navigation/native';
import {Navigation} from './src/navigation/navigation';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'string',
    // background: 'string',
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string',
  },
};

export const App = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef} theme={customTheme}>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;
