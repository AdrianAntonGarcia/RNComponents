import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from './src/navigation/navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

export const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default App;
