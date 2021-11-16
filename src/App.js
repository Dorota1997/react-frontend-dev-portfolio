import React from "react";
import Main from "./components/Main";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/styled-components/useDarkMode";
import { GlobalStyles } from "./components/styled-components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/styled-components/Themes";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "dark" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Main theme={theme} toggleTheme={themeToggler}/>
    </ThemeProvider>
  );
};

export default App;
