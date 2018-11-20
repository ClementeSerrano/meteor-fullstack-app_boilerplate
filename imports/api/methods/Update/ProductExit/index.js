import { ProductExit } from "../../../collections";
import { Meteor } from "meteor/meteor";

export default function(exitNumber, date, sku, exitQuantity) {
  const newProductExit = ProductExit.insert({
    exitNumber: exitNumber,
    date: date,
    sku: sku,
    exitQuantity: exitQuantity
  });

  if (!newProductExit) {
    throw new Meteor.Error("Error", "Couldn't add new product exit to db!");
  } else {
    return newProductExit;
  }
}
