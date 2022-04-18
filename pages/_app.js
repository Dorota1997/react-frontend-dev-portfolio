import { useDarkMode } from "../components/styled-components/useDarkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/styled-components/Themes";
import { GlobalStyles } from "../components/styled-components/GlobalStyles";
import DataProvider from "../components/DataContext";
import "../styles/globals.scss";
import "../styles/Slider.scss";
import "../styles/Projects.scss";
import "../styles/Footer.module.scss";

function MyApp({ Component, pageProps }) {
  const [theme, handleToggleTheme, isMounted] = useDarkMode();
  const themeMode = theme === "dark" ? lightTheme : darkTheme;

  return (
    <>
      <DataProvider>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          {isMounted && (
            <Component
              {...pageProps}
              theme={theme}
              onToggleTheme={handleToggleTheme}
            />
          )}
        </ThemeProvider>
      </DataProvider>
    </>
  );
}

export default MyApp;
