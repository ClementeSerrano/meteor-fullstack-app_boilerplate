import { Meteor } from "meteor/meteor";
import "../../api";
import { Stock } from "../../api/collections";

Meteor.startup(() => {
  Stock.remove({});
  Stock.insert({
    sku: "01",
    quantity: 100
  });
  Stock.insert({
    sku: "02",
    quantity: 200
  });
  Stock.insert({
    sku: "03",
    quantity: 300
  });
});
