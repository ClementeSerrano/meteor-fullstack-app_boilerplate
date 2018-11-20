import React, { Component } from "react";
import { Container } from "./styles";
import { Modal, Button, TextInput } from "../../components";

export default class extends Component {
  state = {
    exitNumber: "",
    date: "",
    sku: "",
    exitQuantity: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    alert(
      "Exit number: " +
        this.state.exitNumber +
        " Date: " +
        this.state.date +
        " SKU: " +
        this.state.sku +
        " Exist Quantity: " +
        this.state.exitQuantity
    );
    this.setState({ exitNumber: "", date: "", sku: "", exitQuantity: "" });
  };

  render() {
    const { exitNumber, date, sku, exitQuantity } = this.state;

    return (
      <Container>
        <Modal
          title="Welcome!"
          content="Please fill the data"
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
        >
          <TextInput
            placeholder="Exit number"
            onchange={this.handleChange}
            value={exitNumber}
            name="exitNumber"
          />

          <TextInput
            placeholder="Date"
            onchange={this.handleChange}
            value={date}
          />

          <TextInput
            placeholder="SKU"
            onchange={this.handleChange}
            value={sku}
          />

          <TextInput
            placeholder="Exit quantity"
            onchange={this.handleChange}
            value={exitQuantity}
          />
        </Modal>
      </Container>
    );
  }
}
