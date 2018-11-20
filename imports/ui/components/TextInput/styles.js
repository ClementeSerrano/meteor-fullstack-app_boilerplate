import styled from "styled-components";

const Container = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  :focus {
    border: 3px solid #8c8c8c;
  }
`;

export { Container };
