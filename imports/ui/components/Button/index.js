import React, { Component } from "react";
import { Container } from "./styles";

export default class extends Component {
  render() {
    const { onclick, text, backgroundcolor, color, hovercolor } = this.props;

    return (
      <Container
        onClick={onclick}
        color={color}
        backgroundcolor={backgroundcolor}
        hovercolor={hovercolor}
      >
        {text}
      </Container>
    );
  }
}
