import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { breakpoints } from "styles/breakPoints";

export const Nav = styled.nav`
  width: 100%;
  max-width: var(--max-width);
  height: 100%;

  margin: 0 auto;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;

    height: 100%;
  }

  ul li {
    width: 100%;
    text-align: center;
    border-radius: 1.2rem;
    border: 1px solid ${(props) => props.theme.colors.blue2};
  }

  @media ${breakpoints.md} {
    ul {
      flex-direction: row;
      justify-content: flex-start;
      gap: 2.1rem;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 1rem;

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.colors.blue1};
    color: ${(props) => props.theme.colors.white};
  }
`;
