import React, { Component } from "react";
import { Container } from "./styles";
import { Modal, Button, TextInput } from "../../components";

export default class extends Component {
  handleClick = e => {
    alert("Hey!");
  };
  render() {
    return (
      <Container>
        <Modal
          title="Welcome!"
          content="Please fill the data"
          textInputs={[<TextInput />, <TextInput />, <TextInput />]}
          buttons={[
            <Button
              text="Sign in"
              onclick={this.handleClick}
              color="#fff"
              backgroundcolor="#0099ff"
              hovercolor="#006bb3"
            />,
            <Button
              text="Sign in"
              onclick={this.handleClick}
              color="#fff"
              backgroundcolor="#0099ff"
              hovercolor="#006bb3"
            />,
            <Button
              text="Sign in"
              onclick={this.handleClick}
              color="#fff"
              backgroundcolor="#0099ff"
              hovercolor="#006bb3"
            />
          ]}
        />
      </Container>
    );
  }
}
