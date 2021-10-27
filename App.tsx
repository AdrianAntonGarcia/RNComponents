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
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: 'string',
//     // background: 'string',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string',
//   },
// };

export const App = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  return (
    <AppState>
      <NavigationContainer
        ref={navigationRef}
        // theme={customTheme}
      >
        <Navigation />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default App;
