import React, { Component } from "react";
import { Container, Text, Title, Paragraph, Button } from "./styles";

export default class extends Component {
  render() {
    const { title, content, textInputs, buttons } = this.props;
    return (
      <Container>
        <Text>
          <Title>{title}</Title>
        </Text>
        <Text>
          <Paragraph>{content}</Paragraph>

          {textInputs.map(textInput => (
            <div key={Math.random()}>{textInput}</div>
          ))}
        </Text>
        <Button>
          {buttons.map(button => (
            <div key={Math.random()}>{button}</div>
          ))}
        </Button>
      </Container>
    );
  }
}
