import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "pages/authPage";
import LandingPage from "pages/landingPage";
import TodoPage from "pages/todoPage";
import RootLayout from "pages/layout";

function RootRoute() {
  return (
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
  );
}

export default RootRoute;
