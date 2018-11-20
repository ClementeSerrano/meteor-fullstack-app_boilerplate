import { Meteor } from "meteor/meteor";
import { query_stock, update_stock, productExit_insertion } from "./methods";

Meteor.methods({
  query_stock,
  update_stock,
  productExit_insertion
});
