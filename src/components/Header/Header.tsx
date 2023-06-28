import styled from "styled-components";
import { breakpoints } from "styles/breakPoints";
import Navigation from "./Navigation";

const HeaderLayout = styled.header`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100vw;

  height: 200px;
  background-color: ${(props) => props.theme.colors.blue3};

  @media ${breakpoints.md} {
    top: 0;
    height: 100px;
  }
`;

function Header() {
  return (
    <HeaderLayout>
      <Navigation />
    </HeaderLayout>
  );
}

export default Header;
