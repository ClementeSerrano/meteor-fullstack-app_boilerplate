import { Stock } from "../../../collections";
import { Meteor } from "meteor/meteor";

export default function(sku, exitQuantity) {
  const stock = Stock.findOne({ sku: sku });

  if (!stock) {
    throw new Meteor.Error("Error", "Not such stock in db!");
  } else {
    const newQuantity = stock.quantity - exitQuantity;
    const update = Stock.update(
      { sku: sku },
      { sku: sku, quantity: newQuantity }
    );

    if (!update) {
      throw new Meteor.Error("Error", "Could not update the stock in db!");
    } else {
      return update;
    }
  }
}
