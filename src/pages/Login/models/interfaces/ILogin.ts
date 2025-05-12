import { TEndpointLogin } from "../types/TEndpointLogin";
import { TLogin } from "../types/TLogin";

export interface ILogin {
  save: (data: TLogin) => Promise<TEndpointLogin>;
}
