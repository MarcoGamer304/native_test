import { TEndpointLogin } from "../models/types/TEndpointLogin";
import { TUser } from "../../../models/types/TUser";

export const createAddapterLogin = (user: TEndpointLogin): TUser => {
  return {
    name: user.name,
    token: user.token,
  };
};
