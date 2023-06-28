import styled from "styled-components";

export const Button = styled.button`
  width: 80px;
  height: 40px;

  font-weight: 900;
  font-size: 1.6rem;

  background-color: ${({ theme }) => theme.colors.grey2};
  border: 1px solid ${({ theme }) => theme.colors.grey3};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey3};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.grey2};
`;
