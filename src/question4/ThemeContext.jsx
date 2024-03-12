//todo: Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").

import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeUpdateContext.Provider value={toggleTheme}>
      <ThemeContext.Provider value={darkTheme}>
        {children}
      </ThemeContext.Provider>
    </ThemeUpdateContext.Provider>
  );
}
