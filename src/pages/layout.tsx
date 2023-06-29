import styled from "styled-components";
import { breakpoints } from "styles/breakPoints";

import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import useRedirectByJwt from "hooks/useRedirectByJwt";

const Main = styled.main`
  position: relative;
  height: 100vh;
  padding-bottom: 200px;
  overflow-y: scroll;

  @media ${breakpoints.md} {
    padding-top: 100px;
  }
`;

function RootLayout() {
  useRedirectByJwt();

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default RootLayout;
