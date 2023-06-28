import styled, { css } from "styled-components";
import { breakpoints } from "styles/breakPoints";

// eslint-disable-next-line import/prefer-default-export
export const Form = styled.form`
  width: 100vw;
  height: 100vh;
  padding: 2rem;

  background: ${(props) => props.theme.colors.grey1};

  legend {
    font-size: 2rem;
    font-weight: 900;
    margin: 1rem 0;
  }

  @media ${breakpoints.md} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 450px;

    border-radius: 1.6rem;
  }
`;

export const Label = styled.label<{ focus: boolean }>`
  position: relative;
  z-index: 1;

  ${({ focus }) => css`
    top: ${focus ? "1.5rem" : "3.2rem"};
    font-size: ${focus ? "1rem" : "1.4rem"};
  `}
  line-height: 1.4rem;
  left: 1rem;
  color: ${(props) => props.theme.colors.grey2};
`;

export const Input = styled.input<{ visible: boolean }>`
  width: 100%;
  height: 55px;
  padding: 1rem;

  border: 1px solid
    ${({ theme, visible }) =>
      visible ? theme.colors.red1 : theme.colors.blue2};

  border-radius: 1.4rem;

  margin-left: auto;
  margin-bottom: 1rem;
`;

export const GuideMsg = styled.span<{ visible: boolean }>`
  position: relative;
  top: -0.5rem;
  left: 0.5rem;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  color: ${({ theme }) => theme.colors.red1};
  font-size: 1.2rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue2};
  padding: 1rem;
  border-radius: 1.4rem;

  margin: 1rem 0;

  font-size: 2rem;
  font-weight: 900;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue1};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.blue2};
    color: ${({ theme }) => theme.colors.black};
  }
`;
