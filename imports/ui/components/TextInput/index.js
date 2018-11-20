import React, { Component } from "react";
import { Container } from "./styles";

export default class extends Component {
  render() {
    const { placeholder, type, value, name, onchange } = this.props;

    return (
      <Container
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onchange}
      />
    );
  }
}
