import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
`;

const Text = styled.div`
  padding: 10px 30px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #a6a6a6;
  text-align: center;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px 30px;
`;

const Paragraph = styled.p`
  font-size: 15px;
`;

export { Container, Text, Title, Paragraph, Button };
