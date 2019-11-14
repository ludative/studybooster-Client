import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: ${props => (props.login ? "#ffffff" : "blue")};
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.login ? "blue" : "")};
`;
