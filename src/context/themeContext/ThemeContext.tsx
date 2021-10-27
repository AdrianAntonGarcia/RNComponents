import React, {createContext, useReducer} from 'react';
import {ThemeState, themeReducer, lightTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);
  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('set_light_theme');
  };
  return (
    <ThemeContext.Provider value={{theme, setLightTheme, setDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
