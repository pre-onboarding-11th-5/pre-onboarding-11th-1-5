import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, StyledNavLink } from "./styles";

function Navigation() {
  const [jwt] = useState<string | null>(localStorage.getItem("jwt"));
  const navigate = useNavigate();

  const logout = () => {
    if (jwt) {
      localStorage.removeItem("jwt");
      navigate("/signin");
      window.location.reload();
    }
  };

  return (
    <Nav>
      <ul>
        <li>
          <StyledNavLink to="/">홈</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signin" onClick={logout}>
            {jwt ? "로그아웃" : "로그인"}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signup">회원가입</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/todo">TODO LIST</StyledNavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
