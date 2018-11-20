import React, { Component } from "react";
import { Container, Text, Title, Paragraph, Button } from "./styles";

export default class extends Component {
  render() {
    const { title, content, button } = this.props;
    return (
      <Container>
        <Text>
          <Title>{title}</Title>
        </Text>
        <Text>
          <Paragraph>{content}</Paragraph>
        </Text>
        <Text>{this.props.children}</Text>
        <Button>{button}</Button>
      </Container>
    );
  }
}
