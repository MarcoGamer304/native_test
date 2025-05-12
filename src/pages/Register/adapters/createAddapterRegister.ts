import { TEndpointRegister } from "../models/types/TEndpointRegister";
import { TRegister } from "../models/types/TRegister";

export const createAddapterRegister = (user: TEndpointRegister): TRegister => {
  return {
    name: user.name,
    age: user.age,
    birthday: user.birthday,
    email: user.email,
    password: user.password
  };
};
