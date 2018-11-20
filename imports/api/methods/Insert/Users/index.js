import { User } from "../../../collections";

export default function(user) {
  User.insert({ name: user.name, age: user.age });
}
