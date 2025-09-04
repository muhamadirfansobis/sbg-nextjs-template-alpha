/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { createContext, useContext, useEffect } from 'react';

export type Theme = {
  colors: any;
};

const ThemeContext = createContext({});

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  themeData: Theme;
}> = ({ children, themeData }) => {
  useEffect(() => {
    if (themeData.colors) {
      Object.keys(themeData.colors).map((color) => {
        Object.keys(themeData.colors[color]).map((key) => {
          document.documentElement.style.setProperty(
            `--color-${color}-${key}`,
            themeData.colors[color][key]
          );
        });
      });
    }
  }, [themeData]);

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
