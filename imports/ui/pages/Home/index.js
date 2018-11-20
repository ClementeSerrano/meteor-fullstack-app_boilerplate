import React, { Component } from "react";
import { Container } from "./styles";
import { Modal, Button, TextInput } from "../../components";
import { Meteor } from "meteor/meteor";

export default class extends Component {
  state = {
    exitNumber: "",
    date: "",
    sku: "",
    exitQuantity: 0
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckStock = e => {
    e.preventDefault();
    const sku = this.state.sku;
    const exitQuantity = this.state.exitQuantity;

    Meteor.call("query_stock", sku, (err, res) => {
      if (err) {
        alert(err);
      } else {
        const stock = res;

        if (exitQuantity < stock.quantity) {
          alert(
            "Hey! Your stock is smaller than your exit quantity number! STOCK for SKU " +
              sku +
              " : " +
              stock.quantity
          );
        } else {
          alert(
            "Your stock is ok :) STOCK for SKU " + sku + " : " + stock.quantity
          );
        }
      }
    });
    this.setState({ exitNumber: "", date: "", sku: "", exitQuantity: "" });
  };

  handleSaveData = e => {
    e.preventDefault();
    const { exitNumber, date, sku, exitQuantity } = this.state;

    Meteor.call("query_stock", sku, err => {
      if (err) {
        alert(err);
      } else {
        Meteor.call("update_stock", sku, exitQuantity, err => {
          if (err) {
            alert(err);
          } else {
            Meteor.call(
              "productExit_insertion",
              exitNumber,
              date,
              sku,
              exitQuantity,
              (err, res) => {
                if (err) {
                  alert(err);
                } else {
                  alert("Woow! Insertion successful");
                }
              }
            );
          }
        });
      }
    });

    this.setState({ exitNumber: "", date: "", sku: "", exitQuantity: "" });
  };

  render() {
    const { exitNumber, date, sku, exitQuantity } = this.state;

    return (
      <Container>
        <Modal
          title="Welcome!"
          content="Please fill the data to check whether the quantity of products ordered in stock exists"
          buttons={[
            <Button
              text="Check stock"
              onclick={this.handleCheckStock}
              color="#fff"
              backgroundcolor="#00cc00"
              hovercolor="#008000"
            />,
            <Button
              text="Save data"
              onclick={this.handleSaveData}
              color="#fff"
              backgroundcolor="#0099ff"
              hovercolor="#006bb3"
            />
          ]}
        >
          <TextInput
            placeholder="Exit number"
            type="text"
            onchange={this.handleChange}
            value={exitNumber}
            name="exitNumber"
          />

          <TextInput
            placeholder="Date"
            type="date"
            onchange={this.handleChange}
            value={date}
            name="date"
          />

          <TextInput
            placeholder="SKU"
            type="text"
            onchange={this.handleChange}
            value={sku}
            name="sku"
          />

          <TextInput
            placeholder="Exit quantity"
            type="number"
            onchange={this.handleChange}
            value={exitQuantity}
            name="exitQuantity"
          />
        </Modal>
      </Container>
    );
  }
}
