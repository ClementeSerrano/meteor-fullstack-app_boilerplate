import { Meteor } from "meteor/meteor";
import { Stock } from "../../../collections";

export default function(sku) {
  const query = Stock.findOne({ sku: sku });
  if (!query) {
    throw new Meteor.Error("Error", "Not such stock in db!");
  } else {
    return query;
  }
}
