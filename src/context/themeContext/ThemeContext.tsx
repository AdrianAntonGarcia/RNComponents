import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance, AppState, useColorScheme} from 'react-native';
import {ThemeState, themeReducer, lightTheme, darkTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  // Solo en IOS
  // useEffect(() => {
  //   colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  // }, [colorScheme]);
  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };
  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        // when debugger is active you will always get "light" theme. Just close debugger and everything will be good.
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);
  return (
    <ThemeContext.Provider value={{theme, setLightTheme, setDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
