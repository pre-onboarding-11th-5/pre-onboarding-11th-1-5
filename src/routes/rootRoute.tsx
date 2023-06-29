import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import AuthPage from "pages/authPage";
import LandingPage from "pages/landingPage";
import TodoPage from "pages/todoPage";
import RootLayout from "pages/layout";

function AuthRoute() {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    alert("Todo페이지로 이동합니다.");
    return <Navigate to="/todo" replace />;
  }
  return <Outlet />;
}

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route element={<AuthRoute />}>
            <Route path="signup" element={<AuthPage />} />
            <Route path="signin" element={<AuthPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
