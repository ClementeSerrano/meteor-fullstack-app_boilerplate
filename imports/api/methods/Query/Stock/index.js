import { Meteor } from "meteor/meteor";
import { Stock } from "../../../collections";

export default function(sku) {
  const stock = Stock.findOne({ sku: sku });

  if (!stock) {
    throw new Meteor.Error("Error", "Not such stock in db!");
  } else {
    return stock;
  }
}
