import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 40px 20%;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 30px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #a6a6a6;
  text-align: center;
  width: 100%;
`;

const Button = styled.p`
  display: flex;
  justify-content: center;
  padding: 10px 30px;
`;

const Paragraph = styled.p`
  font-size: 15px;
`;

export { Container, Text, Title, Button, Paragraph };
