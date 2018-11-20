import React, { Component } from "react";
import { Container } from "./styles";

export default class extends Component {
  render() {
    const { placeholder, value, name, onchange } = this.props;

    return (
      <Container
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onchange}
      />
    );
  }
}
