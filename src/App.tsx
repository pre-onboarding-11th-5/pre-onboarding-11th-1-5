import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import { theme } from "styles/theme";
import loadable from "@loadable/component";
import RootLayout from "pages/layout";

const LandingPage = loadable(() => import("pages/landingPage"));
const AuthPage = loadable(() => import("pages/authPage"));
const TodoPage = loadable(() => import("pages/todoPage"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="signup" element={<AuthPage />} />
            <Route path="signin" element={<AuthPage />} />
            <Route path="todo" element={<TodoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
