import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import { theme } from "styles/theme";
import RootRoute from "routes/rootRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RootRoute />
    </ThemeProvider>
  );
}

export default App;
